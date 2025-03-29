
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, AlertCircle } from 'lucide-react';

const GutterCleaning = () => {
  const benefits = [
    "Prevents water damage to your home's foundation, walls, and landscaping",
    "Reduces the risk of basement flooding",
    "Eliminates breeding grounds for pests and insects",
    "Prevents roof damage and leaks",
    "Extends the lifespan of your gutter system",
    "Maintains proper water drainage away from your home"
  ];

  const services = [
    {
      title: "Interior Gutter Cleaning",
      description: "Removal of leaves, debris, and obstructions from inside your gutters."
    },
    {
      title: "Exterior Gutter Cleaning",
      description: "Cleaning of the outside of gutters to remove streaks, stains, and tiger stripes."
    },
    {
      title: "Downspout Cleaning",
      description: "Clearing of clogs and blockages in downspouts to ensure proper water flow."
    },
    {
      title: "Gutter Flushing",
      description: "Complete flushing of your gutters to ensure they're functioning properly."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#62BFF0]/10 to-transparent z-0"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Professional Gutter Cleaning Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Protect your home from water damage with our thorough gutter cleaning services, inside and out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/booking">Book Gutter Cleaning</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/booking?quote=true&service=gutter">Get a Quote</Link>
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
              <h2 className="text-3xl font-bold mb-6">Why Gutter Cleaning Is Essential</h2>
              <p className="text-muted-foreground mb-6">
                Clogged gutters can lead to serious problems for your home. When water can't flow properly through your gutters, it can overflow and damage your foundation, fascia boards, siding, and landscaping. Regular professional gutter cleaning prevents these issues.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-2 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex items-start">
                <AlertCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  <span className="font-medium">Did you know?</span> Clogged gutters are one of the leading causes of basement water problems. Regular gutter cleaning is much more cost-effective than dealing with water damage repairs.
                </p>
              </div>
            </div>
            
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Gutter Cleaning Process</h3>
              
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-medium">Initial Assessment</h4>
                    <p className="text-sm text-muted-foreground">We inspect your gutters to determine the extent of cleaning needed.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-medium">Debris Removal</h4>
                    <p className="text-sm text-muted-foreground">We manually remove leaves, twigs, and debris from your gutters.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-medium">Downspout Clearing</h4>
                    <p className="text-sm text-muted-foreground">We ensure all downspouts are free of clogs and flowing properly.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-medium">Gutter Flushing</h4>
                    <p className="text-sm text-muted-foreground">We flush your gutters with water to remove remaining debris and test water flow.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                  <div>
                    <h4 className="font-medium">Exterior Cleaning</h4>
                    <p className="text-sm text-muted-foreground">We clean the exterior of your gutters to remove streaks and stains.</p>
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

      {/* Our Services */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Gutter Cleaning Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We recommend gutter cleaning at least twice a year – in the spring and fall – to prevent clogs and ensure proper function.
            </p>
            <Button asChild>
              <Link to="/booking?quote=true&service=gutter">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#62BFF0] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Protect Your Home with Clean Gutters</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Don't wait for water damage to occur. Schedule your professional gutter cleaning service today.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-[#62BFF0] hover:bg-white/90">
            <Link to="/booking">Book Gutter Cleaning</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default GutterCleaning;
