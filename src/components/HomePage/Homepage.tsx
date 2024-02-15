'use client';
import { FunctionComponent, useEffect, useState } from 'react';
import Product from '../Product';
import CarouselComponent from '../CarouselComponent';
import HomeAdsLanding from '../HomeAdsLanding';
import ProductSlidePerView from '../ProductSlidePerView';

interface HomepageProps {}

/**
 * Home page where the user can see the many products available
 * need to sign in to sign up in order to purchase the product
 * @returns
 */
const Homepage: FunctionComponent<HomepageProps> = () => {
  return (
    <div className="md:mx-[60px] lg:mx-[100px] xl:mx-[150px] border-l border-r border-gray-100">
      <div className="">
        <CarouselComponent
          images={[
            'https://via.placeholder.com/300x300',
            'https://via.placeholder.com/300x300',
            'https://via.placeholder.com/300x300',
          ]}
        />
      </div>
      <div>
        <HomeAdsLanding />
      </div>

      <div className="">
        {/* electronic */}
        <ProductSlidePerView />
      </div>
      <div className="">
        {/* not ideal to display like this */}
        {/* <Product /> */}
      </div>
    </div>
  );
};

export default Homepage;
