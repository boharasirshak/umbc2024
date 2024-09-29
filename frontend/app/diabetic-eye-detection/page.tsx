"use client";

import React, { useState } from "react";
import { getDiagnosis } from "../actions";

const DiabeticEyeDetection = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [diagnosis, setDiagnosis] = useState<string | null>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (): Promise<void> => {
    if (!selectedFile) {
      alert("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("image_file", selectedFile);

    try {
      const data = await getDiagnosis(formData);
      setDiagnosis(data.result);
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };

  return (
    <div className="h-screen">
      <h1 className="m-10 text-center text-3xl font-bold">
        Diabetic Eye Detection
      </h1>
      <div
        className="flex h-[40%] w-full items-center justify-center"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <label
          htmlFor="dropzone-file"
          className="dark:hover:border-gray-500dark:hover:bg-gray-600 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-800"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload image </span> or
              drag and drop your eye image
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG. Max size of 5MB
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      {selectedFile && (
        <div className="mt-4 text-center">
          <p>Selected file: {selectedFile.name}</p>
          <button
            onClick={handleSubmit}
            className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
          >
            Submit
          </button>
        </div>
      )}

      {diagnosis && (
        <div className="mt-5 text-center text-2xl font-semibold">
          <p>Diagnosis: {diagnosis}</p>
        </div>
      )}
    </div>
  );
};

export default DiabeticEyeDetection;
