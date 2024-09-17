import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data, showIndex, setShowIndex }) => {
  // console.log(data?.title);
  // console.log(data?.itemCards[2]?.card?.info?.name);
  // {UNCONTROLLED COMPONENT}
  // const [showItems,setShowItems] =  useState(false);
  const handleClick = () => {
    //CONTROLLED COMPONENT
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-6 p-4 shadow-md">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>{showIndex ? "🔼" : "🔽"}</span>
        </div>

        {/* Body */}
        <div>
          {data?.itemCards?.map(
            (item) =>
              showIndex && (
                <ItemList key={item?.card?.info?.id} data={item?.card?.info}/>
              )
          )}
        </div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
