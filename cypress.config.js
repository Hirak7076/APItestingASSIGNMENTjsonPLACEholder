const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  return config
}

module.exports = defineConfig({
  e2e: {
     setupNodeEvents,
     specPattern:'C:/Users/User/Desktop/AssignmentCypressAPItesting/cypress/Integration/Tests/*.js'
  },
});
