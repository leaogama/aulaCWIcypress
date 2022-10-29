/// <reference types="cypress" />

describe('Tela Contact Us', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
    })

    it('Enviar mensagem com email valido', () => {
        cy.get('#id_contact').select("Customer service")
        cy.get('#email').type('nome@dominio.com')
        cy.get('#message').type('Grupo 5 é o melhor')
        cy.get('#submitMessage > span').click()
        cy.get('.alert').should('have.text', 'Your message has been successfully sent to our team.')
    })

    it('Não enviar mensagem com email invalido', () => {
        cy.get('#id_contact').select('Customer service')
        cy.get('#email').type('@dominio.com')
        cy.get('#message').type('Grupo 5 é o melhor')
        cy.get('#submitMessage > span').click()
        cy.get('.alert ol > li').should('have.text', 'Invalid email address.')
       
    })
})

