import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
  import Grocery from "./components/Grocery";
  import "../index.css";



const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {
 return (
    <div className="app">
      <Header/>
      <Outlet/>
     
    </div>
 );
};

const appRouter = createBrowserRouter([
  {
    path: "/", 
    element: <AppLayout/>,
    children: [
      {
        path: "/",
         element: <Body/>,
     
       },
      {
        path: "/about",
         element: <About/>,
     
       },
       {
         path: "/contact",
          element: <Contact/>,
      
        },
        {
          path: "/grocery",
           element: <Suspense><Grocery/></Suspense>,
       
         },
        {
         
           path: "/restaurants/:resId",
           element : <RestaurantMenu/>,

        },


    ],
    errorElement: <Error/>,
  },
 

],
{
  future: {
    v7_relativeSplatPath: true,
    v7_startTransition: true, 
  }
},

);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter}/>);


