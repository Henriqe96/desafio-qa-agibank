import HomePage from '../pages/HomePage';

describe('Cenário 1: Validação da Listagem de Artigos', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('Deve exibir os cards de artigos na página principal', () => {
    // Verifica se existem artigos visíveis na página
    HomePage.elements.articleCards()
      .should('be.visible')
      .and('have.length.greaterThan', 0);
  });
});