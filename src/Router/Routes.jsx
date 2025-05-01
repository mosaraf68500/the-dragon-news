import { createBrowserRouter } from "react-router";
import Header from "../Components/Header/Header";
import HomeLayout from "../Layouts/HomeLayout";
import Error from "../Error/Error";

export const router=createBrowserRouter([
    {
        path:"/",
        Component:HomeLayout
    },

    {
        path:"*",
        Component:Error
    }
])