import React, { useState, useEffect } from "react";
import GarmentUpload from "./components/GarmentUpload";
import "./index.css";

type OutfitItem = string;

const App: React.FC = () => {
  const [currentTop, setCurrentTop] = useState<OutfitItem>("Red T-Shirt");
  const [currentPants, setCurrentPants] = useState<OutfitItem>("Jeans");
  const [currentShoes, setCurrentShoes] = useState<OutfitItem>("Sneakers");

  const handleImageUpload = (category: "top" | "bottom" | "shoes", imageUrl: string) => {
    if (category === "top") setCurrentTop(imageUrl);
    if (category === "bottom") setCurrentPants(imageUrl);
    if (category === "shoes") setCurrentShoes(imageUrl);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <main className="flex flex-col items-center justify-center flex-grow gap-6">
        <GarmentUpload category="top" onImageUploaded={handleImageUpload} />
        <GarmentUpload category="bottom" onImageUploaded={handleImageUpload} />
        <GarmentUpload category="shoes" onImageUploaded={handleImageUpload} />
        {currentTop && <img src={currentTop} alt="Top" />}
        {currentPants && <img src={currentPants} alt="Pants" />}
        {currentShoes && <img src={currentShoes} alt="Shoes" />}
      </main>
    </div>
  );
};

export default App;
