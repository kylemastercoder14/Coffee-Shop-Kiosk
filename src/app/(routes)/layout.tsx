"use client";

import { FloatingDock } from "@/components/aceternity/floating-dock";
import { usePathname } from "next/navigation";
import React from "react";

import {
  IconMugFilled,
  IconHomeFilled,
  IconUserFilled,
  IconAlignBoxCenterMiddleFilled,
  IconBasketFilled
} from "@tabler/icons-react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const STATICLINKS = [
    {
      title: "Home",
      icon: (
        <IconHomeFilled className={`h-5 w-5 ${pathname === "/dashboard" ? "text-neutral-500" : "text-blue-700"}`} />
      ),
      href: "/dashboard",
    },
    {
      title: "Menu",
      icon: (
        <IconMugFilled className="h-5 w-5 text-neutral-500" />
      ),
      href: "/menu",
    },
    {
      title: "Orders",
      icon: (
        <IconBasketFilled className="h-5 w-5 text-neutral-500" />
      ),
      href: "/orders",
    },
    {
      title: "Reports",
      icon: (
        <IconAlignBoxCenterMiddleFilled className="h-5 w-5 text-neutral-500" />
      ),
      href: "/reports",
    },
    {
      title: "Account",
      icon: (
        <IconUserFilled className="h-5 w-5 text-neutral-500" />
      ),
      href: "/account",
    },
  ];
  return (
    <div className="h-screen">
      <div className="fixed bg-white border-t shadow-md inset-x-0 bottom-0 flex items-center justify-center w-full">
        <FloatingDock items={STATICLINKS} />
      </div>
      <main className="px-3 py-5">{children}</main>
    </div>
  );
};

export default DashboardLayout;
