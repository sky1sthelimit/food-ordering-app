import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [allMenus, setAllMenus] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

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
  console.log("resInfo", resInfo);
  console.log("categories", categories);
  return (
    <div>
      <div className="flex justify-between w-8/12 mx-auto">
        <div className="m-4">
          <h1 className="font-bold  my-2 text-2xl ">{name}</h1>
          <p className="font-thin text-base">{cuisines.join(", ")}</p>
        </div>
        <div className="my-4 mr-4">Average Rating</div>
      </div>
      <hr className="w-8/12 mx-auto border-gray-300 border-dashed" />
      <div>
        {categories.map((category, index) => {
          return (
            <RestaurantCategory
              category={category}
              isOpen={index === selectedIndex ? true : false}
              setSelectedIndex={setSelectedIndex}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
