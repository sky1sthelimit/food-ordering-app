import { CDN_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const ResCard = (props) => {
  let { restaurant } = props;
  const { cloudinaryImageId, name, avgRatingString, sla, cuisines, areaName } =
    restaurant?.info;
  let source = CDN_URL + cloudinaryImageId;
  return (
    <div className="res-card">
      <img className="res-image" alt="res-logo" src={source}></img>

      <h3 className="res-name">{name}</h3>
      <h3 className="res-extra-info">
        <FaStar /> <span> </span>
        {avgRatingString} || <span>{sla.deliveryTime} mins</span>
      </h3>
      <h3 className="res-cuisines">{cuisines.join(", ")}</h3>
      <h3 className="res-areaName">{areaName}</h3>
    </div>
  );
};

export default ResCard;
