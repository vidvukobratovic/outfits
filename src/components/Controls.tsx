type ControlsProps = {
    onRandomize: () => void;
    onRandomizeItem: (type: "top" | "pants" | "shoes") => void;
  };
  
  const Controls: React.FC<ControlsProps> = ({ onRandomize, onRandomizeItem }) => (
    <div>
      <button onClick={onRandomize}>Randomize Outfit</button>
      <button onClick={() => onRandomizeItem("top")}>Randomize Top</button>
      <button onClick={() => onRandomizeItem("pants")}>Randomize Pants</button>
      <button onClick={() => onRandomizeItem("shoes")}>Randomize Shoes</button>
    </div>
  );
  
  export default Controls;
  