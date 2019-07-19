describe('Smoke test', () => {
  it('displays welcome message', () => {

    cy.visit('http://localhost:1234')
      .contains('Hello, world!');

  });
});
