"use client";

import { Compass, Layout } from "lucide-react";
import React from "react";
import { SideBarItem } from "./sidebar-item";


const publicRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Search",
    href: "/search",
  },
];
export const SidebarRoutes = () => {
  const routes = publicRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SideBarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        ></SideBarItem>
      ))}
    </div>
  );
};
