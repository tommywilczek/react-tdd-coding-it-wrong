import React from 'react';
import RestaurantListPage from './RestaurantListPage.js';
import { Col, Row } from 'react-materialize';

export default class App extends React.Component {
    state = { name: 'viewers' };
    render() {
      return (
        <Row>
          <Col s={12} m={10} l={8} offset="m1 12">
            <RestaurantListPage />
          </Col>
        </Row>
      );
    }
}
