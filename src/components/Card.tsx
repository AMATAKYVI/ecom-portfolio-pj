import { FC } from 'react';

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
  return (
    <div className=" w-[250px] rounded-md bg-blue-700 m-1 flex flex-col justify-between"></div>
  );
};

export default Card;
