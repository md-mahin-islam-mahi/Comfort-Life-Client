import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";
import AddItem from "../../Components/Pages/AddItem/AddItem";
import Collections from "../../Components/Pages/Home/Collections/Collections";
import Furnitures from "../../Components/Pages/Home/Furnitures/Furnitures";
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
                loader: () => fetch('http://localhost:5000/furniture')
            },
            {
                path: `/furnitures/:id`,
                element: <Furnitures></Furnitures>,
                loader: ({params}) => fetch(`http://localhost:5000/furniture/${params.id}`)
            },
            {
                path: "/add-item",
                element: <AddItem></AddItem>
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