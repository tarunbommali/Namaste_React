
import React from "react";
import ReactDOM from "react-dom/client";




const Header = () => (
    <div className="header">
      <div className="logo-container">
        <img src="food1.jpeg" alt="food" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );

const resList = [
    {
      id: 22246,
      name: "Sri Bhagya Grand",
      avgRating: 4.4,
      cuisines: ["South Indian", "North Indian", "Chinese", "Desserts", "Jain"],
      costForTwo: "₹150 for two",
      deliveryTime: "20-25 mins",
      image: "k3gbf3gczuzh1ydeiodk",
      location: "Arekere"
    },
    {
      id: 23456,
      name: "The Royal Kitchen",
      avgRating: 4.5,
      cuisines: ["North Indian", "Chinese", "Fast Food"],
      costForTwo: "₹300 for two",
      deliveryTime: "25-30 mins",
      image: "sdf4dfg3rts5hg7fgd4gh",
      location: "Koramangala"
    },
    {
      id: 24356,
      name: "Biryani Paradise",
      avgRating: 4.2,
      cuisines: ["Biryani", "South Indian", "Hyderabadi"],
      costForTwo: "₹350 for two",
      deliveryTime: "30-35 mins",
      image: "4rftr6g5hjgd72hf9jgjh",
      location: "MG Road"
    },
    {
      id: 25267,
      name: "Spice World",
      avgRating: 4.1,
      cuisines: ["Chinese", "Indian", "Asian"],
      costForTwo: "₹400 for two",
      deliveryTime: "20-30 mins",
      image: "hgf8gfhgf5gfhgr9gf98g",
      location: "Indiranagar"
    },
    {
      id: 26384,
      name: "The Chaat House",
      avgRating: 4.6,
      cuisines: ["Chaat", "Fast Food", "Street Food"],
      costForTwo: "₹100 for two",
      deliveryTime: "15-20 mins",
      image: "2t54h6g5h6g7fdhg75d8f",
      location: "Jayanagar"
    },
    {
      id: 27692,
      name: "Mughlai Treat",
      avgRating: 4.3,
      cuisines: ["Mughlai", "North Indian", "Chinese"],
      costForTwo: "₹500 for two",
      deliveryTime: "30-35 mins",
      image: "djf7hgtr7g6hf9dhgf72",
      location: "Banaswadi"
    },
    {
      id: 28874,
      name: "Café Mocha",
      avgRating: 4.7,
      cuisines: ["Cafe", "Italian", "Desserts"],
      costForTwo: "₹250 for two",
      deliveryTime: "20-25 mins",
      image: "fdgh4fgd5gf7gf7gf8g9",
      location: "Whitefield"
    },
    {
      id: 29901,
      name: "The Grill House",
      avgRating: 4.0,
      cuisines: ["Barbeque", "North Indian", "Asian"],
      costForTwo: "₹600 for two",
      deliveryTime: "25-30 mins",
      image: "kjhfg4jgf7h8g5fh97g6g",
      location: "Electronic City"
    },
    {
      id: 30123,
      name: "Pasta Mania",
      avgRating: 4.5,
      cuisines: ["Italian", "Pasta", "Fast Food"],
      costForTwo: "₹350 for two",
      deliveryTime: "20-25 mins",
      image: "dsfg8gfhg7fg9fg8fh3f",
      location: "HSR Layout"
    },
    {
      id: 31234,
      name: "Naan Factory",
      avgRating: 4.2,
      cuisines: ["North Indian", "Mughlai", "Indian"],
      costForTwo: "₹400 for two",
      deliveryTime: "30-35 mins",
      image: "gfd7hf9gh8f7hg8h5g7f",
      location: "Bangalore East"
    },
    {
      id: 32345,
      name: "Tandoor House",
      avgRating: 4.6,
      cuisines: ["North Indian", "Tandoori", "Indian"],
      costForTwo: "₹450 for two",
      deliveryTime: "25-30 mins",
      image: "hjf5gh5gfh7g6gfgf5hf",
      location: "Bannerghatta"
    },
    {
      id: 33456,
      name: "Sushi Heaven",
      avgRating: 4.4,
      cuisines: ["Japanese", "Sushi", "Asian"],
      costForTwo: "₹600 for two",
      deliveryTime: "30-35 mins",
      image: "gh7h5gf7hf8h7g6hf8f9g",
      location: "Frazer Town"
    },
    {
      id: 34567,
      name: "Kabab Express",
      avgRating: 4.2,
      cuisines: ["Kebab", "North Indian", "Mughlai"],
      costForTwo: "₹350 for two",
      deliveryTime: "25-30 mins",
      image: "fgh6fgf8h7f8h9g6hgh7",
      location: "Ulsoor"
    },
    {
      id: 35678,
      name: "Vegan Delights",
      avgRating: 4.8,
      cuisines: ["Vegan", "Healthy", "Italian"],
      costForTwo: "₹500 for two",
      deliveryTime: "20-25 mins",
      image: "gfd7h5gfd8f7hf5gfd7h",
      location: "Basavanagudi"
    },
    {
      id: 36789,
      name: "Grill Town",
      avgRating: 4.3,
      cuisines: ["Barbeque", "Fast Food", "North Indian"],
      costForTwo: "₹450 for two",
      deliveryTime: "25-30 mins",
      image: "h7gfhg7f8h7gf9hf7gh8f",
      location: "Koramangala"
    },
    {
      id: 37890,
      name: "Taco Fiesta",
      avgRating: 4.5,
      cuisines: ["Mexican", "Fast Food"],
      costForTwo: "₹250 for two",
      deliveryTime: "20-25 mins",
      image: "sdfg7gf8gh8f9hgfh9g8f",
      location: "MG Road"
    },
    {
      id: 38901,
      name: "The Burger Joint",
      avgRating: 4.0,
      cuisines: ["Burgers", "Fast Food", "American"],
      costForTwo: "₹200 for two",
      deliveryTime: "20-25 mins",
      image: "fgf7g8h7g7h8gf7gh7h7f",
      location: "Indiranagar"
    },
    {
      id: 39012,
      name: "Wok & Roll",
      avgRating: 4.7,
      cuisines: ["Asian", "Chinese", "Fast Food"],
      costForTwo: "₹300 for two",
      deliveryTime: "25-30 mins",
      image: "fgh5h7g5fgh7fgfh9h8f9",
      location: "Jayanagar"
    },
    {
      id: 40123,
      name: "Italian Affair",
      avgRating: 4.5,
      cuisines: ["Italian", "Pizza", "Pasta"],
      costForTwo: "₹400 for two",
      deliveryTime: "30-35 mins",
      image: "hg5fg8gfh7fg7gh8gfh7g",
      location: "Whitefield"
    },
    {
      id: 41234,
      name: "Cafe Bean",
      avgRating: 4.3,
      cuisines: ["Cafe", "Beverages", "Desserts"],
      costForTwo: "₹150 for two",
      deliveryTime: "15-20 mins",
      image: "gfd4hf7h7gf7f8g9gf8f",
      location: "Bannerghatta"
    },
    {
      id: 42345,
      name: "Pasta King",
      avgRating: 4.6,
      cuisines: ["Italian", "Pasta", "Fast Food"],
      costForTwo: "₹350 for two",
      deliveryTime: "25-30 mins",
      image: "fgh7g8hf7gf8hg7f8g9h",
      location: "Koramangala"
    },
    {
      id: 43456,
      name: "The Sizzler House",
      avgRating: 4.4,
      cuisines: ["Sizzlers", "Barbeque", "North Indian"],
      costForTwo: "₹550 for two",
      deliveryTime: "30-35 mins",
      image: "hgf7g8f7g9gf7hg7f8gf",
      location: "HSR Layout"
    },
    {
      id: 44567,
      name: "The Pizza Place",
      avgRating: 4.6,
      cuisines: ["Pizza", "Italian", "Fast Food"],
      costForTwo: "₹350 for two",
      deliveryTime: "25-30 mins",
      image: "h5gf6ghf7h8fgfh9fghg",
      location: "MG Road"
    }
  ];
  
   
  


const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card" style= {{backgroundColor: "#f0f0f0"}} >
            <img 
             alt="res-logo" 
             className="res-logo" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.image} 
              />
            <h4>{resData.name}</h4>
            <h4>{Array.isArray(resData.cuisines) ? resData.cuisines.join(", ") : "No cuisines available"}</h4>
            <h4>{resData.avgRating} stars</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.deliveryTime} minutes</h4>
            <h4>{resData.location} </h4>
            
        </div>
    )
}
  

const Body = () => {
    return (
          <div className="Body">
             <div className="Search">Search</div>
             <div className="res-container">
                <RestaurantCard  resData = {resList}  />

                <RestaurantCard  resData = {resList}  />
                
               

             </div>

          </div>

    )
}
const AppLayout = () => {
 return (
    <div className="app">
      <Header/>
      <Body />
    </div>
 );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);





