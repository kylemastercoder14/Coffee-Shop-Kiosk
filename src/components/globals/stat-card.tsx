import React from "react";

const StatCard = ({ title, data }: { title: string; data: string }) => {
  return (
    <div className="bg-gray-200 shadow rounded-xl py-2 px-2 border">
      <h2 className="text-xs text-gray-600">{title}</h2>
      <p className="text-black font-bold">{data}</p>
    </div>
  );
};

export default StatCard;
