
import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapComponentProps {
  className?: string;
  apiKey: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ className, apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mapRef.current) return;
    
    const loader = new Loader({
      apiKey: apiKey || '',
      version: 'weekly',
    });
    
    const initMap = async () => {
      try {
        const { Map } = await loader.importLibrary('maps');
        
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
        
        // Create a polygon to highlight the GTA
        const gtaPolygon = new google.maps.Polygon({
          paths: gtaBoundary,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.15,
        });
        
        gtaPolygon.setMap(map);
        
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
    />
  );
};

export default MapComponent;
