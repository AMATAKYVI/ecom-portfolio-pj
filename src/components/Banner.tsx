import Image from 'next/image';
import { FC } from 'react';

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <>
      <div className="mx-auto w-[100vw] sm:w-[95vw] md:w-[90vw] lg:w-[85vw] flex justify-center xs:flex-col py-10 px-5  bg-amber-300 relative  rounded shadow-sm">
        <div className="flex flex-col justify-center gap-5 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Welcome to our store
          </h1>
          <p className="text-sm sm:text-sm md:text-md lg:text-lg text-gray-900">
            Get the best shoes at the best prices
          </p>
          <div className="text-sm sm:text-sm md:text-md lg:text-lg  flex gap-5 ">
            <button className="">
              <span>Shop Now</span>
            </button>
            <button>
              <span>Learn More</span>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          {/* some style float */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[250px] h-[250px] opacity-30 rounded-full bg-orange-400 blur z-0"></div>
          </div>
          <Image
            src="/banner.png"
            alt="shoes"
            width="300"
            height="300"
            className="z-10"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
