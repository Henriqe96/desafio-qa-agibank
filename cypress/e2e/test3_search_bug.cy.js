import HomePage from '../pages/HomePage';

describe('Cenário 3: Validação da Busca no Blog', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('Deve realizar uma pesquisa no blog utilizando a lupa', () => {
    const searchTerm = 'Agibank';

    // Executa a busca utilizando o método encapsulado do HomePage
    HomePage.searchFor(searchTerm);

    // Valida se a URL reflete a pesquisa efetuada ou se exibe os resultados
    cy.url().should('include', `?s=${searchTerm}`);
  });
});