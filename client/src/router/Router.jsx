import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Otp from "../pages/auth/Otp";
import Error from "../pages/error/Error.jsx";
import Account from "../pages/Account.jsx";
import Profile from "../components/User/Profile.jsx";
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
                path: "register",
                element: <Register />,
            },
            {
                path: "login",
                element: <Login />,
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
