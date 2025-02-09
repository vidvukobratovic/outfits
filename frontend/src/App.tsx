import React, { useState, useEffect } from "react";
import GarmentUpload from "./components/GarmentUpload";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow gap-6 py-4">
        <div className="flex flex-col gap-8">
          {/* Garment Uploads */}
          <GarmentUpload category="top" onImageUploaded={handleImageUpload} />
          <GarmentUpload category="bottom" onImageUploaded={handleImageUpload} />
          <GarmentUpload category="shoes" onImageUploaded={handleImageUpload} />
        </div>

        <div className="flex flex-col gap-6 mt-6">
          {/* Display Uploaded Garments */}
          {currentTop && (
            <div className="garment-display">
              <h2 className="text-xl font-semibold">Top</h2>
              <img src={currentTop} alt="Top garment" className="garment-img" />
            </div>
          )}
          {currentPants && (
            <div className="garment-display">
              <h2 className="text-xl font-semibold">Bottom</h2>
              <img src={currentPants} alt="Pants garment" className="garment-img" />
            </div>
          )}
          {currentShoes && (
            <div className="garment-display">
              <h2 className="text-xl font-semibold">Shoes</h2>
              <img src={currentShoes} alt="Shoes garment" className="garment-img" />
            </div>
          )}
        </div>
      </main>
      <Footer onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

export default App;
