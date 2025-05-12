// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API +
  //       resId +
  //       "&catalog_qa=undefined&query=Pizza&submitAction=ENTER"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json?.data);
  // };

  if (resInfo === null) return <Shimmer />;

 
  const restaurantInfoCard = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  );

  const { name, cuisines, costForTwo } = restaurantInfoCard?.card?.card?.info || {};

  
  const itemCards =
    resInfo?.cards
      ?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.find((card) => card?.card?.card?.itemCards)?.card?.card?.itemCards || [];

      console.log( resInfo?.cards
        ?.find((card) => card?.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards);



        const categories = resInfo?.cards
        ?.find((card) => card?.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c)=>
             c.card?.card?.["@type"] === 
          "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge");
        
        //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold  mb-5">
        {cuisines.join(", ")} - {costForTwo}
      </p>

      {categories.map((category) => (
        <RestaurantCategory data= {category?.card?.card} key={category?.card?.card?.id} />
        ))}
    </div>
  );
};

export default RestaurantMenu;




