import { Logo } from "@/components/common/logo";
import React from "react";
import { SidebarRoutes } from "./sidebar-routes";

export const SideBar = () => {
  return (
    <div className="h-full border-r flex flex-col over-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
