
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Reviews = () => {
  // Handle Elfsight script loading for the Reviews widget only
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    
    // Append the script to the document
    document.body.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Layout>
      <div className="px-0 py-0 w-full">
        {/* Hero section - full width image */}
        <div className="relative w-full h-[500px] mb-0">
          <img 
            src="/lovable-uploads/19dcc04c-30dd-49c2-89e1-5016f2a88ed4.png" 
            alt="Happy customers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-8 md:px-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">Reviews</h1>
            <p className="text-white text-lg">Real reviews. Real people.</p>
          </div>
        </div>
        
        {/* Full width blue section */}
        <div className="w-full bg-[#62BFF0] text-white py-8 px-0">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Get Your Quote Today!</h2>
            <Button asChild size="lg" variant="secondary" className="w-40 bg-white text-[#62BFF0] hover:bg-white/90">
              <Link to="/booking?quote=true">GET QUOTE</Link>
            </Button>
          </div>
        </div>
        
        {/* Elfsight Google Reviews Widget */}
        <div className="elfsight-app-d3bc280d-bd29-4630-931e-713468842106" data-elfsight-app-lazy></div>
        
        <div className="text-center mt-16 mb-16 max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-2">BOOK TODAY</h2>
          <p className="text-xl font-semibold mb-4">437-858-5005</p>
          <Button asChild size="lg" className="w-full max-w-md">
            <Link to="/booking?quote=true">
              <Phone className="mr-2" /> Request a Quote
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
