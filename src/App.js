import React from 'react';
import RestaurantListPage from './RestaurantListPage.js'

export default class App extends React.Component {
    state = { name: 'viewers' };
    render() {
      return <div >
        <RestaurantListPage />
      </div>;
    }
}
