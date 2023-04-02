import React from "react";
import { createBrowserRouter } from "react-router-dom";

// import App from "./pages/App";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ProductDetails from "./pages/Products/ProductDetails";
import YourCart from "./pages/YourCart";
import History from "./pages/History";
import ForgotPassword from "./pages/ForgotPassword";

import PrivateRoute from "./utils/wrapper/privateRoute";
import PublicRoute from "./utils/wrapper/publicRoute";

const router = createBrowserRouter([
  // { path: "/", element: <App name="Afif" age={20} href={"https://reactjs.org"} /> },
  { path: "/", element: <Home /> },
  { path: "/auth", element: <Auth /> },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  { path: "/signup", element: <Signup /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:id", element: <ProductDetails /> },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  { path: "/yourcart", element: <YourCart /> },
  { path: "/history", element: <History /> },
  { path: "/forgotpwd", element: <ForgotPassword /> },
]);

export default router;
