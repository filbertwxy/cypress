// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands'
import '@shelex/cypress-allure-plugin';
import { selectors } from './selectors/inventory';
import { loginSelectors } from './selectors/login';

Cypress.Commands.add('setlocalstorage', (key, value) => {
  cy.window().then((window) => {
    window.localStorage.setItem(key, value)
  })
})
Cypress.Commands.add('getlocalstorage', (key) => {
  cy.window().then((window) => {
    return window.localStorage.getItem(key)
  })
})

Cypress.Commands.add('Login', (email, password) => {
  cy.findByPlaceholderText(loginSelectors.login.email).type(email)
  cy.findByPlaceholderText(loginSelectors.login.email).type(password)
  cy.get(loginSelectors.login.submit).click()
})


Cypress.Commands.add('creatingAccessToken', (username, password) => {
  cy.request({
    method: 'POST',
    url: 'https://api-beta.baskit.app/v2/auth',
    body: { username, password },
  }).then((response) => {
    expect(response.status).to.eq(200)

    const accessToken = response.body.data.accessToken
    const xID = response.body.data.id
    cy.log('Access Token:', accessToken)
    cy.log('X-ID:', xID)

    // store token globally
    Cypress.env('accessToken', accessToken)
    Cypress.env('xID', xID)

    // return cy.wrap({ accessToken, xID })
  })
})

Cypress.Commands.add('inputRandomName', () => {
  // Generate random suffix (5 alphanumeric characters)
  const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();

  // Create full name starting with 'Testing'
  const productName = `Testing${randomSuffix}`;

  // Input into the field
  cy.get(selectors.inventory.productName).clear().type(productName);

  // Optionally store the name for later assertions
  Cypress.env('randomProductName', productName);
});
Cypress.Commands.add('randomType', (selector,prefix) => {
  // Generate a random string using base-36 encoding.
  const randomString = Math.random().toString(36).substring(2, 9);
  
  // Create the final SKU value with a prefix.
  const random = `${prefix}-${randomString}`;
  
  // Find the input element by its name attribute and type the random value.
  cy.get(selector).type(random);
  return cy.wrap(random)
});

Cypress.Commands.add('randomNumber', (selector, min = 1, max = 100) => {
  // Generate a random number between min and max (inclusive).
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const random = randomNumber.toString();
  
  // Type the number into the input field.
  
  cy.get(selector).type(random,{force:true});

  // Return the number so it can be verified later.
  return cy.wrap(random);
});






