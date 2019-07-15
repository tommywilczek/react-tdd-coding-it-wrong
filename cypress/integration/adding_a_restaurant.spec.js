describe('Adding a restaurant', () => {
  it('displays a restaurant in the list', () => {
    const restaurantName = 'Sushi place';

    cy.visit('http://localhost:1234');

    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .type(restaurantName);

    cy.get('[data-test="saveRestaurantButton"]')
      .click();

    cy.contains(restaurantName);
  });
});
