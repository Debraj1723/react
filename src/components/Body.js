import RestaurantCard from "./RestaurantCard";
import restaurants from "./../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [filteredlList,setFileteredList] = useState(JSON.parse(JSON.stringify(restaurants)));
  return (
    <div className="body">
      <div className="searchContainer">
        {/* <input placeholder="search . . ." /> */}
        <button
          className="filter"
          onClick={() => {
            const newList = filteredlList.filter((e) => e.info.avgRating > 4.5);
            setFileteredList(newList);
            console.log(filteredlList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredlList.map((restaurant) => (
          <RestaurantCard key={restaurant.info?.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
