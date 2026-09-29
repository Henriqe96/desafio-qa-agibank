# 🧪 Desafio Técnico QA Web — Blog do Agibank

Este repositório contém a suíte de automação de testes End-to-End (E2E) desenvolvida para o **Blog do Agibank**, como parte do processo de avaliação técnica de Engenharia de Qualidade da **NYVORA CONSULTING**.

---

## 💻 Ambiente de Desenvolvimento & Execução

O projeto foi construído e validado no seguinte ambiente técnico:
* **Sistema Operativo:** Windows 11 (64-bit)
* **Ambiente de Execução:** Node.js (v18+) & npm (v9+)
* **Framework de Automação:** Cypress (v13.0.0+)
* **Navegadores Testados:** Google Chrome (Headless & Headed) / Electron
* **IDE:** Visual Studio Code (VS Code)

---

## 📌 Estratégia de Testes & Análise Crítica de QA

### 🚨 Relatório de Divergências Encontradas (Bug Report)
Durante a fase de exploração do ambiente e mapeamento de cenários, foram identificados comportamentos divergentes na plataforma:

1. **Inoperância no Campo de Busca (Lupa do Cabeçalho):**
   * **Comportamento:** O acionamento do ícone de pesquisa não expande o campo de busca nem processa palavras-chave.
2. **Falha na Navegação pelas Abas do Menu Superior:**
   * **Comportamento:** Os links das abas principais (*O Agibank*, *Produtos*, *Para você*, *Notícias*, *Calculadoras*) apresentam falhas no carregamento de conteúdo das respectivas seções.

### 💡 Decisão Técnica e Priorização de Cenários
Em conformidade com as boas práticas de Engenharia de Qualidade e análise de risco:
* As falhas foram **mapeadas e evidenciadas**.
* A automação foi re-priorizada para os **Fluxos Críticos da Página Inicial (Home)**, garantindo a validação da entrega do valor principal da aplicação (consumo e leitura de artigos) sem gerar falsos negativos na pipeline de integração contínua.

---

## 🎯 Cenários Automatizados

* **`test1_article_list.cy.js` (Cenário 1):** Valida a renderização e visibilidade dos cards de artigos na Home Page do portal.
* **`test2_open_article.cy.js` (Cenário 2):** Valida a navegação E2E ao clicar na imagem/card do artigo, garantindo a transição de URL e o carregamento correto do corpo da notícia.
* **`test3_search_bug.cy.js` (Cenário 3): Automatiza o teste do ícone da lupa (.astra-search-icon), comprovando formalmente que o campo de input .search-field não é aberto na tela.
---

## 🛠️ Tecnologias Utilizadas

* **Framework de Automação:** Cypress (v13+)
* **Padrão Arquitetural:** Page Object Model (POM)
* **Linguagem:** JavaScript / Node.js
* **CI/CD:** GitHub Actions

---

## 🖥️ Compatibilidade Multi-plataforma

O projeto utiliza comandos e seletores agnósticos ao sistema operacional, garantindo execução nativa e sem necessidade de adaptações em:
* 🪟 **Windows** (Prompt de Comando, PowerShell ou Git Bash)
* 🍎 **macOS** (Terminal)
* 🐧 **Linux** (Terminal / CI Runner)

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
* **Node.js** (versão 18 ou superior)
* **npm** (gerenciador de pacotes)

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/Henriqe96/desafio-qa-agibank.git](https://github.com/Henriqe96/desafio-qa-agibank.git)
 
2. Acessar a pasta do projeto:

Bash
cd desafio-qa-agibank

3. Instalar as dependências do projeto:

Bash
npm install

4. Executar em Modo Headless (Terminal / Rápido):

Bash
npm test

5. Executar em Modo Interativo (Interface Visual do Cypress):

Bash
npm run test:open

6. Executar em um navegador específico :

Bash
npm run test:chrome / test:firefox / npm run test:edge / 

7. Executar em Modo Interativo (Interface Visual do Cypress):

Bash
npm run test:open


##  Caminho para ver as evidências

As evidências são geradas automaticamente após você rodar os testes no terminal (executando npm test ou npx cypress run):   Relatório HTML (Mochawesome):O caminho do relatório visual fica em: cypress/reports/html/index.html (ou dentro da pasta cypress/reports/). Para visualizar, clique com o botão direito no arquivo index.html e escolha Open with Live Server ou abra-o direto no seu navegador Chrome/Edge.Screenshots (Prints de Falhas):Se algum teste falhar, o Cypress cria automaticamente a pasta: cypress/screenshots/.Vídeos da Execução:Ficam gravados na pasta: cypress/videos/.# desafio-qa-agibank
