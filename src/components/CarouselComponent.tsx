/* eslint-disable @next/next/no-img-element */
import { FunctionComponent, useState } from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

interface CarouselComponentProps {
  images: string[];
}

const CarouselComponent: FunctionComponent<CarouselComponentProps> = ({
  images,
}) => {
  return (
    <Carousel>
      {images.map((imageUrl, index) => (
        <div key={index} className="h-64">
          <Image
            width={400}
            height={300}
            className="object-cover object-center w-full h-full"
            src={imageUrl}
            alt={`Slide ${index}`}
            priority
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
