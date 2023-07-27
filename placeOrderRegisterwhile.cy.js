import POM from "../../integration/page-object-model";

const functions = require('../../support/commands')

describe('place order: register while in cart', () => {
    it('should add a product to cart and register while checkout', () => {
        POM.homeVerify
        cy.get('.shop-menu > .nav > :nth-child(2) > a')
        .should('contain', 'Products')
        .click();
        cy.get('.title').should('contain', 'All Products');
        cy.get('.features_items').should('be.visible');
        cy.get(':nth-child(25) > .product-image-wrapper > .single-products > .productinfo > a').click();
        cy.get('.modal-footer > :nth-child(1)').click();
        cy.scrollTo('top');
        cy.get('.shop-menu > .nav > :nth-child(3) > a')
        .should('contain', 'Cart')
        .click();
        cy.location('pathname').should('eq', '/view_cart');
        cy.get('#do_action .btn-default').click();
        cy.get('#checkoutModal .modal-body :nth-child(2) > a > u').click();

        cy.get('.shop-menu').contains('Signup / Login').click();
        cy.get('.signup-form > h2').should('contain', 'New User Signup!');
    
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

        cy.get('.shop-menu > .nav > :nth-child(3) > a')
            .should('contain', 'Cart')
                .click();
        cy.location('pathname').should('eq', '/view_cart');
        cy.get('#do_action .btn-default')
            .should('contain', 'Proceed To Checkout')
                .click();
        cy.get(':nth-child(2) > .heading').should('contain', 'Address Details');
        cy.get('#address_delivery').should('be.visible');
        cy.get('#address_invoice').should('be.visible');
        cy.get(':nth-child(4) > .heading').should('be.visible');
        cy.get('.form-control').type('test order');
        cy.get(':nth-child(7) > .btn').click();
        cy.get('[data-qa="name-on-card"]').type('test test');
        cy.get('[data-qa="card-number"]').type('4444444444445555');
        cy.get('[data-qa="cvc"]').type('123');
        cy.get('[data-qa="expiry-month"]').type('08');
        cy.get('[data-qa="expiry-year"]').type('2029');
        cy.get('[data-qa="pay-button"]').click();
        cy.get('#success_message > .alert-success').should('have.text', 'Your order has been placed successfully!');
        cy.get('[data-qa="order-placed"] > b').should('be.visible');
        cy.get('.col-sm-9 > p').should('contain', 'Congratulations! Your order has been confirmed!');
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
        cy.get('[data-qa="account-deleted"]').should('contain', 'Account Deleted!');
        cy.get('[data-qa="continue-button"]')
        .should('contain', 'Continue')
        .click();
    });
});