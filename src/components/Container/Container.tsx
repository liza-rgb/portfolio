import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const Container: React.FC = () => {
  return (
    <div className="Container h-screen relative">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Container;
