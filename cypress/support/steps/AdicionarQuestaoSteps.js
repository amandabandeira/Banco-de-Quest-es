
import { use } from 'chai';
import AdicionarQuestaoPage from '../pageobjects/AdicionarQuestaoPage'
const adicionarQuestaoPage = new AdicionarQuestaoPage


Given("que navego para a página de login", () => {
	adicionarQuestaoPage.paginaLogin()
});

When("realizo login no site", (dataTable) => {
    dataTable.rawTable.slice(1).forEach(
        function(data){

        adicionarQuestaoPage.realizarLoginnome(data[0])
        adicionarQuestaoPage.realizarLoginsenha(data[1])

        }
    )
});

When("clico no botao submit", () => {
	adicionarQuestaoPage.botaoSignIn()
});

When("clico no botao add new questions", () => {
	adicionarQuestaoPage.botaoAdicionarQuestao()
});

When("preencho os campos", (dataTable) => {
    dataTable.rawTable.slice(1).forEach(
        function(data){

        adicionarQuestaoPage.selecionarCategoria(data[0])
        adicionarQuestaoPage.selecionarTipoQuestao(data[1])
        adicionarQuestaoPage.selecionarDificuldade(data[2])
        adicionarQuestaoPage.informarQuestao(data[3])
        adicionarQuestaoPage.informarQuestaoCorreta(data[4])
        adicionarQuestaoPage.informarQuestaoQuestaoIncorreta01(data[5])
        adicionarQuestaoPage.informarQuestaoQuestaoIncorreta02(data[6])
        adicionarQuestaoPage.informarQuestaoQuestaoIncorreta03(data[7])
        adicionarQuestaoPage.informarReferencia(data[8])


        }
    )
});

When("clico para salvar uma nova questao", () => {
	adicionarQuestaoPage.clicarBotaoSubmit()
});

Then("a mensagem {string} é exibida", (mensagem) => {
	adicionarQuestaoPage.validarMensagemSucesso(mensagem)
});



























