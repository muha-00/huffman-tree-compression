
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

      {/* About Us Section - Before the Services Collage */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#62BFF0]/10 px-4 py-2 rounded-full text-[#62BFF0] font-medium mb-4">
              Professional Exterior Cleaning
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#62BFF0] to-blue-600 bg-clip-text text-transparent">
              Your Home Deserves the<br />High Shine Treatment
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
              At High Shine, we're committed to providing premium exterior cleaning services that make your property stand out. 
              Our professional team delivers exceptional results with meticulous attention to detail on every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-[#62BFF0]">Professional Window Cleaning</h3>
              <p className="text-gray-700 mb-4">
                Our streak-free window cleaning service restores clarity and brilliance to your home's windows, inside and out.
              </p>
              <Link to="/window-cleaning" className="text-[#62BFF0] font-medium hover:underline">Learn more</Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-[#62BFF0]">Expert Gutter Cleaning</h3>
              <p className="text-gray-700 mb-4">
                We thoroughly clean and flush your gutters to prevent water damage and extend the life of your home's exterior.
              </p>
              <Link to="/gutter-cleaning" className="text-[#62BFF0] font-medium hover:underline">Learn more</Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-[#62BFF0]">Pressure & Soft Washing</h3>
              <p className="text-gray-700 mb-4">
                Our cleaning specialists use the right techniques to safely remove dirt, grime, and biological growth from your exterior surfaces.
              </p>
              <Link to="/pressure-washing" className="text-[#62BFF0] font-medium hover:underline">Learn more</Link>
            </div>
          </div>
        </div>
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

      {/* About Section - Updated to be more professional */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Service, Exceptional Results</h2>
              <p className="text-muted-foreground mb-6">
                At High Shine Cleaning, we're a dedicated team of experienced professionals who take pride in delivering exceptional cleaning services. 
                Our meticulous attention to detail and commitment to quality ensure that every property we service receives the highest standard of care.
              </p>
              
              <ul className="space-y-3">
                {["100% Satisfaction Guaranteed", "Fully Insured", "Eco-Friendly Products", "Experienced Team"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Button asChild className="bg-[#62BFF0] hover:bg-[#62BFF0]/90">
                  <Link to="/booking?quote=true">Request a Quote</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-muted rounded-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#62BFF0]/20 rounded-bl-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                <p className="text-muted-foreground mb-6">
                  We provide free, no-obligation quotes for all our services. 
                  Contact us today to discuss your exterior cleaning needs.
                </p>
                
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[#62BFF0] mr-3" />
                    <a href="tel:4378585005" className="hover:underline">437-858-5005</a>
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61560420295116" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#62BFF0] hover:text-[#62BFF0]/80 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.google.com/search?q=high+shine+cleaning&rlz=1C1CHBF_enCA959CA959&oq=high&aqs=chrome.0.69i59l2j69i57j69i59j0i131i273i433i512i650j69i60l3.964j0j7&sourceid=chrome&ie=UTF-8&lqi=ChNoaWdoIHNoaW5lIGNsZWFuaW5nSJC7ytqHu4CACFohEAAQARACGAAYARgCIhNoaWdoIHNoaW5lIGNsZWFuaW5negtNaXNzaXNzYXVnYZIBF3dpbmRvd19jbGVhbmluZ19zZXJ2aWNlqgFVEAEqFyITaGlnaCBzaGluZSBjbGVhbmluZygAMh8QASIbL6gy_w3fDhGDXAOLhpdTQ5kHswNOvN9ouRZwMhcQAiITaGlnaCBzaGluZSBjbGVhbmluZw#rlimm=4094031844201864335" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#62BFF0] hover:text-[#62BFF0]/80 transition-colors"
                    >
                      <img 
                        src="/lovable-uploads/60806a1c-46ea-4ef6-9f81-9a2a0cc1ea10.png" 
                        alt="Google" 
                        className="w-5 h-5" 
                      />
                    </a>
                  </div>
                  <Button asChild variant="outline">
                    <Link to="/booking?quote=true">Request a Quote</Link>
                  </Button>
                </div>
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
