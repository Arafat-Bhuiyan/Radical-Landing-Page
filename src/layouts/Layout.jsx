import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
