
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesCollage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Window Cleaning",
      description: "Crystal clear windows for your home, inside and out",
      path: "/window-cleaning",
      position: "col-span-12 md:col-span-6 lg:col-span-3 row-span-2",
      bgImage: "/lovable-uploads/19dcc04c-30dd-49c2-89e1-5016f2a88ed4.png",
    },
    {
      id: 2,
      title: "Professional Pressure Washing",
      description: "Restore your home's exterior to its original beauty",
      path: "/house-washing",
      position: "col-span-12 md:col-span-6 lg:col-span-6 row-span-1",
      bgImage: "/lovable-uploads/20580ad3-0750-4803-bf37-ff7a96b4b3e1.png",
    },
    {
      id: 3,
      title: "Professional Gutter Cleaning",
      description: "Keep your gutters flowing freely, preventing water damage",
      path: "/gutter-cleaning",
      position: "col-span-12 md:col-span-6 lg:col-span-3 row-span-1",
      bgImage: "/lovable-uploads/2aab0564-0610-4c7a-abd2-ac1ba196380c.png",
    },
    {
      id: 4,
      title: "CALL US!",
      description: "437-858-5005",
      path: "tel:4378585005",
      position: "col-span-12 md:col-span-6 lg:col-span-6 row-span-1",
      bgImage: "",
      isCallBox: true,
    },
    {
      id: 5,
      title: "The High Shine Cleaning Guarantee",
      description: "We won't leave until you're satisfied with everything",
      position: "col-span-12 row-span-1 mt-6",
      isGuaranteeBox: true,
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-0">
      {services.map((service) => {
        if (service.isGuaranteeBox) {
          return (
            <div 
              key={service.id}
              className={`bg-[#62BFF0] text-white rounded-none p-8 text-center flex flex-col items-center justify-center ${service.position}`}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-sm md:text-base mb-6 text-white/90">{service.description}</p>
              <Button asChild size="lg" variant="secondary" className="bg-white text-[#62BFF0] hover:bg-white/90">
                <Link to="/booking">Request a Quote</Link>
              </Button>
            </div>
          );
        }

        if (service.isCallBox) {
          return (
            <Link
              key={service.id}
              to={service.path}
              className={`relative overflow-hidden rounded-none ${service.position} group bg-black`}
              style={{ height: '240px' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <Phone className="w-16 h-16 mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{service.title}</h3>
                <p className="text-lg md:text-xl font-medium">{service.description}</p>
              </div>
            </Link>
          );
        }

        return (
          <Link
            key={service.id}
            to={service.path}
            className={`relative overflow-hidden rounded-none ${service.position} group`}
            style={{ height: service.id === 1 ? '500px' : '240px' }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${service.bgImage})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm md:text-base mb-4 text-white/80">{service.description}</p>
              <div className="flex items-center text-sm font-medium group-hover:underline">
                Learn More <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ServicesCollage;
