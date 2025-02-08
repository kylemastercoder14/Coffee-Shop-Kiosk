import React from "react";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Heading = ({ userName }: { userName: string | null; }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-blue-800 font-semibold">{userName ? `Hello, ${userName}!` : `Hello, new friend :)`}</span>
      <Button variant="ghost" className="rounded-full" size="icon">
        <User className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Heading;
