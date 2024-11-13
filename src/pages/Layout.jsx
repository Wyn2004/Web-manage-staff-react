import React from "react";
import { Navigation } from "./../components/index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet/>
    </div>
  );
};

export default Layout;
