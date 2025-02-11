import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GarmentGallery from "./components/GarmentGallery";
import "./index.css";


const App: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow gap-6 py-4">
        <GarmentGallery />
      </main>
      <Footer onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

export default App;
