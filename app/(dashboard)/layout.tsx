import React from "react";
import { SideBar } from "./_components/sidebar";
import NavBar from "./_components/navbar";

interface DashBoardInterface {
  children: React.ReactNode;
}
const DashboardLayout: React.FC<DashBoardInterface> = ({ children }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 inset-y-0 w-full z-50">
        <NavBar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <SideBar />
      </div>
      <main className="md:pl-56 h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
