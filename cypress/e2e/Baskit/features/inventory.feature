@inventory
Feature: Inventory

Background:
    Given I open the login page
    And I login with email and password

Scenario: Add Inventory Manually - Tambah Produk Baru
    Given user go to Inventory page
    When user click inventaris
    And user click tambah produk button
    And user choose Tambahkan secara manual 
    Then user will redirect to Tambah Produk Baru page
    When user choose tipe produk
    And user  input nama produk
    And user upload image
    And user choose nama brand
    And user choose Segmen Produk FMCG
    And user choose kategori
    And user choose Unit Terkecil
    And user click Tambah Unit baru
    And user choose Unit
    And user choose jumlah dalam unit terkecil
    Then user click simpan
    And user click tambah varian
    And user input SKU ID 
    And user input barcode
    And user choose attribute
    And user input nama varian
    And user choose pajak VAT 11%
    And user input minimum reorder
    Then user click lanjut
    And user atur variasi and input harga
    And user input stok awal
    When user choose simpan
    And user choose submit
    Then new inventory successfully added
    
    

