
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ChevronUp, ChevronDown, Eye } from 'lucide-react';

const SportsEquipmentPage = () => {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/api/component')
      .then(response => {
        setEquipment(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching equipment data:', error);
        setError('Failed to load equipment data');
        setLoading(false);
      });
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/equipment/${id}`);
  };

  const handleSortByPrice = () => {
    const sortedEquipment = [...equipment].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });

    setEquipment(sortedEquipment);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full border-t-blue-200 animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        <div className="p-6 bg-red-100 rounded-lg shadow-md">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 mx-auto max-w-7xl  bg-gradient-to-r from-blue-50 to-purple-100 dark:bg-gradient-to-r  dark:from-[#1a1c2c] dark:to-[#3b4c6b] ">
      <div className="flex flex-col items-center justify-between mb-6 md:flex-row">
        <h1 className="mb-4 text-3xl font-bold text-center text-gray-800 md:mb-0 md:text-left dark:text-gray-200 ">
          Sports Equipment
        </h1>
        <button
          onClick={handleSortByPrice}
          className="flex items-center justify-center px-4 py-2 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {sortOrder === 'asc' ? <ChevronUp className="mr-2" /> : <ChevronDown className="mr-2" />}
          Sort by Price
        </button>
      </div>

      {/* Mobile View - Card Layout */}
      <div className="grid gap-4 md:hidden">
        {equipment.map((item) => (
          <div 
            key={item._id} 
            className="p-4 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
          >
            <div className="flex items-center mb-4">
              <img 
                src={item.image} 
                alt={item.itemName} 
                className="object-cover w-20 h-20 mr-4 rounded-md" 
              />
              <div>
                <h2 className="text-lg font-bold text-gray-800 ">{item.itemName}</h2>
                <p className="text-sm text-gray-600 ">{item.categoryName}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
              <div>
                <span className="font-semibold">Price:</span> ${item.price}
              </div>
              <div>
                <span className="font-semibold">Rating:</span> {item.rating}
              </div>
              <div>
                <span className="font-semibold">Stock:</span> {item.stockStatus}
              </div>
            </div>
            <button
              onClick={() => handleViewDetails(item._id)}
              className="flex items-center justify-center w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              <Eye className="mr-2" size={20} /> View Details
            </button>
          </div>
        ))}
      </div>

      {/* Desktop View - Table Layout */}
      <div className="hidden md:block">
        <table className="w-full rounded-lg shadow-md">
          <thead className="bg-blue-50">
            <tr>
              {['Image', 'Item Name', 'Category', 'Price', 'Rating', 'Stock Status', 'Actions'].map((header) => (
                <th 
                  key={header} 
                  className="px-4 py-3 text-sm font-semibold text-left text-gray-600 uppercase "
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {equipment.map((item) => (
              <tr 
                key={item._id} 
                className="transition-colors hover:bg-slate-500 "
              >
                <td className="px-4 py-3 border-b">
                  <img 
                    src={item.image} 
                    alt={item.itemName} 
                    className="object-cover w-16 h-16 rounded-md" 
                  />
                </td>
                <td className="px-4 py-3 text-sm font-medium text-gray-800 border-b dark:text-gray-200 ">{item.itemName}</td>
                <td className="px-4 py-3 text-sm text-gray-600 border-b dark:text-gray-200 ">{item.categoryName}</td>
                <td className="px-4 py-3 text-sm font-semibold text-green-600 border-b dark:text-gray-200 ">${item.price}</td>
                <td className="px-4 py-3 text-sm border-b dark:text-gray-200 ">{item.rating}</td>
                <td className="px-4 py-3 text-sm border-b">
                  <span 
                    className={`px-2 py-1 text-xs rounded-full ${
                      item.stockStatus === 'In Stock' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {item.stockStatus}
                  </span>
                </td>
                <td className="px-4 py-3 border-b">
                  <button
                    onClick={() => handleViewDetails(item._id)}
                    className="flex items-center px-3 py-2 text-sm text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
                  >
                    <Eye className="mr-2" size={16} /> Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SportsEquipmentPage;