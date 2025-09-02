const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const {
  addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: '123',
  e2e: {
    apiUrl: 'https://api-beta.baskit.app/v2',
    baskitUrl: 'https://dev-suite.baskit.app',
    env: {
      navbarText: 'cypress.io',
      allure: true, // enable allure environment variable
    },
    specPattern: [
      'cypress/e2e/Baskit/features/*.feature',
      'cypress/e2e/Baskit/**/*.cy.{js,jsx,ts,tsx}',
    ],
    supportFile: 'cypress/support/commands.js', // your support file

    async setupNodeEvents(on, config) {
      // Add cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Add allure plugin writer
      allureWriter(on, config);

      // Use esbuild with cucumber plugin for faster preprocessing
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );

      return config;
    },
  },
});
