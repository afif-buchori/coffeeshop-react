import React, { useEffect } from "react";
// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { get } from "../localStorage";

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = get("coffeeShop-token");
    if (!token) {
      navigate("/auth", {
        replace: true,
      });
    }
  }, []);
  return <>{children}</>;
}

export default PrivateRoute;
