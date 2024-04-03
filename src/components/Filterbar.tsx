import { FC } from 'react';
import { FaSortDown } from 'react-icons/fa';

interface FilterbarProps {}

const Filterbar: FC<FilterbarProps> = ({}) => {
  return (
    <div className="w-[30%]   bg-gray-100">
      <div className="">
        <button className="">
          <FaSortDown />
        </button>
        <label htmlFor="" className="">
          Price
        </label>
      </div>
      <div className="">
        <input type="checkbox" id="newArrival" name="checkbox" />
        <label htmlFor="newArrival" className="">
          New Arrival
        </label>
      </div>
    </div>
  );
};

export default Filterbar;
