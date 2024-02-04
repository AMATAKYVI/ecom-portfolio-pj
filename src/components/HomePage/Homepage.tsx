'use client';
import { FunctionComponent } from 'react';
import Product from '../Product';
import CarouselComponent from '../CarouselComponent';
import { useMediaQuery } from 'react-responsive';

interface HomepageProps {}

const Homepage: FunctionComponent<HomepageProps> = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });
  return (
    <div className="">
      {/* display fixed banner instead if the screen larger than 768px */}
      {isDesktopOrLaptop ? null : (
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
