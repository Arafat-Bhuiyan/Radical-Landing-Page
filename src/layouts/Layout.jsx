import Footer from "@/pages/shared/Footer";
import { Navbar } from "@/pages/shared/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
