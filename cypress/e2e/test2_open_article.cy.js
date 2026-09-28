import HomePage from '../pages/HomePage';

describe('Cenário 2: Navegação e Abertura de Artigo', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('Deve abrir o primeiro artigo com sucesso ao clicar no título/imagem', () => {
    // Clica na imagem/link do primeiro artigo
    HomePage.clickFirstArticleImage();

    // Valida que o conteúdo interno da notícia está presente
    HomePage.elements.postContent().should('be.visible');

    // Valida que a URL mudou (não é mais a Home Page)
    cy.url().should('not.eq', Cypress.config().baseUrl);
  });
});