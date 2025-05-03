import { createBrowserRouter } from "react-router";
import Header from "../Components/Header/Header";
import HomeLayout from "../Layouts/HomeLayout";
import Error from "../Error/Error";
import Home from "../pages/Home";
import Category from "../pages/Category";
import AuthLayOut from "../AuthLayout/AuthLayOut";
import Login from "../AuthLayout/Login";
import Registetion from "../AuthLayout/Registetion";

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
            path:"/category/:id",
            Component:Category,
            loader:()=>fetch("/news.json")

           }
        ]

        
    },

    {
        path:"auth",
        Component:AuthLayOut,
        children:[
            {
                path:"/auth/login",
                Component:Login
            },
            {
                path:"/auth/registetion",
                Component:Registetion
            }
        ]

    },

    {
        path:"*",
        Component:Error
    }
])