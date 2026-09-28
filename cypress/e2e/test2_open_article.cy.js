import HomePage from '../pages/HomePage';

describe('Cenário 2: Navegação e Abertura de Artigo', () => {
  beforeEach(() => {
    // Previne que erros internos de JS do site interrompam a execução do teste
    Cypress.on('uncaught:exception', () => false);
    
    HomePage.visit();
  });

  it('Deve abrir a página do artigo ao clicar no card', () => {
    // 1. Clica no primeiro card de artigo
    HomePage.clickFirstArticleCard();

    // 2. Valida que o conteúdo interno da notícia está visível
    HomePage.elements.postContent().should('be.visible');

    // 3. Valida que a URL foi alterada (não está mais na página inicial)
    cy.url().should('not.eq', Cypress.config().baseUrl);
  });
});