describe('Register User with exising email', () => {
    it('should show an error for existing user', () => {
        cy.get('.shop-menu').contains('Signup / Login').click();
        cy.get('.signup-form > h2').should('contain', 'New User Signup!');
    // Registration check
        cy.get('[data-qa="signup-name"]').type('Gilad V');
        cy.get('[data-qa="signup-email"]').type('test071990@test.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.get('.signup-form > form > p').should('contain', 'Email Address already exist!');
    });
});