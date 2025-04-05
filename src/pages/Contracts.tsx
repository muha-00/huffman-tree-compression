
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Calendar, ShieldCheck, TrendingDown, Clock } from 'lucide-react';

const Contracts = () => {
  const plans = [
    {
      title: "Quarterly Service",
      frequency: "4 times per year",
      description: "Optimal for maintaining your property's appearance year-round with seasonal services.",
      discount: "20% off",
      benefits: [
        "Spring, Summer, Fall, and Winter visits",
        "Priority scheduling",
        "Consistent pricing",
        "Comprehensive seasonal maintenance"
      ]
    },
    {
      title: "Bi-Annual Service",
      frequency: "2 times per year",
      description: "Perfect for maintaining your property with seasonal spring and fall cleaning services.",
      discount: "20% off",
      benefits: [
        "Spring and Fall cleaning visits",
        "Priority scheduling",
        "Consistent pricing",
        "Semi-annual property refresh"
      ]
    },
    {
      title: "Annual Service",
      frequency: "1 time per year",
      description: "Great for property owners who want an annual deep cleaning service.",
      discount: "20% off",
      benefits: [
        "One scheduled visit per year",
        "Priority scheduling",
        "Consistent pricing",
        "Comprehensive annual maintenance"
      ]
    },
    {
      title: "Monthly Service",
      frequency: "Every month",
      description: "Ideal for commercial properties or residences requiring frequent maintenance.",
      discount: "20% off",
      benefits: [
        "Monthly scheduled visits",
        "Top priority scheduling",
        "Maximum savings",
        "Always pristine appearance"
      ]
    }
  ];

  return (
    <Layout>
      <div className="px-0 py-0 w-full">
        {/* Hero section */}
        <div className="relative w-full h-[500px] mb-0">
          <img 
            src="/lovable-uploads/64fb7890-1c18-4f4e-b1b2-3fd4d262274d.png" 
            alt="Property maintenance contract" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col justify-center items-start px-8 md:px-16">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white animate-wipe-in leading-tight">Service <span className="text-[#62BFF0]">Contracts</span></h1>
              <p className="text-white text-lg mb-8 animate-wipe-in max-w-lg opacity-90" style={{"--delay": "0.3s"} as React.CSSProperties}>
                Enjoy regular maintenance of your property at discounted rates with our service contracts.
              </p>
              <Button asChild size="lg" className="bg-[#62BFF0] hover:bg-[#62BFF0]/90 animate-wipe-in" style={{"--delay": "0.5s"} as React.CSSProperties}>
                <Link to="/booking?quote=true">Request Contract Quote</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Contract benefits section */}
        <div className="bg-white py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose a Service Contract?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our service contracts offer significant advantages over one-time cleanings, providing both convenience and savings.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="border-t-4 border-t-[#62BFF0] hover-lift">
                <CardContent className="pt-6">
                  <TrendingDown className="h-12 w-12 text-[#62BFF0] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Save 20% On Every Service</h3>
                  <p className="text-muted-foreground">
                    Contract clients enjoy a 20% discount off our regular pricing for all scheduled services.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-[#62BFF0] hover-lift">
                <CardContent className="pt-6">
                  <Calendar className="h-12 w-12 text-[#62BFF0] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Priority Scheduling</h3>
                  <p className="text-muted-foreground">
                    Contract customers receive preferred scheduling and guaranteed time slots.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-[#62BFF0] hover-lift">
                <CardContent className="pt-6">
                  <ShieldCheck className="h-12 w-12 text-[#62BFF0] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Locked-In Pricing</h3>
                  <p className="text-muted-foreground">
                    Your contract rate is guaranteed for the full term, protecting you from price increases.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Available Service Plans</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the maintenance schedule that best fits your property's needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="bg-[#62BFF0]/10 text-[#62BFF0] font-medium px-3 py-1 rounded-full inline-block mb-4">
                      {plan.discount}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                    <p className="text-lg font-medium text-[#62BFF0] mb-4">{plan.frequency}</p>
                    <p className="text-muted-foreground mb-6">
                      {plan.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {plan.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-[#62BFF0] mr-2 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-[#62BFF0] hover:bg-[#62BFF0]/90">
                      <Link to="/booking?quote=true&contract=true">Get Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Common questions about our service contracts
              </p>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">How does the 20% discount work?</h3>
                  <p>
                    The 20% discount is applied to our standard one-time service rates for all scheduled visits under your contract. This discount remains in effect for the entire duration of your contract.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Can I modify my contract after signing?</h3>
                  <p>
                    Yes, contracts can be modified with advance notice. You can add additional services, change frequency, or make other adjustments. Our team will work with you to accommodate your changing needs.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">What if I need to cancel a scheduled service?</h3>
                  <p>
                    We understand that schedules change. With 48 hours notice, you can reschedule any service at no additional cost. We'll work with you to find a convenient alternative date.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Is there a minimum contract term?</h3>
                  <p>
                    Our service contracts have a minimum term of one year. This allows us to properly plan resources and maintain the discounted pricing structure for all contract customers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-[#62BFF0] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Save on Regular Services?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Contact us today to discuss your specific needs and get a customized contract quote with your 20% savings already applied.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-[#62BFF0] hover:bg-white/90">
              <Link to="/booking?quote=true&contract=true">Request Contract Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contracts;
