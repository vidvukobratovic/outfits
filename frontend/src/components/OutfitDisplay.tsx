import { useEffect, useState } from "react";
import { fetchOutfit } from "../utils/api";

interface Garment {
  id: number;
  category: string;
  name: string;
  image_url: string;
}

const OutfitDisplay = () => {
  const [outfit, setOutfit] = useState<{ top?: Garment; bottom?: Garment; shoes?: Garment }>({});

  useEffect(() => {
    const loadOutfit = async () => {
      const data = await fetchOutfit();
      if (data) setOutfit(data);
    };
    loadOutfit();
  }, []);

  return (
    <div className="flex justify-center gap-4 p-4">
      {["top", "bottom", "shoes"].map((category) => (
        <div key={category} className="border rounded-lg p-2 shadow-lg w-40">
          {outfit[category as keyof typeof outfit] ? (
            <>
              <img
                src={outfit[category as keyof typeof outfit]!.image_url}
                alt={outfit[category as keyof typeof outfit]!.name}
                className="w-full h-40 object-cover rounded"
              />
              <p className="text-center mt-2 capitalize">
                {outfit[category as keyof typeof outfit]!.name} ({category})
              </p>
            </>
          ) : (
            <p className="text-center text-gray-500">No {category} found</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default OutfitDisplay;
