import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestuarantsMenu from "./Components/RestaurantsMenu";
                
const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Outlet />
           
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children :[
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/contact",
                element : <Contact />
            },  
            {
                path : "/",
                element : <Body />
            },{
                path : "/restaurants/:resId",
                element : <RestuarantsMenu/>
            }
        ],
        errorElement : <Error/>
    }
]);

root.render(<RouterProvider router={appRouter} />);