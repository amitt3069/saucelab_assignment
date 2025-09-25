# saucelab_assignment
Cypress E2E Tests – Saucedemo

This repository contains end-to-end (E2E) Cypress test cases for Saucedemo

The tests cover the following scenarios:

✅ Successful login with valid credentials

✅ Add product to cart and verify it appears in the cart

✅ Complete checkout and verify order confirmation

🚀 Project Setup

Clone the repo (or download ZIP) and navigate to the project folder:



Install dependencies:

npm install


Open Cypress Test Runner:

npx cypress open


Run the tests:

In the Cypress Chrome runner, go to the Spec folder.

You will see all three test files (login.cy.js, cart.cy.js, checkout.cy.js).

Click on each test file to run it individually.

Debugging tips:

Hover over steps in the Cypress runner to see UI snapshots for each test step.

Errors and failed assertions are clearly highlighted for quick debugging.

⚙️ Notes

For simplicity and testing purposes, the user credentials are hardcoded:

Username: standard_user

Password: secret_sauce

For better maintainability, credentials can be moved to config files or environment variables.

No additional frameworks (like Page Object Model or Cucumber) were used due to time constraints.

Cypress automatically handles waiting, retries, and assertions, making tests reliable and easy to maintain.


✅ Tech Stack

Cypress – End-to-end testing framework

JavaScript – Test scripts

Node.js – Dependency management
