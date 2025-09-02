const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const {
  addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  projectId: '123',
  e2e: {
    apiUrl: 'https://api-beta.baskit.app/v2',
    baskitUrl: 'https://dev-suite.baskit.app',
    env: {
      navbarText: 'cypress.io',
    },
   specPattern: [
  'cypress/e2e/Baskit/features/*.feature',
  'cypress/e2e/Baskit/**/*.cy.{js,jsx,ts,tsx}',
],

    supportFile:  'cypress/support/commands.js', // or set your support file path if you use one

    async setupNodeEvents(on, config) {
      // Add cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);

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
