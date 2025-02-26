"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mic, List, ArrowRight } from "lucide-react";

interface Recording {
  id: number;
  name: string;
  date: string;
}

const Home = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Change based on authentication
  const [recentRecordings, setRecentRecordings] = useState<Recording[]>([
    { id: 1, name: "John Doe", date: "Feb 25, 2025" },
    { id: 2, name: "Jane Smith", date: "Feb 24, 2025" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
        {/* App Introduction */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">🎤 Voice AI App</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Convert voice into structured data effortlessly! Detect names, emails, products, and perform calculations in multiple languages.
        </p>

        {/* Start Recording Button */}
        <button
          onClick={() => router.push("/record")}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition"
        >
          <Mic className="w-5 h-5" />
          Start Recording
        </button>

        {/* Recent Recordings */}
        {isLoggedIn && recentRecordings.length > 0 && (
          <div className="mt-8 text-left">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white flex items-center gap-2">
              <List className="w-5 h-5" />
              Recent Recordings
            </h2>
            <ul className="mt-4 space-y-3">
              {recentRecordings.map((record) => (
                <li
                  key={record.id}
                  className="flex justify-between items-center p-3 bg-gray-200 dark:bg-gray-700 rounded-lg"
                >
                  <span className="text-gray-800 dark:text-white">{record.name}</span>
                  <span className="text-gray-500 dark:text-gray-300 text-sm">{record.date}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Redirect to History (if logged in) */}
        {isLoggedIn && (
          <button
            onClick={() => router.push("/history")}
            className="mt-6 text-blue-500 hover:text-blue-600 flex items-center gap-2 transition"
          >
            View Full History <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
