  describe('As Student', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080)
      cy.visit('http://localhost:5173/regStudent');
    });
    
    it('should display error message for existing email', () => {
      // Fill the form with existing email
      cy.get('#student_school_id').type('654321');
      cy.get('#first_name').type('New');
      cy.get('#last_name').type('User');
      cy.get('#middle_name').type('Middle');
      cy.get('#suffix').type('Jr');
      cy.get('#address').type('123 Main St');
      cy.get('#contact').type('1234567890');
      cy.get('#last_school_year').type('2022');
      cy.get('#degree').type('BSc');
      cy.get('#email').type('jcister_220000001482@uic.edu.ph');
      cy.get('#password').type('password123');
    
      // Submit the form
      cy.get('#create-button').click();
    
      // Ensure error message is displayed
      cy.get('.error-message').should('have.text', 'Account with this email already exists.');
    });

    it('should display error message for existing student school id', () => {
      // Fill the form with existing email
      cy.get('#student_school_id').type('220000001482');
      cy.get('#first_name').type('New');
      cy.get('#last_name').type('User');
      cy.get('#middle_name').type('Middle');
      cy.get('#suffix').type('Jr');
      cy.get('#address').type('123 Main St');
      cy.get('#contact').type('1234567890');
      cy.get('#last_school_year').type('2022');
      cy.get('#degree').type('BSc');
      cy.get('#email').type('newuser2@example.com');
      cy.get('#password').type('password123');
    
      // Submit the form
      cy.get('#create-button').click();
    
      // Ensure error message is displayed
      cy.get('.error-message').should('have.text', 'Student with this school ID already exists.');
    });
    
  });