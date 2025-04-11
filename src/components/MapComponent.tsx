
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface MapComponentProps {
  className?: string;
  center?: { lat: number; lng: number };
  zoom?: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ className, center, zoom }) => {
  // Create URL with dynamic center and zoom if provided
  const getMapUrl = () => {
    let baseUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.8085714913!2d-79.54286115!3d43.7181557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1651234567890!5m2!1sen!2sca";
    
    // The URL structure doesn't easily allow for changing center/zoom in this embed format
    // In a real-world scenario, we'd use a more flexible maps API
    return baseUrl;
  };

  return (
    <div className="relative w-full h-[500px] min-h-[500px]">
      <iframe 
        src={getMapUrl()} 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className={className}
      ></iframe>
      
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
        <h2 className="text-xl font-bold">Serving GTA and surrounding areas</h2>
      </div>
    </div>
  );
};

export default MapComponent;
