import React from 'react';
import { mount } from 'enzyme';
import NewRestaurantForm from '../../src/NewRestaurantForm';

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    it('calls the onSave handler', () => {
      const saveHandler = jest.fn(); // create a mock of a function with jest
      const restaurantName = 'Sushi place';

      const wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);

      // Filling in text
      wrapper
        .find('input[data-test="newRestaurantName"]')
        .simulate('change', { target: { value: restaurantName } });

      // Clicking the button
      wrapper
        .find('button[data-test="saveRestaurantButton"]')
        .simulate('click');

      expect(saveHandler).toHaveBeenCalledWith(restaurantName);
    });
  });
});
