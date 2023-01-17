describe('template spec', () => {
  it('allows you to navigate back and forward between Towers', () => {
    cy.visit('http://localhost:4200/')

    cy.get('h2').should('contain.text', 'Tower 1:')

    // waiting for the tower data to load
    cy.get('h3', { timeout: 10000 }).should('be.visible');

    cy.get('[data-cy="next"]').click()
    cy.get('h2').should('contain.text', 'Tower 2:')

    cy.get('[data-cy="previous"]').click()
    cy.get('h2').should('contain.text', 'Tower 1:')
  })
})
