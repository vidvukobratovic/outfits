import { useEffect, useState } from "react";
import { fetchGarments } from "../utils/api";

interface Garment {
  id: number;
  category: string;
  name: string;
  image_url: string;
}

const GarmentGallery = () => {
  const [garments, setGarments] = useState<Garment[]>([]);

  useEffect(() => {
    const loadGarments = async () => {
      const data = await fetchGarments();
      setGarments(data);
    };
    loadGarments();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {garments.length > 0 ? (
        garments.map((garment) => (
          <div key={garment.id} className="border rounded-lg p-2 shadow-lg">
            <img src={garment.image_url} alt={garment.name} className="w-full h-40 object-cover rounded" />
            <p className="text-center mt-2">{garment.name} ({garment.category})</p>
          </div>
        ))
      ) : (
        <p className="col-span-3 text-center text-gray-500">No garments uploaded yet.</p>
      )}
    </div>
  );
};

export default GarmentGallery;
