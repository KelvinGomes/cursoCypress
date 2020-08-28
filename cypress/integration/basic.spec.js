///<reference types = "cypress" />

describe('Basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!');
    })
})