import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import {Link} from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING "
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering

  return listOfRestaurants.length === 0 ? (
    <Loader />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn-search"
            onClick={(e) => {
              filteredRest = listOfRestaurants.filter((rest) =>
                rest.info.name.includes(searchText)
              );
              setFilteredRestaurant(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            filteredList = listOfRestaurants.filter(
              (rest) => rest.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredRestaurant.map((restaurant) => (
         <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}> <RestaurantCard  restList={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
