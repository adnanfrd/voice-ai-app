"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Settings2 } from "lucide-react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [aiModel, setAiModel] = useState("default");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex flex-col items-center">
      <div className="max-w-lg w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <Settings2 className="w-6 h-6" />
          Settings
        </h1>

        <div className="mt-4">
          <label className="text-gray-700 dark:text-gray-300 block font-medium">
            🌍 Language Selection
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full mt-2 p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="ar">Arabic</option>
            <option value="hi">Hindi</option>
            <option value="zh">Chinese</option>
          </select>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300 font-medium">🌙 Dark Mode</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-300 dark:bg-gray-600 p-2 rounded-lg flex items-center gap-2 transition"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div className="mt-4">
          <label className="text-gray-700 dark:text-gray-300 block font-medium">
            🤖 AI Model Preferences
          </label>
          <select
            value={aiModel}
            onChange={(e) => setAiModel(e.target.value)}
            className="w-full mt-2 p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
          >
            <option value="default">Default Model</option>
            <option value="advanced">Advanced AI</option>
            <option value="custom">Custom Model</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
