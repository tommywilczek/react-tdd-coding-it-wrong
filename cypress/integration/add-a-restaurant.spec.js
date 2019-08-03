describe('Adding a restaurant', () => {
  it('displays a restaurant in the list', () => {
    const restaurantName = 'Sushi place';

    cy.visit('http://localhost:1234');

    // Modal not shown at the start
    cy.get('[data-test="newRestaurantName"]')
      .should('not.be.visible');

    // Modal can be cancelled
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="addRestaurantModal"] .modal-footer button.modal-close')
      .click();

    // Modal allows adding restaurant
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .type(restaurantName);

    cy.get('[data-test="saveRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .should('not.be.visible');

    cy.contains(restaurantName);
  });
});
