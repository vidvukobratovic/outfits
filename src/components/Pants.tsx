type PantsProps = {
  item: string;
};

const Pants: React.FC<PantsProps> = ({ item }) => (
  <div className="flex items-center justify-center bg-green-200 w-40 h-40 rounded-lg shadow-md">
    <span className="text-lg font-semibold text-green-800">{item}</span>
  </div>
);

export default Pants;
