import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/MockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListofRestaurants, setListofRestaurants] = useState(resList); //this is known as array destructuring
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  //whenever state variable updates,react trigger a re-coniciliation cycle (re-render the component)
  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    console.log(json);
  };

  if (ListofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div classNmae="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);

              const filteredRestaurants = ListofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setListofRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
            const filteredList = ListofRestaurants.filter(
              (res) => res.info.avgRating > 4,
            );
            setListofRestaurants(filteredList);
            console.log(ListofRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {ListofRestaurants.map((info) => (
          <RestaurantCard key={info.id} resData={info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
