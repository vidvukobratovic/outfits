import React, { useState } from "react";
import MenuButton from "./MenuButton";
import ProfileButton from "./ProfileButton";
import Modal from "./Modal";
import GarmentUpload from "./GarmentUpload";
import text from "../constants/text.json";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-gray-800 text-white py-4 px-6 flex items-center justify-between shadow-md">
        <button onClick={() => setIsModalOpen(true)} className="text-white bg-gray-700 px-3 py-2 rounded">
          <MenuButton />
        </button>
        <h1 className="text-lg font-semibold">{text.header.title}</h1>
        <ProfileButton />
      </header>

      {/* Modal for Uploading Garments */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-semibold text-center mb-4">Upload Your Garments</h2>
        <div className="flex flex-col gap-4">
          {/* Stacked Garment Upload Areas */}
          <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 flex items-center justify-center">
            <GarmentUpload category="top" onImageUploaded={() => {}} />
          </div>
          <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 flex items-center justify-center">
            <GarmentUpload category="bottom" onImageUploaded={() => {}} />
          </div>
          <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 flex items-center justify-center">
            <GarmentUpload category="shoes" onImageUploaded={() => {}} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;
