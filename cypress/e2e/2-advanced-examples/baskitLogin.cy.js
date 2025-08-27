context('coba login baskit', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baskitUrl'))
  })

  it('should display the login form', () => {
    cy.Login('david@gmail.com', '12345678')
    cy.wait(5000)
  })

  //   it('should allow user to input email', () => {
  //     cy.visit(Cypress.config('baskitUrl'));
  //      cy.get('.grow')
  //      .first()
  //      .type('david@gmail.com')
  //      .should('have.value','david@gmail.com')

//   })
//   it('should enter a password', () => {
//     cy.findByPlaceholderText('Masukkan Kata Sandi')
//     .should('exist')
//     .type('12345678')
//     .should('have.value','12345678')
//   })
})
