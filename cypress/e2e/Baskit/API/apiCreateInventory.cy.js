describe('Inventory', () => {
  beforeEach(() => {
    cy.fixture('data').then((data) => {
      cy.creatingAccessToken(data.username, data.password).then(() => {
      })
    })
  })

  it('Get Inventory', function () {
    const accessToken = Cypress.env('accessToken')
    const xID = Cypress.env('xID')

    cy.request({
      method: 'GET',
      url: 'https://api-beta.baskit.app/v2/inventory-2',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-ID': xID,
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log('Inventory Response:', JSON.stringify(response.body))
    })
  })

})
