describe('template spec', () => {
  it('Selecting Quantity of Documents', () => {
    cy.visit('https://reqease.netlify.app/')
    cy.get('.div-44').click()
    cy.get('#row1increment').click()
    cy.get('.img-5').eq(1).click()
    cy.get('.img-5').eq(1).click()
  })
  
  it('Selecting Different Quantities for Different Documents', () => {
    cy.visit('https://reqease.netlify.app/')
    cy.get('.div-44').click()
    cy.get('#row1increment').click()
    cy.get('.img-5').eq(1).click()
    cy.get('.img-5').eq(2).click()
    cy.get('.img-5').eq(3).click()
    cy.get('.img-5').eq(4).click()
    cy.get('.img-5').eq(5).click()
    cy.get('.img-5').eq(6).click()
    cy.get('.img-5').eq(7).click()
    cy.get('.img-5').eq(8).click()
    cy.get('.img-5').eq(9).click()
    cy.get('.img-5').eq(10).click()
    cy.get('.img-5').eq(11).click()
    cy.get('.img-5').eq(12).click()
    cy.get('.img-5').eq(13).click()
    cy.get('.img-5').eq(14).click()
    cy.get('.img-5').eq(15).click()
    cy.get('.img-5').eq(16).click()
    cy.get('.img-5').eq(17).click()
    cy.get('.img-5').eq(18).click()
    cy.get('.img-5').eq(19).click()
    cy.get('.img-5').eq(20).click()
  })

  it('Requesting a Document with Valid Details and Purpose', () => {
    cy.visit('https://reqease.netlify.app/')
    cy.get('.div-44').click()
    cy.get('#row1increment').click()
    cy.get('.img-5').eq(1).click()
    cy.get('.div-197').type("No prupose")
    cy.get('.div-391').click()
  })

  it('Requesting a Document with Missing Purpose', () => {
    cy.visit('https://reqease.netlify.app/')
    cy.get('.div-44').click()
    cy.get('#row1increment').click()
    cy.get('.img-5').eq(1).click()
    cy.get('.div-391').click()
  })

  it('Attempting to Proceed Without Requesting Any Document', () => {
    cy.visit('https://reqease.netlify.app/')
    cy.get('.div-44').click()
    cy.get('.div-391').click()
  })
})