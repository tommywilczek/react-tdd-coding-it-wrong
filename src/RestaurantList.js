import React from 'react' // Functional component because it's display-only

const RestaurantList = ({ restaurantNames }) => {
    return (
        <ul>
            {
                restaurantNames.map(restaurantName => (
                    <li key={restaurantName}>{restaurantName}</li>
                ))
            }
        </ul>
    )
}

export default RestaurantList;
