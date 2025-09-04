Feature: Edit Inventory

Background:
    Given I open the login page
    And I login with email and password
    Given user go to Inventory page
    And user click inventaris


Scenario: Edit First Index of Inventory - Product Name
    When user click edit inventory
    Then user go to edit page
    And user edit product name
    And click submit edit inventory
    Then inventory product name will successfully edited