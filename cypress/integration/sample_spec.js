/// <reference types="Cypress" />

describe('Emerald - Test Regression Suite', function(){
    it ('Verify Assert Methods -1', function() {
        expect(true).to.equal(true);
    })

    it('launch google and search your name', () => {
        cy.visit('www.google.com');
        cy.get('[name="q"]').focus().type('Vinay Vasudeva');
        cy.get('[value="Google Search"]').eq(0).click();
    })

    it('create travel ticket', () => {
        cy.visit('http://newtours.demoaut.com/');
        
        //Login to Application
        cy.xpath("//input[@name='userName']").type('mercury');
        cy.xpath("//input[@name='password']").type('mercury');
        cy.xpath("//input[@name='login']").click();

        //Flight Details
        cy.get('[name="passCount"]').focus().select('2');
        cy.get('[name="fromPort"]').focus().select('Sydney');
        
        cy.get('[name="fromMonth"]').focus().select('July');
        cy.get('[name="fromDay"]').focus().select('16');

        cy.get('[name="toPort"]').focus().select('Paris');
        cy.get('[name="toMonth"]').focus().select('July');
        cy.get('[name="toDay"]').focus().select('24');

        //Preferences
        cy.get('[type="radio"]').check('First');

        cy.xpath("//input[@name='findFlights']").click();
        cy.xpath("//input[@name='reserveFlights']").click();

    })
})