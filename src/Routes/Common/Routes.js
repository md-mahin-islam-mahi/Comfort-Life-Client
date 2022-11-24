import { createBrowserRouter } from "react-router-dom";
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
            }
        ]
    }
]);

export default router;