
import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Star, StarHalf, Award, Users, ThumbsUp, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Counter component for animated statistics
const AnimatedCounter = ({ end, suffix = "", title, icon }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const duration = 2000; // Duration in milliseconds
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const element = document.getElementById(`counter-${title.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [title]);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);
  
  return (
    <Card className="text-center p-6 hover-lift border-t-4 border-t-[#62BFF0]" id={`counter-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      {icon}
      <h3 className="text-2xl font-bold mb-2">{count}{suffix}</h3>
      <p className="text-gray-600">{title}</p>
    </Card>
  );
};

const Reviews = () => {
  // Handle Elfsight script loading for the Reviews widget only
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    
    // Append the script to the document
    document.body.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Layout>
      <div className="px-0 py-0 w-full">
        {/* Hero section - full width image with modern overlay and faded effect */}
        <div className="relative w-full h-[700px] mb-0">
          <div className="absolute inset-0 bg-white/20 z-10"></div> {/* Faded overlay */}
          <img 
            src="/lovable-uploads/fc70a6c8-b2ca-4d7f-a1c4-56c0ac3c3432.png" 
            alt="Happy customers" 
            className="w-full h-full object-cover object-center opacity-80" /* Reduced opacity for a faded look */
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col justify-center items-start px-8 md:px-16 z-20">
            <div className="max-w-2xl">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400 mr-3">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <StarHalf className="w-5 h-5 fill-current" />
                </div>
                <span className="text-white font-medium">4.9/5 average rating</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white animate-wipe-in leading-tight">See What <span className="text-[#62BFF0]">Our Customers</span> Are Saying</h1>
              <p className="text-white text-lg mb-8 animate-wipe-in max-w-lg opacity-90" style={{"--delay": "0.3s"} as React.CSSProperties}>
                Real feedback from real customers. We take pride in our work and our customers' satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>
        
        {/* Stats section with animated counters */}
        <div className="w-full bg-white py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCounter 
              end={500} 
              suffix="+" 
              title="Satisfied Customers" 
              icon={<Award className="h-12 w-12 text-[#62BFF0] mx-auto mb-4" />}
            />
            <AnimatedCounter 
              end={100} 
              suffix="%" 
              title="Satisfaction Guarantee" 
              icon={<ThumbsUp className="h-12 w-12 text-[#62BFF0] mx-auto mb-4" />}
            />
            <AnimatedCounter 
              end={4.9} 
              suffix="/5" 
              title="Average Rating" 
              icon={<CheckCircle className="h-12 w-12 text-[#62BFF0] mx-auto mb-4" />}
            />
          </div>
        </div>
        
        {/* Full width blue section */}
        <div className="w-full bg-[#62BFF0] text-white py-10 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to Experience Our Service?</h2>
              <p className="text-white/80 mb-6 md:mb-0 max-w-xl">Join hundreds of satisfied customers who trust High Shine with their homes.</p>
            </div>
            <Button asChild size="lg" variant="secondary" className="w-40 bg-white text-[#62BFF0] hover:bg-white/90">
              <Link to="/booking?quote=true">GET QUOTE</Link>
            </Button>
          </div>
        </div>
        
        {/* Testimonial showcase section */}
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take pride in providing exceptional service and our customers' satisfaction is our top priority.
              Here's what some of our happy customers have to say:
            </p>
          </div>
          
          {/* Elfsight Google Reviews Widget */}
          <div className="elfsight-app-d3bc280d-bd29-4630-931e-713468842106" data-elfsight-app-lazy></div>
        </div>
        
        {/* Call to action section */}
        <div className="bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Join Our Satisfied Customers?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the High Shine difference for yourself. Get a free quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#62BFF0] hover:bg-[#62BFF0]/90">
                <Link to="/booking?quote=true">
                  <Phone className="mr-2" /> Request a Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#62BFF0] text-[#62BFF0]">
                <a href="tel:4378585005">
                  Call Us: 437-858-5005
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Why choose us section */}
        <div className="bg-gray-900 text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose High Shine?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We combine quality service with customer satisfaction to deliver exceptional results every time.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/5 border-none text-white hover:bg-white/10 transition-colors">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-[#62BFF0] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Professional Team</h3>
                  <p className="text-gray-300">
                    Our experienced professionals are trained to deliver exceptional service every time.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-none text-white hover:bg-white/10 transition-colors">
                <CardContent className="p-6">
                  <Award className="h-10 w-10 text-[#62BFF0] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Guaranteed Satisfaction</h3>
                  <p className="text-gray-300">
                    We're not happy until you're 100% satisfied with our service.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-none text-white hover:bg-white/10 transition-colors">
                <CardContent className="p-6">
                  <ThumbsUp className="h-10 w-10 text-[#62BFF0] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Quality Results</h3>
                  <p className="text-gray-300">
                    We use state-of-the-art equipment and professional techniques to ensure superior results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
