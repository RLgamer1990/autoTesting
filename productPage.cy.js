import POM from "../../integration/page-object-model";

describe('verify all products and products details page', () => {
    it('should show the products and product details', () => {
        POM.homeVerify
        cy.get('.shop-menu > .nav > :nth-child(2) > a')
        .should('contain', 'Products')
        .click();
        cy.get('.title').should('contain', 'All Products');
        cy.get('.features_items').should('be.visible');
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.location('pathname').should('eq', '/product_details/1');
        
        cy.get('.product-information > h2').should('be.visible');
        cy.get(':nth-child(5) > span').should('be.visible');

        // verifying each item in the array
        const productInformation = ['Category', 'Availability', 'Condition', 'Brand']
        
        productInformation.forEach(item => {
            cy.contains(item);
            // You can also add additional assertions like checking visibility, etc., depending on your specific requirements.
        });
    });   
});