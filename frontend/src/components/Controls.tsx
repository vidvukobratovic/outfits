type ControlsProps = {
  onRandomize: () => void;
  onRandomizeItem: (type: "top" | "pants" | "shoes") => void;
};

const Controls: React.FC<ControlsProps> = ({ onRandomize, onRandomizeItem }) => (
  <div className="flex gap-4">
    <button
      onClick={onRandomize}
      className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
    >
      Randomize Outfit
    </button>
    <button
      onClick={() => onRandomizeItem("top")}
      className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
    >
      Randomize Top
    </button>
    <button
      onClick={() => onRandomizeItem("pants")}
      className="px-4 py-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600"
    >
      Randomize Pants
    </button>
    <button
      onClick={() => onRandomizeItem("shoes")}
      className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
    >
      Randomize Shoes
    </button>
  </div>
);

export default Controls;
