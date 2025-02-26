"use client";

import { useState } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-500 h-[10vh] flex items-center px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/" className="h-full flex items-center">
          <Image
            src="/Indigo Modern AI Company Logo.png"
            alt="VoiceAI Logo"
            width={150}  // Adjust width as needed
            height={50}   // Adjust height proportionally
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white items-center">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/record" className="hover:text-gray-300">Record Voice</Link>
          <Link href="/history" className="hover:text-gray-300">History</Link>
          <Link href="/settings" className="hover:text-gray-300">Settings</Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2">
                <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Profile
                </Link>
                <button className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center space-x-2">
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-gradient-to-r from-purple-600 to-pink-500 md:hidden space-y-2 text-white text-center py-4">
          <Link href="/" className="block py-2 hover:text-gray-300">Home</Link>
          <Link href="/record" className="block py-2 hover:text-gray-300">Record Voice</Link>
          <Link href="/history" className="block py-2 hover:text-gray-300">History</Link>
          <Link href="/settings" className="block py-2 hover:text-gray-300">Settings</Link>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="w-full py-2 flex justify-center items-center space-x-2 hover:text-gray-300"
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
          </button>
          {profileOpen && (
            <div className="bg-white text-gray-800 rounded-lg shadow-lg py-2 mx-4">
              <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
