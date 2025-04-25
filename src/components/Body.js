import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";



const Body = () => {

  const [listOfRestaurants, setListOfRestaurants]  = useState(resList);

    useEffect(() => {
      fetchData();
    },[]);
  
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8933622&lng=77.6258081&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
 
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json?.data?.cards);
 
 
  };

  


  
    return (
          <div className="Body">
             <div className="filter">
             <button 
             className="filter-btn" 
             onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.4
              );
              setListOfRestaurants(filteredList);
              
             }}>
             Top Rated Restaurants
             </button>
           
              </div>
             <div className="res-container">
               {
                 listOfRestaurants.map((restaurant) => (
                    <RestaurantCard resData={restaurant.info} key={restaurant.info.id} />
                 )
              
                )
               }
               

             </div>
 


          </div>

    )
}

export default Body;