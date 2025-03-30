
import React, { useEffect, useRef, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Add proper typings for the Google Maps API
declare global {
  interface Window {
    initMap: () => void;
    google: typeof google;
  }
}

interface MapComponentProps {
  className?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ className }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  
  useEffect(() => {
    // Create a flag to track if the component is mounted
    let isMounted = true;
    
    // Load Google Maps JavaScript API
    const script = document.createElement('script');
    const apiKey = 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg'; // Demo API key
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      if (isMounted) {
        setMapError('Failed to load Google Maps');
        console.error('Google Maps script failed to load');
      }
    };
    
    // Define the callback function globally
    window.initMap = function() {
      if (!mapRef.current || !isMounted) return;
      
      try {
        // Create map centered on Toronto
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 43.7417, lng: -79.3733 },
          zoom: 10,
          mapTypeControl: true,
          fullscreenControl: true,
          streetViewControl: true,
        });
        
        // Add Toronto marker
        const torontoMarker = new window.google.maps.Marker({
          position: { lat: 43.7417, lng: -79.3733 },
          map: map,
          title: "Toronto, ON"
        });
        
        // Add info window for Toronto
        const infoWindow = new window.google.maps.InfoWindow({
          content: "<div style='padding: 10px;'><strong>Toronto</strong><br>Our main service area</div>"
        });
        
        torontoMarker.addListener("click", () => {
          infoWindow.open(map, torontoMarker);
        });
        
        if (isMounted) {
          setMapLoaded(true);
        }
      } catch (error) {
        console.error('Error initializing map:', error);
        if (isMounted) {
          setMapError('Error initializing map');
        }
      }
    };
    
    // Add script to document
    document.head.appendChild(script);
    
    // Clean up function
    return () => {
      isMounted = false;
      if (window.google && window.google.maps) {
        // Clean up any map listeners or objects if needed
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      // Remove the global callback
      delete window.initMap;
    };
  }, []);
  
  if (mapError) {
    return (
      <div className="relative w-full h-[calc(100vh-240px)] min-h-[500px] bg-slate-100 flex items-center justify-center">
        <div className="text-center p-6 rounded-lg bg-red-50 text-red-500">
          <p>Unable to load map: {mapError}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative w-full h-[calc(100vh-240px)] min-h-[500px]">
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div className="text-center">
            <Skeleton className="h-[400px] w-full mb-2" />
            <p className="text-muted-foreground">Loading map...</p>
          </div>
        </div>
      )}
      
      <div 
        ref={mapRef} 
        className={`absolute inset-0 ${className} ${!mapLoaded ? 'opacity-0' : 'opacity-100'}`}
      ></div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
        <h2 className="text-xl font-bold">Serving GTA and surrounding areas</h2>
      </div>
    </div>
  );
};

export default MapComponent;
