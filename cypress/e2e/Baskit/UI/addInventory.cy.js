context('Add Inventory', () => {
  before(() => {
    cy.Login('david@gmail.com', '12345678')
  })

    it('go to inventory page', () => {
     cy.findByText('Produk').click()
     cy.findByText('Inventaris').click()
     cy.wait(2000)
     cy.get('button.btn.btn-primary')
     .contains('Tambah Produk')
     .should('be.visible')
    //  .findByText('Tambah Produk')
     .click()
     cy.wait(2000)
    //  cy.get(".flex.item.center").eq(0).click()

     

})
    it('should add new inventory', () => {
  cy.visit('')
})

})