import { CDN_URL } from "../utils/constants";
import { BiCheckboxSquare } from "react-icons/bi";
import { LiaRupeeSignSolid } from "react-icons/lia";

export default RestaurantCategoryContent = (props) => {
  const { item } = props;
  const { defaultPrice, price, description, imageId, isVeg, inStock, name } =
    item.card.info;

  console.log(item);

  return (
    <div className=" my-2 p-4 flex justify-between">
      {/* 1st div -> left side div for content*/}
      <div className="flex flex-col items-start w-9/12 ">
        <div>
          {isVeg ? (
            <BiCheckboxSquare size={24} color="green" />
          ) : (
            <BiCheckboxSquare size={24} color="red" />
          )}
        </div>
        <h2 className="font-bold">{name}</h2>
        <h2 className="flex items-center text-center">
          {" "}
          <span>
            <LiaRupeeSignSolid />
          </span>
          {parseInt(defaultPrice) / 100 || parseInt(price) / 100}
        </h2>
        <p className="font-thin text-left text-sm mt-3 ">{description}</p>
      </div>
      {/**2nd div -> will contain pics */}
      {imageId ? (
        <div className="bg-green-100 rounded-lg w-3/12 flex justify-center ">
          <img
            src={CDN_URL + imageId}
            className="h-[100%] w-[100%] rounded-lg "
          ></img>
          <button className="absolute px-12 py-2 bg-white shadow-lg text-green-600 rounded-md my-[7rem]">
            <p className="text-sm font-semibold">ADD</p>
          </button>
        </div>
      ) : (
        <div className="w-3/12"></div>
      )}
    </div>
  );
};
