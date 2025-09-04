context('coba login baskit', () => {
  it('should display the login form', () => {
    cy.visit(Cypress.config('baskitUrl'))
    cy.Login('david@gmail.com', '12345678')
    cy.wait(5000)
    cy.get('h1').should('have.text', 'Ringkasan Bisnis')
  })
})
