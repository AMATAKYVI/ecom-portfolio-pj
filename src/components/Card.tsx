import { FunctionComponent } from 'react';

interface CardProps {
  item: ProductType;
}
interface ProductType {
  _id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: Array<string>;
}
const Card: FunctionComponent<CardProps> = ({ item }) => {
  return (
    <div
      className="border w-[300px] p-4 bg-slate-800 s shadow-md rounded-lg text-white"
      key={item._id}
    >
      <div className="flex justify-evenly flex-col items-start">
        <h1 className="text-lg font-semibold text-white">{item.name}</h1>
        <p className="text-sm text-gray-400 mb-2">{item.description}</p>
        <p className="w-fit h-[150px]">asd</p>{' '}
        <p className="text-gray-300 font-semibold">$ {item.price}</p>
        <p className="text-gray-400 text-xs">In Stocks: {item.stockQuantity}</p>
      </div>
    </div>
  );
};

export default Card;
