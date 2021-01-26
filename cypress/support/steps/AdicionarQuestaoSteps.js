
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






















