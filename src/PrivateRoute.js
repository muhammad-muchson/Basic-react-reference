import React from "react";
import { Route, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { Outlet } from "react-router";
const cookies = new Cookies();

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(cookies.get("auth"));
  const auth = cookies.get("auth");
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
