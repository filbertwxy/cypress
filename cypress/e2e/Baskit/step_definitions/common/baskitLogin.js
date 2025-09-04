import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


Given('I open the login page', () => {
  cy.visit(Cypress.config('baskitUrl'));
});

When('I login with email and password', () => {
  cy.Login('david@gmail.com','12345678');
});


Then('I should see the heading {string}', (headingText) => {
  cy.get('h1').should('include.text', headingText);
});
