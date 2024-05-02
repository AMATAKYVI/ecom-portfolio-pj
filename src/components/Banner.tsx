import Image from 'next/image';
import { FC } from 'react';

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className="flex relative h-[500px] bg-gray-100 p-10 justify-center">
      <div className="flex flex-col justify-start gap-10 py-10 px-10">
        <h1 className="text-5xl font-bold">Welcome to our store</h1>
        <p className="text-gray-900">Get the best shoes at the best prices</p>
        <div className="flex gap-5 justify-start">
          <button className="">
            <span>Shop Now</span>
          </button>
          <button>
            <span>Learn More</span>
          </button>
        </div>
      </div>
      <Image
        src="/banner.png"
        alt="shoes"
        width="300"
        height="300"
        className="absolute top-1/2 left-[220px] transform -translate-x-1/2 -translate-y-1/2 z-[1]"
      />
      <div className="z-[2] text-black bg-gray-200 bg-opacity-200 ">
        something here maybe some catchy text dont overcomplicate this it just
        for fun
      </div>
    </div>
  );
};

export default Banner;
