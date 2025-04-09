
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

      {/* Service Description - Updated with more open text layout */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Window Cleaning?</h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                At High Shine Cleaning, we take pride in delivering exceptional window cleaning services that leave your windows 
                sparkling clean. Our experienced team uses professional-grade equipment and eco-friendly cleaning solutions to 
                ensure the best results every time. Clean windows make a dramatic difference in your home's appearance, allowing 
                natural light to flood your interior spaces and enhancing your view of the outdoors.
              </p>
              
              <p>
                Dirty windows can significantly reduce the amount of natural light entering your home, making spaces feel darker 
                and less inviting. Regular window cleaning not only improves your home's appearance but also extends the life of 
                your windows by preventing the buildup of damaging substances that can etch or degrade glass and frames over time.
              </p>
            </div>
            
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">The Benefits of Professional Window Cleaning</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 prose prose-lg max-w-none">
                <p>
                  Whether you need regular maintenance or a one-time deep clean, our window cleaning services are designed to 
                  meet your specific needs and exceed your expectations. Our technicians are trained to work efficiently and 
                  safely, even on multi-story homes or buildings with hard-to-reach windows.
                </p>
              </div>
            </div>
            
            {/* Process section - Completely redesigned with more text */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Comprehensive Window Cleaning Process</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p>
                  At High Shine Cleaning, we follow a meticulous process to ensure your windows receive the highest quality 
                  cleaning. Our systematic approach guarantees that no detail is overlooked, resulting in perfectly clean 
                  windows that enhance your home's appearance and allow maximum natural light to enter.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#62BFF0] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    <h4 className="text-xl font-bold">Initial Assessment</h4>
                  </div>
                  <p className="pl-11 text-lg text-gray-700">
                    We begin by thoroughly evaluating your windows and discussing any specific concerns or requirements you may have. 
                    This assessment allows us to identify any problem areas, such as hard water stains, paint overspray, or construction 
                    debris that may require special attention. We'll also note any delicate or specialty windows that need particular care.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#62BFF0] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <h4 className="text-xl font-bold">Preparation</h4>
                  </div>
                  <p className="pl-11 text-lg text-gray-700">
                    Before we begin cleaning, we take steps to protect your home's interior and exterior spaces. We move or cover furniture 
                    near windows, place protective coverings on flooring when necessary, and ensure that landscaping beneath exterior windows 
                    is protected. We then prepare our environmentally friendly cleaning solutions, specifically formulated to remove dirt, 
                    pollen, and environmental contaminants without leaving streaks or residue.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#62BFF0] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <h4 className="text-xl font-bold">Professional Cleaning</h4>
                  </div>
                  <p className="pl-11 text-lg text-gray-700">
                    Using professional-grade equipment and techniques, we thoroughly clean both the interior and exterior of your windows. 
                    Our process includes:
                  </p>
                  <ul className="pl-11 mt-3 space-y-2 text-gray-700">
                    <li>• Scrubbing frames and sills to remove accumulated dirt and debris</li>
                    <li>• Applying specialized cleaning solutions to glass surfaces</li>
                    <li>• Using professional squeegees and microfiber tools for streak-free results</li>
                    <li>• Careful attention to corners and edges where dirt often accumulates</li>
                    <li>• Treating stubborn spots or stains with appropriate techniques</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#62BFF0] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    <h4 className="text-xl font-bold">Comprehensive Detailing</h4>
                  </div>
                  <p className="pl-11 text-lg text-gray-700">
                    We don't stop at just cleaning the glass. Our comprehensive service includes detailed attention to all window components:
                  </p>
                  <ul className="pl-11 mt-3 space-y-2 text-gray-700">
                    <li>• Removing and cleaning window screens</li>
                    <li>• Scrubbing and detailing window tracks</li>
                    <li>• Cleaning window hardware and locks</li>
                    <li>• Wiping down windowsills</li>
                    <li>• Removing cobwebs from corners and frames</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#62BFF0] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                    <h4 className="text-xl font-bold">Quality Inspection</h4>
                  </div>
                  <p className="pl-11 text-lg text-gray-700">
                    Before we consider the job complete, our team performs a thorough inspection of all cleaned windows. We check for 
                    any missed spots, streaks, or imperfections. We'll also verify that screens are properly reinstalled, tracks are 
                    clear of debris, and all windows operate smoothly. This final quality control step ensures that every window meets 
                    our high standards and your expectations. If anything doesn't meet our standards, we address it immediately.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 prose prose-lg max-w-none">
                <p>
                  The result is brilliantly clean, streak-free windows that transform the appearance of your home inside and out. 
                  You'll notice the difference immediately in how much natural light enters your home and how clearly you can see 
                  the outside world.
                </p>
              </div>
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
