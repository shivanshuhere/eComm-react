import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Otp from "../pages/auth/Otp";
import Error from "../pages/error/Error.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";
import Cart from "../pages/Cart.jsx";
import Wishlist from "../pages/Wishlist.jsx";

const token = window.localStorage.getItem("token");

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "register",
                element: token ? <Navigate to="/" /> : <Register />,
            },
            {
                path: "login",
                element: token ? <Navigate to="/" /> : <Login />,
            },
            {
                path: "verify-otp",
                element: <Otp />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "wishlist",
                element: <Wishlist />,
            },
            {
                path: "/*",
                element: <Error />,
            },
        ],
    },
]);

export default router;
