type ShoesProps = {
    item: string;
  };
  
  const Shoes: React.FC<ShoesProps> = ({ item }) => <div>{item}</div>;
  
  export default Shoes;
  