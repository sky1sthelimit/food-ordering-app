import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import RestaurantCategoryContent from "./RestaurantCategoryContent";

const RestaurantCategory = (props) => {
  const [category] = useState(props.category);
  const { title, itemCards } = category.card.card;
  const [openToggle, setOpenToggle] = useState(false);

  return (
    //Accordian Header
    <div
      className="w-8/12 mx-auto my-4  "
      onClick={() => (openToggle ? setOpenToggle(false) : setOpenToggle(true))}
    >
      <div className="p-4 flex justify-between font-bold text-lg ">
        <span>
          {title} ({itemCards.length})
        </span>
        <span>{openToggle ? <FaArrowUp /> : <FaArrowDown />}</span>
      </div>
      <div>
        {openToggle ? (
          itemCards.map((item) => {
            return <RestaurantCategoryContent item={item} />;
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>

    //Accordian Body //map of divs//
  );
};

export default RestaurantCategory;
