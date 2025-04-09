
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Check, Phone, Facebook, ShieldCheck } from 'lucide-react';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ServicesCollage from '@/components/ServicesCollage';
import StatsCounter from '@/components/StatsCounter';
import PromoPopup from '@/components/PromoPopup';

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

  const [showPromo, setShowPromo] = useState(false);

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
      {showPromo && <PromoPopup onClose={() => setShowPromo(false)} />}
      
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

      {/* About Us & Mission Section - Improved layout with open text */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <div className="h-1 w-16 bg-[#62BFF0] mx-auto mb-8"></div>
          </div>
          
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              High Shine Cleaning was founded with a simple mission: to provide exceptional exterior cleaning services that exceed our clients' expectations. With years of experience in the industry, our skilled team specializes in window cleaning, pressure washing, soft washing, and gutter maintenance for residential and commercial properties throughout the Greater Toronto Area.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              What sets us apart is our unwavering commitment to quality and customer satisfaction. We understand that your home is one of your most valuable investments, which is why we treat every property with the utmost care and attention to detail. Our professionals are thoroughly trained, fully insured, and equipped with state-of-the-art tools and environmentally friendly products to deliver superior results.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              At High Shine, we believe in transparency, integrity, and building lasting relationships with our clients. From your initial contact with us to the completion of your service, we strive to make the entire process seamless and stress-free. We stand behind our work with our 100% satisfaction guarantee – if you're not completely satisfied, we'll make it right.
            </p>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex-1">
              <h3 className="text-xl font-bold text-[#62BFF0] mb-4">Our Promise</h3>
              <ul className="space-y-3">
                {["100% Satisfaction Guaranteed", "Fully Insured", "Eco-Friendly Products", "Experienced Team"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col gap-4 flex-1">
              <div className="bg-[#62BFF0] text-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Need Assistance?</h3>
                <p className="mb-5 opacity-90">
                  Our friendly team is ready to answer your questions and provide expert advice on your cleaning needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:4378585005" className="flex items-center bg-white text-[#62BFF0] px-5 py-2 rounded-md font-medium hover:bg-white/90 transition-colors">
                    <Phone className="h-5 w-5 mr-2" />
                    <span>437-858-5005</span>
                  </a>
                  <Link to="/contact-us" className="flex items-center justify-center bg-transparent border border-white text-white px-5 py-2 rounded-md font-medium hover:bg-white/10 transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Carousel */}
      <section>
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* About Us Section - Before the Services Collage with window cleaning focus */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#62BFF0]/10 px-4 py-2 rounded-full text-[#62BFF0] font-medium mb-4">
              Window Cleaning Specialists
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#62BFF0] to-blue-600 bg-clip-text text-transparent">
              Your Home Deserves the High Shine Treatment
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
              Founded with a passion for perfection in window cleaning, High Shine has grown to offer a full range of exterior 
              cleaning services. Window cleaning remains our specialty and core focus – we've built our reputation on delivering 
              crystal-clear, streak-free results every time. If pristine windows are your main need, our specialized expertise 
              makes us the perfect choice for your home.
            </p>
          </div>
          
          {/* Stats Counter Section */}
          <StatsCounter />
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

      {/* CTA Section - Updated to include contracts link */}
      <section className="py-16 bg-[#62BFF0] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for a Cleaner, Brighter Home?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Get a quote for our professional cleaning services today and see the difference that High Shine Cleaning can make for your home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-[#62BFF0] hover:bg-white/90">
              <Link to="/booking?quote=true">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/contracts">Learn About Contracts</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
