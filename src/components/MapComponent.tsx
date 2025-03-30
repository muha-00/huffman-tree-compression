
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

// Declare the global google namespace for TypeScript
declare global {
  interface Window {
    google: {
      maps: {
        Map: any;
        Polygon: any;
        Marker: any;
        InfoWindow: any;
      };
    };
  }
}

interface MapComponentProps {
  className?: string;
  apiKey?: string;
}

// Using a demo API key for development purposes only
// For production, this should be replaced with an environment variable
const DEMO_API_KEY = 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg';

const MapComponent: React.FC<MapComponentProps> = ({ className, apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const polygonsRef = useRef<any[]>([]);
  const infoWindowsRef = useRef<any[]>([]);
  
  useEffect(() => {
    if (!mapRef.current) return;
    
    // Use provided API key or fall back to demo key
    const key = apiKey || DEMO_API_KEY;
    
    const loader = new Loader({
      apiKey: key,
      version: 'weekly',
      libraries: ['maps']
    });
    
    let mounted = true;
    
    const initMap = async () => {
      try {
        const { Map } = await loader.importLibrary('maps');
        await loader.load();
        
        // Only proceed if component is still mounted
        if (!mounted || !mapRef.current) return;
        
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
        
        // Store map instance for cleanup
        mapInstanceRef.current = map;
        
        // Define GTA boundaries approximately
        const gtaBoundary = [
          { lat: 43.99, lng: -79.80 }, // Northwest corner
          { lat: 43.99, lng: -79.00 }, // Northeast corner
          { lat: 43.52, lng: -79.00 }, // Southeast corner
          { lat: 43.52, lng: -79.80 }, // Southwest corner
          { lat: 43.99, lng: -79.80 }, // Back to Northwest to close the polygon
        ];
        
        // Create a polygon to highlight the GTA area
        if (window.google && mounted) {
          const gtaPolygon = new window.google.maps.Polygon({
            paths: gtaBoundary,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.15,
          });
          
          gtaPolygon.setMap(map);
          polygonsRef.current.push(gtaPolygon);
          
          // Add Toronto marker
          const torontoMarker = new window.google.maps.Marker({
            position: { lat: 43.7417, lng: -79.3733 },
            map: map,
            title: "Toronto, ON"
          });
          
          markersRef.current.push(torontoMarker);
          
          // Add info window for Toronto
          const infoWindow = new window.google.maps.InfoWindow({
            content: "<div style='padding: 10px;'><strong>Toronto</strong><br>Our main service area</div>"
          });
          
          infoWindowsRef.current.push(infoWindow);
          
          torontoMarker.addListener("click", () => {
            infoWindow.open(map, torontoMarker);
          });
        }
        
        if (mounted) {
          setMapLoaded(true);
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };
    
    initMap();
    
    // Cleanup function
    return () => {
      mounted = false;
      
      // Clean up markers
      if (markersRef.current.length) {
        markersRef.current.forEach(marker => {
          if (marker) marker.setMap(null);
        });
        markersRef.current = [];
      }
      
      // Clean up polygons
      if (polygonsRef.current.length) {
        polygonsRef.current.forEach(polygon => {
          if (polygon) polygon.setMap(null);
        });
        polygonsRef.current = [];
      }
      
      // Clean up info windows
      if (infoWindowsRef.current.length) {
        infoWindowsRef.current.forEach(infoWindow => {
          if (infoWindow) infoWindow.close();
        });
        infoWindowsRef.current = [];
      }
      
      // No need to explicitly destroy the map, it will be garbage collected
      mapInstanceRef.current = null;
    };
  }, [apiKey]);
  
  return (
    <div 
      ref={mapRef} 
      className={`relative w-full h-[500px] rounded-lg overflow-hidden ${className}`}
    >
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-highshine"></div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
