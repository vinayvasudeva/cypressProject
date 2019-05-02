/// <reference types="Cypress" />

describe('UI Test Suite using Cypress', function () {

    it('Verify Assert Methods -1', function () {
        expect(true).to.equal(true);
    })

    it('launch google and search your name', () => {
        cy.visit('www.google.com');
        cy.get('[name="q"]').focus().type('Cypress Documentation');
        cy.get('[value="Google Search"]').eq(0).click();
    })

    it('create travel ticket', () => {
        cy.visit('http://newtours.demoaut.com/');
        cy.log('Launched Tour & Travels Application');
        cy.screenshot();

        //Login to Application
        cy.xpath("//input[@name='userName']").type('mercury');
        cy.xpath("//input[@name='password']").type('mercury');
        cy.xpath("//input[@name='login']").click();
        cy.screenshot();

        //Flight Details
        cy.get('[name="passCount"]').focus().select('2');
        cy.get('[name="fromPort"]').focus().select('Sydney');

        cy.get('[name="fromMonth"]').focus().select('July');
        cy.get('[name="fromDay"]').focus().select('16');

        cy.get('[name="toPort"]').focus().select('Paris');
        cy.get('[name="toMonth"]').focus().select('July');
        cy.get('[name="toDay"]').focus().select('24');
        cy.screenshot();

        //Preferences
        cy.get('[type="radio"]').check('First');

        cy.xpath("//input[@name='findFlights']").click();
        cy.xpath("//input[@name='reserveFlights']").click();
        cy.screenshot();

        //Passenger
        cy.xpath("//input[@name='passFirst0']").type('Jon');
        cy.xpath("//input[@name='passLast0']").type('Kesha');

        //Credit Card
        cy.xpath("//input[@name='creditnumber']").type('367502652456');
        cy.screenshot();

        //Secure Payments
        cy.xpath("//input[@name='buyFlights']").click();

        //Get Flight Confirmation
        cy.xpath("//td[@class='frame_header_info']//font/b/font[1]").invoke('text').should((text) => {
            cy.log(text);
        });
        cy.screenshot();

        //Log Off
        cy.get('[href="mercurysignoff.php"]').eq(0).click();
    })
    
})