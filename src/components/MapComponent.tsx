
import React, { useEffect, useRef, useState } from 'react';

interface MapComponentProps {
  className?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ className }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  useEffect(() => {
    // Load Google Maps JavaScript API
    const script = document.createElement('script');
    const apiKey = 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg'; // Demo API key
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    // Define the callback function globally
    window.initMap = function() {
      if (!mapRef.current) return;
      
      // Create map centered on Toronto
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 43.7417, lng: -79.3733 },
        zoom: 10,
        mapTypeControl: true,
        fullscreenControl: true,
        streetViewControl: true,
      });
      
      // Add Toronto marker
      const torontoMarker = new google.maps.Marker({
        position: { lat: 43.7417, lng: -79.3733 },
        map: map,
        title: "Toronto, ON"
      });
      
      // Add info window for Toronto
      const infoWindow = new google.maps.InfoWindow({
        content: "<div style='padding: 10px;'><strong>Toronto</strong><br>Our main service area</div>"
      });
      
      torontoMarker.addListener("click", () => {
        infoWindow.open(map, torontoMarker);
      });
      
      setMapLoaded(true);
    };
    
    // Add script to document
    document.head.appendChild(script);
    
    // Clean up
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      // Remove the global callback
      delete window.initMap;
    };
  }, []);
  
  return (
    <div className="relative w-full h-[calc(100vh-240px)] min-h-[500px]">
      <div 
        ref={mapRef} 
        className={`absolute inset-0 ${className}`}
      ></div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
        <h2 className="text-xl font-bold">Serving GTA and surrounding areas</h2>
      </div>
    </div>
  );
};

// Add the global initMap function to the window object type
declare global {
  interface Window {
    initMap: () => void;
    google: any;
  }
}

export default MapComponent;
