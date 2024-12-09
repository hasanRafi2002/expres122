


import React from "react";
import { useNavigate } from "react-router-dom";

const ComponentCard = ({ id, image, itemName, categoryName, description, price, rating }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/equipment/${id}`);
  };

  return (
    <div className="max-w-sm overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105">
      <img
        className="object-cover w-full h-48"
        src={image}
        alt={itemName}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{itemName}</h2>
        <p className="text-sm text-gray-500 ">{categoryName}</p>
        <p className="mt-2 text-sm text-gray-600 ">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-green-600">${price}</span>
          <span className="flex items-center text-yellow-500">
            ★ {rating}
          </span>
        </div>
        {/* View Details Button */}
        <button
          onClick={handleViewDetails}
          className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ComponentCard;

