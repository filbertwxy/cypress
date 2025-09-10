import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { salesOrderSelectors } from '../../../support/selectors/salesOrder';


let initialSOCount = 0;

function getSOCount() {
  return cy.contains('p', /Ditampilkan \d+-\d+ dari \d+/)
    .invoke('text')
    .then(text => {
      const match = text.match(/Ditampilkan \d+-\d+ dari (\d+)/);
      return match ? parseInt(match[1], 10) : 0;
    });
}




Given('user open sales order menu', () => {
  cy.contains(salesOrderSelectors.salesOrder.salesOrderMenu).click();
});
When('user click penjualan button', () => {
  cy.get(salesOrderSelectors.salesOrder.penjualanButton).click();
    cy.wait(5000);
});
When('user click daftar penjualan link', () => {
  cy.get(salesOrderSelectors.salesOrder.daftarPenjualanButton)
  .first()
  .click();
  cy.url().should('include', '/order-list');
    getSOCount().then(count => {
    initialSOCount = count;
    cy.log('Initial SO count:', initialSOCount);
  });

});
When('user click tambah pesanan penjualan link', () => {
  cy.get(salesOrderSelectors.salesOrder.tambahPesananPenjualanButton)
  .click();
  cy.url().should('include', '/order-list/store/so/create');
  cy.wait(3000)
});
Then('user will redirect to tambah pesanan penjualan page', () => {
  cy.get(salesOrderSelectors.salesOrder.tambahPenjualanSpan)
    .should('be.visible')
    .and('include.text', 'Tambah Penjualan');
});

When('user type ref pembelian', () => {
  const randomRef = `REF${Math.floor(1000 + Math.random() * 9000)}`; // Generates a random ref like REF1234
  cy.get(salesOrderSelectors.salesOrder.refPembelianInput).type(randomRef);
  cy.get(salesOrderSelectors.salesOrder.refPembelianInput).should('have.value', randomRef);
});
When('user choose tanggal pengiriman', () => {
  const today = new Date();
  const day = today.getDate(); // Get today's day as a number

  // Open the date picker
  cy.get(salesOrderSelectors.salesOrder.tanggalInput).eq(1).click();

  // Select today's date in the date picker
  cy.get('button[name="day"]').contains(day).click();
});


When('user choose tanggal pesanan dibuat', () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  cy.get(salesOrderSelectors.salesOrder.tanggalInput)
  .eq(0) // Select the first input if there are multiple
  .type(formattedDate, { force: true }); 
    cy.get(salesOrderSelectors.salesOrder.tanggalInput)
    .eq(0) // Select the first input if there are multiple
    .should('have.value', formattedDate)
    .click()
});

When('user fill nama bisnis', () => {
  cy.get(salesOrderSelectors.salesOrder.bisnisPlaceholder)
  .first()
  .click({force: true});
  const businessName = 'Nusa jaya'; // Replace with the actual business name to select
  cy.get('div.py-2.css-1tvys63[data-value]')
  .first()
    .type(businessName, { delay: 200 }, { force: true }) // type slowly
    .wait(3000) // wait for dropdown to load
   .trigger('keydown', { key: 'Enter' })
      .wait(2000) 
  // cy.get(salesOrderSelectors.salesOrder.bisnisPlaceholder).should('have.text', businessName);
});
When('user fill nama pic', () => {
  cy.get(salesOrderSelectors.salesOrder.picInput)
  .wait(500)
  .clear()
  cy.randomType(salesOrderSelectors.salesOrder.picInput, 'PIC')
  .then((randomPic) => {
    // Verify the input value
    cy.get(salesOrderSelectors.salesOrder.picInput).should('have.value', randomPic);
  });
});
When('user fill email', () => {
  cy.get(salesOrderSelectors.salesOrder.emailInput)
  .clear()
  .wait(1000)
.type(`user${Math.floor(1000 + Math.random() * 9000)}@example.com`)
  .then((randomEmail) => {
    // Verify the input value
    // cy.get(salesOrderSelectors.salesOrder.emailInput).should('have.text', randomEmail);
  });
});
When('user fill telepon', () => {
const randomPhone = Math.floor(1000000000 + Math.random() * 9000000000).toString();
  cy.get(salesOrderSelectors.salesOrder.phoneInput)
    .clear()
    .type(randomPhone)
    .should('have.value', randomPhone);
});
When('user fill alamat bisnis', () => {
  cy.get(salesOrderSelectors.salesOrder.businessAddressTextarea)
  .clear()
 cy.randomType(salesOrderSelectors.salesOrder.businessAddressTextarea, 'Jl. Testing No')
  .then((businessAddress) => {
    cy.get(salesOrderSelectors.salesOrder.businessAddressTextarea).should('have.value', businessAddress);
  });
});
When('user choose provinsi', () => {
  cy.get(salesOrderSelectors.salesOrder.provinceInput)
  .first()
  .type("Banten")
  .wait(2000)  // wait for dropdown to load
   .type('{enter}');
});
When('user fill kode pos', () => {
  const randomPostalCode = Math.floor(10000 + Math.random() * 90000).toString();
  cy.get(salesOrderSelectors.salesOrder.businessPostalCodeInput).type(randomPostalCode);
  cy.get(salesOrderSelectors.salesOrder.businessPostalCodeInput).should('have.value', randomPostalCode);
});
When('user choose kota', () => {
  cy.get(salesOrderSelectors.salesOrder.cityInput)
  .eq(2)
  .wait(2000)
  .click({force: true})
  .trigger('keydown', { key: 'Enter' });
});
When('user choose alamat sama checkbox', () => {
  cy.get(salesOrderSelectors.salesOrder.checkboxPrimary).check({ force: true });
});
Then('alamat pengiriman will match with informasi pelanggan', () => {
  cy.get(salesOrderSelectors.salesOrder.businessAddressTextarea)
    .invoke('val')
    .then((businessAddress) => {
      cy.get(salesOrderSelectors.salesOrder.shippingAddressTextarea)
        .invoke('val')
        .should('equal', businessAddress);
    });
}); 
When('user fill nama sales', () => {
  cy.get(salesOrderSelectors.salesOrder.salesPlaceholder).click({force: true})
  cy.get('div.py-2.css-1tvys63[data-value]')
  .eq(3)
    .trigger('keydown', { key: 'Enter' },{force: true});
});
When('choose tipe pengiriman', () => {
  cy.get(salesOrderSelectors.salesOrder.shippingTypePlaceholder).click({ force: true })
  .trigger('keydown', { key: 'Enter' }, { force: true });
});
When('choose tipe pembayaran', () => {
  cy.get(salesOrderSelectors.salesOrder.paymentTypePlaceholder).click()
 .trigger('keydown', { key: 'Enter' }, { force: true });

});
When('choose pilih produk - pilih dari inventory', () => {
  cy.get(salesOrderSelectors.salesOrder.pilihProdukButton).click();
  // cy.get('div[role="dialog"]').should('be.visible');
  cy.wait(2000);
  cy.get(salesOrderSelectors.salesOrder.pilihDariInventoryButton)
  .eq(3)
  .click()
  // cy.get('div[role="dialog"]').should('be.visible');
});

Then('show popup pilih produk', () => {
  cy.get(salesOrderSelectors.salesOrder.pilihProdukHeader).should('be.visible');
});
When('user select product from inventory and click pilih button', () => {
  cy.get(salesOrderSelectors.salesOrder.productTableCheckbox).first().check({ force: true });

});
When('choose produk and submit', () => {
    cy.get(salesOrderSelectors.salesOrder.pilihButton).click();
  cy.get(salesOrderSelectors.salesOrder.pilihProdukHeader).should('not.exist');
});
Then('produk will be added', () => {
  cy.get('table').should('be.visible');
  cy.get('table tbody tr').its('length').should('be.gte', 1); // Ensure at least one product row exists
});
When('click edit kuantitas dipesan', () => {
cy.get(salesOrderSelectors.salesOrder.editProductButton).first().click(); 
});
When('user edit kuantitas dipesan', () => {
  cy.get(salesOrderSelectors.salesOrder.qtyInput).clear().type('2');
  cy.get(salesOrderSelectors.salesOrder.qtyInput).should('have.value', '2');
});
When('edit harga akhir', () => {  
  cy.get(salesOrderSelectors.salesOrder.priceInput).clear().type('20000');
  cy.get(salesOrderSelectors.salesOrder.priceInput).should('have.value', '20000');
});
When('add diskon', () => {  
  cy.get(salesOrderSelectors.salesOrder.discountAmountInput).clear().type('20');
  cy.get(salesOrderSelectors.salesOrder.discountAmountInput).should('have.value', '20');
});
When('submit edit produk sales order', () => {
  cy.get(salesOrderSelectors.salesOrder.simpanButton)
  .first()
  .click();
});
When('click tambah dokumen tambahan', () => {
  cy.get(salesOrderSelectors.salesOrder.tambahButton,).click({ force: true });
});
When('upload file dokumen tambahan', () => {
  const filePath = 'cypress/fixtures/contoh.png';
  cy.get(salesOrderSelectors.salesOrder.fileInput).selectFile(filePath);
});
When('click submit dokumen tambahan', () => {
  cy.get(salesOrderSelectors.salesOrder.simpanButton)
  .first()
  .click()
  .wait(2000);
});
When('click buat pesanan penjualan', () => {
  cy.get(salesOrderSelectors.salesOrder.buatPesananPenjualanButton).click();
  cy.wait(5000);
});
Then('SO will successfully created', () => {
  getSOCount().then(finalCount => {
    cy.log('Final SO count:', finalCount);
    expect(finalCount).to.be.greaterThan(initialSOCount);
  });
});