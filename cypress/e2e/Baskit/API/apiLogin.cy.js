describe('Login', () => {
  it('Login and get token', () => {
    cy.fixture('data').then((data) => {
      cy.creatingAccessToken(data.username, data.password) //from cypress command
    })
  })
})
