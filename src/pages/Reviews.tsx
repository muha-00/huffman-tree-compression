
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Reviews = () => {
  // Handle Elfsight script loading
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
      <div className="container py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Reviews</h1>
          <p className="text-muted-foreground text-lg">Real reviews, real people.</p>
        </div>
        
        <div className="w-full bg-highshine text-white py-8 px-6 rounded-lg text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Get Your Quote Today!</h2>
          <Button asChild size="lg" variant="secondary" className="bg-white text-highshine hover:bg-white/90 w-full md:w-auto">
            <Link to="/booking?quote=true">GET QUOTE</Link>
          </Button>
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">REVIEWS</h2>
        </div>
        
        {/* Elfsight Google Reviews Widget */}
        <div className="elfsight-app-d3bc280d-bd29-4630-931e-713468842106" data-elfsight-app-lazy></div>
        
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-2">BOOK TODAY</h2>
          <p className="text-xl font-semibold mb-4">437-858-5005</p>
          <Button asChild size="lg" className="w-full md:w-auto">
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
