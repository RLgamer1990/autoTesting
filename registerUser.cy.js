import POM from "../../integration/page-object-model";

const functions = require('../../support/commands')

describe('Register User', () => {
    it('should show home page', () => {
        POM.homeVerify       
    });

    it('should click om signup/login and show New User Signup', () => {
        cy.get('.shop-menu').contains('Signup / Login').click();
        cy.get('.signup-form > h2').should('contain', 'New User Signup!');
    });

    it('should register a new user', () => {

//Registration
        const randomEmail = functions.generateRandomEmail();
        const randomUserName = functions.generateRandomUsername(4);
        const randomPassword = functions.generateRandomPassword(8);

        cy.get('.shop-menu').contains('Signup / Login').click();
        cy.get('[data-qa="signup-name"]').type(randomUserName);
        cy.get('[data-qa="signup-email"]').type(randomEmail);
        cy.get('[data-qa="signup-button"]').click();
        cy.get(':nth-child(1) > b').should('contain', 'Enter Account Information');
        
        
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
        cy.get('#password').type(randomPassword);
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

    // Verifying User
        cy.get('[data-qa="account-created"]').should('contain', 'Account Created!');
        cy.get('#form > div > div > div > p:nth-child(2)').should('contain', 'Congratulations!');
        cy.get('#form > div > div > div > p:nth-child(3)').should('contain', 'You can now take advantage');
        cy.get('[data-qa="continue-button"]').click();
        cy.get(':nth-child(10) > a').should('contain', 'Logged in as');
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
        cy.get('[data-qa="account-deleted"]').should('contain', 'Account Deleted!');
        cy.get('[data-qa="continue-button"]')
        .should('contain', 'Continue')
        .click();
    });
});
