
import PesquisaQuestaoPage from '../pageobjects/PesquisaQuestaoPage'
const pesquisaQuestaoPage = new PesquisaQuestaoPage



Given("que navego para a página de busca", () => {
	cy.botaoBuscar()
});

Then("digito {string} no campo de busca", (nomeCategoria) => {
	cy.selecionarCategoria(nomeCategoria)
});

When("clico no botão de buscar", () => {
  cy.buscarQuestao()
});

Then("visualizo uma mensagem de erro com o texto {string}", (mensagem) => {
	pesquisaQuestaoPage.validarMensagemErro(mensagem)
});











