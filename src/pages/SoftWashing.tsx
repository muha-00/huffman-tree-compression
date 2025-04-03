
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, AlertTriangle, Shield } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SoftWashing = () => {
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
    "Safely removes mold, mildew, algae, and other organic growth",
    "Protects and preserves delicate surfaces",
    "Uses specialized cleaning solutions instead of high pressure",
    "Prevents damage to siding, roof shingles, and other surfaces",
    "Longer-lasting results than pressure washing alone",
    "Environmentally friendly cleaning process"
  ];

  const applications = [
    "Vinyl, aluminum, and wood siding",
    "Roof cleaning (all types)",
    "Stucco and EIFS surfaces",
    "Cedar shake siding",
    "Decks and fences",
    "Painted surfaces"
  ];

  const faqs = [
    {
      question: "What is soft washing?",
      answer: "Soft washing is a cleaning method that uses specialized, biodegradable cleaning solutions applied with low pressure to safely remove dirt, algae, mold, mildew, and other contaminants from exterior surfaces. Unlike pressure washing, soft washing focuses on killing and removing organic growth rather than blasting it away with high pressure."
    },
    {
      question: "How is soft washing different from pressure washing?",
      answer: "Pressure washing uses high-pressure water to physically remove contaminants, which can damage delicate surfaces. Soft washing uses low pressure (similar to a garden hose) along with specialized cleaning solutions that kill and loosen organic growth, making it safer for roofs, vinyl siding, and other sensitive surfaces."
    },
    {
      question: "Is soft washing safe for my roof?",
      answer: "Yes! In fact, soft washing is the recommended method for cleaning most roofing materials. Roof manufacturers generally warn against using high pressure on shingles as it can remove granules and shorten roof life. Our soft wash approach is gentle yet effective at removing black streaks, algae, and moss."
    },
    {
      question: "How long will the results last?",
      answer: "Soft washing provides longer-lasting results than pressure washing alone. By killing the organisms at their roots rather than just removing their surface appearance, soft washing typically keeps surfaces clean for 4-6 times longer. Most homes stay clean for 1-2 years before requiring another treatment."
    },
    {
      question: "Are the cleaning solutions safe for plants and pets?",
      answer: "Our cleaning solutions are biodegradable and environmentally friendly. As a precaution, we pre-wet and rinse all surrounding plants before and after the cleaning process. We also recommend keeping pets indoors during the cleaning process and until all surfaces have dried."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Adjusted image position */}
      <section className="relative">
        <div className="w-full h-[500px] relative">
          <img 
            src="/lovable-uploads/581745a9-2d5c-4063-9fb2-73d81ca897e2.png" 
            alt="Soft Washing Services" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-8 md:px-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white uppercase animate-wipe-in">
              SOFT WASHING<br />SERVICES
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
              <Link to="/booking?quote=true&service=soft">GET QUOTE</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Gentle Cleaning Solution For Delicate Surfaces</h2>
              <p className="text-muted-foreground mb-6">
                Soft washing is a specialized cleaning method that uses eco-friendly cleaning solutions and low pressure to safely clean delicate surfaces like roofs, vinyl siding, stucco, and more. This method effectively removes mold, mildew, algae, and other contaminants without risking damage to your property.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-2 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  <span className="font-medium">Important:</span> Many roof manufacturers specifically recommend soft washing instead of pressure washing to maintain warranty coverage. Our method is safe and effective for all surfaces.
                </p>
              </div>
            </div>
            
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Soft Washing Process</h3>
              
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-medium">Surface Inspection</h4>
                    <p className="text-sm text-muted-foreground">We assess the condition of your surfaces and identify areas of concern.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-medium">Plant & Property Protection</h4>
                    <p className="text-sm text-muted-foreground">We protect surrounding landscaping, windows, and other features from cleaning solutions.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-medium">Solution Application</h4>
                    <p className="text-sm text-muted-foreground">We apply our specialized cleaning solution to kill algae, mold, and mildew at their roots.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-medium">Dwell Time</h4>
                    <p className="text-sm text-muted-foreground">We allow the solution to work, breaking down organic materials and stains.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                  <div>
                    <h4 className="font-medium">Low-Pressure Rinse</h4>
                    <p className="text-sm text-muted-foreground">We gently rinse the surface, removing all contaminants and solution residue.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Roof Washing Subsection */}
      <section className="py-16 bg-[#62BFF0]/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Roof Washing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our soft washing technique is particularly effective for roof cleaning, safely removing black streaks, 
              moss, and algae without damaging shingles or shortening roof life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/14cd8606-37c8-4c43-86dd-402bc7151c41.png" 
                alt="Roof Washing" 
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Soft Wash Your Roof?</h3>
              <p className="text-muted-foreground mb-6">
                Those black streaks on your roof aren't just cosmetic—they're actually Gloeocapsa Magma, a type of algae 
                that's feeding on the limestone filler in your shingles. Left untreated, this can lead to premature roof 
                failure and expensive replacements.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <div className="flex items-start mb-4">
                  <Shield className="h-6 w-6 text-[#62BFF0] mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Protect Your Investment</h4>
                    <p className="text-sm text-muted-foreground">
                      A new roof can cost $10,000-$20,000. Regular soft washing extends roof life by 5-10 years, saving you thousands.
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-2 mt-0.5" />
                    <span>Extend roof life by 5-10 years</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-2 mt-0.5" />
                    <span>Improve energy efficiency by up to 15%</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-2 mt-0.5" />
                    <span>Maintain manufacturer warranties</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-2 mt-0.5" />
                    <span>Prevent expensive repairs from water damage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-2 mt-0.5" />
                    <span>Enhance curb appeal and property value</span>
                  </li>
                </ul>
              </div>
              
              <Button asChild>
                <Link to="/booking?quote=true&service=roof">Request a Roof Cleaning Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">What Can We Soft Wash?</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {applications.map((type, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <h3 className="font-medium">{type}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Our soft washing methods are tailored to your specific surface type to ensure effective cleaning without causing damage.
            </p>
            <Button asChild>
              <Link to="/booking?quote=true&service=soft">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
          <div className="elfsight-app-c79d3126-70ca-49a2-a12f-84aea046911a" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
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
          <h2 className="text-3xl font-bold mb-6">Ready for a Cleaner, Safer Clean?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Experience the difference that professional soft washing can make for your home's appearance and longevity.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-[#62BFF0] hover:bg-white/90">
            <Link to="/booking?quote=true&service=soft">Book Soft Washing</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SoftWashing;
