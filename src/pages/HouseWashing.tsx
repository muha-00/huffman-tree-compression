
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
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-highshine/10 to-transparent z-0"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Professional House Washing Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Restore your home's exterior to its original beauty with our safe and effective house washing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/booking">Book House Washing</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/booking?quote=true&service=house">Get a Quote</Link>
              </Button>
            </div>
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
                    <Check className="h-5 w-5 text-highshine mr-2 mt-0.5" />
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
                  <span className="bg-highshine text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-medium">Pre-Inspection</h4>
                    <p className="text-sm text-muted-foreground">We assess your home's exterior and identify areas that need special attention.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-highshine text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-medium">Preparation</h4>
                    <p className="text-sm text-muted-foreground">We protect landscaping, cover electrical outlets, and prepare our equipment.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-highshine text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-medium">Application</h4>
                    <p className="text-sm text-muted-foreground">We apply specially formulated cleaning solutions to break down dirt and organic growth.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-highshine text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-medium">Soft Washing</h4>
                    <p className="text-sm text-muted-foreground">We use the appropriate pressure level to safely clean your specific exterior material.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-highshine text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
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
      <section className="py-16 bg-highshine text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Home's Exterior Today</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Restore your home's beauty and protect your investment with our professional house washing services.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-highshine hover:bg-white/90">
            <Link to="/booking">Book House Washing</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HouseWashing;
