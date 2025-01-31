import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

type GarmentUploadProps = {
  category: "top" | "bottom" | "shoes";
  onImageUploaded: (category: "top" | "bottom" | "shoes", imageUrl: string) => void;
};

const GarmentUpload: React.FC<GarmentUploadProps> = ({ category, onImageUploaded }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onDrop = async (acceptedFiles: File[]) => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);

    try {
      const response = await axios.post("http://localhost:5000/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setImageUrl(response.data.image_url);
      onImageUploaded(category, response.data.image_url); // Notify parent component
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: false });

  return (
    <div>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag & drop an image for {category}, or click to select one</p>
      </div>
      {imageUrl && <img src={imageUrl} alt={`${category} garment`} />}
    </div>
  );
};

export default GarmentUpload;
