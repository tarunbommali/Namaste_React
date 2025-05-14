

import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";




const Header = () => {

const [btnNameReact , setBtnNameReact] = useState("Login");

const onlineStatus = useOnlineStatus();

return (
  <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div className="logo-container">
        <img src={LOGO_URL} alt="food" className="w-40 h-40" />
      </div>
      <div className="flex items-center ">
        <ul  className="flex  p-4 m-4">
          <li className="px-4 font-bold text-lg cursor-pointer">
       Online Status = {onlineStatus ? "🟢" : "🔴" }
          </li>
        <li className="px-4 font-bold text-lg">
          <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold text-lg">
          <Link to="/about">About</Link>
          </li>
          
          <li className="px-4 font-bold text-lg">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4 font-bold text-lg">
            <Link to="/cart">Cart</Link>
          </li>
          <button className="login" 
          onClick={() => {
          btnNameReact ==="Login" 
          ? setBtnNameReact("Logout") 
          : setBtnNameReact("Login")
          }}
          >
            {btnNameReact}
            </button>
        </ul>
      </div>
    </div>
  );
};

  export default Header;