  Feature: Sales Order Feature

Background:
    Given I open the login page
    And I login with email and password

Scenario:
   Given user open sales order menu
   When user click penjualan button
   When user click daftar penjualan link
   When user click tambah pesanan penjualan link
   Then user will redirect to tambah pesanan penjualan page
   When user type ref pembelian
   When user choose tanggal pengiriman
   When user choose tanggal pesanan dibuat
   And user fill nama bisnis
   And user fill nama pic 
   And user fill email
   And user fill telepon
   And user fill alamat bisnis
   And user choose provinsi
   And user fill kode pos 
   And user choose kota
   When user choose alamat sama checkbox
   Then alamat pengiriman will match with informasi pelanggan
   When user fill nama sales
   And choose tipe pengiriman
   And choose tipe pembayaran
   When choose pilih produk - pilih dari inventory
   Then show popup pilih produk
   When user select product from inventory and click pilih button
   When choose produk and submit
   Then produk will be added
   When click edit kuantitas dipesan
   And edit harga akhir
   And add diskon
   And submit edit produk sales order
   And click tambah dokumen tambahan
   And upload file dokumen tambahan
   And click submit dokumen tambahan
   And click buat pesanan penjualan
   Then SO will successfully created
   

