describe('template spec', () => {
  it('allows you to navigate back and forward between Towers', () => {
    cy.visit('http://localhost:4200/')

    cy.get('p').should('contain.text', 'Tower: 1')
    cy.get('button').last().click()
    cy.get('p').should('contain.text', 'Tower: 2')
    cy.get('button').first().click()
    cy.get('p').should('contain.text', 'Tower: 1')


  })
})
