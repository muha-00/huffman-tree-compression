
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
        {/* Hero section with a solid gradient background instead of an image */}
        <div className="relative w-full h-[500px] mb-0 bg-gradient-to-r from-[#62BFF0] to-blue-600">
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white animate-wipe-in leading-tight">Service <span className="text-white/80">Contracts</span></h1>
              <p className="text-white text-xl mb-6 animate-wipe-in max-w-lg opacity-90" style={{"--delay": "0.2s"} as React.CSSProperties}>
                Invest in Your Property's Long-Term Care
              </p>
              <p className="text-white text-lg mb-8 animate-wipe-in max-w-lg opacity-90" style={{"--delay": "0.3s"} as React.CSSProperties}>
                At High Shine Cleaning, we recognize the importance of consistent property maintenance and the value of cost-effective solutions. Our service contracts are designed to provide both quality care and significant savings through our scheduled maintenance plans.
              </p>
              <Button asChild size="lg" className="bg-white text-[#62BFF0] hover:bg-white/90 animate-wipe-in" style={{"--delay": "0.5s"} as React.CSSProperties}>
                <Link to="/booking?quote=true&contract=true">Request Contract Quote</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Contract benefits section - Improved spacing and hierarchy */}
        <div className="bg-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Choose a Service Contract?</h2>
              <div className="h-1 w-24 bg-[#62BFF0] mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our service contracts offer significant advantages over one-time cleanings, providing both convenience and savings.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
              <Card className="border-t-4 border-t-[#62BFF0] hover-lift shadow-md">
                <CardContent className="pt-8 p-8">
                  <TrendingDown className="h-14 w-14 text-[#62BFF0] mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Save 20% On Every Service</h3>
                  <p className="text-muted-foreground text-lg">
                    Contract clients enjoy a 20% discount off our regular pricing for all scheduled services.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-[#62BFF0] hover-lift shadow-md">
                <CardContent className="pt-8 p-8">
                  <Calendar className="h-14 w-14 text-[#62BFF0] mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Priority Scheduling</h3>
                  <p className="text-muted-foreground text-lg">
                    Contract customers receive preferred scheduling and guaranteed time slots.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-[#62BFF0] hover-lift shadow-md">
                <CardContent className="pt-8 p-8">
                  <ShieldCheck className="h-14 w-14 text-[#62BFF0] mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Locked-In Pricing</h3>
                  <p className="text-muted-foreground text-lg">
                    Your contract rate is guaranteed for the full term, protecting you from price increases.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Available Service Plans</h2>
              <div className="h-1 w-24 bg-[#62BFF0] mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Choose the maintenance schedule that best fits your property's needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, index) => (
                <Card key={index} className="hover-lift shadow-md">
                  <CardContent className="p-8">
                    <div className="bg-[#62BFF0]/10 text-[#62BFF0] font-medium px-4 py-2 rounded-full inline-block mb-6">
                      {plan.discount}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{plan.title}</h3>
                    <p className="text-xl font-medium text-[#62BFF0] mb-4">{plan.frequency}</p>
                    <p className="text-muted-foreground mb-8 text-lg">
                      {plan.description}
                    </p>
                    <ul className="space-y-4 mb-8">
                      {plan.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1" />
                          <span className="text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-[#62BFF0] hover:bg-[#62BFF0]/90 py-6 text-lg">
                      <Link to="/booking?quote=true&contract=true">Get Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Payment Information Section - Improved spacing */}
        <div className="bg-gray-50 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">How Our Contracts Work</h2>
              <div className="h-1 w-24 bg-[#62BFF0] mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Understanding our service contract policies
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg max-w-3xl mx-auto p-10">
              <h3 className="text-2xl font-bold mb-8 text-center">Contract Payment & Scheduling</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#62BFF0] mr-4 mt-0.5 flex-shrink-0" />
                  <p className="text-lg">Upfront payment for the contract secures your discount and scheduled service dates</p>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#62BFF0] mr-4 mt-0.5 flex-shrink-0" />
                  <p className="text-lg">Our team works with you to establish service dates that fit your schedule</p>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#62BFF0] mr-4 mt-0.5 flex-shrink-0" />
                  <p className="text-lg">Services can be rescheduled with advance notice at no additional cost</p>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#62BFF0] mr-4 mt-0.5 flex-shrink-0" />
                  <p className="text-lg">While contract payments are non-refundable, all services can be rebooked as needed</p>
                </div>
              </div>
              
              <div className="bg-[#62BFF0]/10 p-6 rounded-lg">
                <h4 className="font-medium mb-3 text-lg">Note:</h4>
                <p className="text-base">Contract services are based on your initial quote with a 20% discount applied. This gives you significant savings while maintaining the same high-quality service.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section - Improved spacing and styling */}
        <div className="bg-white py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="h-1 w-24 bg-[#62BFF0] mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Common questions about our service contracts
              </p>
            </div>
            
            <div className="space-y-8">
              <Card className="shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">How does the 20% discount work?</h3>
                  <p className="text-lg">
                    The 20% discount is applied to our standard one-time service rates for all scheduled visits under your contract. This discount remains in effect for the entire duration of your contract.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Can I modify my contract after signing?</h3>
                  <p className="text-lg">
                    Yes, contracts can be modified with advance notice. You can add additional services, change frequency, or make other adjustments. Our team will work with you to accommodate your changing needs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">What if I need to cancel a scheduled service?</h3>
                  <p className="text-lg">
                    We understand that schedules change. With 48 hours notice, you can reschedule any service at no additional cost. We'll work with you to find a convenient alternative date.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Is there a minimum contract term?</h3>
                  <p className="text-lg">
                    Our service contracts have a minimum term of one year. This allows us to properly plan resources and maintain the discounted pricing structure for all contract customers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* CTA Section - Enhanced appearance */}
        <div className="bg-[#62BFF0] text-white py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Save on Regular Services?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
              Contact us today to discuss your specific needs and get a customized contract quote with your 20% savings already applied.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-[#62BFF0] hover:bg-white/90 px-8 py-7 text-xl">
              <Link to="/booking?quote=true&contract=true">Request Contract Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contracts;
