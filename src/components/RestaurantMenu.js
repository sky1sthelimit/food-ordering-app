import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

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
    console.log(json);
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
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>Menu</h2>
      <ul>~||{allMenus[2].card.card.title}||~</ul>
    </div>
  );
};

export default RestaurantMenu;
