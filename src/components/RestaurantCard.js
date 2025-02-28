import { CN_URL } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    data.info;
  return (
    <div className="res-card">
      <div
        className="imageHolder"
        style={{ backgroundImage: `url(${CN_URL + cloudinaryImageId})` }}
      ></div>
      <div className="contentArea">
        <h4 className="res-name">{name}</h4>
        <div className="rating">
          <img src="https://cdn-icons-png.flaticon.com/128/16171/16171325.png" />
          <p>
            {avgRating} . {sla?.deliveryTime} mins
          </p>
        </div>
        <p className="cuisines">{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
