
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants]  = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  
  const [searchText, setSearchText] = useState("");
  
    useEffect(() => {
      // getRestaurantList();
      fetchData();
    },[]);


   
    const fetchData = async() => {
     
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9979891&lng=77.55048529999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
   
 };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="offline-container">
        <h1>Looks like you are offline. Please check your internet connection.</h1>
      </div>
    );
  };
  
 


    return listOfRestaurants.length === 0 ?
     ( <Shimmer/> 

     ): (
          <div className="Body">
             <div className="filter">
              <div className="search">
                <input type="text"  className="search-box" 
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value)}}
                
                />
              
                <button onClick={() => {
                const filteredRestaurant = listOfRestaurants.filter((res) =>
                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
  setFilteredRestaurants(filteredRestaurant);
}}>
  Search
</button>

              </div>
          <button 
             className="filter-btn" 
             onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurants(filteredList);
              
             }}>
             Top Rated Restaurants
          </button>
           
              </div>
             <div className="res-container">
               {
                 filteredRestaurants.map((restaurant) => (
                   <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}> <RestaurantCard resData={restaurant?.info}  /> </Link>
                 )
              
                )
               }
               

             </div>
 


          </div>

    )
}

export default Body;