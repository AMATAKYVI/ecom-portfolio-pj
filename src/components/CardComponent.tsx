'use client';
import Image from 'next/image';
import { FunctionComponent, useEffect, useState } from 'react';

interface CardProps {
  item: ProductType;
}
interface ProductType {
  _id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  categories: Array<string>;
}
const CardComponent: FunctionComponent<CardProps> = ({
  item: { _id, name, description, price, stockQuantity, categories },
}) => {
  return (
    <div className="w-[100%] height-[100px]">
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        {/* <Image
          width={200}
          height={200}
          className="w-full"
          src={images}
          alt={name}
        /> */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
          <div className="text-gray-700 font-semibold mt-2">${price}</div>
          <div className="text-gray-500 mt-2">Quantity: {stockQuantity}</div>
          <div className="text-gray-500 mt-2">
            Categories: {categories.join(', ')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
