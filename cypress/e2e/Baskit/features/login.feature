Feature: Login to Baskit

  Scenario: User logs in successfully
    Given I open the login page
    When I login with email and password
    Then I should see the heading "Ringkasan Bisnis"
