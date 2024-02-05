'use client';
import { FunctionComponent } from 'react';
import Product from '../Product';
import CarouselComponent from '../CarouselComponent';
import { useMediaQuery } from 'react-responsive';

interface HomepageProps {}

/**
 * Home page where the user can the many products available
 * need to sign in to sign up inorder to purchase the product
 * @returns
 */
const Homepage: FunctionComponent<HomepageProps> = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });
  return (
    <div className="">
      {/* display fixed banner instead if the screen larger than 768px or else display nothing */}
      {isDesktopOrLaptop ? (
        //banner component go here
        <h1>i</h1>
      ) : (
        <div className="md:ml-[150px] md:mr-[150px]">
          <CarouselComponent
            images={[
              'https://via.placeholder.com/300x300',
              'https://via.placeholder.com/300x300',
              'https://via.placeholder.com/300x300',
            ]}
          />
        </div>
      )}
      <Product />
    </div>
  );
};

export default Homepage;
