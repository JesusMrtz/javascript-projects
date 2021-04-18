/// <reference types="cypress"/>

describe('Llenar los campos para una nueva cita', () => {
    it('Llenar el formulario', () => {
        cy.visit('/index.html');
        cy.get('[name="mascota"]').type('Sombra');
        cy.get('[name="propietario"]').type('Jesús');
        cy.get('[name="telefono"]').type('9996020103');
        cy.get('[name="fecha"]').type('2021-02-09');
        cy.get('[name="hora"]').type('20:30');
        cy.get('[name="sintomas"]').type('No quiere comer');
        cy.get('[data-cy="submit-citas"]').click();

         // Verificar el texto de la citas
         cy.get('[data-cy="citas-heading"]').invoke('text').should('equal', 'Administra tus Citas');
         // SEleccionar la alerta
        cy.get('[data-cy="alerta"]').invoke('text').should('equals', 'Se agregó correctamente');

        // SEleccionar la alerta
        cy.get('[data-cy="alerta"]').should('have.class', 'alert-success');
    });
});