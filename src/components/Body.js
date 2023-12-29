import { useEffect, useState } from "react";
import { restaurants } from "../utils/data";
import ResCard from "./ResCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

export const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchtext] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_URL);
      const json = await response.json();
      setRestaurantList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurantList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
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
  const inputTextHandler = (e) => {
    setSearchtext(e.target.value);
  };

  const searchButtonClickHandler = () => {
    let filteredResList = restaurantList.filter((res) => {
      return res.info.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    setFilteredRestaurantList(filteredResList);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents the default behavior of the Enter key in a form
      searchButtonClickHandler();
    }
  };

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={inputTextHandler}
          onKeyDown={handleKeyDown}
        ></input>
        <button className="search-btn" onClick={searchButtonClickHandler}>
          Search
        </button>
      </div>
      <div className="btn-container">
        <button className="remove-filter" onClick={allRestaurants}>
          All Restaurants
        </button>
        <button className="filter-btn" onClick={filterHighRatedRestaurants}>
          Top Restautants
        </button>
      </div>

      <div className="res-cards-container">
        {filteredRestaurantList.map((restaurant) => {
          return <ResCard key={restaurant.info.id} restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};
export default Body;
//new new
