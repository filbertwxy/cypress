export const salesOrderSelectors = {
  salesOrder: {
    salesOrderMenu: 'Sales Order',
    penjualanButton: 'button:contains("Penjualan")',
    daftarPenjualanButton: 'a[href="/order-list"]',
    tambahPesananPenjualanButton: 'a[href="/order-list/store/so/create"]',
    tambahPenjualanSpan: 'span.text-xl.font-bold',
    tanggalInput: 'input[placeholder="dd/mm/yyyy"]',
    bisnisPlaceholder:'div.css-1vlsb4t-placeholder:contains("Pilih nama bisnis disini")',
    picInput: 'input[placeholder="Masukkan pic disini"]',
    emailInput: 'input[placeholder="Masukkan email disini"]',
    phoneInput: 'input[placeholder="Masukkan nomor telepon disini"]',
    businessAddressTextarea: 'textarea[placeholder="Masukkan alamat disini"][name="businessAddress"]',
    provinceInput: 'input[aria-describedby*="react-select"][aria-describedby$="-placeholder"]', // Dynamic province input
    provinceInputDisabled: 'input[id="react-select-14-input"][disabled]',
    businessPostalCodeInput: 'input[placeholder="Masukkan kode pos disini"][name="businessPostalCode"]',
    shippingPostalCodeInput: 'input[placeholder="Masukkan kode pos disini"][name="shippingPostalCode"][disabled]',
    citySingleValue: 'div.css-w54w9q-singleValue',
    cityInput: 'input[id^="react-select-"][id$="-input"][aria-autocomplete="list"]', // Dynamic selector for any city input
    cityBusinessInput: 'input[id="react-select-15-input"]',
    checkboxPrimary: 'input.checkbox.checkbox-primary',
    productTableCheckbox: 'tr td input.checkbox.checkbox-primary',
    shippingAddressTextarea: 'textarea[placeholder="Masukkan alamat disini"][name="shippingAddress"]',
    salesPlaceholder: '#react-select-16-placeholder',
    shippingTypePlaceholder: 'input[id="react-select-18-input"]',
    paymentTypePlaceholder: 'input[id="react-select-17-input"]', // Input for payment type
    pilihProdukButton: 'button.btn-outline.border-primary[aria-haspopup="dialog"]',
    tambahProdukSementaraButton: 'button:contains("Tambah Produk Sementara")',
    tambahKeInventoryUtamaButton: 'button:contains("Tambah ke Inventory Utama")',
    pilihDariInventoryButton: 'div:contains("Pilih dari Inventory")',
    pilihButton: 'button.btn-primary.w-28',
    simpanButton: 'button.btn-primary[type="submit"]',
    buatPesananPenjualanButton: 'button.btn-primary[type="button"]:contains("Buat Pesanan Penjualan")', // Selector for "Buat Pesanan Penjualan" button
    pilihProdukHeader: 'h1.text-xl.font-bold.leading-normal:contains("Pilih Produk")',
    editProductButton: 'button > i.icon-solid-pencil-square',
    qtyInput: 'input[name="qty"]',
    tierPriceInput: 'input[name="tierPrice"]',
    discountAmountInput: 'input[name="discountAmount"]',
    priceInput: 'input[placeholder="0"][type="number"]',
    tambahButton: 'button.btn-primary.w-56',
    fileInput: 'input[type="file"][name="file"]',
    refPembelianInput: 'input[placeholder="Masukkan no. ref pesanan pembelian disini"]',
  }
}