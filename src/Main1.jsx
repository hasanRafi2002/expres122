import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./profile/NavBar";
import Footer1 from "./footer/Footer1";

const Main1 = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-100 dark:bg-gradient-to-r  dark:from-[#1a1c2c] dark:to-[#3b4c6b]">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer1 />
    </div>
  );
};

export default Main1;
