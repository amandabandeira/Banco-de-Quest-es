
import ItensTabelaCategoriaPage from '../pageobjects/ItensTabelaCategoriaPage'
const itensTabelaCategoriaPage = new ItensTabelaCategoriaPage



Given("que navego para a página de busca", () => {
	cy.botaoBrowse()
});

Then("digito {string} no campo de busca", (nomeCategoria) => {
	cy.selecionarCategoria(nomeCategoria)
});

Then("seleciono {string}", (tipo) => {
	itensTabelaCategoriaPage.selecionarPorTipo(tipo)
});

When("clico no botão de buscar", () => {
  cy.botaoSearch()
});

Then("a listagem de questao deve ter 25 itens", () => {
	itensTabelaCategoriaPage.validarQuantidadeItens()
});

Then("o controle de paginacao deve ser exibido" ,() => {
	itensTabelaCategoriaPage.validarPaginacao()
});













