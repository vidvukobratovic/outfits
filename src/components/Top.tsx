type TopProps = {
  item: string;
};

const Top: React.FC<TopProps> = ({ item }) => (
  <div className="flex items-center justify-center bg-blue-200 w-40 h-40 rounded-lg shadow-md">
    <span className="text-lg font-semibold text-blue-800">{item}</span>
  </div>
);

export default Top;
