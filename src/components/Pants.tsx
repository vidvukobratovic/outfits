import React from "react";

interface PantsProps {
  item: string;
  onClick: () => void;
}

const Pants: React.FC<PantsProps> = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-green-200 p-4 rounded-lg shadow-md text-center text-lg cursor-pointer hover:bg-green-300 transition"
    >
      👖 {item}
    </div>
  );
};

export default Pants;
