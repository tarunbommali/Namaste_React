


import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants]  = useState([]);

  
  
    useEffect(() => {
      // getRestaurantList();
      fetchData();
    },[]);
   
    const fetchData = async() => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9979891&lng=77.55048529999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
   
 };

    if(listOfRestaurants.length === 0) {
      return <h1>Loading...</h1>;
    }


  


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
                    <RestaurantCard resData={restaurant?.info} key={restaurant?.info?.id} />
                 )
              
                )
               }
               

             </div>
 


          </div>

    )
}

export default Body;