import { FC } from 'react';
import { CiShoppingCart } from 'react-icons/ci';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="bg-gray-800 py-3 px-3 flex justify-between items-center">
      <a href="https://www.example.com" className=" px-4">
        <img src="logo.png" alt="Company Logo" />
      </a>
      <div className="flex gap-1 items-center justify-center">
        <a href="contact.html" className="text-white px-4">
          About
        </a>
        <a href="contact.html" className="text-white px-4">
          Contact
        </a>
        <a href="policy.html" className="text-white px-4">
          Policy
        </a>
        <a
          href="login.html"
          className="text-white px-4 bg-blue-500 py-2 rounded-md"
        >
          Login
        </a>
        <a href="card">
          <CiShoppingCart className="text-white w-6 h-6" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
