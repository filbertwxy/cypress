
describe("API Testing Example", () => {



  it('Login to Baskit', () => {

    cy.fixture('data').then((data) => {
        const requestBody = {
            username: data.username,
            password: data.password
        }
    

    cy.request({
     method: 'POST',
     url: 'https://api-beta.baskit.app/v2/auth',
    
    body:requestBody
    })
  })
  
  .then((response) => {
     expect(response.status).to.eq(200)
      cy.log(JSON.stringify(response.body))
    //   expect(response.body.username).to.eq('supercompany.proofs748@passinbox.com')

    })

  })

})
