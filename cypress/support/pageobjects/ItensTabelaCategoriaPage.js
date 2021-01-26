//<reference types="cypress"/>

import ItensTabelaCategoriaElements from '../elements/ItensTabelaCategoriaElements'
const itensTabelaCategoriaElements = new ItensTabelaCategoriaElements


class ItensTabelaCategoriaPage{

    selecionarPorTipo(tipo){
        cy.get(itensTabelaCategoriaElements.cbkTipoQuestao).select(tipo)
    }

    validarQuantidadeItens(){
        cy.get(itensTabelaCategoriaElements.nomeTabelaQuestao).its('length').should('eq',25)
    }

    validarPaginacao(){
        cy.get(itensTabelaCategoriaElements.listaPaginacao).should('have.class','active')
    }
}
export default ItensTabelaCategoriaPage;