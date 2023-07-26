import POM from "../../integration/page-object-model";


describe('Contact Us Form', () => {
    it('should open a contact us form', () => {
        POM.homeVerify
        cy.get('.shop-menu').contains('Contact us').click();
        cy.get('div.contact-form > .title').contains('Get In Touch');
        cy.get('[data-qa="name"]').type('Gilad V');
        cy.get('[data-qa="email"]').type('test@test.com');
        cy.get('[data-qa="subject"]').type('testing');
        cy.get('[data-qa="message"]').type('testing messege');
        // upload file to the input field
        cy.get('input[name="upload_file"]').selectFile('cypress/fixtures/example.txt')          
        cy.get('[data-qa="submit-button"]').click();
        cy.get('.status').should('contain', 'Success! Your details have been submitted successfully.');
    });
});