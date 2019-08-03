import React, { Component } from 'react';
import { Button, Col, Row, Modal } from 'react-materialize';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

export default class RestaurantListPage extends Component {
    state = {
      restaurantNames: [],
      shouldShowFormModal: false,
    }

    handleAddRestaurant = newRestaurantName => {
      this.setState(state => ({
        shouldShowFormModal: false,
        restaurantNames: [
          newRestaurantName,
          ...state.restaurantNames,
        ],
      }));
    }

    render() {
      const { restaurantNames } = this.state;
      return (
        <div>
          <Modal
            header="Add a Restaurant"
            data-test="addRestaurantModal"
            trigger={
              <Row>
                <Button data-test="addRestaurantButton">
                                Add Restaurant
                </Button>
              </Row>
            }>

            <Row>
              <NewRestaurantForm onSave={this.handleAddRestaurant}/>
            </Row>

          </Modal>
          <Row>
            <RestaurantList
              restaurantNames={restaurantNames}
            />
          </Row>
        </div>
      );
    }
}
