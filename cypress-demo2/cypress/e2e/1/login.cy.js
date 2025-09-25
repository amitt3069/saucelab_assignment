describe('Login Tests', () => {
  it('Successful login with valid credentials', () => {
    cy.visit('https://www.saucedemo.com/')

    // Login
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Assertions
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
  })
})
