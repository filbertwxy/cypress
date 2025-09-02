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
  cy.findByPlaceholderText('Contoh: email@baskit.app').type(email)
  cy.findByPlaceholderText('Masukkan Kata Sandi').type(password)
  cy.get('button[type="submit"]').click()
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
  cy.get('input[name="productName"]').clear().type(productName);

  // Optionally store the name for later assertions
  Cypress.env('randomProductName', productName);
});

