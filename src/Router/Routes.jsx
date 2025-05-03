import { createBrowserRouter } from "react-router";
import Header from "../Components/Header/Header";
import HomeLayout from "../Layouts/HomeLayout";
import Error from "../Error/Error";
import Home from "../pages/Home";
import Category from "../pages/Category";

export const router=createBrowserRouter([
    {
        path:"/",
        Component:HomeLayout,
        children:[
           {
            path:"/",
            Component:Home
           },

           {
            path:"category/:id",
            Component:Category

           }
        ]
    },

    {
        path:"*",
        Component:Error
    }
])