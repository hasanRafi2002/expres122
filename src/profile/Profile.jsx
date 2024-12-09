import React, { useContext, useState } from "react";
import { AuthContext } from "../firebase/AuthProviderr";
import { getAuth, updateProfile } from "firebase/auth";
import { User, Mail, LogOut, Edit2, Check, X, Calendar } from "lucide-react";

const Profile = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [newPhotoURL, setNewPhotoURL] = useState("");
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50">
        <p className="text-teal-600">Please log in to view your profile</p>
      </div>
    );
  }

  const accountCreationDate = new Date(
    user.metadata.creationTime
  ).toDateString();

  const handlePhotoURLUpdate = async () => {
    try {
      window.location.reload();
      const auth = getAuth();
      await updateProfile(auth.currentUser, { photoURL: newPhotoURL });
      setPhotoURL(newPhotoURL);
      setNewPhotoURL("");
      setIsEditingPhoto(false);
      setShowAlert(true);
      setAlertMessage("Photo updated successfully!");
      setTimeout(() => setShowAlert(false), 3000);
    } catch (error) {
      console.error("Error updating photo:", error);
      setShowAlert(true);
      setAlertMessage("Error updating photo. Please try again.");
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const handleNameUpdate = async () => {
    try {
      window.location.reload();
      const auth = getAuth();
      await updateProfile(auth.currentUser, { displayName: newDisplayName });
      setIsEditingName(false);
      setShowAlert(true);
      setAlertMessage("Name updated successfully!");
      setTimeout(() => setShowAlert(false), 3000);
    } catch (error) {
      console.error("Error updating name:", error);
      setShowAlert(true);
      setAlertMessage("Error updating name. Please try again.");
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
      setShowAlert(true);
      setAlertMessage("Logged out successfully!");
      setTimeout(() => setShowAlert(false), 3000);
    } catch (error) {
      console.error("Error signing out:", error);
      setShowAlert(true);
      setAlertMessage("Error signing out. Please try again.");
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 dark:bg-gradient-to-r  dark:from-[#1a1c2c] dark:to-[#3b4c6b] ">
      {/* Decorative Banner */}
      <div className="relative w-full h-48 overflow-hidden bg-gradient-to-r from-slate-800 to-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute transform rotate-45 -translate-y-1/2 bg-white/10 -left-1/4 top-1/2 w-96 h-96"></div>
            <div className="absolute transform rotate-45 translate-y-1/2 bg-white/10 -right-1/4 top-1/2 w-96 h-96"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-500/20"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex items-center justify-center px-4 -mt-24">
        {showAlert && (
          <div className="fixed z-50 top-4 right-4">
            <div className="p-4 bg-white border-l-4 border-teal-500 rounded-lg shadow-lg">
              <p className="text-teal-800">{alertMessage}</p>
            </div>
          </div>
        )}

        <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl">
          {/* Profile Header */}
          <div className="relative p-8 text-center text-white bg-gradient-to-r from-blue-500 to-slate-400 rounded-t-3xl">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 bg-teal-200 rounded-full animate-pulse"></div>
              <img
                src={photoURL || "/path/to/default/photo.jpg"}
                alt="Profile"
                className="relative object-cover w-full h-full border-4 border-white rounded-full shadow-xl"
              />
            </div>

            <div className="mt-4 space-y-3">
              {isEditingPhoto ? (
                <>
                  <input
                    type="text"
                    placeholder="Enter new photo URL"
                    value={newPhotoURL}
                    onChange={(e) => setNewPhotoURL(e.target.value)}
                    className="w-full p-2 text-gray-800 rounded-lg shadow-inner dark:text-gray-200 bg-white/90 focus:ring-2 focus:ring-teal-300 focus:outline-none"
                  />
                  <div className="flex justify-between space-x-2">
                    <button
                      onClick={handlePhotoURLUpdate}
                      className="flex-1 px-6 py-2 text-sm font-bold text-teal-800 transition-all bg-white rounded-lg shadow-md hover:bg-teal-50"
                    >
                      Save Photo
                    </button>
                    <button
                      onClick={() => setIsEditingPhoto(false)}
                      className="flex-1 px-6 py-2 text-sm font-bold text-red-800 transition-all bg-white rounded-lg shadow-md hover:bg-red-50"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <button
                  onClick={() => setIsEditingPhoto(true)}
                  className="px-6 py-2 text-sm font-bold text-teal-800 transition-all bg-white rounded-lg shadow-md hover:bg-teal-50"
                >
                  Update Photo
                </button>
              )}
            </div>

            {/* Editable Name */}
            {isEditingName ? (
              <div className="flex items-center justify-center mt-6 space-x-2">
                <input
                  type="text"
                  value={newDisplayName}
                  onChange={(e) => setNewDisplayName(e.target.value)}
                  className="px-4 py-2 text-teal-800 rounded-lg shadow-inner bg-white/90 focus:ring-2 focus:ring-teal-300 focus:outline-none"
                />
                <button
                  onClick={handleNameUpdate}
                  className="p-2 transition-all rounded-full bg-white/20 hover:bg-white/30"
                >
                  <Check size={18} className="text-white" />
                </button>
                <button
                  onClick={() => setIsEditingName(false)}
                  className="p-2 transition-all rounded-full bg-white/20 hover:bg-white/30"
                >
                  <X size={18} className="text-white" />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center mt-6">
                <h2 className="text-3xl font-bold tracking-wide">
                  {user.displayName || "User"}
                </h2>
                <button
                  onClick={() => setIsEditingName(true)}
                  className="p-2 ml-2 transition-all rounded-full bg-white/20 hover:bg-white/30"
                >
                  <Edit2 size={18} className="text-white" />
                </button>
              </div>
            )}
            <p className="mt-2 text-teal-50"></p>
          </div>

          {/* Profile Details */}
          <div className="p-6 space-y-4">
            <div className="flex items-center p-4 transition-all duration-200 border border-teal-100 rounded-xl hover:bg-teal-50 group">
              <User className="w-6 h-6 text-teal-500 group-hover:text-teal-600" />
              <div className="ml-4">
                <p className="text-teal-600">Full Name</p>
                <p className="font-semibold text-teal-900">
                  {user.displayName || "Not provided"}
                </p>
              </div>
            </div>

            <div className="flex items-center p-4 transition-all duration-200 border border-teal-100 rounded-xl hover:bg-teal-50 group">
              <Mail className="w-6 h-6 text-teal-500 group-hover:text-teal-600" />
              <div className="ml-4">
                <p className="text-teal-600">Email Address</p>
                <p className="font-semibold text-teal-900">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center p-4 transition-all duration-200 border border-teal-100 rounded-xl hover:bg-teal-50 group">
              <Calendar className="w-6 h-6 text-teal-500 group-hover:text-teal-600" />
              <div className="ml-4">
                <p className="text-teal-600">Account Created</p>
                <p className="font-semibold text-teal-900">
                  {accountCreationDate}
                </p>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleSignOut}
              className="flex items-center justify-center w-full p-4 space-x-2 text-white transition-all duration-200 rounded-xl bg-gradient-to-r from-slate-500 to-blue-500 hover:from-slate-600 hover:to-pink-600 group"
            >
              <LogOut className="w-6 h-6" />
              <span className="font-semibold">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
