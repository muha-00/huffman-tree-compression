import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Check, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesCollage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Enhanced Heading Section with better formatting */}
      <div className="mb-16 max-w-5xl mx-auto">
        <div className="text-center">
          <div className="inline-block bg-[#62BFF0]/10 px-4 py-2 rounded-full text-[#62BFF0] font-medium mb-4">
            Professional Exterior Cleaning
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#62BFF0] to-blue-600 bg-clip-text text-transparent">
            Your Home Deserves the<br />High Shine Treatment
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#62BFF0]/10 rounded-full flex items-center justify-center mr-4">
                <Calendar className="w-6 h-6 text-[#62BFF0]" />
              </div>
              <h2 className="text-2xl font-bold">Serving the GTA Since 2020</h2>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              High Shine has built a reputation for excellence across the Greater Toronto Area. Our team delivers exceptional <Link to="/window-cleaning" className="text-[#62BFF0] font-medium">window cleaning</Link>, <Link to="/gutter-cleaning" className="text-[#62BFF0] font-medium">gutter cleaning</Link> & <Link to="/pressure-washing" className="text-[#62BFF0] font-medium">pressure washing</Link> services that revitalize your home's exterior.
            </p>
            
            <div className="space-y-3 mb-6">
              {["100% Satisfaction Guaranteed", "Fully Insured for Your Peace of Mind", "Eco-Friendly Cleaning Solutions", "Trained, Professional Staff"].map((item, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-[#62BFF0] mr-2 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <Button asChild className="w-full bg-[#62BFF0] hover:bg-[#62BFF0]/90">
              <Link to="/booking?quote=true">Book Your Service Today</Link>
            </Button>
          </div>
          
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#62BFF0]/20 rounded-bl-full -m-8"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#62BFF0] rounded-full flex items-center justify-center mr-4">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Our Promise To You</h2>
              </div>
              
              <p className="mb-6 text-gray-300 leading-relaxed">
                When you choose High Shine, you're choosing a team that takes pride in transforming your home's exterior. We don't just clean - we restore and protect your biggest investment.
              </p>
              
              <div className="mb-8 p-4 bg-white/10 rounded-lg">
                <p className="italic text-white/90 text-lg">
                  "We don't consider a job complete until you're 100% satisfied with our work."
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:4378585005" className="inline-flex items-center justify-center px-5 py-3 bg-[#62BFF0] text-white rounded-lg hover:bg-[#62BFF0]/90 transition-colors font-medium">
                  Call for a Free Quote
                </a>
                <Link to="/contact-us" className="inline-flex items-center justify-center px-5 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
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
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-white mb-2">Gutter Cleaning</h2>
              <h3 className="text-2xl font-bold text-white mb-4">State Of The Art Technology.</h3>
              <Link 
                to="/gutter-cleaning" 
                className="inline-flex items-center text-white group"
              >
                LEARN MORE <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
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
              to="/pressure-washing" 
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

        {/* Fourth row - Soft Washing */}
        <div className="md:col-span-12 h-[350px] relative overflow-hidden">
          <img 
            src="/lovable-uploads/37b1ee12-c7e7-4359-b1ab-d1ac6202d132.png" 
            alt="Soft Washing" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-white mb-2">PROFESSIONAL SOFT WASHING</h2>
              <h3 className="text-2xl font-bold text-white mb-4">Safe & Effective Cleaning For Delicate Surfaces.</h3>
              <Link 
                to="/soft-washing" 
                className="inline-flex items-center text-white group"
              >
                LEARN MORE <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCollage;
