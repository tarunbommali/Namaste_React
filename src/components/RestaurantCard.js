import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {
        cloudinaryImageId = "",
        name = "Unknown",
        cuisines = [],
        avgRating = "N/A",
        costForTwo = "N/A",
        sla = {},
        locality = "N/A",
    } = resData;

    const { deliveryTime = "?" } = sla;

    
    return (
        < div className="res-card" style= {{backgroundColor: "#f0f0f0"}} >
            <img 
             alt="res-logo" 
             className="res-logo" 
            src={CDN_URL + cloudinaryImageId} 
              />
            <h4>{name}</h4>
            <h4>{Array.isArray(cuisines) ? cuisines.join(", ") : "No cuisines available" }</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{locality} </h4>
            
        </div>
    )
}
 

export default RestaurantCard;