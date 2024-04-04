import { FC } from 'react';

interface BannerProps {

}

const Banner: FC<BannerProps> = ({ }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-4 md:p-6">
      <div className="md:w-1/2">
        <img
          src="pc-product.jpg"
          alt="Product Image"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="md:w-1/2 px-4 md:px-6 mt-4 md:mt-0">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">title</h2>
        <p className="text-gray-700 mb-4">
          description
        </p>
        <a
          href="#"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Banner;
