describe('Initial Page', () => {
  it('Docs Link', () => {
    // update port
    cy.visit('/')

    cy.contains('Docs').click()

    cy.url().should('include', '/docs')
  })
  it('Blog Link', () => {
    // update port
    cy.visit('/')

    cy.contains('Blog').click()

    cy.url().should('include', '/blog')
  })
})
