import {useState,useEffect} from "react";
import { Menu_API } from "../utils/constants";
import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";

const RestuarantsMenu = () =>{
    // const [resInfo,setResInfo] = useState(null);
    
    const {resId} = useParams();
    const resInfo = useRestuarantMenu(resId);
    // console.log(resId);

    // useEffect(()=>{
    //     fetchData();
    // }
    // ,[]);

    // const fetchData = async () => {
    //     const data = await fetch(Menu_API+resId);
    //     const jsonData = await data.json();
    //     setResInfo(jsonData?.data);
    // }
   
    if(resInfo === null) return <ShimmerCard />;

    const {name,avgRating,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);

    return (
        <div className="text-center"> 
        <h2 className="font-bold text-3xl mt-4 p-2">{name}</h2>
        <p className="font-bold text-lg">{avgRating} - {costForTwoMessage}</p>
        <ul>
          {  itemCards?.map((item)=> <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100 ||item.card.info.defaultPrice/100}</li> )
        }
        </ul>
        </div>
    )
}

export default RestuarantsMenu;