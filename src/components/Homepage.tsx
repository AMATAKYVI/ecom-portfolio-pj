import { FunctionComponent } from 'react';
import Product from './Product';
import CarouselComponent from './CarouselComponent';

interface HomepageProps {}

const Homepage: FunctionComponent<HomepageProps> = () => {
  return (
    <div className="">
      home page without protected
      <div>
        <CarouselComponent />
        <Product />
      </div>
    </div>
  );
};

export default Homepage;
