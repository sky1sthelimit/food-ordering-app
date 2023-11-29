import { restaurants } from "../utils/data";
import ResCard from "./ResCard";

const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">Search</div>
      <div className="res-cards-container">
        {restaurants.map((restaurant) => {
          return <ResCard restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};
export default Body;
