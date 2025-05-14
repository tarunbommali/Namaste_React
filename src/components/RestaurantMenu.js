import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
 


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

  if (resInfo === null) return <Shimmer />;

  const restaurantInfoCard = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  );

  const info = restaurantInfoCard?.card?.card?.info;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    cloudinaryImageId,
    areaName,
    locality,
    sla,
    aggregatedDiscountInfo,
  } = info || {};

  const categories = resInfo?.cards
    ?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center px-4">
      <h1 className="font-bold text-3xl my-4">{name}</h1>
      <img
        className="mx-auto rounded-lg shadow-md w-60 h-40 object-cover"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt={name}
      />

      <p className="my-3 text-lg text-gray-700">
        <strong>Rating:</strong> ⭐ {avgRating} ({totalRatingsString})
      </p>

      <p className="text-gray-600">
        <strong>Location:</strong> {locality}, {areaName}
      </p>
      <p className="text-gray-600">
        <strong>Cuisines:</strong> {cuisines?.join(", ")}
      </p>
      <p className="text-gray-600">
        <strong>Cost:</strong> {costForTwoMessage}
      </p>
      <p className="text-green-600 font-semibold mt-2">
        {aggregatedDiscountInfo?.header}
      </p>
      <p className="text-sm text-gray-500">{sla?.slaString}</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Menu Categories Accordion</h2>
        {categories &&
          categories.map((category, index) => (
            <RestaurantCategory
              data={category?.card?.card}
              key={category?.card?.card?.id || index}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
