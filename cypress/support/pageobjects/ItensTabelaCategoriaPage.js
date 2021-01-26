//<reference types="cypress"/>

import ItensTabelaCategoriaElements from '../elements/ItensTabelaCategoriaElements'
const itensTabelaCategoriaElements = new ItensTabelaCategoriaElements


class ItensTabelaCategoriaPage{

    selecionarPorTipo(tipo){
        cy.get(itensTabelaCategoriaElements.cbkTipo).select(tipo)
    }

    validarQuantidadeItens(){
        cy.get(itensTabelaCategoriaElements.nomeTabela).its('length').should('eq',25)
    }

    validarPaginacao(){
        cy.get(itensTabelaCategoriaElements.listaPaginacao).should('have.class','active')
    }
}
export default ItensTabelaCategoriaPage;