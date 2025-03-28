
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
      <div className="container px-0 py-0 md:py-0">
        <div className="relative w-full h-[400px] mb-0 overflow-hidden">
          <img 
            src="/lovable-uploads/c396407b-36f9-40fa-9c10-95243cc4104b.png" 
            alt="Happy customers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-8">
            <h1 className="text-4xl font-bold mb-2 text-white">Reviews</h1>
            <p className="text-white text-lg">Real reviews. Real people.</p>
          </div>
        </div>
        
        <div className="w-full bg-[#62BFF0] text-white py-8 px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Your Quote Today!</h2>
          <Button asChild size="lg" variant="secondary" className="bg-white text-[#62BFF0] hover:bg-white/90 w-full">
            <Link to="/booking?quote=true">GET QUOTE</Link>
          </Button>
        </div>
        
        {/* Elfsight Google Reviews Widget */}
        <div className="elfsight-app-d3bc280d-bd29-4630-931e-713468842106" data-elfsight-app-lazy></div>
        
        <div className="text-center mt-16 mb-16">
          <h2 className="text-3xl font-bold mb-2">BOOK TODAY</h2>
          <p className="text-xl font-semibold mb-4">437-858-5005</p>
          <Button asChild size="lg" className="w-full">
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
