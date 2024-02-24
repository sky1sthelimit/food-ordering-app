import { useNavigate } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const ResCard = (props) => {
  let { restaurant } = props;
  const { cloudinaryImageId, name, avgRatingString, sla, cuisines, areaName } =
    restaurant?.info;
  let source = CDN_URL + cloudinaryImageId;

  const navigate = useNavigate();

  const navigateToMenu = (event) => {
    const resId = restaurant.info.id;
    navigate(`/restaurants/${resId}`);
  };
  return (
    <div
      className="border border-black border-solid w-56 m-2  rounded-lg "
      onClick={navigateToMenu}
    >
      <img
        className=" w-full h-1/2 rounded-lg"
        alt="res-logo"
        src={source}
      ></img>

      <h3 className="font-bold text-lg py-1 m-1 p-1">{name}</h3>
      <h3 className="flex">
        <FaStar className="mx-1 my-1" /> <span> </span>
        {avgRatingString} || <span>{sla.deliveryTime} mins</span>
      </h3>
      <h3 className="mx-1 whitespace-nowrap overflow-hidden overflow-ellipsis ">
        {cuisines.join(", ")}
      </h3>
      <h3 className=" mx-1 whitespace-nowrap overflow-hidden overflow-ellipsis ">
        {areaName}
      </h3>
    </div>
  );
};

export const HighRated = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black text-white absolute rounded-lg m-[.5rem] p-0.5">
          High Rated
        </label>
        <ResCard key={props.restaurant.info.id} restaurant={props.restaurant} />
      </div>
    );
  };
};

export default ResCard;
