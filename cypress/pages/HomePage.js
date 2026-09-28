class HomePage {
  elements = {
    // 🔍 Mapeia todos os artigos presentes na página
    articleCards: () => cy.get('article'),

    // 🖼️ Mapeia a imagem do primeiro artigo
    firstArticleImage: () => cy.get('article img').first(),

    // 📝 Mapeia o título (link) do primeiro artigo na listagem
    firstArticleTitle: () => cy.get('article h2 a, article h1 a').first(),

    // 📄 Conteúdo interno da notícia (página do artigo aberto)
    postContent: () => cy.get('.entry-content, article'),

    // 🔍 Ícone de busca (Lupa) e campo de texto
    searchIcon: () => cy.get('.ast-search-icon, a.search-icon'),
    searchInput: () => cy.get('input[type="search"].search-field'),
    searchSubmit: () => cy.get('form.search-form input[type="submit"]')
  }

  // Acede à página principal do Blog
  visit() {
    cy.visit('/');
  }

  // Clica na imagem da primeira notícia
  clickFirstArticleImage() {
    this.elements.firstArticleImage().click({ force: true });
  }

  // Clica no título da primeira notícia
  clickFirstArticleTitle() {
    this.elements.firstArticleTitle().click({ force: true });
  }

  // Pesquisa por um termo no campo de busca (Lupa)
  searchFor(term) {
    this.elements.searchIcon().click({ force: true });
    this.elements.searchInput().type(`${term}{enter}`);
  }
}

export default new HomePage();