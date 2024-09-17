import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;
//   console.log(resData);
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId
  } = resData?.info;

  return (
    <div className="w-[250px] h-[100%] p-4 mx-8  rounded-lg shadow-lg hover:shadow-2xl">
      <img
        className="rounded-xl w-[200px] h-[210px]"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-img"
      ></img>
      <h2 className="font-bold text-lg py-2">{name}</h2>
      <h4>{cuisines.join(" ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const RestaurantPromotedLabel = (RestaurantCard) => {
    return (props) =>{
        const { resData } = props;
        console.log(resData);
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;
