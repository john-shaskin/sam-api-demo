'use strict';

const app = require('../../app.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;


describe('Tests index', function () {
    beforeEach(() => {
        event = undefined;
        context = undefined;
    });

    it('verifies successful response', async () => {
        // Set up event with path parameters from calling /hello/{name}
        event = {
            pathParameters: {
                name: 'Bob'
            }
        }
        const result = await app.lambda_handler(event, context, (err, result) => {
            expect(result).to.be.an('object');
            expect(result.statusCode).to.equal(200);
            expect(result.body).to.be.an('string');

            let response = JSON.parse(result.body);

            expect(response).to.be.an('object');
            expect(response.message).to.be.equal("Hello, Bob!!");
            expect(response.location).to.be.an("string");
        });
    });
});

