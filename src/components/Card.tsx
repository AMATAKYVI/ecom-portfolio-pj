import { FC } from 'react';

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
  return (
    <div className=" w-[250px] rounded-md bg-blue-700 m-1 flex flex-col justify-between">
      <div className="p-4">
        <img
          src="pc-product.jpg"
          alt="Product"
          className="w-full h-auto mb-2"
        />
        <div className="text-white text-lg font-bold mb-2">Title</div>
        <div className="text-white mb-2">Description</div>
      </div>
      <div className="bg-gray-800 text-white text-center py-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
