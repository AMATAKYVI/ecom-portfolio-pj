import React from 'react';
import { Truck } from 'lucide-react';
import { ArchiveRestore } from 'lucide-react';

interface HeaderTopProps {}
const HeaderTop: React.FC<HeaderTopProps> = () => {
  return (
    <div className="bg-zinc-900 text-white flex justify-evenly cursor-pointer">
      <div className="flex-1 text-center items-center border-gray-300 flex justify-center gap-2 py-1">
        <Truck className="text-green-400" />
        <p className="text-green-400">Shipping Exclusively</p>
      </div>
      <span className="bg-white border rounded-xl border-gray-400"></span>

      <div className="flex-1 text-center py-1">
        <div className="flex-1 text-center items-center border-gray-300 flex justify-center gap-2 py-2">
          <ArchiveRestore className="text-yellow-400" />
          <p className="text-yellow-400"> 30 Days Return</p>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
