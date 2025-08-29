  describe('Inventory', () => {
before(() => {
    cy.fixture('data').then((data) => {
      cy.creatingAccessToken(data.username, data.password).then((result) => {
      //  Cypress.env('accessToken', result.accessToken) // Set as global variable
      //  Cypress.env('xID', result.xID) // Set as global variable
        //  cy.log('Access Token:', Cypress.env('accessToken'))
        // cy.log('X-ID:', Cypress.env('xID'))
        cy.wrap(result.accessToken).as('accessToken')
        cy.wrap(result.xID).as('xID')
    })
  })
})

  it('Get Inventory', function () {
    cy.get('@accessToken').then((accessToken) => {
      cy.get('@xID').then((xID) => {
        cy.request({
          method: 'GET',
          url: "https://api-beta.baskit.app/v2/inventory-2",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'X-ID': xID
          }
        }).then((response) => {
          expect(response.status).to.eq(200)
          cy.log('Inventory Response:', JSON.stringify(response.body))
        })
      })
    })
  })
})       
