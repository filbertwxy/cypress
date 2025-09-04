import { Before } from '@badeball/cypress-cucumber-preprocessor'

// This will run BEFORE scenarios tagged with @inventory
Before({ tags: '@inventory' }, () => {
  cy.log('Running setup for @inventory scenario')
  cy.session('user-session', () => {
    cy.visit(Cypress.config('baskitUrl'))
    cy.Login('david@gmail.com', '12345678')
  })
})
