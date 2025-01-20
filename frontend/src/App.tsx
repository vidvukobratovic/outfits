import React, { useState, useEffect } from "react";
import Top from "./components/Top";
import Pants from "./components/Pants";
import Shoes from "./components/Shoes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import axios from "axios";

type OutfitItem = string;

const App: React.FC = () => {
  const [currentTop, setCurrentTop] = useState<OutfitItem>("Red T-Shirt");
  const [currentPants, setCurrentPants] = useState<OutfitItem>("Jeans");
  const [currentShoes, setCurrentShoes] = useState<OutfitItem>("Sneakers");

  // Function to fetch random outfit from the backend
  const fetchRandomOutfit = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/randomize");
      const { top, pants, shoes } = response.data;
      setCurrentTop(top);
      setCurrentPants(pants);
      setCurrentShoes(shoes);
    } catch (error) {
      console.error("Error fetching outfit data:", error);
    }
  };

  const randomizeItem = (type: "top" | "pants" | "shoes") => {
    if (type === "top") fetchRandomOutfit(); // Call backend to get a random top
    if (type === "pants") fetchRandomOutfit(); // Call backend to get a random pants
    if (type === "shoes") fetchRandomOutfit(); // Call backend to get a random shoes
  };

  useEffect(() => {
    // Initial fetch when the component mounts
    fetchRandomOutfit();
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col justify-between"
      onClick={fetchRandomOutfit} // Randomize on click
    >
      <Header onClick={(e) => e.stopPropagation()} />
      <main className="flex flex-col items-center justify-center flex-grow gap-6">
        <div className="flex flex-col items-center">
          <Top item={currentTop} onClick={() => randomizeItem("top")} />
          <Pants item={currentPants} onClick={() => randomizeItem("pants")} />
          <Shoes item={currentShoes} onClick={() => randomizeItem("shoes")} />
        </div>
      </main>
      <Footer onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

export default App;
