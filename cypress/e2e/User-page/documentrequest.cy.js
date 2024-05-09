describe('Request Document Page', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080)
      // Visit the login page before each test
      cy.visit('http://localhost:5173/reqDoc');
    });
  
    it('Selecting Quantity of Documents', () => {
      // Click the plus button to increase quantity of documents
      cy.get('#row1increment').click();
      // Verify if quantity of documents is displayed
      cy.get('#row1qty').should('be.visible').and('contain.text', '1');
 
    });

  });
