import RestaurantCard from "./RestaurantCard";
import restaurants from "./../utils/mockData"

const Body = () => {
  return (
    <div className="body">
      <div className="searchContainer">
        <input placeholder="search . . ." />
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
