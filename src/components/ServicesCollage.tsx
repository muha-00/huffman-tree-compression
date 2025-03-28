
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GoogleRating from './GoogleRating';

const ServicesCollage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Google Rating and Heading Section */}
      <div className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <GoogleRating className="inline-block" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-3">High Shine makes it easy to<br />transform your home.</h1>
        
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Since 2020, High Shine Cleaning has been conducting <Link to="/window-cleaning" className="text-[#62BFF0] hover:underline">window cleaning</Link>, <Link to="/gutter-cleaning" className="text-[#62BFF0] hover:underline">gutter cleaning</Link> & <Link to="/house-washing" className="text-[#62BFF0] hover:underline">power washing</Link> services for clients all over the GTA. We're obsessed with customer satisfaction – so much so, that we have a satisfaction guarantee.
        </p>
        
        <p className="font-medium mb-4">We'd love to do the work for you.</p>
        
        <div className="mb-8">
          <p className="mb-3">
            Schedule your free estimate by just clicking "Get Quote" above,
          </p>
          <p>
            or call us at <a href="tel:4378585005" className="text-[#62BFF0] font-bold hover:underline">437-858-5005</a> and one of our friendly managers will come by to conduct the quote.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Gutter Cleaning - Full width */}
        <div className="md:col-span-12 h-[400px] relative overflow-hidden">
          <img 
            src="/lovable-uploads/49facc72-d8c8-4c7a-8a4c-d0147ab8045f.png" 
            alt="Gutter Cleaning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-white mb-2">Gutter Cleaning</h2>
              <h3 className="text-2xl font-bold text-white mb-4">State Of The Art Technology.</h3>
              <p className="text-white text-lg mb-6">
                For eavestroughs cleaning we use state of the art technology. Specifically, we use SkyVac technology®️ industrial grade vacuums with cameras attached to them so we can see and remove everything. We can also clean by hand.
              </p>
              <Button asChild className="bg-[#62BFF0] hover:bg-[#62BFF0]/90 text-white">
                <Link to="/gutter-cleaning">GET GUTTER CLEANING SERVICES</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* House Washing - Half width */}
        <div className="md:col-span-6 h-[350px] relative overflow-hidden">
          <img 
            src="/lovable-uploads/e6e02d29-51c3-4b83-bee4-9139cc64faf4.png" 
            alt="Pressure Washing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
            <h2 className="text-2xl font-bold text-white mb-2">PROFESSIONAL<br />PRESSURE<br />WASHING</h2>
            <Link 
              to="/house-washing" 
              className="inline-flex items-center text-white group"
            >
              LEARN MORE <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        {/* Reviews Section - Half width */}
        <div className="md:col-span-6 h-[350px] relative overflow-hidden">
          <img 
            src="/lovable-uploads/f95d03db-e3a8-40c6-9c00-7b6cf0c79131.png" 
            alt="Window Cleaning Reviews" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
            <h2 className="text-2xl font-bold text-white mb-2">OUR WINDOW<br />CLEANING & ALL<br />SERVICES<br />REVIEWS</h2>
            <Link 
              to="/reviews" 
              className="inline-flex items-center text-white group"
            >
              VIEW ALL REVIEWS <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        {/* Call Us Section - Half width */}
        <div className="md:col-span-6 h-[250px] bg-black text-white flex flex-col justify-center p-6">
          <h2 className="text-2xl font-bold mb-2">CALL US!</h2>
          <a href="tel:4378585005" className="text-3xl font-bold text-[#62BFF0]">437-858-5005</a>
          <p className="mt-2 text-white/70">highshinecleaning123@gmail.com</p>
          <p className="mt-2 text-white/70">Monday To Friday<br />8:30 am to 9:00 pm EST</p>
        </div>
        
        {/* Satisfaction Guarantee - Half width */}
        <div className="md:col-span-6 h-[250px] bg-[#62BFF0] text-white flex flex-col justify-center items-center p-6 text-center">
          <h2 className="text-2xl font-bold mb-3">THE HIGH SHINE<br />SATISFACTION GUARANTEE</h2>
          <p className="mb-5">We won't stop working until you're satisfied. Notice something? We'll come back to fix it up for you for free.</p>
          <Button asChild variant="secondary" className="bg-white text-[#62BFF0] hover:bg-white/90">
            <Link to="/booking">BOOK NOW</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCollage;
