import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Recipe from "../Pages/Recipe/Recipe";

import Login from "../Pages/Login/Login";
// import { useContext } from "react";
// import AuthProvider from "../Provider/AuthProvider";

// const {user} = useContext(AuthProvider);

const router = createBrowserRouter([


    {
        path:'/',
        element :<Main></Main>,
        children :[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/chefData/:id',
                element:<Recipe></Recipe>,
                // loader:({params}) => fetch(`http://localhost:5000/chefData/${params.id}`)
            }
        ]
    }

])

export default router;