class HomePage {
  elements = {
    // 🔍 Mapeia todos os cards de artigos
    articleCards: () => cy.get('article'),

    // 🖼️ Mapeia a imagem/card do primeiro artigo
    firstArticleCard: () => cy.get('article').first(),

    // 📄 Conteúdo interno do artigo aberto
    postContent: () => cy.get('.entry-content, article'),

    // 🔍 Ícone da Lupa
    searchIcon: () => cy.get('.ast-search-icon, a.search-icon').first(),

    // ⌨️ Campo de pesquisa
    searchInput: () => cy.get('input[type="search"].search-field')
  };

  visit() {
    cy.visit('/');
  }

  clickFirstArticleCard() {
    this.elements.firstArticleCard().click({ force: true });
  }

  // Método que estava a faltar:
  clickSearchIcon() {
    this.elements.searchIcon().click({ force: true });
  }
}

export default new HomePage();