/// <reference types="cypress" />

context('My First Test', () => {
    beforeEach(()=>{
        cy.visit('https://example.cypress.io/commands/actions')
    })

it('has a H1 on the page',()=>{
    cy.get('h1').should('exist')
})

})
    
