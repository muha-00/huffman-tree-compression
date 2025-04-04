
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, AlertTriangle, Home } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  const softWashBenefits = [
    "Gentle yet effective cleaning of delicate surfaces",
    "Kills and removes algae, mold, mildew, and bacteria",
    "Longer-lasting results than pressure washing",
    "Safe for all types of siding, roofing, and surfaces",
    "Prevents damage from aggressive high-pressure cleaning",
    "Improves curb appeal and property value"
  ];

  const roofBenefits = [
    "Removes black streaks, moss, and algae",
    "Extends the life of your roof",
    "Improves energy efficiency by reducing heat absorption",
    "Prevents expensive roof damage and repairs",
    "Restores your roof's appearance",
    "Maintains proper water drainage"
  ];

  const surfaces = [
    "Vinyl siding",
    "Stucco",
    "Painted surfaces",
    "Asphalt shingles",
    "Cedar shake roofs",
    "Delicate surfaces"
  ];

  const roofTypes = [
    "Asphalt shingles",
    "Metal roofing",
    "Tile roofs",
    "Cedar shake",
    "Slate roofs",
    "Flat/low slope roofs"
  ];

  const faqs = [
    {
      question: "What is soft washing and how is it different from pressure washing?",
      answer: "Soft washing uses low pressure (similar to a garden hose) combined with specialized cleaning solutions to remove dirt, algae, and other contaminants from surfaces. Unlike pressure washing, which uses high-pressure water that can damage delicate surfaces, soft washing relies on biodegradable chemicals to break down biological growth and contaminants, making it safer for sensitive materials like roof shingles, vinyl siding, and stucco."
    },
    {
      question: "Is soft washing safe for all exterior surfaces?",
      answer: "Yes, soft washing is specifically designed to be safe for virtually all exterior surfaces, including those that would be damaged by traditional pressure washing. Our specialized cleaning solutions are formulated to be effective while protecting your home's surfaces."
    },
    {
      question: "How long does a soft wash treatment last?",
      answer: "Typically, soft washing provides longer-lasting results than pressure washing. Most homes remain clean for 4-6 times longer after a soft wash treatment compared to pressure washing. Depending on your environment and local conditions, results can last 1-2 years before another treatment is needed."
    },
    {
      question: "Are the chemicals used in soft washing safe for my family, pets, and landscaping?",
      answer: "Yes, we use biodegradable, environmentally responsible cleaning solutions that break down into carbon and water within a short time after application. While the solutions are working, we take care to protect your landscaping, and once dry, the treated areas are safe for families and pets."
    },
    {
      question: "How often should I have my roof soft washed?",
      answer: "Most roofs benefit from soft washing every 2-3 years, but this can vary based on your local environment. Homes in areas with high humidity, heavy tree coverage, or frequent rainfall may require more frequent cleaning to prevent algae and moss buildup."
    },
    {
      question: "Will soft washing damage my shingles or void my roof warranty?",
      answer: "No, soft washing will not damage your shingles or void warranties when done correctly. In fact, many roof manufacturers now recommend soft washing as the preferred cleaning method. High-pressure washing, on the other hand, can damage shingles and potentially void warranties."
    }
  ];

  return (
    <Layout>
      {/* Hero Section with new image */}
      <section className="relative">
        <div className="w-full h-[500px] relative">
          <img 
            src="/lovable-uploads/37b1ee12-c7e7-4359-b1ab-d1ac6202d132.png" 
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

      {/* Service Description with Tabs for Soft Washing and Roof Washing */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Soft Washing Services</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Soft washing is a specialized cleaning method that uses low pressure and eco-friendly cleaning solutions 
              to safely remove dirt, algae, mold, and other contaminants from your home's exterior surfaces.
            </p>
          </div>
          
          <Tabs defaultValue="softwashing" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="softwashing">Soft Washing</TabsTrigger>
              <TabsTrigger value="roofwashing">Roof Washing</TabsTrigger>
            </TabsList>
            
            {/* Soft Washing Content */}
            <TabsContent value="softwashing">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-6">The Gentle Cleaning Solution</h3>
                  <p className="text-muted-foreground mb-6">
                    Soft washing is the preferred method for cleaning delicate surfaces that could be damaged by 
                    high-pressure washing. Our specialized process removes contaminants at their root, providing 
                    longer-lasting results than traditional pressure washing.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {softWashBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-[#62BFF0] mr-2 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex items-start">
                    <Home className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      <span className="font-medium">Perfect for your home:</span> Our soft washing technique is ideal for vinyl siding, 
                      stucco, painted surfaces, and other delicate materials that require gentle but effective cleaning.
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
                        <p className="text-sm text-muted-foreground">We assess the surfaces to be cleaned and identify contaminants and problem areas.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <div>
                        <h4 className="font-medium">Site Preparation</h4>
                        <p className="text-sm text-muted-foreground">We protect surrounding landscaping and prepare our eco-friendly cleaning solution.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <div>
                        <h4 className="font-medium">Solution Application</h4>
                        <p className="text-sm text-muted-foreground">We apply our biodegradable cleaning solution that breaks down organic growth and dirt.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <div>
                        <h4 className="font-medium">Dwell Time</h4>
                        <p className="text-sm text-muted-foreground">We allow the solution time to work, breaking down contaminants at their source.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                      <div>
                        <h4 className="font-medium">Low-Pressure Rinse</h4>
                        <p className="text-sm text-muted-foreground">We use gentle, low-pressure rinsing to safely remove the solution and contaminants.</p>
                      </div>
                    </li>
                  </ol>
                  
                  <div className="mt-6">
                    <Button asChild className="w-full">
                      <Link to="/booking?quote=true&service=soft">Get a Free Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Roof Washing Content */}
            <TabsContent value="roofwashing">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Professional Roof Washing</h3>
                  <p className="text-muted-foreground mb-6">
                    Over time, your roof can become home to algae, moss, lichen, and other organic growth that not only 
                    looks unattractive but can also cause damage to your roofing materials. Our specialized roof washing 
                    service safely removes these harmful elements without damaging your roof.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {roofBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-[#62BFF0] mr-2 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      <span className="font-medium">Important:</span> Never use a high-pressure washer on your roof as it can damage 
                      shingles and void warranties. Our low-pressure, specialized soft washing method is safe for all roof types.
                    </p>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">The Benefits of Professional Roof Cleaning</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-[#62BFF0] mb-2">Protect Your Investment</h4>
                      <p className="text-sm">A new roof can cost $10,000-$20,000 or more. Regular cleaning can extend your roof's life by 5-10 years, saving you thousands in early replacement costs.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-[#62BFF0] mb-2">Energy Efficiency</h4>
                      <p className="text-sm">A clean roof reflects more sunlight and absorbs less heat, potentially lowering cooling costs during summer months.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-[#62BFF0] mb-2">Prevent Damage</h4>
                      <p className="text-sm">Algae and moss hold moisture against your roof, accelerating deterioration and potentially causing leaks and structural damage.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-[#62BFF0] mb-2">Enhanced Curb Appeal</h4>
                      <p className="text-sm">Remove unsightly black streaks and stains that can make even a relatively new roof look old and neglected.</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button asChild className="w-full">
                      <Link to="/booking?quote=true&service=roof">Get a Roof Cleaning Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-[#62BFF0]/10">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
          <div className="elfsight-app-c79d3126-70ca-49a2-a12f-84aea046911a" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* Surfaces We Clean - Enhanced Section */}
      <section className="py-16 bg-gradient-to-b from-muted to-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Surfaces We Clean</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Our soft washing method is effective and safe for cleaning a variety of surfaces.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {surfaces.map((surface, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-[#62BFF0]/30">
                <CardContent className="p-6 text-center">
                  <div className="h-12 flex items-center justify-center mb-2">
                    <img src={`/lovable-uploads/2b1a427b-30d3-4497-8177-fd955d1af674.png`} alt="Icon" className="h-8 w-8 opacity-70" />
                  </div>
                  <h3 className="font-medium">{surface}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Roof Types We Clean</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Our cleaning methods are tailored to your specific roof type to ensure effective cleaning without causing damage.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {roofTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-[#62BFF0]/30">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 flex items-center justify-center mb-2">
                      <img src={`/lovable-uploads/2b1a427b-30d3-4497-8177-fd955d1af674.png`} alt="Icon" className="h-8 w-8 opacity-70" />
                    </div>
                    <h3 className="font-medium">{type}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-[#62BFF0]/10 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Not sure if soft washing is right for your property?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us today for a free consultation. Our experts will assess your property and recommend the best cleaning approach.
              </p>
              <Button asChild className="bg-[#62BFF0] hover:bg-[#62BFF0]/90">
                <Link to="/booking?quote=true&service=soft">Request a Free Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Find answers to common questions about our soft washing and roof cleaning services.
          </p>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6">
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
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Protect and Beautify Your Property</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Our specialized soft washing services provide gentle yet effective cleaning for all your exterior surfaces.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-[#62BFF0] hover:bg-white/90">
                <Link to="/booking">Book Soft Washing</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <a href="tel:4378585005">Call 437-858-5005</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SoftWashing;
