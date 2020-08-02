import React from 'react';
import PropTypes from 'prop-types';

export default function ImageCard({
  city,
  averagePrice,
  imageUrl,
  imageAlt,
  propertyCount,
}) {
  return (
    <div className="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
      <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
        <img
          className="h-32 w-32 flex-shrink-0"
          src={imageUrl}
          alt={imageAlt}
        />
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-800">{city}</h3>
          <p className="text-gray-600"> ${averagePrice} / night average</p>
          <div className="mt-4">
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
            >
              Explore {propertyCount} properties
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

ImageCard.propTypes = {
  city: PropTypes.string.isRequired,
  averagePrice: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  propertyCount: PropTypes.number.isRequired,
};
