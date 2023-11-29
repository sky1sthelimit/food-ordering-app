const ResCard = (props) => {
  let { restaurant } = props;
  let value = restaurant.info;
  let source =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    value.cloudinaryImageId;
  return (
    <div className="res-card">
      <img className="res-image" alt="res-logo" src={source}></img>

      <h3 className="res-name">{value.name}</h3>
      <h3 className="res-extra-info">
        **{value.avgRatingString} || <span>{value.sla.deliveryTime} mins</span>
      </h3>
      <h3 className="res-cuisines">{value.cuisines.join(", ")}</h3>
      <h3 className="res-areaName">{value.areaName}</h3>
    </div>
  );
};

export default ResCard;
