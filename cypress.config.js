const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://www.jenkins.io",
    projectId: "xcqix3",
    viewportWidth: 1920, 
    viewportHeight: 1080,
    video: true,
    chromeWebSecurity: false, 
    defaultCommandTimeout: 9000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
