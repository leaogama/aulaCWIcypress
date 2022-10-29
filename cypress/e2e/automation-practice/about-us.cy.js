/// <reference types="cypress" />

describe('Tela About Us', () => {


it('Enviar mensagem com e-mail válido', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('a[title="Contact us"]').click()
    
    //cy.get('a[title="About us"]1).click()
    cy.get('h1.page-heading').should('have.text', 'Contact us')
    cy.get('#contact').click()
   // cy.contains('Pay electric bill')
 //     .parent()
 //     .find('input[type=checkbox]')
 //     .check()
  //  cy.contains('Pay electric bill')
  //    .parents('li')
 //     .should('have.class', 'completed')
  })

})