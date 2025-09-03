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
    And user input jumlah dalam unit terkecil
    Then user click simpan tambah unit
    And user click tambah varian
    And user input SKU ID, Barcode, Attribute, Nama Varian, Pajak, Minimum Reorder
    When user click lanjut
    And user atur variasi and input harga and input stok awal
    When user click simpan varian
    And user choose submit
    Then new inventory successfully added
    
    

