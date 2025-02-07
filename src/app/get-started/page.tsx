"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const GetStarted = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [percentage, setPercentage] = React.useState(5);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          router.push("/dashboard");
          return 100;
        }
        return prev + 5; // Increase by 5% every interval
      });
    }, 200);

    return () => clearInterval(interval);
  }, [router]);
  return (
    <div className="bg-white relative flex w-full flex-col items-center justify-center h-screen">
      <Image
        src="/splash.jpg"
        alt="Zus Coffee"
        fill
        className="w-full h-full object-cover"
      />
      {loading && (
        <div className="flex absolute bottom-3">
          <Loader2 className="w-6 h-6 text-blue-600 animate-spin mr-2" />
          <span className="text-lg text-blue-600 font-semibold">
            Loading... {percentage}%
          </span>
        </div>
      )}
    </div>
  );
};

export default GetStarted;
