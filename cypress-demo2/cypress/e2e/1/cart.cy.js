describe('Cart Management', () => {
  it('Add to cart & verify item is present in cart', () => {
    cy.visit('https://www.saucedemo.com/')

    // Login
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Add Backpack to cart
    cy.get('button[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()

    // Assertion
    cy.get('.cart_item .inventory_item_name')
      .should('have.text', 'Sauce Labs Backpack')
  })
})