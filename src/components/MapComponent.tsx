
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapComponentProps {
  className?: string;
  apiKey: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ className, apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  useEffect(() => {
    if (!mapRef.current || !apiKey) return;
    
    const loader = new Loader({
      apiKey: apiKey,
      version: 'weekly',
      libraries: ['maps']
    });
    
    const initMap = async () => {
      try {
        const { Map } = await loader.importLibrary('maps');
        await loader.load();
        
        // Center on Greater Toronto Area
        const center = { lat: 43.7417, lng: -79.3733 };
        
        const map = new Map(mapRef.current, {
          center,
          zoom: 10,
          mapId: 'DEMO_MAP_ID',
          mapTypeControl: true,
          fullscreenControl: true,
          streetViewControl: true,
        });
        
        // Define GTA boundaries approximately
        const gtaBoundary = [
          { lat: 43.99, lng: -79.80 }, // Northwest corner
          { lat: 43.99, lng: -79.00 }, // Northeast corner
          { lat: 43.52, lng: -79.00 }, // Southeast corner
          { lat: 43.52, lng: -79.80 }, // Southwest corner
          { lat: 43.99, lng: -79.80 }, // Back to Northwest to close the polygon
        ];
        
        // Create a polygon to highlight the GTA area
        if (window.google) {
          const gtaPolygon = new window.google.maps.Polygon({
            paths: gtaBoundary,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.15,
          });
          
          gtaPolygon.setMap(map);
        }
        
        setMapLoaded(true);
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };
    
    initMap();
  }, [apiKey]);
  
  return (
    <div 
      ref={mapRef} 
      className={`relative w-full h-[500px] rounded-lg overflow-hidden ${className}`}
    >
      {!apiKey && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          Please provide a Google Maps API key
        </div>
      )}
      {apiKey && !mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-highshine"></div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
