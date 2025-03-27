
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicesCollage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Window Cleaning",
      description: "Crystal clear windows for your home, inside and out",
      path: "/window-cleaning",
      position: "col-span-12 md:col-span-6 lg:col-span-3 row-span-2",
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 2,
      title: "House Washing",
      description: "Restore your home's exterior to its original beauty",
      path: "/house-washing",
      position: "col-span-12 md:col-span-6 lg:col-span-6 row-span-1",
      bgImage: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 3,
      title: "Roof Washing",
      description: "Remove harmful growth and extend your roof's lifespan",
      path: "/roof-washing",
      position: "col-span-12 md:col-span-6 lg:col-span-3 row-span-1",
      bgImage: "https://images.unsplash.com/photo-1635424710920-999682536ad8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
    },
    {
      id: 4,
      title: "Gutter Cleaning",
      description: "Keep your gutters flowing freely, inside and out",
      path: "/gutter-cleaning",
      position: "col-span-12 md:col-span-6 lg:col-span-6 row-span-1",
      bgImage: "/public/lovable-uploads/09897a77-f6ad-45cb-b0ab-0b82a1fc30f6.png",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      {services.map((service) => (
        <Link
          key={service.id}
          to={service.path}
          className={`relative overflow-hidden rounded-lg ${service.position} group`}
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
      ))}
    </div>
  );
};

export default ServicesCollage;
