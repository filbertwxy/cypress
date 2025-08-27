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
    cy.visit(Cypress.config('baskitUrl'))
    cy.findByPlaceholderText('Contoh: email@baskit.app').type(email)
    cy.findByPlaceholderText('Masukkan Kata Sandi').type(password)
    cy.get('button[type="submit"]').click()
})