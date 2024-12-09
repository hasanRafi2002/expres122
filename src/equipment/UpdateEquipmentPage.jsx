





import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../firebase/AuthProviderr';
import { CheckCircle, AlertTriangle } from 'lucide-react';

function UpdateEquipmentPage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();

  // State for form fields
  const [formData, setFormData] = useState({
    userEmail: '',
    userName: '',
    itemName: '',
    description: '',
    price: '',
    rating: '',
    image: '',
  });

  // State for handling messages
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Fetch existing equipment data when component mounts
  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    // Fetch the specific equipment item to populate the form
    axios.get(`http://localhost:4000/api/users-2`)
      .then((response) => {
        // Find the specific equipment item
        const equipmentItem = response.data.find(item => item._id === id);

        if (equipmentItem) {
          setFormData({
            userEmail: equipmentItem.userEmail,
            userName: equipmentItem.userName,
            itemName: equipmentItem.itemName,
            description: equipmentItem.description,
            price: equipmentItem.price,
            rating: equipmentItem.rating,
            image: equipmentItem.image || '',
          });
        }
      })
      .catch((err) => {
        console.error('Error fetching equipment details:', err);
        setError('Failed to load equipment details');
      });
  }, [id, user, navigate]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.itemName || !formData.description || !formData.price) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      // Send update request to backend
      await axios.put(`http://localhost:4000/api/users-2/${id}`, formData);

      // Show the modal after successful update
      setIsModalOpen(true);
    } catch (err) {
      console.error('Error updating equipment:', err);
      setError('Failed to update equipment');
    }
  };

  // Modal component
  const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="w-1/2 p-6 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="mb-4 text-xl font-semibold">Equipment Updated Successfully!</h2>
            <Link to='/mylist'>
              <button
                className="inline-flex justify-center px-6 py-3 text-white rounded-md bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500"
              >
                Go to My Equipment
              </button>
            </Link> 
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-r from-blue-50 to-purple-100 dark:bg-gradient-to-r  dark:from-[#1a1c2c] dark:to-[#3b4c6b]  sm:px-6 lg:px-8">
      <div className="max-w-3xl p-8 mx-auto bg-white shadow-lg rounded-xl">
        <h1 className="mb-6 text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
          Update Equipment
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Information (Read-Only) */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 ">User Email</label>
              <input
                type="email"
                name="userEmail"
                value={formData.userEmail}
                readOnly
                className="block w-full mt-1 bg-gray-100 border-gray-300 rounded-md shadow-sm cursor-not-allowed focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 ">User Name</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                readOnly
                className="block w-full mt-1 bg-gray-100 border-gray-300 rounded-md shadow-sm cursor-not-allowed focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          {/* Equipment Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 ">Item Name*</label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 ">Description*</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 ">Price*</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 ">Rating</label>
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Select Rating</option>
                <option value="1">1 ★</option>
                <option value="2">2 ★</option>
                <option value="3">3 ★</option>
                <option value="4">4 ★</option>
                <option value="5">5 ★</option>
              </select>
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 ">Item Image URL</label>
            <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <div className="flex text-sm text-gray-600 ">
                  <label
                    htmlFor="image-url"
                    className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Enter Image URL</span>
                  </label>
                </div>
                <input
                  id="image-url"
                  name="image"
                  type="url"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={formData.image || ''}
                  onChange={handleChange}
                  placeholder="Enter the image URL"
                />
                {formData.image && (
                  <div className="mt-4">
                    <img
                      src={formData.image}
                      alt="Image Preview"
                      className="object-contain w-auto h-32 mx-auto"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center px-6 py-3 text-white rounded-md bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update Equipment
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="p-4 mt-4 text-red-700 border border-red-200 rounded-lg bg-red-50">
            <AlertTriangle className="inline-block mr-2 text-red-500" size={24} />
            {error}
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          navigate('/my-equipment');
        }}
      />
    </div>
  );
}

export default UpdateEquipmentPage;
