
import PesquisaQuestaoPage from '../pageobjects/PesquisaQuestaoPage'
const pesquisaQuestaoPage = new PesquisaQuestaoPage



Given("que navego para a página de busca", () => {
	cy.botaoBrowse()
});

Then("digito {string} no campo de busca", (nomeCategoria) => {
	cy.selecionarCategoria(nomeCategoria)
});

When("clico no botão de buscar", () => {
  cy.botaoSearch()
});

Then("visualizo uma mensagem de erro com o texto {string}", (mensagem) => {
	pesquisaQuestaoPage.validarMensagemErro(mensagem)
});











