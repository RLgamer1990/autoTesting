import POM from "../../integration/page-object-model";

const functions = require('../../support/commands') 

describe('Logout User', () => {
    it('should login and logout the user', () => {
        POM.homeVerify
        cy.get('.shop-menu').contains('Signup / Login').click();
// Registration
        cy.get('[data-qa="signup-name"]').type('Gilad V');
        cy.get('[data-qa="signup-email"]').type('test071990@test.com');
        cy.get('[data-qa="signup-button"]').click();

//User Details
    const randomFirstname = functions.generateRandomFirstname(4);
    const randomLastname = functions.generateRandomLastname(4);
    const streetName = functions.getRandomAlphaNumericString(10);
    const streetNumber = functions.getRandomNumber(1, 999);
    const city = functions.getRandomAlphaNumericString(8);
    const state = functions.getRandomAlphaNumericString(2);
    const postalCode = functions.getRandomNumber(10000, 99999);
    const mobileNumber = functions.generateRandomMobileNumber();

        cy.get('#id_gender1').click();
        cy.get('#password').type('GjV071990');
        cy.get('#days').select('19');
        cy.get('#months').select('7');
        cy.get('#years').select('1990');
        cy.get('#newsletter').click();
        cy.get('#optin').click();
        cy.get('[data-qa="first_name"]').type(randomFirstname);
        cy.get('[data-qa="last_name"]').type(randomLastname);
        cy.get('[data-qa="address"]').type(streetName, streetNumber);
        cy.get('[data-qa="country"]').select('United States');
        cy.get('[data-qa="state"]').type(state);
        cy.get('[data-qa="city"]').type(city);
        cy.get('[data-qa="zipcode"]').type(postalCode);
        cy.get('[data-qa="mobile_number"]').type(mobileNumber);
        cy.get('[data-qa="create-account"]').click();

//Login
        cy.visit('https://www.automationexercise.com/');
        cy.get('.shop-menu').contains('Signup / Login').click();
        cy.get('.login-form > h2').should('contain', 'Login to your account');
        cy.get('[data-qa="login-email"]').type('test071990@test.com');
        cy.get('[data-qa="login-password"]').type('GjV071990');
        cy.get('[data-qa="login-button"]').click();
        cy.get('.shop-menu').contains('Logout').click();
        cy.location('pathname').should('eq', '/login');
    });
});