import React from "react";
import MenuButton from "./MenuButton";
import ProfileButton from "./ProfileButton";
import text from "../constants/text.json";

interface HeaderProps {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  return (
    <header
      className="w-full bg-gray-800 text-white py-4 px-6 flex items-center justify-between shadow-md"
      onClick={onClick}
    >
      <MenuButton />
      <h1 className="text-lg font-semibold">{text.header.title}</h1>
      <ProfileButton />
    </header>
  );
};

export default Header;
