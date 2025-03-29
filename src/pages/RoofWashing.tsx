
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, AlertTriangle } from 'lucide-react';

const RoofWashing = () => {
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
    "Removes black streaks, moss, and algae",
    "Extends the life of your roof",
    "Improves energy efficiency by reducing heat absorption",
    "Prevents expensive roof damage and repairs",
    "Restores your roof's appearance",
    "Maintains proper water drainage"
  ];

  const roofTypes = [
    "Asphalt shingles",
    "Metal roofing",
    "Tile roofs",
    "Cedar shake",
    "Slate roofs",
    "Flat/low slope roofs"
  ];

  return (
    <Layout>
      {/* Hero Section - New Design */}
      <section className="relative">
        <div className="w-full h-[500px] relative">
          <img 
            src="/lovable-uploads/14cd8606-37c8-4c43-86dd-402bc7151c41.png" 
            alt="Roof Washing Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-8 md:px-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white uppercase animate-wipe-in">
              ROOF WASHING<br />SERVICES
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
              <Link to="/booking?quote=true&service=roof">GET QUOTE</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Your Roof Needs Professional Cleaning</h2>
              <p className="text-muted-foreground mb-6">
                Over time, your roof can become home to algae, moss, lichen, and other organic growth that not only looks unattractive but can also cause damage to your roofing materials. Our specialized roof washing service safely removes these harmful elements.
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
                  <span className="font-medium">Important:</span> Never use a high-pressure washer on your roof as it can damage shingles and void warranties. Our low-pressure, specialized cleaning method is safe for all roof types.
                </p>
              </div>
            </div>
            
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Roof Washing Process</h3>
              
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-medium">Roof Inspection</h4>
                    <p className="text-sm text-muted-foreground">We assess your roof's condition and identify areas of growth and staining.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-medium">Preparation</h4>
                    <p className="text-sm text-muted-foreground">We protect surrounding landscaping and prepare our specialized cleaning solution.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-medium">Application</h4>
                    <p className="text-sm text-muted-foreground">We apply our eco-friendly cleaning solution to kill algae and loosen organic material.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-medium">Low-Pressure Rinsing</h4>
                    <p className="text-sm text-muted-foreground">We use gentle, low-pressure rinsing to safely remove contaminants without damaging your roof.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                  <div>
                    <h4 className="font-medium">Final Inspection</h4>
                    <p className="text-sm text-muted-foreground">We ensure all growth and stains have been properly treated and removed.</p>
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

      {/* Roof Types */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Roof Types We Clean</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {roofTypes.map((type, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <h3 className="font-medium">{type}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Our cleaning methods are tailored to your specific roof type to ensure effective cleaning without causing damage.
            </p>
            <Button asChild>
              <Link to="/booking?quote=true&service=roof">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#62BFF0] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Extend Your Roof's Lifespan</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Regular roof cleaning can add years to your roof's life and save you thousands in early replacement costs.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-[#62BFF0] hover:bg-white/90">
            <Link to="/booking">Book Roof Washing</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default RoofWashing;
