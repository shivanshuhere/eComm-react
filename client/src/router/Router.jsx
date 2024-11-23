import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Otp from "../pages/auth/Otp";
import Error from "../pages/error/Error.jsx";
<<<<<<< HEAD
import Account from "../pages/Account.jsx";
import Profile from "../components/User/Profile.jsx";
=======
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";

const token = window.localStorage.getItem("token");

>>>>>>> 1bde054c0a882cff5dd91688025e6690dfdf5f93
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
                path: "account",
                element: <Account />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                    {
                        path: "address",
                        element: <div>Address Book</div>,
                    },
                    {
                        path: "payment",
                        element: <div>My Payment Option</div>,
                    },
                    {
                        path: "return",
                        element: <div>My return </div>,
                    },
                    {
                        path: "cancel",
                        element: <div>My cancelation</div>,
                    },
                ],
            },
            {
                path: "/*",
                element: <Error />,
            },
        ],
    },
]);

export default router;
