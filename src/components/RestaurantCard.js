const RestaurantCard = ({ data }) => {
  const { image_url, name, cuisine, rating, price_for_two, delivery_time } =
    data;
  return (
    <div className="res-card">
      <div
        className="imageHolder"
        style={{ backgroundImage: `url(${image_url})` }}
      ></div>
      <div className="contentArea">
        <h4 className="res-name">{name}</h4>
        <div className="rating">
          <img src="https://cdn-icons-png.flaticon.com/128/16171/16171325.png" />
          <p>
            {rating} . {delivery_time}
          </p>
        </div>
        <p className="cuisines">{cuisine.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
