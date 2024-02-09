import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [allMenus, setAllMenus] = useState([]);
  const [currentMenu, setCurrentMenu] = useState([]);

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
    setCurrentMenu(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>Menu</h2>
      <ul>
        ~||{allMenus[2].card.card.title}||~
        {currentMenu.map((menu) => {
          return (
            <li key={menu.card.info.id}>
              {menu.card.info.name} - {menu.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
