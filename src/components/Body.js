import RestaurantCard from "./RestaurantCard";
import restaurants from "./../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  let [filteredlList, setFileteredList] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9584922&lng=77.7126588&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    setFileteredList(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  if(filteredlList.length === 0) return (<p  style={{ color: 'red', 'margin-top':'100px' }}>Loading . . .</p>)

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
