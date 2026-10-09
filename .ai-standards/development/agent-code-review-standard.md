# Agent Code Review Standard

Este documento estabelece as regras normativas para o papel de "Code Reviewer" executado por Agentes de IA em esteiras de Continuous Integration (CI).

## Objetivo
Garantir que as alterações no código-fonte (Pull Requests) apresentem qualidade estrutural, segurança e aderência às Decisões Arquiteturais (ADRs) do projeto, sem gerar falsos-positivos ou "ruído" com regras de estilo menores.

## Diretrizes de Revisão do Agente

O Agente Code Reviewer deve focar **exclusivamente** nos seguintes pilares:

1. **Vulnerabilidades e Segurança:** Identificar potenciais injeções de SQL, vazamento de credenciais, falhas de autenticação ou uso inseguro de APIs.
2. **Bugs Lógicos e Condições de Corrida:** Avaliar loops infinitos, *NullPointerExceptions*, tratamento inadequado de erros e falhas de concorrência.
3. **Performance (O(n)):** Apontar ineficiências graves de processamento ou memória que possam gargalar o sistema em produção.
4. **Violação Arquitetural:** Verificar se o código respeita os contratos de dados e as Decisões Arquiteturais (ADRs) contidas na pasta `docs/adr/` ou `.ai-standards/architecture/` do projeto.

### O que o Agente NÃO DEVE fazer (Anti-Patterns)
- O Agente **NÃO DEVE** opinar sobre formatação de código (ex: tabs vs spaces, aspas simples vs duplas). Essa responsabilidade pertence aos linters formais (ESLint, Prettier, SonarQube, etc.).
- O Agente **NÃO DEVE** sugerir refatorações "cosméticas" puramente baseadas em preferências de estilo, a menos que a complexidade ciclomática seja alarmante.
- O Agente **NÃO DEVE** aprovar códigos que possuam senhas ou chaves de API *hardcoded*. (Severidade: BLOCKER).

## Regra de Ouro: Compatibilidade de Versão (Local Cache)
Assim como no *Spec Review*, o Agente Code Reviewer está PROIBIDO de consultar repositórios remotos para buscar padrões arquiteturais. Todo e qualquer julgamento de arquitetura deve ser feito com base no diretório `.ai-standards/` e na governança local do projeto.

## Inputs e Outputs Esperados
- **Input:** O Git Diff contendo exclusivamente arquivos de código-fonte (ex: `.ts`, `.py`, `.java`, `.go`, `.cs`, `.php`, etc.). Arquivos de documentação (`.md`) devem ser ignorados por esta esteira.
- **Output:** Um objeto estruturado classificando os problemas encontrados. Se um bug grave de segurança ou lógica for encontrado, o agente deve gerar um apontamento com severidade `BLOCKER`, reprovando a etapa de CI. Comentários menores devem ser gerados com severidade `WARNING`, sem bloquear a pipeline.
