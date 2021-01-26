//<reference types="cypress"/>

import AdicionarQuestaoElements from '../elements/AdicionarQuestaoElements'
const adicionarQuestaoElements = new AdicionarQuestaoElements


class AdicionarQuestaoPage{

    paginaLogin(){
    cy.visit(Cypress.config().baseUrlLogin)
    }

    realizarLoginnome(nome){
      cy.get(adicionarQuestaoElements.inputUserName).type(nome)
    }
    realizarLoginsenha(senha){
        cy.get(adicionarQuestaoElements.inputPassword).type(senha)
      }
      botaoSignIn(){
          cy.get(adicionarQuestaoElements.btnSignIn).click()
      }
      botaoAdicionarQuestao(){
        cy.visit(Cypress.config().baseUrlAddQuestao)
      }
      selecionarCategoria(nomeCategoria){
        cy.get(adicionarQuestaoElements.cbkCategoria).select(nomeCategoria)
      }
      selecionarTipoQuestao(tipoQuestao){
        cy.get(adicionarQuestaoElements.cbkTipo).select(tipoQuestao)
      }

    selecionarDificuldade(dificuldade){
      cy.get(adicionarQuestaoElements.cbkDificuldade).select(dificuldade)
    }

    informarQuestao(nomeQuestao){
     cy.get(adicionarQuestaoElements.inputQuestion).type(nomeQuestao)
    }

    informarQuestaoCorreta(questaoCorreta){
     cy.get(adicionarQuestaoElements.inputQuestaoCerta).type(questaoCorreta)
    }

    informarQuestaoQuestaoIncorreta01(questaoIncorreta1){
      cy.get(adicionarQuestaoElements.inputQuestaoIncorreta1).type(questaoIncorreta1)
    }

    informarQuestaoQuestaoIncorreta02(questaoIncorreta2){
      cy.get(adicionarQuestaoElements.inputQuestaoIncorreta2).type(questaoIncorreta2)
    }

    informarQuestaoQuestaoIncorreta03(questaoIncorreta3){
      cy.get(adicionarQuestaoElements.inputQuestaoIncorreta3).type(questaoIncorreta3)
    }

    informarReferencia(referencia){
      cy.get(adicionarQuestaoElements.inputReferencia).type(referencia)
    }

    clicarBotaoSubmit(){
      cy.get(adicionarQuestaoElements.btnSubmit).click()
    }

    validarMensagemSucesso(mensagem){
     cy.get(adicionarQuestaoElements.msgSucesso).
     should($el => expect($el.text().trim()).to.equal(mensagem));
      
    }

}
export default AdicionarQuestaoPage;