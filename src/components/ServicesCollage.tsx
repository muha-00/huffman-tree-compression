
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
      bgImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2940&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "House Washing",
      description: "Restore your home's exterior to its original beauty",
      path: "/house-washing",
      position: "col-span-12 md:col-span-6 lg:col-span-6 row-span-1",
      bgImage: "https://images.unsplash.com/photo-1605910909756-a687510572f6?q=80&w=2940&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Roof Washing",
      description: "Remove harmful growth and extend your roof's lifespan",
      path: "/roof-washing",
      position: "col-span-12 md:col-span-6 lg:col-span-3 row-span-1",
      bgImage: "https://images.unsplash.com/photo-1605910910030-6a3b9c3f3f07?q=80&w=2940&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Gutter Cleaning",
      description: "Keep your gutters flowing freely, inside and out",
      path: "/gutter-cleaning",
      position: "col-span-12 md:col-span-6 lg:col-span-6 row-span-1",
      bgImage: "https://images.unsplash.com/photo-1614369148353-c92e262785ec?q=80&w=2940&auto=format&fit=crop",
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
