describe('Smoke test',  () => {
    it('Makes sure the welcome message is displayed', () => {
        cy.visit('http://localhost:1234/').contains('Hello, world!');
    });
});