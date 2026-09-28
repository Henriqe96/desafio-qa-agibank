import HomePage from '../pages/HomePage';

describe('Cenário 3: Evidência de Bug na Busca (Lupa)', () => {
  beforeEach(() => {
    // Previne que erros de JS internos da página façam o Cypress falhar
    Cypress.on('uncaught:exception', () => false);
    
    HomePage.visit();
  });

  it('Deve evidenciar que o campo de texto de busca não é exibido ao clicar na lupa', () => {
    // 1. Clica no ícone da lupa
    HomePage.clickSearchIcon();

    // 2. Valida que o campo de busca NÃO EXISTE no DOM
    HomePage.elements.searchInput().should('not.exist');
  });
});