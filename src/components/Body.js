import { useEffect, useState } from "react";
import { restaurants } from "../utils/data";
import ResCard from "./ResCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

export const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(SWIGGY_URL);
    const json = await response.json();
    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterHighRatedRestaurants = () => {
    let filteredListOfRestaurants = restaurants.filter((restaurant) => {
      return restaurant.info.avgRating >= 4;
    });
    setRestaurantList(filteredListOfRestaurants);
  };

  const allRestaurants = () => {
    setRestaurantList(restaurants);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
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
//new new
