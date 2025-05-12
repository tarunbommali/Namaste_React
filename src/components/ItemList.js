import { CDN_URL } from "../../utils/constants";


const ItemList = ({items}) => {
  return (
        <div>

            {items.map((item) => (
                <div key={item.card.info.id} className="w-6/12 bg-black-50 shadow-lg border-b-2 p-4 m-2 text-left flex">
                  <div className="m-14 h-auto">
                     <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
                     </div> 
                    <div className="flex justify-between">
                        <div>
                            <span className="font-bold text-lg">{item.card.info.name}</span>
                            
                            <span>- ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice/100}</span>
                           
                        </div>
                        <div>
                             <span>{item.card.info.description}</span> 
                         </div>
                        
                    </div>
                </div>
            ) )}
        </div>

    
    );

}



export default ItemList;