import ResturantCard from "./RestaurantsCard";
import { restaurants } from "../utils/mockData";
import {useState,useEffect} from "react";
import ShimmerCard from "./ShimmerCard";

const Body = () =>{
    const [restaurantList, setRestaurantList] = useState([]);
    const [filterRestaurantList, setFilterRestaurantList] = useState([]);
   
    const [searchText, setSearchText] = useState("");
    console.log("Body Render")

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.16850248881726&lng=77.42070492357016&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    return restaurantList.length === 0? <ShimmerCard/>
    :(
        <div className="body">
            <div className="search">
                <input type="text" value={searchText} onChange={
                    (e)=>{
                        setSearchText(e.target.value);
                    }
                } ></input>
                <button onClick= {
                    () =>{
                        // setRestaurantList(PureList);
                        const filterRestaurant = restaurantList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterRestaurantList(filterRestaurant);
                    }
                }>Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick = {
                    ()=>{
                    setRestaurantList()
                    const filterList = filterRestaurantList.filter((res)=> res.info.avgRating>4.5);
                    setFilterRestaurantList(filterList);
                }
                }
                >Top Restaurants</button>
            </div>
            <div className="res-container">
                {
                filterRestaurantList.map((res) => (
                    <ResturantCard key={res.info.id} resData={res}/>
                ))
            }
            </div>
        </div>
    );
}

export default Body;