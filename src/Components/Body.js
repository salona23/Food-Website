import ResturantCard from "./RestaurantsCard";
import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
import { FOOD_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);

  const [searchText, setSearchText] = useState("");
  // console.log("Body Render")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FOOD_API);
    const jsonData = await data.json();
    setRestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (restaurantList.length === 0) return <ShimmerCard />;

  return (
    <div className="body">
      <div className="flex m-8 items-center">
        <div className="search">
          <input
            type="text"
            className="border border-solid border-black rounded-lg p-[5px]"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="p-2 m-2 bg-green-400 rounded-lg hover:bg-green-500"
            onClick={() => {
              const filterRestaurant = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurantList(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter">
          <button
            className="p-2 m-2 ml-5 bg-green-400 rounded-lg hover:bg-green-500"
            onClick={() => {
              const filterList = restaurantList.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilterRestaurantList(filterList);
            }}
          >
            Top Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filterRestaurantList.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <ResturantCard resData={res} />
          </Link>
          //     <ResturantCard key={res.info.id} resData={res}/>
        ))}
      </div>
    </div>
  );
};

export default Body;
