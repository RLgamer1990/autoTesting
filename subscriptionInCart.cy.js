import POM from "../../integration/page-object-model";

describe('verify subscription in cart page', () => {
    it('should subscribe to site', () => {
        POM.homeVerify
        cy.get('.shop-menu > .nav > :nth-child(3) > a')
        .should('contain', 'Cart')
        .click();
        cy.scrollTo('bottom');
        cy.get('.single-widget > h2').should('contain', 'Subscription');
        cy.get('#susbscribe_email').type('test@test.com');
        cy.get('#subscribe').click();
        cy.get('.alert-success').then(($el) => {
            expect($el.text()).to.be.eq('You have been successfully subscribed!')
            });
    });
});