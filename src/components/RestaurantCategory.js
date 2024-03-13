import { useState } from "react";
import RestaurantCategoryContent from "./RestaurantCategoryContent";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const RestaurantCategory = ({ category, isOpen, setSelectedIndex, index }) => {
  const [categoryC] = useState(category);
  const { title, itemCards } = categoryC.card.card;

  return (
    //Accordian Header
    <div
      className="w-8/12 mx-auto my-4  "
      onClick={() => {
        if (isOpen) {
          setSelectedIndex(null);
        } else {
          setSelectedIndex(index);
        }
      }}
    >
      <div className="p-4 flex justify-between font-bold text-lg ">
        <span>
          {title} ({itemCards.length})
        </span>
        <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </div>
      <div>
        {isOpen ? (
          itemCards.map((item) => {
            return (
              <div>
                <RestaurantCategoryContent item={item} />
                <hr className="border-gray-300" />
              </div>
            );
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
