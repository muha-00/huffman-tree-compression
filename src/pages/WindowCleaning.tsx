
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const WindowCleaning = () => {
  // Handle Elfsight script for service pages
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

  const benefits = [
    "Improved natural lighting in your home",
    "Enhanced curb appeal and overall appearance",
    "Removal of dirt, pollen, and environmental contaminants",
    "Prevention of glass degradation",
    "Professional tools and techniques for streak-free results",
    "Interior and exterior window cleaning"
  ];

  const faqs = [
    {
      question: "How often should I have my windows professionally cleaned?",
      answer: "For most residential properties, we recommend professional window cleaning twice a year. However, this can vary based on your location, surrounding environment, and personal preferences."
    },
    {
      question: "Do you clean screens and tracks as well?",
      answer: "Yes, our comprehensive window cleaning service includes cleaning screens and tracks. We ensure that every component of your windows is thoroughly cleaned."
    },
    {
      question: "Can you clean high or difficult-to-reach windows?",
      answer: "Absolutely! Our team is equipped with the proper tools and training to safely clean windows at various heights and in challenging locations."
    },
    {
      question: "Will your cleaning solutions harm my plants or exterior surfaces?",
      answer: "No, we use environmentally friendly cleaning solutions that are safe for your plants, pets, and exterior surfaces while still delivering excellent cleaning results."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - New Design */}
      <section className="relative">
        <div className="w-full h-[500px] relative">
          <img 
            src="/lovable-uploads/8599a560-bac4-4ce2-bc7d-2358ad0fb255.png" 
            alt="Window Cleaning Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-8 md:px-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white uppercase animate-wipe-in">
              WINDOW CLEANING<br />SERVICES
            </h1>
            <p className="text-2xl text-white mt-4 animate-wipe-in" style={{"--delay": "0.3s"} as React.CSSProperties}>
              Mississauga, Oakville, Brampton and surroundings
            </p>
          </div>
        </div>
        
        {/* Blue CTA bar */}
        <div className="w-full bg-[#62BFF0] text-white py-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Get Your Quote Today!</h2>
            <Button asChild size="lg" variant="secondary" className="bg-black text-white hover:bg-black/90">
              <Link to="/booking?quote=true&service=window">GET QUOTE</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Window Cleaning?</h2>
              <p className="text-muted-foreground mb-6">
                At High Shine Cleaning, we take pride in delivering exceptional window cleaning services that leave your windows sparkling clean. Our experienced team uses professional-grade equipment and eco-friendly cleaning solutions to ensure the best results.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-2 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-muted-foreground mb-6">
                Whether you need regular maintenance or a one-time deep clean, our window cleaning services are designed to meet your specific needs and exceed your expectations.
              </p>
            </div>
            
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Window Cleaning Process</h3>
              
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-medium">Assessment</h4>
                    <p className="text-sm text-muted-foreground">We evaluate your windows and discuss any specific concerns or requirements.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-medium">Preparation</h4>
                    <p className="text-sm text-muted-foreground">We protect surrounding areas and prepare our professional cleaning solutions.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-medium">Cleaning</h4>
                    <p className="text-sm text-muted-foreground">We thoroughly clean both interior and exterior windows, frames, and sills.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-medium">Detailing</h4>
                    <p className="text-sm text-muted-foreground">We clean screens, tracks, and finishing touches for a complete clean.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                  <div>
                    <h4 className="font-medium">Final Inspection</h4>
                    <p className="text-sm text-muted-foreground">We check all windows to ensure they meet our high standards.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-[#62BFF0]/10">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
          <div className="elfsight-app-c79d3126-70ca-49a2-a12f-84aea046911a" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#62BFF0] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Sparkling Clean Windows?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Experience the difference that professionally cleaned windows can make for your home. Book our window cleaning service today!
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-[#62BFF0] hover:bg-white/90">
            <Link to="/booking">Book Window Cleaning</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WindowCleaning;
