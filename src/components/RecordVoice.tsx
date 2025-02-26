"use client";

import { useState, useRef } from "react";
import { Mic, StopCircle, Loader, Save } from "lucide-react";

const RecordVoice = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedData, setExtractedData] = useState<{
    name?: string;
    email?: string;
    product?: string;
    calculation?: string;
  } | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const processVoice = async () => {
    setIsProcessing(true);

    setTimeout(() => {
      setExtractedData({
        name: "John Doe",
        email: "john.doe@example.com",
        product: "Herbal Tea",
        calculation: "15 + 10 = 25",
      });
      setIsProcessing(false);
    }, 3000); 
  };

  const startRecording = async () => {
    setIsRecording(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
    } catch (error) {
      console.error("Error accessing microphone:", error);
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    setIsRecording(false);

    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      processVoice();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🎙️ Record Voice</h1>

      {!isRecording ? (
        <button
          onClick={startRecording}
          className="bg-red-500 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-red-600 transition"
        >
          <Mic className="w-6 h-6" />
          Start Recording
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="bg-gray-700 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-gray-800 transition"
        >
          <StopCircle className="w-6 h-6" />
          Stop Recording
        </button>
      )}

      {isRecording && (
        <div className="mt-4 flex space-x-2">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className="w-2 h-8 bg-red-500 animate-bounce"
              style={{ animationDelay: `${index * 0.2}s` }}
            ></div>
          ))}
        </div>
      )}

      {isProcessing && (
        <div className="mt-6 flex items-center space-x-2">
          <Loader className="w-6 h-6 animate-spin text-gray-600" />
          <span className="text-gray-700">Processing Voice Data...</span>
        </div>
      )}

      {extractedData && !isProcessing && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-800">📋 Extracted Data</h2>
          <p className="text-gray-700"><strong>Name:</strong> {extractedData.name}</p>
          <p className="text-gray-700"><strong>Email:</strong> {extractedData.email}</p>
          <p className="text-gray-700"><strong>Product:</strong> {extractedData.product}</p>
          <p className="text-gray-700"><strong>Calculation:</strong> {extractedData.calculation}</p>

          <button className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition">
            <Save className="w-5 h-5" />
            Save Data
          </button>
        </div>
      )}
    </div>
  );
};

export default RecordVoice;
