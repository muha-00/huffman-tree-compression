
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface PromoPopupProps {
  onClose: () => void;
}

const PromoPopup: React.FC<PromoPopupProps> = ({ onClose }) => {
  // Calculate expiration date - always 6 days from today
  const getExpiryDate = (): string => {
    const date = new Date();
    date.setDate(date.getDate() + 6);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Handle click outside and escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">
            Limited Time Offer, exp. {getExpiryDate()}!
          </h2>
          
          <p className="text-lg mb-8">
            Mention coupon code <span className="font-bold text-[#62BFF0]">HIGHSHINE20</span> when you book a quote 
            and receive a 20% discount on your first service with High Shine Cleaning.
          </p>
          
          <button 
            onClick={onClose}
            className="bg-[#62BFF0] text-white px-8 py-2 rounded-lg font-medium hover:bg-[#62BFF0]/90 transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
