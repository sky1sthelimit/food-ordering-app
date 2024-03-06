import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [allMenus, setAllMenus] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  //622143
  const fetchMenu = async () => {
    const response = await fetch(MENU_URL + resId);
    const json = await response.json();
    setResInfo(json.data);
    setAllMenus(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;
  const categories = allMenus.filter((menu) => {
    let splitType = menu.card.card["@type"].split(".");
    let element = splitType.pop();
    return element === "ItemCategory";
  });

  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>
      <div>
        {categories.map((category) => {
          return <RestaurantCategory category={category} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
