import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const  RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []); 

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9979891&lng=77.55048529999999&restaurantId=787851&catalog_qa=undefined&query=Pizza&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json?.data);
    };
    const {name, cuisines, costForTwo} = resInfo?.cards[0]?.card?.card?.info || {};

 
return resInfo === null ? (
        <Shimmer/>
    ) : (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <h3>{costForTwo}</h3>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Cake</li>
            </ul>
        </div>
    );
 
  
};


export default RestaurantMenu;