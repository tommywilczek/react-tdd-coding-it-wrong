import React from 'react' // Functional component because it's display-only
import { Collection, CollectionItem} from 'react-materialize'

const RestaurantList = ({ restaurantNames }) => {
    return (
        <Collection header="Restaurants">
            <RestaurantItems restaurantNames={restaurantNames}/>
        </Collection>
    )
}

const RestaurantItems = ({ restaurantNames }) => (
    restaurantNames.length === 0
        ?<NoRestaurantItems />
        : <SomeRestaurantItems restaurantNames={restaurantNames}/>
);

const NoRestaurantItems = () => (
    <CollectionItem style={{color : 'gray'}}>(None yet)</CollectionItem>
);

const SomeRestaurantItems = ({ restaurantNames }) => (
    restaurantNames.map(restaurantName => (
        <CollectionItem key={restaurantName}>{restaurantName}</CollectionItem>
    ))
);

export default RestaurantList;
