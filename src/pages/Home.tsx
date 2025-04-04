
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Check, Phone, Facebook } from 'lucide-react';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ServicesCollage from '@/components/ServicesCollage';

const Home = () => {
  const testimonials = [
    {
      id: 1,
      text: "We've been using these guys for years for our home. They show up on time, do an immaculate job on the gutters, and leave the windows completely streak free. Satisfied every time.",
      author: ""
    },
    {
      id: 2,
      text: "The team at High Shine Cleaning transformed our house exterior. They're professional, efficient, and the results are outstanding. Highly recommend for any home cleaning needs!",
      author: ""
    },
    {
      id: 3,
      text: "After years of neglect, our windows were in terrible shape. One visit from High Shine and they look brand new! Their attention to detail is impressive.",
      author: ""
    },
  ];

  // Elfsight review carousel script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-highshine/10 to-transparent z-0"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight hero-animate" style={{"--delay": "0.1s"} as React.CSSProperties}>
              Professional Window & Home Cleaning Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground hero-animate" style={{"--delay": "0.3s"} as React.CSSProperties}>
              A team of experienced professionals providing exceptional window cleaning, house washing, roof washing, and gutter cleaning services.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 hero-animate" style={{"--delay": "0.5s"} as React.CSSProperties}>
              <Button asChild size="lg" className="px-8">
                <Link to="/booking?quote=true">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Carousel */}
      <section>
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* Services Collage - Full Width */}
      <section className="py-8 w-full">
        <div className="container px-0 max-w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Our Professional Services</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto px-4">
              We provide a range of high-quality cleaning services to keep your home looking its best.
            </p>
          </div>
          
          <ServicesCollage />
        </div>
      </section>

      {/* Google Reviews Widget */}
      <section className="py-8 w-full">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          </div>
          <div className="elfsight-app-c79d3126-70ca-49a2-a12f-84aea046911a" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* About Section - Updated with better formatting */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Service, Exceptional Results</h2>
            <div className="w-20 h-1 bg-[#62BFF0] mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              At High Shine Cleaning, we're a dedicated team of experienced professionals who take pride in delivering exceptional cleaning services. 
              Our meticulous attention to detail and commitment to quality ensure that every property we service receives the highest standard of care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-[#62BFF0]">Our Commitment</h3>
              
              <ul className="space-y-4">
                {["100% Satisfaction Guaranteed", "Fully Insured", "Eco-Friendly Products", "Experienced Team"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-[#62BFF0] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Button asChild size="lg" className="w-full bg-[#62BFF0] hover:bg-[#62BFF0]/90">
                  <Link to="/booking?quote=true">Request a Quote</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-[#62BFF0]">Contact Us</h3>
              <p className="text-muted-foreground mb-8">
                We provide free, no-obligation quotes for all our services. 
                Contact us today to discuss your exterior cleaning needs.
              </p>
              
              <div className="flex items-center mb-6 bg-[#62BFF0]/10 p-4 rounded-lg">
                <Phone className="h-8 w-8 text-[#62BFF0] mr-4" />
                <a href="tel:4378585005" className="text-xl font-medium hover:text-[#62BFF0] transition-colors">437-858-5005</a>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61560420295116" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#62BFF0] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#62BFF0]/90 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.google.com/search?q=high+shine+cleaning&rlz=1C1CHBF_enCA959CA959&oq=high&aqs=chrome.0.69i59l2j69i57j69i59j0i131i273i433i512i650j69i60l3.964j0j7&sourceid=chrome&ie=UTF-8&lqi=ChNoaWdoIHNoaW5lIGNsZWFuaW5nSJC7ytqHu4CACFohEAAQARACGAAYARgCIhNoaWdoIHNoaW5lIGNsZWFuaW5negtNaXNzaXNzYXVnYZIBF3dpbmRvd19jbGVhbmluZ19zZXJ2aWNlqgFVEAEqFyITaGlnaCBzaGluZSBjbGVhbmluZygAMh8QASIbL6gy_w3fDhGDXAOLhpdTQ5kHswNOvN9ouRZwMhcQAiITaGlnaCBzaGluZSBjbGVhbmluZw#rlimm=4094031844201864335" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#62BFF0] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#62BFF0]/90 transition-colors"
                >
                  <img 
                    src="/lovable-uploads/60806a1c-46ea-4ef6-9f81-9a2a0cc1ea10.png" 
                    alt="Google" 
                    className="w-6 h-6" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#62BFF0] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for a Cleaner, Brighter Home?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Get a quote for our professional cleaning services today and see the difference that High Shine Cleaning can make for your home.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-[#62BFF0] hover:bg-white/90">
            <Link to="/booking?quote=true">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
