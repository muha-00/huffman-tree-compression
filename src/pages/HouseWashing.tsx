
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const HouseWashing = () => {
  const benefits = [
    "Removes dirt, mold, mildew, and algae",
    "Prevents damage to your home's exterior",
    "Improves curb appeal and property value",
    "Healthier living environment by removing allergens",
    "Prepares surfaces for painting or refinishing",
    "Extends the life of your siding and exterior"
  ];

  const surfaces = [
    "Vinyl siding",
    "Brick and stone",
    "Stucco",
    "Wood siding",
    "Composite materials",
    "Concrete and driveways"
  ];

  return (
    <Layout>
      {/* Hero Section - New Design */}
      <section className="relative">
        <div className="w-full h-[500px] relative">
          <img 
            src="/lovable-uploads/cda52110-d35d-4881-867a-46f491ed73d6.png" 
            alt="Pressure Washing Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-8 md:px-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white uppercase animate-wipe-in">
              PRESSURE WASHING<br />SERVICES
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
              <Link to="/booking?quote=true&service=house">GET QUOTE</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our House Washing Services</h2>
              <p className="text-muted-foreground mb-6">
                At High Shine Cleaning, we specialize in transforming dirty exteriors into clean, vibrant surfaces that enhance your home's appearance. Our soft washing technique is designed to effectively clean without damaging your home's exterior.
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
                We use environmentally friendly cleaning solutions and adjust our pressure levels based on your home's exterior material to ensure safe and effective cleaning.
              </p>
            </div>
            
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our House Washing Process</h3>
              
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-medium">Pre-Inspection</h4>
                    <p className="text-sm text-muted-foreground">We assess your home's exterior and identify areas that need special attention.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-medium">Preparation</h4>
                    <p className="text-sm text-muted-foreground">We protect landscaping, cover electrical outlets, and prepare our equipment.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-medium">Application</h4>
                    <p className="text-sm text-muted-foreground">We apply specially formulated cleaning solutions to break down dirt and organic growth.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-medium">Soft Washing</h4>
                    <p className="text-sm text-muted-foreground">We use the appropriate pressure level to safely clean your specific exterior material.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                  <div>
                    <h4 className="font-medium">Rinse & Inspection</h4>
                    <p className="text-sm text-muted-foreground">We thoroughly rinse your home and perform a final inspection to ensure quality.</p>
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
            <h2 className="text-3xl font-bold mb-4">Expect Exceptional Results</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We pride ourselves on delivering outstanding cleaning results every time. 
              With years of experience and professional-grade equipment, we transform dirty 
              surfaces into spotless areas you'll be proud to show off.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img 
                  src="/lovable-uploads/7a79f545-3f37-4452-9ecb-1d1fe0c5d2c9.png" 
                  alt="Walkway before and after pressure washing" 
                  className="w-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Walkway Transformation</h3>
                <p>Our professional pressure washing service removes years of accumulated dirt, algae, and stains from your walkways.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img 
                  src="/lovable-uploads/ab49cf9f-c3b0-4083-b80c-05dc2c173051.png" 
                  alt="Deck before and after cleaning" 
                  className="w-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Deck Restoration</h3>
                <p>Breathe new life into your wooden deck with our careful pressure washing that preserves the integrity of your wood surfaces.</p>
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

      {/* Surfaces We Clean */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Surfaces We Clean</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {surfaces.map((surface, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <h3 className="font-medium">{surface}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Not sure if we can clean your home's exterior? Contact us today to discuss your specific needs and get a personalized quote.
            </p>
            <Button asChild>
              <Link to="/booking?quote=true&service=house">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#62BFF0] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Home's Exterior Today</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Restore your home's beauty and protect your investment with our professional house washing services.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-[#62BFF0] hover:bg-white/90">
            <Link to="/booking">Book House Washing</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HouseWashing;
