import { FC } from 'react';

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className="flex bg-gray-100 p-6 h-[50vh] mx-5">
      <div className="w-1/2">
        <img
          src="pc-product.jpg"
          alt="Product Image"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="w-1/2 px-6">
        <h2 className="text-2xl font-semibold mb-6">Product Name</h2>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          gravida risus, sed sodales leo.
        </p>
        <a
          href="#"
          className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Banner;
