import POM from "../../integration/page-object-model";

describe('verify product quantity in cart', () => {
    it('should add a product to cart and show it in the cart page', () => {
        POM.homeVerify
        cy.get('.shop-menu > .nav > :nth-child(2) > a')
        .should('contain', 'Products')
        .click();
        cy.get('.title').should('contain', 'All Products');
        cy.get('.features_items').should('be.visible');
        cy.get(':nth-child(25) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('#quantity').clear();
        cy.get('#quantity').type(4);
        cy.get(':nth-child(5) > .btn').click();
        cy.get('u').click();
        cy.get('#product-29').should('be.visible');  
        cy.get('#product-29 > .cart_description > h4').should('contain', 'Green Side Placket Detail T-Shirt');

        //price verify
        cy.get('#product-29 > .cart_price').should(($cartPrice) => {
            const totalPriceProduct1 = parseFloat($cartPrice.text().replace('Rs.', ''));
            expect(totalPriceProduct1).to.equal(1000); // Replace 500 with your expected price for product 1
          });

        //quantity verify
        // Find the button with class "cart_quantity" and assert its value is X
        cy.get('td.cart_quantity button')
            .should('have.text', '4');

        //total price verify
        cy.get('#product-29 > .cart_total').should(($cartTotal) => {
            const totalPriceProduct1 = parseFloat($cartTotal.text().replace('Rs.', ''));
            expect(totalPriceProduct1).to.equal(4000); // Replace 500 with your expected total price for product 1
          });
    });
});