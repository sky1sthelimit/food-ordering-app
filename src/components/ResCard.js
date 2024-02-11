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
      className="border border-black border-solid w-52 m-4 p-1 rounded-lg "
      onClick={navigateToMenu}
    >
      <img
        className=" w-full h-1/2 rounded-lg"
        alt="res-logo"
        src={source}
      ></img>

      <h3 className="font-bold text-lg py-1">{name}</h3>
      <h3 className="flex">
        <FaStar className="mx-1 my-1" /> <span> </span>
        {avgRatingString} || <span>{sla.deliveryTime} mins</span>
      </h3>
      <h3 className="res-cuisines">{cuisines.join(", ")}</h3>
      <h3 className="whitespace-nowrap overflow-hidden overflow-ellipsis ">
        {areaName}
      </h3>
    </div>
  );
};

export default ResCard;
