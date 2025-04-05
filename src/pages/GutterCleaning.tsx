
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, AlertCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const GutterCleaning = () => {
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

  const faqs = [
    {
      question: "How often should gutters be cleaned?",
      answer: "For most homes, we recommend cleaning gutters at least twice a year – typically in the spring and fall. Homes with many surrounding trees may require more frequent cleaning, especially during autumn when leaves are falling."
    },
    {
      question: "What happens if I don't clean my gutters?",
      answer: "Neglected gutters can lead to serious problems including water damage to your foundation, basement flooding, fascia board rot, roof damage, landscape erosion, and insect infestations. These issues can result in costly repairs that far exceed the cost of regular gutter maintenance."
    },
    {
      question: "How long does gutter cleaning take?",
      answer: "For an average-sized home, professional gutter cleaning typically takes 1-2 hours. Larger homes or those with complex gutter systems may take longer. The presence of large amounts of debris or gutter guards can also extend the cleaning time."
    },
    {
      question: "Do you clean the inside and outside of gutters?",
      answer: "Yes, our comprehensive service includes cleaning both the interior of gutters to remove leaves and debris, as well as the exterior of gutters to remove streaks and stains. We also ensure that downspouts are clear and functioning properly."
    },
    {
      question: "Can you install gutter guards?",
      answer: "Yes, we can install various types of gutter guards to help minimize debris buildup while still allowing water to flow properly. We can discuss the options and recommend the best solution for your specific needs during our visit."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - New Design */}
      <section className="relative">
        <div className="w-full h-[500px] relative">
          <img 
            src="/lovable-uploads/64fb7890-1c18-4f4e-b1b2-3fd4d262274d.png" 
            alt="Gutter Cleaning Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-8 md:px-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white uppercase animate-wipe-in">
              GUTTER CLEANING<br />SERVICES
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
              <Link to="/booking?quote=true&service=gutter">GET QUOTE</Link>
            </Button>
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
      
      {/* Before and After Section - NEW */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">See The Difference</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <img 
                src="/lovable-uploads/6abde81d-a353-4ab2-a379-a8dab2e8acb1.png" 
                alt="Before and After Gutter Cleaning" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center mt-6 text-muted-foreground">
              Professional gutter cleaning removes debris and ensures proper water flow, protecting your home from water damage.
            </p>
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

      {/* FAQ Section */}
      <section className="py-16">
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
