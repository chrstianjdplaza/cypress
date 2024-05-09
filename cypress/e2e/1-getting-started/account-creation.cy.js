describe('Account Creation Page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
      // Visit the login page before each test
      cy.visit('http://localhost:5173/login');
    });
  
    it('Select "AS STUDENT" role', () => {
      // Click the create new account button
      cy.get('[data-testid=account-button]').click();
   
      cy.get('[data-testid=student-button]').click();
      cy.url().should('include', '/regStudent');

      cy.get('[data-testid=message]').should('be.visible').and('contain.text', 'Enter your name as a STUDENT during your stay at the university.');
    });
   
    it('Select "AS ADMIN" role', () => {
      // Click the create new account button
      cy.get('[data-testid=account-button]').click();
   
      cy.get('[data-testid=admin-button]').click();
      cy.url().should('include', '/regAdmin');

      cy.get('[data-testid=message]').should('be.visible').and('contain.text', 'Enter your credentials as an ADMIN.');
    });

    
  });
  describe('As Student', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080)
      cy.visit('http://localhost:5173/regStudent');
    });
  
    it('should display error messages for empty fields', () => {
      cy.get('#create-button').click();
      cy.get('.error-message').should('have.text', 'Please fill in all fields.'); 
    });
  
    it('should register user successfully and display approval message', () => {
      // Fill the form with valid details
      cy.get('#student_school_id').type('123456');
      cy.get('#first_name').type('New');
      cy.get('#last_name').type('User');
      cy.get('#middle_name').type('Middle');
      cy.get('#suffix').type('Jr');
      cy.get('#address').type('123 Main St');
      cy.get('#contact').type('1234567890');
      cy.get('#last_school_year').type('2022');
      cy.get('#degree').type('BSc');
      cy.get('#email').type('newuser@example.com');
      cy.get('#password').type('password123');
      // Submit the form
      cy.get('#create-button').click();
      cy.get('#submit-button').click();
    
      // Wait for the approval message to appear
      cy.contains('Please wait for the Registrar’s Approval').should('be.visible');
      cy.get('#done-button').click();
    });
    
  });
  
  describe('As Admin', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080)
      cy.visit('http://localhost:5173/regAdmin');
    });
  
    it('should display error messages for empty fields', () => {
      cy.get('#create-button').click();
      cy.get('.error-message').should('have.text', 'Please fill in all fields.'); 
    });
  
    it('should register user successfully and display approval message', () => {
      // Fill the form with valid details
      cy.get('#firstName').type('New');
      cy.get('#lastName').type('User');
      cy.get('#middleName').type('Middle');
      cy.get('#suffix').type('Jr');
      cy.get('#email').type('newadmin@example.com');
      cy.get('#password').type('password123');
      cy.get('#role').type('Registrar');
    
      // Submit the form
      cy.get('#create-button').click();
      cy.get('#submit-button').click();
    
      // Wait for the approval message to appear
      cy.contains('Please wait for the Registrar’s Approval').should('be.visible');
      cy.get('#done-button').click();
    });
  
    
  });