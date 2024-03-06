import { useEffect, useState } from "react";
import ResCard, { HighRated } from "./ResCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  const [loading, setLoading] = useState(true);
  const [searchText, setSearchtext] = useState("");
  const HighRatedRes = HighRated(ResCard);

  console.log(restaurantList);

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
    setFilteredRestaurantList(filteredListOfRestaurants);
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
    <div className="mx-36">
      <div className="flex">
        <div className="m-0 p-0">
          <input
            type="text"
            value={searchText}
            className="border border-solid border-black m-1 ml-4"
            onChange={inputTextHandler}
            onKeyDown={handleKeyDown}
          ></input>
          <button
            className="ml-1 mr-6 my-4 px-4 py-0.5 bg-green-200 hover:bg-green-400 rounded-lg"
            onClick={searchButtonClickHandler}
          >
            Search
          </button>
        </div>
        <div className="flex justify-start">
          <button
            className="m-2 px-2 h-8 mt-3 bg-blue-200 hover:bg-blue-400 rounded-lg "
            onClick={allRestaurants}
          >
            All Restaurants
          </button>
          <button
            className="m-2 px-2 h-8 mt-3 bg-blue-200 hover:bg-blue-400 rounded-lg"
            onClick={filterHighRatedRestaurants}
          >
            Top Restautants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurantList.map((restaurant) => {
          return restaurant.info.avgRating >= 4 ? (
            <HighRatedRes key={restaurant.info.id} restaurant={restaurant} />
          ) : (
            <ResCard key={restaurant.info.id} restaurant={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
