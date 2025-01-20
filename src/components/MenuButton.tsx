import React from "react";

const MenuButton: React.FC = () => {
  return (
    <button
      className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-700 hover:bg-gray-600 text-white transition-all shadow-md"
      aria-label="Menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};

export default MenuButton;
