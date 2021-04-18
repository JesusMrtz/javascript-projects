/// <reference types="cypress"/>

describe('Validar el formulario', () => {
    it('Submit al formulario y mostrar la alerta de error', () => {
        cy.visit('/index.html');

        cy.get('[data-cy="formulario"]').submit();

        // SEleccionar la alerta
        cy.get('[data-cy="alerta"]').invoke('text').should('equals', 'Todos los campos son Obligatorios');

        // SEleccionar la alerta
        cy.get('[data-cy="alerta"]').should('have.class', 'alert-danger');
    });
});