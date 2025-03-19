import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import restaurants from "./../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  let [filteredlList, setFileteredList] = useState([]);

  let [searchText, setSearchText] = useState("");

  let [staticRestaurantList, setStaticRestaurantList] = useState([]);

  console.log("body rerendered");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9584922&lng=77.7126588&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    filteredlList =
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    staticRestaurantList =
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setFileteredList(filteredlList);
    setStaticRestaurantList(staticRestaurantList);
  };
  
  return filteredlList.length === 0 ? (
    <div className="body">
      <div className="searchContainer"></div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <Shimmer />
        ))}
      </div>
    </div>
  ) : (
    <div className="body">
      <div className="searchContainer">
        <div className="searchArea">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let finalFilteredlList = [];
              if (searchText.length > 0) {
                finalFilteredlList = staticRestaurantList.filter((e) => {
                  return e.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
              } else {
                finalFilteredlList = staticRestaurantList;
              }
              // const finalFiltration = filteredlList.filter((e)=>{
              //   return e.info.name
              // })
              setFileteredList(finalFilteredlList);
            }}
          >
            Search
          </button>
        </div>
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
  // }
};

export default Body;
