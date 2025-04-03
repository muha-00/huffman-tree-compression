
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const ServicesCollage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading Section - Improved Formatting */}
      <div className="text-center mb-10 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">High Shine makes it easy to<br />transform your home.</h1>
        
        <p className="text-gray-700 mx-auto mb-6 leading-relaxed">
          Since 2020, High Shine Cleaning has been providing exceptional <Link to="/window-cleaning" className="text-[#62BFF0] hover:underline font-medium">window cleaning</Link>, <Link to="/gutter-cleaning" className="text-[#62BFF0] hover:underline font-medium">gutter cleaning</Link> & <Link to="/house-washing" className="text-[#62BFF0] hover:underline font-medium">power washing</Link> services across the GTA. Our satisfaction guarantee reflects our commitment to customer happiness.
        </p>
        
        <div className="mb-6 font-medium text-xl text-[#62BFF0]">We'd love to do the work for you.</div>
        
        <div className="bg-gray-50 p-4 rounded-lg inline-block">
          <p className="mb-3">
            Schedule your free estimate by clicking <span className="font-semibold">"Get Quote"</span> above,
          </p>
          <p>
            or call us at <a href="tel:4378585005" className="text-[#62BFF0] font-bold hover:underline">437-858-5005</a> for a personal consultation.
          </p>
        </div>
      </div>

      {/* Services Grid with Asymmetrical Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Gutter Cleaning - Full width (First row longest) */}
        <div className="md:col-span-12 h-[400px] relative overflow-hidden">
          <img 
            src="/lovable-uploads/64fb7890-1c18-4f4e-b1b2-3fd4d262274d.png" 
            alt="Gutter Cleaning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-white mb-2">Gutter Cleaning</h2>
              <h3 className="text-2xl font-bold text-white mb-4">State Of The Art Technology.</h3>
              <p className="text-white text-lg mb-6 sm:text-base md:text-lg">
                For eavestroughs cleaning we use state of the art technology. Specifically, we use SkyVac technology®️ industrial grade vacuums with cameras attached to them so we can see and remove everything. We can also clean by hand.
              </p>
              {/* Removed satisfaction guarantee box from here */}
            </div>
          </div>
        </div>
        
        {/* Second row - left block longer, right block shorter */}
        {/* Pressure Washing - Left longer (col-span-8) */}
        <div className="md:col-span-8 h-[350px] relative overflow-hidden">
          <img 
            src="/lovable-uploads/611f8e06-64cd-48bc-8f06-e41ce5092627.png" 
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
        
        {/* Satisfaction Guarantee - Right shorter (col-span-4) */}
        <div className="md:col-span-4 h-[350px] bg-[#62BFF0]/90 relative overflow-hidden flex flex-col justify-center p-6">
          <div className="flex items-center mb-2">
            <ShieldCheck className="h-8 w-8 text-white mr-2" />
            <h2 className="text-2xl font-bold text-white">The Highshine Satisfaction Guarantee</h2>
          </div>
          <p className="text-white mb-6">You don't pay us until you're 100% satisfied with every little service.</p>
          <Link 
            to="/reviews" 
            className="inline-flex items-center text-white group"
          >
            READ REVIEWS <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        {/* Third row - left block shorter, right block longer */}
        {/* Call Us Section - Left shorter (col-span-4) */}
        <div className="md:col-span-4 h-[250px] bg-black text-white flex flex-col justify-center p-6">
          <h2 className="text-2xl font-bold mb-2">CALL US!</h2>
          <a href="tel:4378585005" className="text-3xl font-bold text-[#62BFF0]">437-858-5005</a>
          <p className="mt-2 text-white/70">highshinecleaning123@gmail.com</p>
          <p className="mt-2 text-white/70">Monday To Friday<br />8:30 am to 9:00 pm EST</p>
        </div>
        
        {/* Window Cleaning - Right longer (col-span-8) */}
        <div className="md:col-span-8 h-[250px] relative overflow-hidden">
          <img 
            src="/lovable-uploads/c33a4808-e59a-4bf8-b1d6-d89861768ec1.png" 
            alt="Window Cleaning" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
            <h2 className="text-2xl font-bold text-white mb-2">PROFESSIONAL<br />WINDOW CLEANING</h2>
            <Link 
              to="/window-cleaning" 
              className="inline-flex items-center text-white group"
            >
              LEARN MORE <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCollage;
