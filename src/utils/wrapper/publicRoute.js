import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { get } from "../localStorage";

function PublicRoute({ children, ...restProps }) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = get("coffeeShop-token");
    if (!token) {
      navigate("/auth", {
        replace: true,
      });
    }
  }, []);
  // return <>{children}</>;
  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { ...restProps });
      })}
    </>
  );
}

export default PublicRoute;
