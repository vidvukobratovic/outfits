import React, { useState } from "react";
import Top from "./components/Top";
import Pants from "./components/Pants";
import Shoes from "./components/Shoes";
import "./index.css";

type OutfitItem = string;

const App: React.FC = () => {
  const tops: OutfitItem[] = ["Red T-Shirt", "Blue Sweater", "White Blouse"];
  const pants: OutfitItem[] = ["Jeans", "Black Trousers", "Shorts"];
  const shoes: OutfitItem[] = ["Sneakers", "Boots", "Sandals"];

  const [currentTop, setCurrentTop] = useState<OutfitItem>(tops[0]);
  const [currentPants, setCurrentPants] = useState<OutfitItem>(pants[0]);
  const [currentShoes, setCurrentShoes] = useState<OutfitItem>(shoes[0]);

  const getRandomItem = (items: OutfitItem[]): OutfitItem =>
    items[Math.floor(Math.random() * items.length)];

  const randomizeOutfit = () => {
    setCurrentTop(getRandomItem(tops));
    setCurrentPants(getRandomItem(pants));
    setCurrentShoes(getRandomItem(shoes));
  };

  const randomizeItem = (type: "top" | "pants" | "shoes") => {
    if (type === "top") setCurrentTop(getRandomItem(tops));
    if (type === "pants") setCurrentPants(getRandomItem(pants));
    if (type === "shoes") setCurrentShoes(getRandomItem(shoes));
  };

  return (
    <div 
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6"
      onClick={randomizeOutfit} 
    >
      <div 
        className="flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}>
          <Top item={currentTop} onClick={() => randomizeItem("top")} />
          <Pants item={currentPants} onClick={() => randomizeItem("pants")} />
          <Shoes item={currentShoes} onClick={() => randomizeItem("shoes")} />
      </div>
    </div>
  );
};

export default App;
