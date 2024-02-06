import { FunctionComponent, useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import {
  HomeOutlined,
  ShopOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import { Menu, Dropdown, Button, MenuProps } from 'antd';

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
      label: <a></a>,
      key: 'home',
    },
  ];
  return (
    <>
      {isMobile && (
        <Dropdown menu={{ items }} placement="bottomRight">
          <Button type="text" icon={<MenuOutlined />} />
        </Dropdown>
      )}
      {!isMobile && (
        <Menu theme="light" mode="horizontal">
          <div className="w-full flex align-center justify-between mx-10">
            <div>
              {/* logo */}
              <Menu.Item>Home</Menu.Item>
            </div>
            <div className="flex gap-10">
              <Menu.Item>Item two</Menu.Item>
              <Menu.Item>Item three</Menu.Item>
              <Menu.Item>Item three</Menu.Item>
            </div>
          </div>
        </Menu>
      )}
    </>
  );
};

export default Navbar;
