  describe('Inventory', () => {
beforeEach(() => {
    cy.fixture('data').then((data) => {
      cy.creatingAccessToken(data.username, data.password).then(() => {
      //  Cypress.env('accessToken', result.accessToken) // Set as global variable
      //  Cypress.env('xID', result.xID) // Set as global variable
        //  cy.log('Access Token:', Cypress.env('accessToken'))
        // cy.log('X-ID:', Cypress.env('xID'))
        // cy.wrap(result.accessToken).as('accessToken')
        // cy.wrap(result.xID).as('xID')
    })
  })
})

  it('Get Inventory', function () {
    const accessToken  = Cypress.env('accessToken')
      const xID = Cypress.env('xID')

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


   it('get inventory by params limit',function(){
    const accessToken  = Cypress.env('accessToken')
      const xID = Cypress.env('xID')
        cy.request({
          method: 'GET',
          url: "https://api-beta.baskit.app/v2/inventory-2",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'X-ID': xID
          },
          qs: {
          $limit: 10
        }
        }).then((response) => {
          expect(response.status).to.eq(200)
          // expect(response.body.totalData).to.eq(157)
          expect(response.body.data.length).to.eq(10)
          cy.log('Inventory Response:', JSON.stringify(response.body.data))
          cy.log('createdBy: ', JSON.stringify(response.body.data[0].id));
        
          //assert created by response 
          const id = response.body.data[0].id
          cy.log('ID',id) 
          expect(id).to.eq(id)
          // cy.wrap(id).as('inventoryId')
          Cypress.env('inventoryId',response.body.data[3].id)
         
        })
      })
 
    it('Get Inventory Detail by id',function(){
      const accessToken  = Cypress.env('accessToken')
       const xID = Cypress.env('xID')
          const id = Cypress.env('inventoryId')
            cy.request({
              method: 'GET',
              url: `https://api-beta.baskit.app/v2/inventory-2/${id}`,
              headers: {
            Authorization: `Bearer ${accessToken}`,
            'X-ID': xID
          },
          
        }).then((response) => {
          expect(response.status).to.eq(200);
          })
        }) 
      })
   

   
