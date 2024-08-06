import { CDN_URL } from "../utils/constants";
const ResturantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.info;
    
    return (
        <div className="rest-card">
            <img className="rest-img" src={CDN_URL+cloudinaryImageId} alt="resturant-img"></img>
            <h2>{name}</h2>
            <h4>{cuisines.join(" ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
}

export default ResturantCard;