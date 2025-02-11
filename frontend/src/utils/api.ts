import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Adjust if needed

export const fetchGarments = async () => {
  try {
    const response = await axios.get(`${API_URL}/garments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching garments:", error);
    return [];
  }
};
