const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {},
  defaultCommandTimeout: 500,
  setupNodeEvents(on, config) {
    // implement node event listeners here
  },
});
