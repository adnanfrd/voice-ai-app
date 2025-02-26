"use client";

import { useState } from "react";
import { Edit, LogOut, User } from "lucide-react";

interface UserProfile {
  name: string;
  email: string;
  profilePicture: string;
}

const Profile = () => {
  const [user, setUser] = useState<UserProfile>({
    name: "Adnan Farid",
    email: "adnan@example.com",
    profilePicture: "https://via.placeholder.com/150",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  // Save Changes
  const saveChanges = () => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <User className="w-6 h-6" />
          Profile
        </h1>

        {/* Profile Picture */}
        <div className="flex flex-col items-center mt-4">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300 dark:border-gray-600"
          />
          {isEditing && (
            <input
              type="text"
              name="profilePicture"
              value={updatedUser.profilePicture}
              onChange={handleChange}
              className="mt-2 w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
              placeholder="Enter profile picture URL"
            />
          )}
        </div>

        {/* User Details */}
        <div className="mt-4">
          <label className="text-gray-700 dark:text-gray-300 block font-medium">📛 Name</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
            />
          ) : (
            <p className="text-gray-800 dark:text-white p-2">{user.name}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="text-gray-700 dark:text-gray-300 block font-medium">📧 Email</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
            />
          ) : (
            <p className="text-gray-800 dark:text-white p-2">{user.email}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          {isEditing ? (
            <button
              onClick={saveChanges}
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition"
            >
              💾 Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition"
            >
              <Edit className="w-5 h-5" />
              Edit Profile
            </button>
          )}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600 transition"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
