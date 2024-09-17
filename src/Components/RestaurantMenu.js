import { useState, useEffect } from "react";
import { Menu_API } from "../utils/constants";
import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo,setResInfo] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex] = useState(null);

  if (resInfo === null) return <ShimmerCard />;

  const { name, avgRating, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const ItemCategories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(ItemCategories);

  return (
    <div className="text-center">
      <h2 className="font-bold text-3xl mt-4 p-2">{name}</h2>
      <p className="font-bold text-lg">
        {avgRating} - {costForTwoMessage}
      </p>
      <div className="">
        {ItemCategories?.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showIndex = {index===showIndex?true:false}
            setShowIndex = {()=>setShowIndex(index==showIndex?null:index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
