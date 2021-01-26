// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add('login',()=>{
    cy.get('#username').type('Teste01')
    cy.get('#password').type('Completo25@')
    cy.get('form > div:eq(1) > button').click()
})

Cypress.Commands.add('botaoBrowse',()=>{
    cy.visit(Cypress.config().baseUrlBusca)
})

Cypress.Commands.add('selecionarCategoria',(nomeCategoria)=>{
    cy.get('#query').type(nomeCategoria)
})

Cypress.Commands.add('botaoSearch',()=>{
    cy.get('.form-inline > .text-center > button').click()
})



