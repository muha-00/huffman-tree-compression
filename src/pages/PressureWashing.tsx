
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, AlertTriangle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PressureWashing = () => {
  // Handle Elfsight script loading for the service pages
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
    "Instantly improves curb appeal",
    "Removes dirt, grime, mold, and mildew",
    "Prevents long-term damage from contaminants",
    "Prepares surfaces for painting or staining",
    "Removes oil stains from concrete surfaces",
    "Environmentally friendly cleaning process"
  ];

  const surfaces = [
    "Driveways and walkways",
    "Patios and pool decks",
    "Concrete and pavers",
    "Brick and stone surfaces",
    "Decks and fences",
    "Retaining walls"
  ];

  const faqs = [
    {
      question: "How often should I have my driveway pressure washed?",
      answer: "For most residential properties, we recommend pressure washing driveways, walkways, and other hardscapes once or twice per year. Properties with heavy tree coverage or in humid areas may require more frequent cleaning to prevent significant buildup of dirt, algae, and organic matter."
    },
    {
      question: "Will pressure washing damage my concrete or pavers?",
      answer: "When performed by our trained professionals, pressure washing will not damage properly installed concrete or pavers. We adjust the pressure levels based on the specific surface being cleaned to ensure effective results without causing damage. However, DIY pressure washing or hiring inexperienced contractors can potentially damage surfaces with excessive pressure."
    },
    {
      question: "Can pressure washing remove oil stains from my driveway?",
      answer: "Yes, our pressure washing service can remove many oil stains from concrete surfaces. For fresh oil stains, we achieve excellent results. For older, set-in stains, we use specialized detergents and techniques that can significantly improve appearance, although some deeply embedded stains may not be completely eliminated in a single treatment."
    },
    {
      question: "How long will it take for my driveway to dry after pressure washing?",
      answer: "Drying time depends on weather conditions, but most surfaces will be dry to walk on within 2-4 hours after pressure washing. During hot, sunny days, drying can occur even faster. We recommend scheduling pressure washing on a day when you don't need immediate use of the area, although temporary access is usually possible shortly after cleaning."
    },
    {
      question: "Do I need to do anything to prepare before you pressure wash?",
      answer: "To prepare for our pressure washing service, please remove vehicles, outdoor furniture, potted plants, and other movable items from the areas to be cleaned. Also, ensure that exterior water spigots are working properly as we'll need access to water. We'll handle all other preparation, including covering sensitive plants and ensuring all windows and doors are closed."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[500px] relative">
          <img 
            src="/lovable-uploads/ca3f64b4-5f71-4ae1-9f74-9100b38dff4e.png" 
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
              <Link to="/booking?quote=true&service=pressure">GET QUOTE</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Transform Your Property With Professional Pressure Washing</h2>
              <p className="text-muted-foreground mb-6">
                Our professional pressure washing services remove years of built-up dirt, grime, mold, and mildew from your hard surfaces, instantly improving your property's appearance and preventing long-term damage.
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
                  <span className="font-medium">Important:</span> DIY pressure washing can damage surfaces and cause injury if not done correctly. Our professionals have the proper equipment and expertise to safely clean all surfaces without causing damage.
                </p>
              </div>
            </div>
            
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Pressure Washing Process</h3>
              
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-medium">Surface Inspection</h4>
                    <p className="text-sm text-muted-foreground">We assess the condition of your surfaces and identify stains and problem areas.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-medium">Pre-Treatment</h4>
                    <p className="text-sm text-muted-foreground">We apply specialized detergents to break down tough stains and organic growth.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-medium">Pressure Selection</h4>
                    <p className="text-sm text-muted-foreground">We select the appropriate pressure level for each surface to ensure safe, effective cleaning.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-medium">Professional Cleaning</h4>
                    <p className="text-sm text-muted-foreground">We methodically clean your surfaces using commercial-grade equipment.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#62BFF0] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                  <div>
                    <h4 className="font-medium">Post-Treatment</h4>
                    <p className="text-sm text-muted-foreground">We rinse and apply any necessary post-cleaning treatments to prevent quick recontamination.</p>
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

      {/* Surfaces Section */}
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
              Our pressure washing techniques are customized to suit each specific surface, ensuring effective cleaning without damage.
            </p>
            <Button asChild>
              <Link to="/booking?quote=true&service=pressure">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">The Power of Pressure Washing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg h-[300px]">
                <img 
                  src="/lovable-uploads/20c543d2-2f01-4acd-975b-5ab996525b08.png"
                  alt="Before Pressure Washing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded">Before</div>
              </div>
              <p className="text-center text-muted-foreground">
                Grimy driveway with years of dirt and algae buildup
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg h-[300px]">
                <img 
                  src="/lovable-uploads/ca3f64b4-5f71-4ae1-9f74-9100b38dff4e.png"
                  alt="After Pressure Washing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#62BFF0] text-white px-4 py-2 rounded">After</div>
              </div>
              <p className="text-center text-muted-foreground">
                Transformed to look like new with our professional cleaning
              </p>
            </div>
          </div>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Property?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Professional pressure washing is one of the most cost-effective ways to instantly improve your property's curb appeal.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-[#62BFF0] hover:bg-white/90">
            <Link to="/booking?quote=true&service=pressure">Book Pressure Washing</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PressureWashing;
