import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Register from "../pages/auth/Register"
import Login from "../pages/auth/Login";
import Otp from "../pages/auth/Otp";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "verify-otp",
                element: <Otp />
            }
        ]

    },
]);

export default router