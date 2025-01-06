type PantsProps = {
    item: string;
  };
  
  const Pants: React.FC<PantsProps> = ({ item }) => <div>{item}</div>;
  
  export default Pants;
  