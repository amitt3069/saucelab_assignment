describe('Checkout Flow', () => {
  it('Complete checkout flow and verify successful order confirmation', () => {
    cy.visit('https://www.saucedemo.com/')

    // Login
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Add Bike Light to cart
    cy.get('button[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('button[data-test="checkout"]').click()

    // Fill checkout form
    cy.get('input[data-test="firstName"]').type('John')
    cy.get('input[data-test="lastName"]').type('Doe')
    cy.get('input[data-test="postalCode"]').type('12345')
    cy.get('input[data-test="continue"]').click()

    // Finish order
    cy.get('button[data-test="finish"]').click()

    // Assertion
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
  })
})
