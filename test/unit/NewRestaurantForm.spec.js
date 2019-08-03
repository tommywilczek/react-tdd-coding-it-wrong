import React from 'react';
import { mount } from 'enzyme';
import NewRestaurantForm from '../../src/NewRestaurantForm';

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    let saveHandler;
    let restaurantName;
    let wrapper;
    beforeEach(() => {
      saveHandler = jest.fn(); // create a mock of a function with jest
      restaurantName = 'Sushi place';
  
      wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);
  
      // Filling in text
      wrapper
        .find('input[data-test="newRestaurantName"]')
        .simulate('change', { target: { value: restaurantName } });
  
      // Clicking the button
      wrapper
        .find('button[data-test="saveRestaurantButton"]')
        .simulate('click');
      
    });
    it('calls the onSave handler', () => {
      expect(saveHandler).toHaveBeenCalledWith(restaurantName);
    });

    it('clears the text field', () => {
      expect(
        wrapper
          .find('input[data-test="newRestaurantName"]')
          .props().value
      ).toEqual('');
    });
  });
});
