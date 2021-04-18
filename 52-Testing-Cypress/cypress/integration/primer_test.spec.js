/// <reference types="cypress"/>

describe('Carga la página principal', () => {
    it('Carga la página principal', () => {
        cy.visit('/index.html');
        
        // Verificar el elemento y su texto
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');
        
        // Verificar si existe el elemento
        cy.get('[data-cy="titulo-proyecto"]').should('exist');
        
        // Verificar que existe el elemento y contenga un texto
        cy.get('[data-cy="titulo-proyecto"]').invoke('text').should('equal', 'Administrador de Pacientes de Veterinaria');

        // Verificar el texto de la citas
        cy.get('[data-cy="citas-heading"]').invoke('text').should('equal', 'No hay Citas, comienza creando una');
    });
})