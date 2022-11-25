import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";
import AddItem from "../../Components/Pages/AddItem/AddItem";
import Collections from "../../Components/Pages/Home/Collections/Collections";
import SeeCategory from "../../Components/Pages/Home/SeeCategories/SeeCategory";
import Home from "../../Components/Pages/Home/Home";
import Login from "../../Components/Pages/Login/Login";
import Signup from "../../Components/Pages/Signup/Signup";
import Main from "../../Layouts/Main";
import MyProducts from "../../Components/Pages/MyProducts/MyProducts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/collections/:name",
                element: <Collections></Collections>,
                loader: ({params}) => fetch(`http://localhost:5000/item/${params.name}`)
            },
            {
                path: "/category",
                element: <SeeCategory></SeeCategory>,
                loader: () => fetch('http://localhost:5000/categories')
            },
            // {
            //     path: "/add-item",
            //     element: <AddItem></AddItem>
            // }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/dashboard/add-item",
                element: <AddItem></AddItem>
            },
            {
                path: "/dashboard/my-products",
                element: <MyProducts></MyProducts>
            }
        ],
    }
]);

export default router;