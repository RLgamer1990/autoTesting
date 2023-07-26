import POM from "../../integration/page-object-model";

describe('reach the test cases page', () => {
    it('navigate to the test cases page', () => {
        POM.homeVerify
        cy.get('.shop-menu').contains('Test Cases').click();
        cy.location('pathname').should('eq', '/test_cases');
    });
});