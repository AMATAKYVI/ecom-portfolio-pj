import { MenuOutlined } from '@ant-design/icons';
import { FunctionComponent, useEffect, useState } from 'react';

import { Button, Dropdown, MenuProps } from 'antd';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
interface NavbarProps {}
// type MenuPropsType = {
//   key: string;
//   icon: ReactNode;
//   link: string;
// }[];

const Navbar: FunctionComponent<NavbarProps> = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Call handleResize initially
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount
  const items: MenuProps['items'] = [
    {
      label: (
        <p className=" text-center text-black px-5 rounded-sm py-1">Home</p>
      ),
      key: 'Home',
    },
    {
      label: (
        <p className=" text-center text-black  px-5 rounded-sm py-1">About</p>
      ),
      key: 'Cart',
    },
    {
      label: (
        <p className=" text-center text-black  px-5 rounded-sm py-1">FAQs</p>
      ),
      key: 'FAQs',
    },
    {
      label: (
        <p className=" text-center text-black px-5 rounded-sm py-1 ">Login</p>
      ),
      key: 'Login',
    },
  ];
  return (
    <>
      {isMobile && (
        <div className="flex justify-between align-center sticky top-0 text-white z-10 py-2 border-b mb-2 bg-blue-700 rounded-b-sm font-semibold">
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            overlayStyle={{ width: '50%' }}
          >
            <Button
              type="text"
              icon={<MenuOutlined className=" text-white" />}
            />
          </Dropdown>
          <div className="hover:text-gray-300 mx-4 px-2 my-auto rounded-full cursor-pointer transition-all duration-100 relative font-semibold">
            <ShoppingCart className="w-5" />
            <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
              1
            </div>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className="px-5 text-sm py-2  flex border-b mb-2 sticky top-0 z-10 bg-blue-700 shadow-sm text-white font-semibold  rounded-b-sm">
          <div className="w-full flex align-center justify-between mx-5">
            <div className="flex items-center cursor-pointer hover:bg-gray-100 rounded-lg shadow-md transition duration-500">
              <Image
                src="/taklogo.png"
                width={30}
                height={30}
                alt="some logo"
              />
            </div>
            <div className="flex gap-10 items-center">
              <div className="cursor-pointer">
                <p>Shop</p>
              </div>
              <div className="cursor-pointer">
                <p>Contact</p>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="cursor-pointer">
                  <p className="">About</p>{' '}
                </div>

                {/* <HelpCircle className="w-4 h-4" /> */}
              </div>
              <div className="relative">
                <div className=" px-2 my-auto rounded-full cursor-pointer transition-all duration-100">
                  <ShoppingCart className="w-5 h-5" />
                  <div className="absolute  top-[-5px] py-1 px-2 right-3 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                    1
                  </div>
                </div>
              </div>
              {/* <Menu.Item className="">Item two</Menu.Item>
                <Menu.Item>Item three</Menu.Item>
                <Menu.Item>Item three</Menu.Item> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
