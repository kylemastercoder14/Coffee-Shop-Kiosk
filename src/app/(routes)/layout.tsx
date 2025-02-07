import { FloatingDock } from "@/components/aceternity/floating-dock";
import { STATICLINKS } from "@/constants/links";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <div className="fixed bg-white border-t shadow-md inset-x-0 bottom-0 flex items-center justify-center w-full">
        <FloatingDock items={STATICLINKS} />
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
