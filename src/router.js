import React from "react";
import { createBrowserRouter } from "react-router-dom";

// import App from "./pages/App";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Login from "./pages/Auth/login";
import Signup from "./pages/Auth/signup";
import ProductDetails from "./pages/Products/productDetails";
import YourCart from "./pages/YourCart";
import History from "./pages/History"

const router = createBrowserRouter([
    // { path: "/", element: <App name="Afif" age={20} href={"https://reactjs.org"} /> },
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login name="login" /> },
    { path: "/signup", element: <Signup /> },
    { path: "/products", element: <Products /> },
    { path: "/products/details", element: <ProductDetails /> },
    { path: "/profile", element: <Profile /> },
    { path: "/yourcart", element: <YourCart /> },
    { path: "/history", element: <History /> },
]);

export default router;