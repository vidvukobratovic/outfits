import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import OutfitDisplay from "./components/OutfitDisplay";


const App: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow gap-6 py-4">
        <OutfitDisplay />
      </main>
      <Footer onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

export default App;
