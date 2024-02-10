import React from 'react';
import { Lock } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { PackageCheck } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';

interface HomeAdsLandingProps {}
const HomeAdsLanding: React.FC<HomeAdsLandingProps> = () => {
  return (
    <div className="text-sm font-semibold  mx-auto  sm:w-[100%] md:w-[90%] lg:w-[80%] xl:w-[70%] z-10 mb-2">
      {/* first div */}
      <div className="bg-green-600 text-white flex py-1 rounded-t-lg px-2 border-green-900 border inset-1">
        <div className="flex-1 flex justify-center gap-1 items-center">
          <BadgeCheck className="w-4" />
          <p>Our Commitments</p>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex-1 flex justify-center gap-1 items-center">
            <Lock className="w-4" />
            <p> Privacy</p>
          </div>
          <div className="flex-1 flex justify-center gap-1 items-center">
            <ShieldCheck className="w-4" />
            <p>Safety</p>
          </div>
          <div className="flex-1 flex justify-center gap-1 items-center">
            <PackageCheck className="w-4" />
            <p>Delivery</p>
          </div>
        </div>
      </div>
      {/* second div */}
      <div className=""></div>
    </div>
  );
};
export default HomeAdsLanding;
