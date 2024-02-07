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
  return (
    <div className="">
      <div className="md:ml-[150px] md:mr-[150px]">
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
