
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    },
    {
      question: "How long does window cleaning typically take?",
      answer: "The duration depends on the number and size of windows, their accessibility, and their condition. For an average home, our team can complete the job in 2-4 hours."
    },
    {
      question: "Do I need to prepare my home before your arrival?",
      answer: "We recommend removing items from windowsills and ensuring clear access to windows. Moving furniture away from windows also helps our team work more efficiently."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - New Design with swapped image */}
      <section className="relative">
        <div className="w-full h-[500px] relative">
          <img 
            src="/lovable-uploads/601c8756-819c-4796-bcc1-3b6a96e30bec.png" 
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

      {/* Before & After Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Before & After</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              See the dramatic difference our professional window cleaning services can make.
              These before and after photos showcase our attention to detail and commitment to
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Window Cleaning - First Image */}
            <div>
              <img 
                src="/lovable-uploads/1953968d-9e58-4d20-aee0-593b548af44d.png" 
                alt="Close-up of window cleaning before and after" 
                className="w-full h-auto"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">Detailed Window Cleaning</h3>
                <p>Our meticulous window cleaning process removes all dirt, smudges, and water spots, leaving crystal clear glass.</p>
              </div>
            </div>

            {/* Window View - Second Image */}
            <div>
              <img 
                src="/lovable-uploads/5fe6e03c-99ee-4cd4-9363-fc241e4649d8.png" 
                alt="Window view before and after cleaning" 
                className="w-full h-auto"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">Enhanced Visibility</h3>
                <p>Experience the difference clean windows make to your view and the amount of natural light entering your home.</p>
              </div>
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

      {/* FAQs with Accordion */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
