var body = require('../../fixtures/storeOrder.json');

describe('API Suite using Cypress', () => {

    it('Get Method - Pet Store', () => {
        cy.request({
            method: 'GET',
            url: 'http://petstore.swagger.io/v2/pet/2',
            response: []
        })
            .then((response) => {
                cy.log(response.body);
                assert.equal(response.status, 200);
                expect(response.body).is.not.null;
            })
    })

    it('Post Method - Store Order', () => {
        cy.request('POST', 'http://petstore.swagger.io/v2/store/order', body)
            .then((response) => {
                cy.log(response.body);

                expect(response).to.have.property('headers');
                expect(response.status).to.eq(200);
                expect(response.body).is.not.null;
            })
    })

})