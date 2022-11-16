import React from "react";

import { useLocation } from "react-router-dom";

import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";

const Container: React.FC = () => {
  const location = useLocation();

  const getBody = () => {
    if (location.pathname === "/") {
      return <Outlet />;
    }
    return (
      <div className="mx-auto sm:w-[800px] md:w-[1000px] lg:w-[1200px] xl:w-[1400px]">
        <div className="flex flex-col min-h-screen">
          <div className="h-[110px]"></div>
          <div className="xl:px-16 lg:px-10 md:px-6 px-8 flex-1">
            <Outlet />
          </div>
          <div className="h-[110px]">
            <Footer />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="Container">
      <NavBar />
      {getBody()}
    </div>
  );
};

export default Container;
