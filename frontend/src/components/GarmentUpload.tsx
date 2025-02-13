import React, { useRef } from "react";
import { useDropzone } from "react-dropzone";
import { uploadGarment } from "../utils/api";
import text from "../constants/text.json";

type GarmentUploadProps = {
  category: "top" | "bottom" | "shoes";
  onImageUploaded: (category: "top" | "bottom" | "shoes", imageUrl: string) => void;
};

const GarmentUpload: React.FC<GarmentUploadProps> = ({ category, onImageUploaded }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onDrop = async (acceptedFiles: File[]) => {
    try {
      const imageUrl = await uploadGarment(acceptedFiles[0], category);
      onImageUploaded(category, imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    noClick: true,
  });

  return (
    <div
      {...getRootProps()}
      className="w-full h-32 flex items-center justify-center cursor-pointer"
      onClick={() => inputRef.current?.click()}
    >
      <input {...getInputProps()} ref={inputRef} />
      <p className="text-gray-500">{text.modal.uploadGarment} {category}</p>
    </div>
  );
};

export default GarmentUpload;
