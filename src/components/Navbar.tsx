import { FunctionComponent, useState } from 'react';
import Link from 'next/link';
import {
  HomeOutlined,
  ShopOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import { Menu, Dropdown, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  if (isMobile) {
    const menu = (
      <Menu>
        <Menu.Item key="home">
          <Link href="/">
            <button>
              <HomeOutlined /> Home
            </button>
          </Link>
        </Menu.Item>
        <Menu.Item key="shop">
          <Link href="/shop">
            <button>
              <ShopOutlined /> Shop
            </button>
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link href="/about">
            <button>
              <InfoCircleOutlined /> About Us
            </button>
          </Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link href="/contact">
            <button>
              <PhoneOutlined /> Contact Us
            </button>
          </Link>
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu} placement="bottomRight">
        <Button type="text" icon={<MenuOutlined />} />
      </Dropdown>
    );
  }
  return (
    <Menu theme="light" mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="shop" icon={<ShopOutlined />}>
        <Link href="/shop">Shop</Link>
      </Menu.Item>
      <Menu.Item key="about" icon={<InfoCircleOutlined />}>
        <Link href="/about">About Us</Link>
      </Menu.Item>
      <Menu.Item key="contact" icon={<PhoneOutlined />}>
        <Link href="/contact">Contact Us</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
