


import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../firebase/AuthProviderr'; // Adjust path as needed
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  Upload, 
  Tag, 
  FileText, 
  DollarSign, 
  Star, 
  Palette, 
  Clock, 
  Box, 
  CheckCircle, 
  AlertTriangle 
} from 'lucide-react';

function AddEquipmentPage() {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [equipmentData, setEquipmentData] = useState({
    image: '',
    itemName: '',
    categoryName: '',  // Added categoryName
    description: '',
    price: '',
    rating: '',
    customization: '',
    processingTime: '',
    stockStatus: '',
    userEmail: '',
    userName: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate('/login');
    } else {
      setEquipmentData((prevState) => ({
        ...prevState,
        userEmail: user.email,
        userName: user.displayName || user.email
      }));
    }
  }, [user, loading, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEquipmentData({ ...equipmentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!equipmentData.itemName || !equipmentData.price || !equipmentData.stockStatus || !equipmentData.categoryName) {
      setError('Please fill out all required fields');
      return;
    }
    try {
      const response = await axios.post('http://localhost:4000/api/users-2', equipmentData);
      console.log(response.data);
      setMessage('Equipment added successfully!');
      setError('');
      setEquipmentData({
        image: '',
        itemName: '',
        categoryName: '',  // Reset categoryName
        description: '',
        price: '',
        rating: '',
        customization: '',
        processingTime: '',
        stockStatus: '',
        userEmail: user.email,
        userName: user.displayName || user.email
      });
      // Hide the success message after 2 seconds
      setTimeout(() => {
        setMessage('');
      }, 2000);
    } catch (error) {
      console.error('Error adding equipment:', error);
      setMessage('');
      setError('Failed to add equipment');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 mx-auto text-blue-500 animate-pulse" />
          <p className="mt-4 text-xl text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-r from-blue-50 to-purple-100 dark:bg-gradient-to-r  dark:from-[#1a1c2c] dark:to-[#3b4c6b]  sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl p-10 space-y-8 transition-all duration-300 bg-white shadow-2xl rounded-2xl hover:shadow-3xl">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            Add New Equipment
          </h1>
          <p className="mt-2 text-sm text-gray-600 ">Fill out the details for your new item</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative">
              <label className="flex items-center block mb-2 text-sm font-medium text-gray-700 ">
                <Upload className="mr-2 text-blue-500" size={20} />
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={equipmentData.image}
                onChange={handleChange}
                className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter image URL"
              />
            </div>
            <div className="relative">
              <label className="flex items-center block mb-2 text-sm font-medium text-gray-700 ">
                <Tag className="mr-2 text-blue-500" size={20} />
                Item Name
              </label>
              <input
                type="text"
                name="itemName"
                value={equipmentData.itemName}
                onChange={handleChange}
                className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter item name"
                required
              />
            </div>
          </div>

          {/* New categoryName input field */}
          <div className="relative">
            <label className="flex items-center block mb-2 text-sm font-medium text-gray-700 ">
              <Tag className="mr-2 text-blue-500" size={20} />
              Category Name
            </label>
            <input
              type="text"
              name="categoryName"
              value={equipmentData.categoryName}
              onChange={handleChange}
              className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter category name"
              required
            />
          </div>

          <div className="relative">
            <label className="flex items-center block mb-2 text-sm font-medium text-gray-700 ">
              <FileText className="mr-2 text-blue-500" size={20} />
              Description
            </label>
            <textarea
              name="description"
              value={equipmentData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
              placeholder="Describe the equipment"
              required
            ></textarea>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <label className="flex items-center block mb-2 text-sm font-medium text-gray-700 ">
                <DollarSign className="mr-2 text-blue-500" size={20} />
                Price
              </label>
              <input
                type="number"
                name="price"
                value={equipmentData.price}
                onChange={handleChange}
                className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Price"
                required
              />
            </div>
            <div>
              <label className="flex items-center block mb-2 text-sm font-medium text-gray-700 ">
                <Star className="mr-2 text-blue-500" size={20} />
                Rating (0-5)
              </label>
              <input
                type="number"
                name="rating"
                value={equipmentData.rating}
                onChange={handleChange}
                className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                min="0"
                max="5"
                step="0.1"
                placeholder="Rating"
                required
              />
            </div>
            <div>
              <label className="flex items-center block mb-2 text-sm font-medium text-gray-700 ">
                <Palette className="mr-2 text-blue-500" size={20} />
                Customization
              </label>
              <input
                type="text"
                name="customization"
                value={equipmentData.customization}
                onChange={handleChange}
                className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Customization options"
                required
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="flex items-center block mb-2 text-sm font-medium text-gray-700 ">
                <Clock className="mr-2 text-blue-500" size={20} />
                Processing Time
              </label>
              <input
                type="text"
                name="processingTime"
                value={equipmentData.processingTime}
                onChange={handleChange}
                className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Processing time"
                required
              />
            </div>
            <div>
              <label className="flex items-center block mb-2 text-sm font-medium text-gray-700 ">
                <Box className="mr-2 text-blue-500" size={20} />
                Stock Status
              </label>
              <input
                type="number"
                name="stockStatus"
                value={equipmentData.stockStatus}
                onChange={handleChange}
                className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Stock quantity"
                required
              />
            </div>
          </div>

          {/* Read-Only User Email */}
          <div className="relative">
            <label className="flex items-center block mb-2 text-sm font-medium text-gray-700 ">
              <FileText className="mr-2 text-blue-500" size={20} />
              User Email
            </label>
            <input
              type="email"
              name="userEmail"
              value={equipmentData.userEmail}
              readOnly
              className="w-full px-4 py-2 transition duration-300 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Read-Only User Name */}
          <div className="relative">
            <label className="flex items-center block mb-2 text-sm font-medium text-gray-700 ">
              <FileText className="mr-2 text-blue-500" size={20} />
              User Name
            </label>
            <input
              type="text"
              name="userName"
              value={equipmentData.userName}
              readOnly
              className="w-full px-4 py-2 transition duration-300 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="flex items-center justify-center w-full py-3 text-lg font-semibold text-white transition duration-300 transform rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <CheckCircle className="mr-2" size={24} />
              Add Equipment
            </button>
          </div>
        </form>

        {error && (
          <div className="flex items-center justify-center p-4 mt-4 text-red-700 border border-red-200 rounded-lg bg-red-50">
            <AlertTriangle className="mr-2 text-red-500" size={24} />
            {error}
          </div>
        )}
      </div>

      {message && (
        <div
          className="fixed p-4 text-white bg-green-500 rounded-lg shadow-lg top-4 right-4"
          style={{ zIndex: 1000 }}
        >
          <CheckCircle className="mr-2" size={24} />
          {message}
        </div>
      )}
    </div>
  );
}

export default AddEquipmentPage;


