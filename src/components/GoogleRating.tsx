
import React from 'react';
import { Star } from 'lucide-react';

interface GoogleRatingProps {
  className?: string;
}

const GoogleRating: React.FC<GoogleRatingProps> = ({ className }) => {
  return (
    <a 
      href="https://www.google.com/maps/place/High+Shine+Cleaning/@43.453034,-80.0131259,10z/data=!3m1!4b1!4m6!3m5!1s0x805650a1c9dbad87:0x38d0ec456cca1c8f!8m2!3d43.4530109!4d-79.6828021!16s%2Fg%2F11w1yp57dj?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ${className}`}
    >
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/60806a1c-46ea-4ef6-9f81-9a2a0cc1ea10.png" 
          alt="Google" 
          className="h-8 mr-3"
        />
        <div>
          <div className="text-sm text-gray-500">Google rating</div>
          <div className="flex items-center">
            <div className="font-bold text-lg mr-2">5.0</div>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-1">Based on 110+ reviews</div>
        </div>
      </div>
    </a>
  );
};

export default GoogleRating;
