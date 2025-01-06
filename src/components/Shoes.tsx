type ShoesProps = {
  item: string;
};

const Shoes: React.FC<ShoesProps> = ({ item }) => (
  <div className="flex items-center justify-center bg-yellow-200 w-40 h-40 rounded-lg shadow-md">
    <span className="text-lg font-semibold text-yellow-800">{item}</span>
  </div>
);

export default Shoes;
