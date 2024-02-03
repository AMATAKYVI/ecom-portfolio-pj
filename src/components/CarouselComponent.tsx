/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'antd';
import { FunctionComponent } from 'react';

interface CarouselComponentProps {}

const CarouselComponent: FunctionComponent<CarouselComponentProps> = () => {
  return (
    <div className="carousel-container h-[70vh]">
      <Carousel autoplay adaptiveHeight>
        <div>
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt="Image 1"
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt="Image 2"
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt="Image 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
