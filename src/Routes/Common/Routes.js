import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Collections from "../../Components/Pages/Home/Collections/Collections";
import Home from "../../Components/Pages/Home/Home";
import Login from "../../Components/Pages/Login/Login";
import Signup from "../../Components/Pages/Signup/Signup";
import Main from "../../Layouts/Main";

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
                path: "/collections",
                element: <Collections></Collections>,
                loader: () => fetch('http://localhost:5000/furniture-items')
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/dashboard/add-items"
                
            }
        ],
    }
]);

export default router;