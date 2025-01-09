import React from "react";

interface ShoesProps {
  item: string;
  onClick: () => void;
}

const Shoes: React.FC<ShoesProps> = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-red-200 p-4 rounded-lg shadow-md text-center text-lg cursor-pointer hover:bg-red-300 transition"
    >
      👟 {item}
    </div>
  );
};

export default Shoes;
