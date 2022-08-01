const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'results/my-test-output.xml',
      toConsole: true
    },
    defaultCommandTimeout: 25000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
