import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchOutfit = async () => {
    try {
        const response = await axios.get(`${API_URL}/outfit`);
        return response.data;
    } catch (error) {
        console.error("Error fetching outfit:", error);
    return null;
    }
};

export const fetchRandomGarment = async (category: "top" | "bottom" | "shoes") => {
  try {
    const response = await fetch(`http://localhost:5000/api/random?category=${category}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching random garment:", error);
    return null;
  }
};

export const uploadGarment = async (file: File, category: "top" | "bottom" | "shoes") => {
const formData = new FormData();
formData.append("file", file);
formData.append("category", category);

try {
  const response = await axios.post("http://localhost:5000/api/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data.image_url;
} catch (error) {
  console.error("Error uploading image:", error);
  throw error;
}
};