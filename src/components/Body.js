import { useState } from "react";
import { restaurants } from "../utils/data";
import ResCard from "./ResCard";

export const Body = () => {
  let [restaurantList, setRestaurantList] = useState(restaurants);

  const filterHighRatedRestaurants = () => {
    let filteredListOfRestaurants = restaurants.filter((restaurant) => {
      return restaurant.info.avgRating >= 4;
    });
    setRestaurantList(filteredListOfRestaurants);
  };

  const allRestaurants = () => {
    setRestaurantList(restaurants);
  };

  return (
    <div className="body">
      <div className="btn-container">
        <button className="remove-filter" onClick={allRestaurants}>
          All Restaurants
        </button>
        <button className="filter-btn" onClick={filterHighRatedRestaurants}>
          Top Restautants
        </button>
      </div>

      <div className="res-cards-container">
        {restaurantList.map((restaurant) => {
          return <ResCard key={restaurant.info.id} restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};
export default Body;
