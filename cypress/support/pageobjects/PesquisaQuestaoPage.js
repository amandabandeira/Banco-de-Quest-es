//<reference types="cypress"/>

import PesquisaQuestaoElements from '../elements/PesquisaQuestaoElements'
const pesquisaQuestaoElements = new PesquisaQuestaoElements


class PesquisaQuestaoPage{

    validarMensagemErro(mensagem){
        cy.get(pesquisaQuestaoElements.mensagemError).contains(mensagem)
    }
}
export default PesquisaQuestaoPage;