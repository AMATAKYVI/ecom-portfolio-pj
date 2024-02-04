/* eslint-disable @next/next/no-img-element */
'use client';
import { FunctionComponent, useState } from 'react';
import { Carousel } from 'antd';
interface CarouselComponentProps {
  images: string[];
}

const CarouselComponent: FunctionComponent<CarouselComponentProps> = ({
  images,
}) => {
  return (
    // autoPlay
    <Carousel>
      <div className="h-64 flex justify-center items-center bg-blue-700">
        <h3 className="text-white text-4xl">1</h3>
      </div>
      <div className="h-64 flex justify-center items-center bg-blue-700">
        <img
          src="https://media.istockphoto.com/id/1436061606/photo/flying-colorful-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-shoe.webp?b=1&s=170667a&w=0&k=20&c=GXD8Ci32Wa8c8Zc49domJFzqpCTaHgxe96_qfM7ml8w="
          alt=""
          className="w-full h-full  object-cover object-center"
        />
      </div>
      <div className="h-64 flex justify-center items-center bg-blue-700">
        <h3 className="text-white text-4xl">3</h3>
      </div>
      <div className="h-64 flex justify-center items-center bg-blue-700">
        <h3 className="text-white text-4xl">4</h3>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
