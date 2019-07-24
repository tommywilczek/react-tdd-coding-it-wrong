import React from 'react' // Functional component because it's display-only
import { Collection, CollectionItem} from 'react-materialize'

const RestaurantList = ({ restaurantNames }) => {
    return (
        <Collection header="Restaurants">
            {
                restaurantNames.length === 0
                    ? (
                        <CollectionItem>(None yet)</CollectionItem>
                        )
                    : (
                        restaurantNames.map(restaurantName => (
                                <CollectionItem key={restaurantName}>{restaurantName}</CollectionItem>
                            ))
                        )
            }
        </Collection>
    )
}

export default RestaurantList;
