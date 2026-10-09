import os
import sys
import json
import subprocess
import time
from google import genai
from google.genai import types

def get_code_diff(base_branch):
    """Obtém o diff de arquivos de código alterados na PR."""
    try:
        result = subprocess.run(
            ['git', 'diff', f'origin/{base_branch}', 'HEAD', '--name-status'],
            capture_output=True, text=True, check=True
        )
        
        # Extensões que queremos revisar. Ignoramos .md, lockfiles, imagens, etc.
        valid_extensions = ('.ts', '.tsx', '.js', '.jsx', '.py', '.java', '.cs', '.go', '.php', '.rb', '.cpp', '.c', '.h')
        changed_files = []
        
        for line in result.stdout.strip().split('\n'):
            if not line:
                continue
            status, filepath = line.split('\t', 1)
            if status in ['A', 'M'] and filepath.endswith(valid_extensions):
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
        print(f"Erro ao obter diff do código: {e}")
        return []

def run_code_review(diffs):
    """Aciona a API do Gemini para realizar o Code Review."""
    # O diretório atual será a raiz do projeto (onde o .ai-standards está)
    ai_standards_path = os.path.join(os.getcwd(), ".ai-standards")
    
    if not os.path.exists(ai_standards_path):
        print("Erro: Pasta .ai-standards não encontrada. Execute o vendoring primeiro.")
        sys.exit(1)

    system_instruction = f"""
    Você é o Agente 'Code Reviewer' Sênior.
    Sua missão é avaliar alterações em arquivos de código-fonte de uma Pull Request.
    
    REGRA DE OURO:
    Sua análise deve se basear nas regras contidas na governança local do projeto ({ai_standards_path}).
    
    FOCO DA SUA REVISÃO:
    1. Vulnerabilidades Críticas de Segurança.
    2. Bugs lógicos, vazamento de memória e tratamento falho de exceções.
    3. Performance estrutural.
    
    O QUE VOCÊ DEVE IGNORAR COMPLETAMENTE:
    - Formatação de código (espaços, tabs, quebras de linha).
    - Regras cosméticas que devem ser pegas por linters automáticos.
    
    Forneça sua resposta obrigatoriamente no esquema JSON exigido.
    Use 'BLOCKER' apenas para bugs reais ou falhas de segurança. Use 'WARNING' para melhorias sugeridas.
    """

    user_prompt = f"Por favor, faça um Code Review criterioso do seguinte Git Diff de código:\n\n{json.dumps(diffs, indent=2)}"

    client = genai.Client()
    
    # Lista priorizada: O Code Review exige raciocínio mais complexo.
    # Tentamos primeiro o Pro (para qualidade máxima), depois os Flash como fallback.
    models_to_try = ['gemini-1.5-pro', 'gemini-3.8-flash', 'gemini-3.1-pro-preview']
    response = None

    for model_name in models_to_try:
        print(f"Enviando Diff de Código para o Reviewer (Tentando modelo: {model_name})...")
        
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
                break
            except Exception as e:
                error_str = str(e)
                if '503' in error_str and attempt < max_retries - 1:
                    print(f"Erro 503 (Sobrecarga) no {model_name}. Aguardando 5 segundos para tentar de novo...")
                    time.sleep(5)
                    continue
                print(f"Falha ao tentar usar o modelo {model_name}: {e}")
                break
                
        if response:
            break

    if not response:
        print("Erro Crítico: Todas as tentativas de chamada aos modelos falharam.")
        sys.exit(1)
        
    try:
        return json.loads(response.text)
    except Exception as e:
        print(f"Erro ao converter a resposta para JSON: {e}")
        sys.exit(1)

def main():
    base_branch = os.environ.get('GITHUB_BASE_REF', 'main')
    
    print(f"Iniciando Agent Code Review comparando com a branch: origin/{base_branch}")
    
    diffs = get_code_diff(base_branch)
    if not diffs:
        print("Nenhum arquivo de código elegível foi modificado. Code Review ignorado.")
        sys.exit(0)
        
    review_result = run_code_review(diffs)
    
    print("\n--- Resultado do Code Review ---")
    print(f"Status: {review_result.get('status')}\n")
    
    blocker_found = False
    
    for comment in review_result.get('comments', []):
        prefix = "[BLOCKER]" if comment['severity'] == "BLOCKER" else "[WARNING]"
        print(f"{prefix} {comment['file']}: {comment['feedback']}")
        if comment['severity'] == "BLOCKER":
            blocker_found = True
            
    if blocker_found or review_result.get('status') == 'CHANGES_REQUESTED':
        print("\nO Code Review encontrou problemas críticos que bloqueiam a PR.")
        sys.exit(1)
    else:
        print("\nCode Review aprovado! O código passou pela análise de segurança e integridade.")
        sys.exit(0)

if __name__ == "__main__":
    main()
