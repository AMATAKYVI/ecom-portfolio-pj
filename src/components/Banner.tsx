import { FC } from 'react';

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className="flex">
      <div className="w-[400px] h-[300px] bg-gray-200">
        image here maybe not good may be using overlay technique display image
        as the background
      </div>
      <div>
        something here maybe some catchy text dont overcomplicate this it just
        for fun
      </div>
    </div>
  );
};

export default Banner;
