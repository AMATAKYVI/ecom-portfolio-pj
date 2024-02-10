import { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    // need some more improvement
    <footer className=" bg-zinc-200 text-gray-600 font-semibold justify-evenly text-xs py-5">
      <div className="flex justify-evenly text-xs py-5 border-t border-t-zinc-300 border-b border-b-zinc-300">
        <div className="flex flex-col gap-5 justify-center">
          <div className="">Contact Info</div>
          <div className="">Product Categories</div>
          <div className="">Social Media</div>
          <div className="">Newsletter Signup</div>
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <div className="">Security</div>
          <div className="">Payment Options</div>
          <div className="">Shipping Info</div>
          <div className="">Returns Policy</div>
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <div className="">Terms of service</div>
          <div className="">Privacy Settings</div>
          <div className="">Copyright Info</div>
          <div className="">Creator Info</div>
        </div>
      </div>
      {/* footer center */}
      <div className=" text-black text-center py-5">
        <p>&copy; 2024 - Next.js E-commerce</p>
      </div>
    </footer>
  );
};

export default Footer;
