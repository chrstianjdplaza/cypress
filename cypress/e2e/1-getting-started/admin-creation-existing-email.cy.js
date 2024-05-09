describe('As Admin', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080)
      cy.visit('http://localhost:5173/regAdmin');
    });
    
    it('should display error message for existing email', () => {
      // Fill the form with existing email
      cy.get('#firstName').type('Juvenile Christen');
      cy.get('#lastName').type('Bajo');
      cy.get('#middleName').type('Lanticse');
      cy.get('#email').type('jbajo_220000001294@uic.edu.ph');
      cy.get('#password').type('password123');
      cy.get('#role').type('Registrar');
    
      // Submit the form
      cy.get('#create-button').click();
    
      // Ensure error message is displayed
      cy.get('.error-message').should('have.text', 'Account with this email already exists.');
    });
    
  });