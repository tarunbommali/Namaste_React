import ItemList from "./ItemList";

const  RestaurantCategory = ({ data }) => {
    console.log(data);

    return (
    <div>
        
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 m-2 ">

      <span className="font-bold text-lg">{data.title}  </span>
      {/* {{data,itemCards,length}} */}
      <span>⏬</span>
      </div>

     <ItemList items={data.itemCards} />
    </div>
    );

};

export default RestaurantCategory;