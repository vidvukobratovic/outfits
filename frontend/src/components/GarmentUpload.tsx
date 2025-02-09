import React, { useRef } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import text from "../constants/text.json";

type GarmentUploadProps = {
  category: "top" | "bottom" | "shoes";
  onImageUploaded: (category: "top" | "bottom" | "shoes", imageUrl: string) => void;
};

const GarmentUpload: React.FC<GarmentUploadProps> = ({ category, onImageUploaded }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onDrop = async (acceptedFiles: File[]) => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);

    try {
      const response = await axios.post("http://localhost:5000/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      onImageUploaded(category, response.data.image_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    noClick: true, // Prevents auto-opening file dialog when clicking inside dropzone
  });

  return (
    <div
      {...getRootProps()}
      className="w-full h-32 flex items-center justify-center cursor-pointer"
      onClick={() => inputRef.current?.click()} // Triggers file dialog on click
    >
      <input {...getInputProps()} ref={inputRef} />
      <p className="text-gray-500">{text.modal.uploadGarment}{category}</p>
    </div>
  );
};

export default GarmentUpload;
