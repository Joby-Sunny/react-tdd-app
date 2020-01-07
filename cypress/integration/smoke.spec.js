const name = 'Larry';

describe('Smoke Test', () => {
    it('Make Sure the welcome message comes up', () => {
        cy.visit('http://localhost:1234/').contains('Hello, I am ' + name);
    });
});
