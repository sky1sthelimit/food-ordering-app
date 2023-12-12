import { useEffect, useState } from "react";
import { restaurants } from "../utils/data";
import ResCard from "./ResCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

export const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_URL);
      const json = await response.json();
      setRestaurantList(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error (e.g., display an error message to the user)
    } finally {
      setLoading(false);
    }
  };

  //filter all restaurants having rating > 4
  const filterHighRatedRestaurants = () => {
    let filteredListOfRestaurants = restaurantList.filter((restaurant) => {
      return restaurant.info.avgRating >= 4;
    });
    setRestaurantList(filteredListOfRestaurants);
  };

  const allRestaurants = () => {
    setLoading(true);
    fetchData();
  };

  return loading ? (
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
