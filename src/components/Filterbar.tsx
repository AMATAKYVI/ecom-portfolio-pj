import { FC } from 'react';
import { FaSortDown } from 'react-icons/fa';

interface FilterbarProps {}

const Filterbar: FC<FilterbarProps> = ({}) => {
  return (
    <div className="w-[30%]  p-5 rounded-md bg-gray-100">
      <div className="">
        <button className="mx-2">
          <FaSortDown />
        </button>
        <label htmlFor="" className="">
          Price
        </label>
      </div>
      <div className="mt-2">
        <input
          type="checkbox"
          id="newArrival"
          name="checkbox"
          className="mx-2"
        />
        <label htmlFor="newArrival" className="">
          New Arrival
        </label>
      </div>
    </div>
  );
};

export default Filterbar;
