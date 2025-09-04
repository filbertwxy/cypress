import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';


Given('user go to Inventory page',()=>{
    cy.findByText('Produk').should('have.text','Produk')
})

When ('user click inventaris', () => {
    
    cy.findByText('Produk').click()
    cy.findByText('Inventaris').click()
     cy.get('h1').contains('Inventaris');
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
When('user choose Unit Terkecil',()=>{
    cy.get('#react-select-2-placeholder')
  .should('be.visible')                                             // Ensure it's visible
  .and('have.text', 'e.g. PCS')                                     // Assert exact text
  .and('have.class', 'css-1vlsb4t-placeholder')                     // Assert it has the correct class
  .click()
     cy.get('#react-select-2-option-0')        // First option (text: "kg")
  .should('be.visible')                   // Ensure it's visible
  .click();                                                          

})
When('user click Tambah Unit baru',()=>{
    cy.contains('button', 'Tambah Unit Baru')  // Find button by text
  .should('be.visible')                    // Assert it's visible
  .click();          
})
When('user choose Unit',()=>{
    cy.get('div.text-lg') // Use a specific class to target
  .should('be.visible')
  .and('contain.text', 'Tambah Unit');
    cy.get('input[placeholder="Karton"]')
  .should('be.visible')
  .click();
    cy.get('ul.list-none li button')
  .first()                             // Select the first <li><button> element (text: "sachet")
  .should('be.visible')               // Optional: ensure it's visible
  .click();

})
When('user input jumlah dalam unit terkecil',()=>{
    // Generate a random number between 1 and 10
const randomNum = Math.floor(Math.random() * 10) + 1;

cy.get('input[name="quantity"]')
  .click({ force: true })                        // Force the click
  .clear({ force: true })                        // Clear existing value
  .type(randomNum.toString(), { force: true })   // Type random number
  .should('have.value', randomNum.toString());   // Assert value was set

})
When('user click simpan tambah unit',()=>{
  cy.get('button.btn.btn-primary.btn-sm')  // Select all matching buttons
  .contains('Simpan')                    // Filter by button text
  .first()                               // Pick the first one
  .click({ force: true });               // Click it, force in case of coverage
            // Wait if needed for UI to update

})

When('user click tambah varian',()=>{
        cy.wait(2000)
    cy.get('.btn.btn-outline', { timeout: 10000 }).contains('Tambah Varian')
    .click({force:true})

    cy.get('div.flex-1.text-lg.text-gray-800.font-bold',) // wait up to 10s
    .should('be.visible')
    .and('contain.text', 'Tambah Varian Produk');
        // Assert it contains the expected text


})
When('user input SKU ID, Barcode, Attribute, Nama Varian, Pajak, Minimum Reorder',()=>{
    const skuElement = 'input[name="skuId"]'
    const barcodeElement = 'input[name="barcode"]'
    const varianElement ='input[name="variantName"]'
    const minReorderElement = 'input[name="reorderPoint"]'



    cy.randomType(skuElement,'sku').then((random)=>{
        cy.get(skuElement).should('have.value',random)
        
    })
    cy.randomType(barcodeElement,'barcode').then((random)=>{
        cy.get(barcodeElement).should('have.value',random)
    })
    cy.get('input[name="attributeType.label"]').click();
    cy.get('.dropdown-content button').first().click();

    cy.randomType(varianElement,"variant").then((random)=>{
        cy.get(varianElement).should('have.value',random)
    })
    cy.get('input[name="tax.label"]').click();
    cy.get('.dropdown-content button').contains('(VAT) 11%').click({force:true});

    cy.get(minReorderElement).click({force:true})
    cy.randomNumber(minReorderElement,)
    .then((random)=>{
        cy.get(minReorderElement).should('have.value',random)
    })
})

When('user click lanjut',()=>{
    cy.get('button.btn.btn-primary').contains('Lanjut').click({force:true});
})

When('user atur variasi and input harga and input stok awal',()=>{
    cy.get('h2').contains('Atur Variasi').should('be.visible');
   
     cy.get('input[placeholder="0"][type="text"]').eq(0)
        .then((hargaElement)=>{
            cy.wrap(hargaElement).clear({force:true})
    
    cy.randomNumber(hargaElement)
    .then((random)=>{ 
        cy.wrap(hargaElement).should('have.value',random)
    })
})  
    cy.get('input[placeholder="0"][type="number"]')
    .click({force:true})
    .clear({force:true})
   cy.get('input[placeholder="0"][type="number"]')
  .as('quantityInput')
   
     cy.randomNumber('@quantityInput')
    .then((random)=>{
        cy.get('@quantityInput').should('have.value',`0`+random)
    })
     cy.contains('Select...').click({force:true});
    cy.get('.css-bio7mv-option').eq(0).click({force:true})
})

When('user click simpan varian',()=>{
   cy.get('.btn.btn-primary').eq(1).click({force:true});
})
When('user choose submit',()=>{
    
   cy.get('.btn.btn-primary').eq(0).click({force:true});
})
Then('new inventory successfully added',()=>{
    const createdInventory = Cypress.env('randomProductName');
       cy.get('#0_name').find('div.line-clamp-2')
        .should('include.text',createdInventory)

})
