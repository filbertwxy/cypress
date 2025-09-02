import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


Given('user go to Inventory page',()=>{
    cy.findByText('Produk').should('have.text','Produk')

})

When ('user click inventaris', () => {
    cy.findByText('Produk').click()
    cy.findByText('Inventaris').click()
    cy.wait(2000)
   
  })
When ('user click tambah produk button',()=>{
     cy.get('button.btn.btn-primary')
     .contains('Tambah Produk')
     .should('be.visible')
     .click()
    cy.wait(2000)
})
When('user choose Tambahkan secara manual',()=>{
   cy.contains('div.text-gray-900.text-lg.font-bold', 'Tambahkan Secara Manual')
  .should('be.visible')
  .click();
})

Then('user will redirect to Tambah Produk Baru page',()=>{
    cy.contains('span.text-xl.font-bold', 'Tambah Produk Baru')
    .should('be.visible')         // Check that it's visible in the DOM
    .and('include.text', 'Tambah Produk Baru');
})

When('user choose tipe produk',()=>{
    cy.get('input[placeholder*="Choose the product type"]').click();
    cy.contains('li', 'Barang').click();
    cy.get('input[name="productType.label"]').should('have.value', 'Barang');
})
When('user  input nama produk',()=>{ 
    cy.inputRandomName();
    const productName = Cypress.env('randomProductName');
    // cy.get('input[name="productName"]').should('have.text', productName);
})
When('user upload image',()=>{
    // Force upload even if input is hidden
    cy.get('input[type="file"]', { includeShadowDom: true }) // Adjust selector if needed
    .selectFile('cypress/fixtures/greentea.png', { force: true }); // Example: Check if an <img> tag appears with preview
    cy.get('button.bg-primary')
    .contains('Simpan')
    .click();

    cy.get('img') // adjust selector if needed
    .should('be.visible')
    .and('have.attr', 'src')
})

When('user choose nama brand',()=>{
    cy.get('input[name="brandName"]').click();
    // Adjust the selector below to match the actual dropdown list container
    cy.get('div.menu.dropdown-content ul.list-none li')
    .eq(3)  // zero-based index: 3 = 4th item
    .find('button')
    .click();
    cy.get('input[name="brandName"]').should('not.have.value', ''); // or check exact expected brand

})

When('user choose Segmen Produk FMCG',()=>{
    cy.get('input[name="industryName"]').click();
    cy.get('.menu.dropdown-content')
    .contains('button', 'FMCG')
    .click();

// Step 3: Assert that the input now has the value "FMCG"
    cy.get('input[name="industryName"]').should('have.value', 'FMCG');

})
When('user choose kategori',()=>{
    cy.get('input[name="subCategoryName"]').click();
    cy.get('ul.list-none > li')
    .contains('div.text-gray-900.font-bold', 'Minuman')
    .parent() // go back to the <li> that contains "Minuman"

    // Step 2: Within this <li>, find and click the "Air Mineral" button
    .within(() => {
        cy.contains('button', 'Air Mineral').click();
    });

    // Optional: Assert that the input or UI updated accordingly
    cy.get('input[name="subCategoryName"]').should('have.value', 'Minuman - Air Mineral');

})
When('')

