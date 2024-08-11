import ResturantCard from "./RestaurantsCard";
import { restaurants } from "../utils/mockData";
import {useState,useEffect} from "react";
import ShimmerCard from "./ShimmerCard";
import { FOOD_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () =>{
    const [restaurantList, setRestaurantList] = useState([]);
    const [filterRestaurantList, setFilterRestaurantList] = useState([]);
   
    const [searchText, setSearchText] = useState("");
    // console.log("Body Render")

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(FOOD_API);
        const jsonData = await data.json();
        setRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    if(restaurantList.length === 0) return <ShimmerCard/>;
    

    return (
        <div className="body">

            <div className="search">

                <input type="text" value={searchText} onChange={
                    (e)=>{
                        setSearchText(e.target.value);
                    }
                } ></input>

                <button onClick= {
                    () =>{
                        const filterRestaurant = restaurantList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterRestaurantList(filterRestaurant);
                    }
                }>Search</button>
            </div>

            <div className="filter">
                <button className="filter-btn" onClick = {
                    ()=>{
                    const filterList = restaurantList.filter((res)=> res.info.avgRating>=4.5);
                    setFilterRestaurantList(filterList);
                }
                }
                >Top Restaurants</button>
            </div>

            <div className="res-container">
                {
                filterRestaurantList.map((res) => (
                    <Link key={res.info.id} to={"/restaurants/"+res.info.id}>
                         <ResturantCard  resData={res}/>
                    </Link>
                //     <ResturantCard key={res.info.id} resData={res}/>
                ))
            }
            </div>
        </div>
    );
}

export default Body;