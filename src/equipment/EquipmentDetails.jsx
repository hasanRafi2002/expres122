



import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Star, ShoppingCart, AlertCircle } from 'lucide-react';

const EquipmentDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the equipment details from the backend using the ID
    axios.get(`http://localhost:4000/api/component/${id}`)
      .then(response => {
        setItem(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching equipment details:', error);
        setError('Failed to load equipment details');
        setLoading(false);
      });
  }, [id]);

  const handleAddToEquipmentList = () => {
    // Navigate to add equipment page with pre-filled data
    navigate('/add', {
      state: {
        prefillData: item
      }
    });
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-200">Loading equipment details...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 mx-auto text-red-500" />
          <p className="mt-4 text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  // Render equipment details
  return (
    <div className="container max-w-6xl px-4 py-8 mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img 
            src={item.image} 
            alt={item.itemName} 
            className="object-cover w-full max-w-md transition-transform duration-300 shadow-lg rounded-xl hover:scale-105"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-200">{item.itemName}</h1>
          
          {/* Details Grid */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-600 ">Category</p>
              <p className="font-semibold">{item.categoryName}</p>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-600 ">Price</p>
              <p className="font-semibold text-green-600">${item.price}</p>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-600 ">Rating</p>
              <div className="flex items-center">
                {[...Array(5)].map((star, index) => (
                  <Star 
                    key={index} 
                    className={`w-5 h-5 ${index < Math.floor(item.rating) ? 'text-yellow-500' : '      text-gray-300'}`} 
                    fill={index < Math.floor(item.rating) ? 'currentColor' : 'none'}
                  />
                ))}
                <span className="ml-2 text-gray-600 dark:text-gray-200">({item.rating}/5)</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 dark:text-gray-200">
            <h3 className="mb-2 text-xl font-semibold">Description</h3>
            <p className="text-gray-600 dark:text-gray-200">{item.description}</p>
          </div>

          {/* Additional Details */}
          <div className="mb-6 dark:text-gray-200">
            <h3 className="mb-2 text-xl font-semibold">Additional Information</h3>
            <div className="grid grid-cols-2 gap-2">
              <p><strong>Customization:</strong> {item.customization}</p>
              <p><strong>Processing Time:</strong> {item.processingTime}</p>
              <p><strong>Stock Status:</strong> {item.stockStatus}</p>
            </div>
          </div>

          {/* Add to Equipment List Button */}
          <button 
            onClick={handleAddToEquipmentList}
            className="flex items-center justify-center w-full px-6 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to My Equipment List
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetailsPage;

