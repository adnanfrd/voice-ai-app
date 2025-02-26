"use client";

import { useState } from "react";
import { Trash, Download } from "lucide-react";
import { saveAs } from "file-saver";

interface HistoryItem {
  id: number;
  name: string;
  email: string;
  product: string;
  calculation: string;
  dateTime: string;
}

const History = () => {
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      product: "Herbal Tea",
      calculation: "15 + 10 = 25",
      dateTime: "2025-02-25 14:30",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      product: "Organic Honey",
      calculation: "50 - 20 = 30",
      dateTime: "2025-02-25 15:45",
    },
  ]);

  // Delete Record
  const deleteRecord = (id: number) => {
    setHistory(history.filter((item) => item.id !== id));
  };

  // Export to CSV
  const exportToCSV = () => {
    const csvContent =
      "Name,Email,Product,Calculation,Date & Time\n" +
      history
        .map(
          (item) =>
            `${item.name},${item.email},${item.product},${item.calculation},${item.dateTime}`
        )
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "history.csv");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">📜 Voice History</h1>

        {history.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Product</th>
                  <th className="border p-2">Calculation</th>
                  <th className="border p-2">Date & Time</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item) => (
                  <tr key={item.id} className="text-center hover:bg-gray-100">
                    <td className="border p-2">{item.name}</td>
                    <td className="border p-2">{item.email}</td>
                    <td className="border p-2">{item.product}</td>
                    <td className="border p-2">{item.calculation}</td>
                    <td className="border p-2">{item.dateTime}</td>
                    <td className="border p-2 flex justify-center gap-2">
                      <button
                        onClick={() => deleteRecord(item.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition flex items-center gap-1"
                      >
                        <Trash className="w-4 h-4" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-4">No records found.</p>
        )}

        {/* Export Button */}
        <button
          onClick={exportToCSV}
          className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition"
        >
          <Download className="w-5 h-5" />
          Export CSV
        </button>
      </div>
    </div>
  );
};

export default History;
