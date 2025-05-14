import ItemList from "./ItemList";

const  RestaurantCategory = ({ data }) => {
    console.log("Accordian Data: "+data);

    return (
    <div>
        
      <div className=" flex justify-between bg-red-800 text-white w-full  shadow-lg p-4 m-2 ">

      <h1 className="font-bold text-lg">{data.title}  </h1>
      {/* {{data,itemCards,length}} */}
      <button>⏬</button>
      </div>

     <ItemList items={data.itemCards} />
    </div>
    );

};

export default RestaurantCategory;