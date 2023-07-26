import POM from "../../integration/page-object-model";

describe('verify all products and products details page', () => {
    it('should show the products and product details', () => {
        POM.homeVerify
        cy.get('.shop-menu > .nav > :nth-child(2) > a')
        .should('contain', 'Products')
        .click();
        cy.get('.title').should('contain', 'All Products');
        cy.get('.features_items').should('be.visible');
        cy.get('#search_product').type('Men Tshirt');
        cy.get('#submit_search').click();
    });
});