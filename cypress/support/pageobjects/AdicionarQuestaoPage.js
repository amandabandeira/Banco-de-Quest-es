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

}
export default AdicionarQuestaoPage;