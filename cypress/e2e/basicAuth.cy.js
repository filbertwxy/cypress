describe('auth', () => {
  it('Basic Auth', () => {
    cy.request({
      method: 'GET',
      url: 'https://the-internet.herokuapp.com/basic_auth',
      auth: {
        username: 'admin',
        password: 'admin',

      },
    })

        .then((response) => {
          expect(response.status).to.eq(200)
          // expect(response.body.user).to.eq('admin')
        })
  })

//   it('Digest Auth', () => {
//     cy.request({
//       method: 'GET',
//         url: 'https://the-internet.herokuapp.com/digest_auth',
//         auth:{
//             username:'admin',
//             password:'admin',
//             method:'digest'
//         }
//     })
//     .then((response)=>{
//         expect(response.status).to.eq(200)
//     })
// })
})
