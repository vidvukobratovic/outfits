import React, { useState } from "react";

interface FooterProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Footer: React.FC<FooterProps> = ({ onClick }) => {
  const [showHelp, setShowHelp] = useState(false);

  const toggleHelp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent randomization
    setShowHelp(!showHelp);
  };

  return (
    <footer
      className="w-full bg-gray-800 text-white py-4 px-6 flex items-center justify-end relative"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); // Prevent randomization
        if (onClick) onClick(e); // Allow other handlers if necessary
      }}
    >
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 text-white transition-all shadow-md"
        aria-label="Help"
        onClick={toggleHelp}
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
            d="M12 18h.01M12 8a4 4 0 00-4 4m4-4a4 4 0 014 4m-4 4h.01m0 4a1.5 1.5 0 110-3m0 0h.01m0 0h-.01"
          />
        </svg>
      </button>

      {showHelp && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation(); // Prevent randomization
          }}
        >
          <div
            className="bg-white text-black rounded-lg p-6 shadow-lg w-11/12 max-w-md"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">About the App</h2>
            <p className="mb-4">
              Welcome to the Outfit Generator! Use this app to create fun and
              unique outfits by randomly selecting tops, pants, and shoes. You
              can tap individual items to change them or click anywhere else to
              randomize the entire outfit.
            </p>
            <button
              className="w-full py-2 bg-red-600 hover:bg-red-500 text-white rounded-md font-bold transition-all"
              onClick={toggleHelp}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
