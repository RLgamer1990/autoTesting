import POM from "../../integration/page-object-model";

describe('Login user with incorrect credentials', () => {
    it('should not login', () => {
        POM.homeVerify
    //Login
        cy.get('.shop-menu').contains('Signup / Login').click();
        cy.get('.login-form > h2').should('contain', 'Login to your account');
        cy.get('[data-qa="login-email"]').type('test1@test.com');
        cy.get('[data-qa="login-password"]').type('GjV728');
        cy.get('[data-qa="login-button"]').click();
        cy.get('.login-form > form > p').contains('Your email or password is incorrect!')
    });
});