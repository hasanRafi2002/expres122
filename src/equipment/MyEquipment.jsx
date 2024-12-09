


import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../firebase/AuthProviderr';
import { CheckCircle, Edit, Trash, AlertTriangle } from 'lucide-react';

function EquipmentListPage() {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [equipmentList, setEquipmentList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Fetch equipment data filtered by user email
  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate('/login');
    } else {
      axios
        .get('http://localhost:4000/api/users-2')
        .then((response) => {
          // Filter equipment based on the logged-in user's email
          const userEquipment = response.data.filter((item) => item.userEmail === user.email);
          setEquipmentList(userEquipment);
        })
        .catch((err) => {
          console.error('Error fetching equipment:', err);
          setError('Failed to load equipment data');
        });
    }
  }, [user, loading, navigate]);

  // Handle the update action
  const handleUpdate = (equipmentId) => {
    navigate(`update-equipment/${equipmentId}`);
  };

  // Handle the delete action
  const handleDelete = (equipmentId) => {
    setSelectedEquipment(equipmentId);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/api/users-2/${selectedEquipment}`);
      setMessage('Equipment deleted successfully!');
      setEquipmentList(equipmentList.filter((item) => item._id !== selectedEquipment));
      setShowModal(false);
      setError('');

      // Hide the message after 2 seconds
      setTimeout(() => {
        setMessage('');
      }, 2000);
    } catch (err) {
      console.error('Error deleting equipment:', err);
      setError('Failed to delete equipment');
      setShowModal(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 mx-auto text-blue-500 animate-pulse" />
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-200">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-r from-blue-50 to-purple-100 dark:bg-gradient-to-r  dark:from-[#1a1c2c] dark:to-[#3b4c6b]  sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
          My Equipment List
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Here are all the items you have added</p>
      </div>

      <div className="grid gap-6 mt-6 md:grid-cols-3">
        {equipmentList.map((item) => (
          <div
            key={item._id}
            className="p-4 transition-all duration-300 bg-white rounded-lg shadow-xl hover:shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.itemName}
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <h2 className="mt-4 text-xl font-bold">{item.itemName}</h2>
            <p className="text-sm text-gray-500">{item.description}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-semibold text-blue-500">${item.price}</span>
              <span className="text-sm text-yellow-500">{item.rating} ★</span>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleUpdate(item._id)}
                className="flex items-center text-blue-500 hover:text-blue-700"
              >
                <Edit className="mr-2" />
                Update
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="flex items-center text-red-500 hover:text-red-700"
              >
                <Trash className="mr-2" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Delete Confirmation */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Confirm Deletion</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Are you sure you want to delete this item?</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg dark:text-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error and Success Messages */}
      {error && (
        <div className="p-4 mt-4 text-red-700 border border-red-200 rounded-lg bg-red-50">
          <AlertTriangle className="mr-2 text-red-500" size={24} />
          {error}
        </div>
      )}

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

export default EquipmentListPage;

