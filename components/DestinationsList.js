import React from "react";
import ImageCard from "./ImageCard";
import destinations from '../pages/api/destination'

export default function (props) {
  const destinationContent = destinations.map(destination => <ImageCard {...destination} />)
  return (
    <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <h2 className="text-xl text-gray-900">Popular destinations</h2>
      <p className="text-gray-600">
        A selection of great work-friendly cities with lots to see and explore
      </p>
      <div className="flex flex-wrap -mx-4">
        {destinationContent}
      </div>
    </div>
  );
}
