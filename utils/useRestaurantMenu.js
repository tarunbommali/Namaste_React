import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
const [resInfo, setResInfo] = useState(null);
 useEffect(() => {
   fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data= await fetch (MENU_API + resId + "&catalog_qa=undefined&query=Pizza&submitAction=ENTER");
       const json= await data.json();
       setResInfo(json?.data);
    
    }

    return resInfo;
}


export default useRestaurantMenu;