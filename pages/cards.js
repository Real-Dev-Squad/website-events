import React from "react";
import PropertyCard from "../components/PropertyCard";
import properties from "./api/properties";

export default function () {
  const cardsContent = properties.map((property) => (
    <PropertyCard {...property} />
  ));
  return (
    <div className="bg-gray-200 min-h-screen p-8 flex items-center justify-center antialiased text-gray-900">
      {cardsContent}
    </div>
  );
}
