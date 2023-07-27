import POM from "../../integration/page-object-model";

describe('verify all products and products details page', () => {
    it('should show the products and product details', () => {
        POM.homeVerify
        cy.get('.shop-menu > .nav > :nth-child(2) > a')
        .should('contain', 'Products')
        .click();
        cy.get('.title').should('contain', 'All Products');
        cy.get('.features_items').should('be.visible');
        cy.get(':nth-child(3) > div > div.single-products > div.product-overlay > div > a').click({force: true});
        cy.get('.modal-footer > .btn').click();
        cy.get(':nth-child(4) > div > div.single-products > div.product-overlay > div > a').click({force: true});
        cy.get('.modal-body > :nth-child(2)').click();
        cy.get('#product-1').should('be.visible');
        cy.get('#product-2').should('be.visible');
        cy.get('#product-1 > .cart_description > h4').should('contain', 'Blue Top');
        cy.get('#product-2 > .cart_description > h4').should('contain', 'Men Tshirt');

        //price verify
        cy.get('#product-1 > .cart_price').should(($cartPrice) => {
            const totalPriceProduct1 = parseFloat($cartPrice.text().replace('Rs.', ''));
            expect(totalPriceProduct1).to.equal(500); // Replace 500 with your expected price for product 1
          });
          cy.get('#product-2 > .cart_price').should(($cartPrice) => {
            const PriceProduct2 = parseFloat($cartPrice.text().replace('Rs.', ''));
            expect(PriceProduct2).to.equal(400); // Replace 500 with your expected price for product 2
          });

        //quantity verify
        cy.get('#product-1 > .cart_quantity').should('be.visible');
        cy.get('#product-2 > .cart_quantity').should('be.visible');

        //total price verify
        cy.get('#product-1 > .cart_total').should(($cartTotal) => {
            const totalPriceProduct1 = parseFloat($cartTotal.text().replace('Rs.', ''));
            expect(totalPriceProduct1).to.equal(500); // Replace 500 with your expected total price for product 1
          });
          cy.get('#product-2 > .cart_total').should(($cartTotal) => {
            const totalPriceProduct2 = parseFloat($cartTotal.text().replace('Rs.', ''));
            expect(totalPriceProduct2).to.equal(400); // Replace 400 with your expected total price for product 2
          });
    });
});
