import React from "react";

interface TopProps {
  item: string;
  onClick: () => void;
}

const Top: React.FC<TopProps> = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-blue-200 p-4 rounded-lg shadow-md text-center text-lg cursor-pointer hover:bg-blue-300 transition"
    >
      🧥 {item}
    </div>
  );
};

export default Top;
