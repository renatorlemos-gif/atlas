# Documentação da Infraestrutura

> **Instruções de Uso (Template):** 
> Este documento descreve a infraestrutura provisionada para os ambientes de um projeto específico. O projeto consumidor deve preencher este template com os dados concretos da sua topologia, mantendo a estrutura abaixo. Não inclua segredos ou senhas neste documento.

## 1. Visão Geral do Sistema
* **Nome do Sistema/Projeto:** [Nome do Projeto]
* **Objetivo da Infraestrutura:** [Breve descrição do que esta infraestrutura suporta]

## 2. Ambiente: [Ex: DEV / HML / PRD]

Descreva os recursos alocados para o ambiente. Repita esta seção para cada ambiente provisionado.

### 2.1 Recursos Provisionados
* **[Serviço de Orquestração / Computação]:** [Ex: Cluster do Kubernetes Engine no modo Standard]
* **[Registro de Imagens]:** [Ex: Artifact Registry para armazenamento e gerenciamento de imagens]
* **[Serviço de Mensageria / Filas]:** [Ex: Pub/Sub para comunicação assíncrona]
* **[Balanceador de Carga]:** [Ex: Internal Load Balancing]

### 2.2 Configurações de Capacidade (Node Pool / Compute)
* **Configuração:** [Ex: 3 Nodes `e2-medium` (2 vCPUs x 4GB RAM)]
* **Disco:** [Ex: Capacidade de 100GB]
* **Região / Zona:** [Ex: São Paulo (`southamerica-east1`)]

### 2.3 Métricas e Outros Recursos Associados
* **[Recurso A]:** [Ex: 1 instância configurada para balanceamento]
* **[Recurso B]:** [Ex: 5GB de armazenamento para filas]
* **Tempo de Execução Esperado:** [Ex: 24/7 ou janela de uso]

## 3. Considerações e Dependências Importantes

* [Dependência 1: Ex: Projetos `prj-xpto-dev` devem estar atrelados à rede Y]
* [Dependência 2: Ex: Ajustes de liberação de firewall na porta Z]
* [Governança: Ex: Manter estas informações atualizadas e consultar a equipe de SRE em caso de dúvidas]
