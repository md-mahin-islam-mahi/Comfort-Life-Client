import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";
import AddItem from "../../Components/Dashboard/AddItem/AddItem";
import Collections from "../../Components/Pages/Home/Collections/Collections";
import SeeCategory from "../../Components/Pages/Home/SeeCategories/SeeCategory";
import Home from "../../Components/Pages/Home/Home";
import Login from "../../Components/Pages/Login/Login";
import Signup from "../../Components/Pages/Signup/Signup";
import Main from "../../Layouts/Main";
import MyProducts from "../../Components/Dashboard/MyProducts/MyProducts";
import MyOrders from "../../Components/Dashboard/MyOrders/MyOrders";
import PaymentPage from "../../Components/Dashboard/Payment/PaymentPage";
import AllBuyers from "../../Components/Dashboard/Admin/All Buyers/AllBuyers"
import AllSeller from "../../Components/Dashboard/Admin/All seller/AllSeller"
import Blog from "../../Components/Blog/Blog";
import MyPaid from "../../Components/Dashboard/MyPaid/MyPaid";
import Error from "../../Components/Pages/Error/Error";

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
                loader: ({ params }) => fetch(`https://comfort-life-server.vercel.app/item/${params.name}`)
            },
            {
                path: "/category",
                element: <SeeCategory></SeeCategory>,
                loader: () => fetch('https://comfort-life-server.vercel.app/categories')
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "*",
                element: <Error></Error>
            }
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
            },
            {
                path: "/dashboard/my-orders",
                element: <MyOrders></MyOrders>
            },
            {
                path: "/dashboard/payment-history",
                element: <MyPaid></MyPaid>
            },
            {
                path: "/dashboard/payment/:id",
                element: <PaymentPage></PaymentPage>,
                loader: ({ params }) => fetch(`https://comfort-life-server.vercel.app/get-furniture/${params.id}`)
            },
            {
                path: "/dashboard/admin/all-buyers/:type",
                element: <AllBuyers></AllBuyers>,
                loader: () => fetch('https://comfort-life-server.vercel.app/users-type/buyer')
            },
            {
                path: "/dashboard/admin/all-seller/:type",
                element: <AllSeller></AllSeller>,
                loader: () => fetch('https://comfort-life-server.vercel.app/users-type/seller')
            }
        ],
    }
]);

export default router;