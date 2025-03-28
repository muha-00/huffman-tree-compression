
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesCollage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Gutter Cleaning",
      description: "State Of The Art Technology.",
      path: "/gutter-cleaning",
      position: "col-span-12 row-span-1",
      bgImage: "/lovable-uploads/c454045f-8326-4cbe-949d-011314652a37.png", // Using the uploaded gutter cleaning image
      isFullWidth: true,
      buttonText: "GET GUTTER CLEANING SERVICES"
    },
    {
      id: 2,
      title: "PROFESSIONAL PRESSURE WASHING",
      description: "",
      path: "/house-washing",
      position: "col-span-12 md:col-span-6 row-span-1",
      bgImage: "/lovable-uploads/20580ad3-0750-4803-bf37-ff7a96b4b3e1.png",
      buttonText: "LEARN MORE"
    },
    {
      id: 3,
      title: "OUR WINDOW CLEANING & ALL SERVICES REVIEWS",
      description: "",
      path: "/reviews",
      position: "col-span-12 md:col-span-6 row-span-1",
      bgImage: "/lovable-uploads/2aab0564-0610-4c7a-abd2-ac1ba196380c.png",
      buttonText: "VIEW ALL REVIEWS"
    },
    {
      id: 4,
      title: "CALL US!",
      description: "437-858-5005",
      path: "tel:4378585005",
      position: "col-span-12 md:col-span-6 row-span-1",
      bgImage: "",
      isCallBox: true,
      bgColor: "bg-black"
    },
    {
      id: 5,
      title: "THE HIGH SHINE SATISFACTION GUARANTEE",
      description: "We won't stop working until you're satisfied. Notice something? We'll come back to fix it up for you for free.",
      position: "col-span-12 md:col-span-6 row-span-1",
      isGuaranteeBox: true,
      buttonText: "BOOK NOW",
      path: "/booking"
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-0 w-full">
      {services.map((service) => {
        if (service.isGuaranteeBox) {
          return (
            <div 
              key={service.id}
              className={`bg-[#62BFF0] text-white rounded-none p-8 text-center flex flex-col items-center justify-center ${service.position} w-full`}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-sm md:text-base mb-6 text-white/90">{service.description}</p>
              <Button asChild size="lg" variant="secondary" className="bg-white text-[#62BFF0] hover:bg-white/90">
                <Link to={service.path}>{service.buttonText}</Link>
              </Button>
            </div>
          );
        }

        if (service.isCallBox) {
          return (
            <Link
              key={service.id}
              to={service.path}
              className={`relative overflow-hidden rounded-none ${service.position} group ${service.bgColor || 'bg-black'} w-full flex flex-col items-center justify-center text-white p-8`}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{service.title}</h3>
              <p className="text-[#62BFF0] text-2xl md:text-4xl font-bold">{service.description}</p>
            </Link>
          );
        }

        if (service.isFullWidth) {
          return (
            <Link
              key={service.id}
              to={service.path}
              className={`relative overflow-hidden rounded-none ${service.position} group w-full h-[400px]`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{service.title}</h3>
                <p className="text-xl md:text-2xl mb-6 text-white/80">{service.description}</p>
                <Button className="bg-[#62BFF0] hover:bg-[#62BFF0]/90 text-white">
                  {service.buttonText} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Link>
          );
        }

        return (
          <Link
            key={service.id}
            to={service.path}
            className={`relative overflow-hidden rounded-none ${service.position} group w-full h-[300px]`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${service.bgImage})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h3>
              <div className="flex items-center text-sm font-medium group-hover:underline">
                {service.buttonText} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ServicesCollage;
