import React from 'react' // Functional component because it's display-only
import { Collection, CollectionItem} from 'react-materialize'

const RestaurantList = ({ restaurantNames }) => {
    return (
        <Collection>
            {
                restaurantNames.map(restaurantName => (
                    <CollectionItem key={restaurantName}>{restaurantName}</CollectionItem>
                ))
            }
        </Collection>
    )
}

export default RestaurantList;
