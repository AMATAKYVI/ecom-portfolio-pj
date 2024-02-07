'use client';
import { FunctionComponent, useEffect, useState } from 'react';
import Product from '../Product';
import CarouselComponent from '../CarouselComponent';
import { Spin } from 'antd';
import CarouselTest from '../CarouselTest';
import CarouselTesting from '../CarouselTest';

interface HomepageProps {}

/**
 * Home page where the user can see the many products available
 * need to sign in to sign up in order to purchase the product
 * @returns
 */
const Homepage: FunctionComponent<HomepageProps> = () => {
  // const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsDesktopOrLaptop(window.innerWidth >= 768);
  //   };

  //   handleResize();

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  // const [reloading, setIsReloading] = useState(false);
  // useEffect(() => {
  //   const isReloading =
  //     window.performance.navigation.type ===
  //     window.performance.navigation.TYPE_RELOAD;

  //   if (isReloading) {
  //     setIsReloading(true);
  //   } else {
  //     setIsReloading(false);
  //   }
  // }, []);
  return (
    <div className="">
      {/* display fixed banner instead if the screen larger than 768px or else display nothing */}

      <div className="md:ml-[150px] md:mr-[150px]">
        {/* <CarouselTesting
          images={[
            'https://via.placeholder.com/300x300',
            'https://via.placeholder.com/300x300',
            'https://via.placeholder.com/300x300',
          ]}
        /> */}
        <CarouselComponent
          images={[
            'https://via.placeholder.com/300x300',
            'https://via.placeholder.com/300x300',
            'https://via.placeholder.com/300x300',
          ]}
        />
      </div>

      <Product />
    </div>
  );
};

export default Homepage;
