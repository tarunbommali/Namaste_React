// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

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
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.find((card) => card?.card?.card?.itemCards)?.card?.card?.itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <h3>₹{costForTwo / 100} for two</h3>
      <h4>Menu</h4>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} – ₹
              {(item.card.info.price || item.card.info.defaultPrice || 0) / 100}
            </li>
          ))
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;




