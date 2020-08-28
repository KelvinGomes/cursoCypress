///<reference types = "cypress" />

describe('Elements', () => {
before(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
})
beforeEach(() => {
    cy.reload()
})


    it('Link', () => {
        cy.get('[href="#"]').click()

        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('Text field', () => {
        cy.get('#formNome')
            .type('Kelvin', {delay: 1000})
            .should('have.value', 'Kelvin')
    })

    it('Radion Button', () => {
        cy.get('#formSexoMasc')
            .click()
            .should('be.checked')

        cy.get('[name = formSexo]').should('have.length', 2)
    })

    it('Checkbox', () => {
        cy.get('#formComidaCarne')
            .click()
            .should('be.checked')

        cy.get('[name = formComidaFavorita]').click({multiple: true})

        cy.get('#formComidaCarne')
            .should('be.not.checked')
    })

    it('Combo', () => {
        cy.get('#formEscolaridade')
            .select('mestrado')
            .should('have.value', 'mestrado')
    })

    it('MultiCombo', () => {
        cy.get('#formEsportes').select(['natacao', 'futebol', 'Karate'])
    })
})