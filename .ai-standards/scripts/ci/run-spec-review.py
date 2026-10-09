import os
import sys
import json
import subprocess
from google import genai
from google.genai import types

def get_git_diff(base_branch):
    """Obtém o diff de arquivos markdown alterados na PR."""
    try:
        # Pega a lista de arquivos alterados (status Added ou Modified)
        result = subprocess.run(
            ['git', 'diff', f'origin/{base_branch}', 'HEAD', '--name-status'],
            capture_output=True, text=True, check=True
        )
        changed_files = []
        for line in result.stdout.strip().split('\n'):
            if not line:
                continue
            status, filepath = line.split('\t', 1)
            # Apenas arquivos markdown
            if status in ['A', 'M'] and filepath.endswith('.md'):
                changed_files.append(filepath)
        
        diffs = []
        for filepath in changed_files:
            diff = subprocess.run(
                ['git', 'diff', f'origin/{base_branch}', 'HEAD', '--', filepath],
                capture_output=True, text=True, check=True
            )
            diffs.append({"file": filepath, "diff": diff.stdout})
        
        return diffs
    except Exception as e:
        print(f"Erro ao obter diff: {e}")
        return []

def run_review(diffs):
    """Aciona a API do Gemini para realizar o Spec Review."""
    # O diretório atual será a raiz do projeto (onde o .ai-standards está)
    ai_standards_path = os.path.join(os.getcwd(), ".ai-standards")
    
    if not os.path.exists(ai_standards_path):
        print("Erro: Pasta .ai-standards não encontrada. Execute o vendoring primeiro.")
        sys.exit(1)

    system_instruction = f"""
    Você é o Agente 'Spec Reviewer'.
    Sua missão é avaliar alterações em artefatos de produto e arquitetura.
    
    REGRA DE OURO (Compatibilidade de Versão):
    Você DEVE fundamentar sua revisão EXCLUSIVAMENTE nas regras presentes na pasta local: {ai_standards_path}.
    Não use conhecimentos prévios sobre padrões genéricos. Avalie com base no cache do projeto.
    
    CRITÉRIOS DE AVALIAÇÃO:
    1. Verifique se o formato do artefato modificado atende aos padrões do .ai-standards/ (templates).
    2. Valide DEC-009 (Incertezas explícitas) e DEC-018 (Rastreabilidade).
    3. Verifique convenção de nomes de arquivos (DEC-024).
    
    Forneça sua resposta obrigatoriamente no esquema JSON exigido.
    """

    user_prompt = f"Por favor, revise o seguinte Git Diff dos documentos do projeto:\n\n{json.dumps(diffs, indent=2)}"

    client = genai.Client()
    
    models_to_try = ['gemini-3.8-flash', 'gemini-3.1-pro-preview']
    response = None
    import time

    for model_name in models_to_try:
        print(f"Enviando Diff para o Spec Reviewer (Tentando modelo: {model_name})...")
        
        max_retries = 3
        for attempt in range(max_retries):
            try:
                response = client.models.generate_content(
                    model=model_name,
                    contents=user_prompt,
                    config=types.GenerateContentConfig(
                        system_instruction=system_instruction,
                        temperature=0.1,
                        response_mime_type="application/json",
                        response_schema=types.Schema(
                            type=types.Type.OBJECT,
                            properties={
                                "status": types.Schema(type=types.Type.STRING, enum=["APPROVED", "CHANGES_REQUESTED"]),
                                "comments": types.Schema(
                                    type=types.Type.ARRAY,
                                    items=types.Schema(
                                        type=types.Type.OBJECT,
                                        properties={
                                            "file": types.Schema(type=types.Type.STRING),
                                            "feedback": types.Schema(type=types.Type.STRING),
                                            "severity": types.Schema(type=types.Type.STRING, enum=["BLOCKER", "WARNING"])
                                        },
                                        required=["file", "feedback", "severity"]
                                    )
                                )
                            },
                            required=["status", "comments"]
                        )
                    )
                )
                print(f"Sucesso com o modelo {model_name}!")
                break  # Sai do loop de retries
            except Exception as e:
                error_str = str(e)
                if '503' in error_str and attempt < max_retries - 1:
                    print(f"Erro 503 (Sobrecarga) no {model_name}. Aguardando 5 segundos para tentar de novo...")
                    time.sleep(5)
                    continue
                print(f"Falha ao tentar usar o modelo {model_name}: {e}")
                break # Sai do loop de retries e vai pro proximo modelo
                
        if response:
            break # Sai do loop de modelos se teve sucesso

    if not response:
        print("Erro Crítico: Todas as tentativas de chamada aos modelos do Gemini falharam.")
        print("Verifique sua chave de API e as cotas do seu plano no Google AI Studio.")
        sys.exit(1)
        
    try:
        return json.loads(response.text)
    except Exception as e:
        print(f"Erro ao converter a resposta do Gemini para JSON: {e}")
        sys.exit(1)

def main():
    base_branch = os.environ.get('GITHUB_BASE_REF', 'main')
    
    print(f"Iniciando Agent Spec Review comparando com a branch: origin/{base_branch}")
    
    diffs = get_git_diff(base_branch)
    if not diffs:
        print("Nenhum arquivo markdown modificado. Spec Review ignorado.")
        sys.exit(0)
        
    review_result = run_review(diffs)
    
    print("\n--- Resultado do Spec Review ---")
    print(f"Status: {review_result.get('status')}\n")
    
    blocker_found = False
    
    for comment in review_result.get('comments', []):
        prefix = "[BLOCKER]" if comment['severity'] == "BLOCKER" else "[WARNING]"
        print(f"{prefix} {comment['file']}: {comment['feedback']}")
        if comment['severity'] == "BLOCKER":
            blocker_found = True
            
    if blocker_found or review_result.get('status') == 'CHANGES_REQUESTED':
        print("\nO Spec Review identificou problemas que precisam ser corrigidos.")
        sys.exit(1)
    else:
        print("\nSpec Review aprovado com sucesso! Nenhum bloqueio encontrado.")
        sys.exit(0)

if __name__ == "__main__":
    main()
