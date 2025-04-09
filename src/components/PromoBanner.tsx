import React, { useState } from 'react';
import { Info } from 'lucide-react';
import PromoPopup from './PromoPopup';
const PromoBanner = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Calculate expiration date - always 6 days from today
  const getExpiryDate = (): string => {
    const date = new Date();
    date.setDate(date.getDate() + 6);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };
  return <>
      <div className="bg-[#0a2341] text-white text-sm py-2 px-4 relative">
        <div className="container mx-auto flex justify-center items-center">
          <span className="mr-1">20% off your first service. Use Code: HIGHSHINE20</span>
          <button onClick={() => setShowPopup(true)} className="ml-1 p-1 rounded-full text-white hover:bg-white/10">
            <Info size={16} />
          </button>
        </div>
      </div>
      
      {showPopup && <PromoPopup onClose={() => setShowPopup(false)} />}
    </>;
};
export default PromoBanner;