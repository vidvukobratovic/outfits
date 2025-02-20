import { useEffect, useState } from "react";
import { fetchOutfit, fetchRandomGarment } from "../utils/api";

interface Garment {
  id: number;
  category: string;
  name: string;
  image_url: string;
}

const OutfitDisplay = () => {
  const [outfit, setOutfit] = useState<{ top?: Garment; bottom?: Garment; shoes?: Garment }>({});

  useEffect(() => {
    loadOutfit();
  }, []);

  const loadOutfit = async () => {
    const data = await fetchOutfit();
    if (data) setOutfit(data);
  };

  const randomizeOutfit = async () => {
    const top = await fetchRandomGarment("top");
    const bottom = await fetchRandomGarment("bottom");
    const shoes = await fetchRandomGarment("shoes");

    setOutfit({ top, bottom, shoes });
  };

  const randomizeSingleGarment = async (category: "top" | "bottom" | "shoes") => {
    const newGarment = await fetchRandomGarment(category);
    setOutfit((prevOutfit) => ({ ...prevOutfit, [category]: newGarment }));
  };

  return (
    <div className="relative w-40 h-[500px] mx-auto" onClick={randomizeOutfit}>
      {["top", "bottom", "shoes"].map((category, index) => (
        <div
          key={category}
          className={`absolute left-0 right-0 flex justify-center transition-opacity duration-300 ${
            outfit[category as keyof typeof outfit] ? "opacity-100" : "opacity-50"
          }`}
          style={{
            top: `${index * 160}px`,
          }}
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering full outfit randomization
            randomizeSingleGarment(category as "top" | "bottom" | "shoes");
          }}
        >
          {outfit[category as keyof typeof outfit] ? (
            <img
              src={outfit[category as keyof typeof outfit]!.image_url}
              alt={outfit[category as keyof typeof outfit]!.name}
              className="w-40 h-40 object-cover rounded-lg shadow-lg cursor-pointer"
            />
          ) : (
            <p className="text-center text-gray-500">No {category} found</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default OutfitDisplay;
