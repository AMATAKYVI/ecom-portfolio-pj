import { FC } from 'react';

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
  return (
    <div className="w-[250px] h-[200px] rounded-md bg-blue-700 m-1">
      <div className="">Image</div>
      <div className="">Title</div>
      <div className="">description</div>
      <div className="">Add button</div>
    </div>
  );
};

export default Card;
