
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Calendar, ShieldCheck, TrendingDown, Clock, ChevronDown, ChevronUp } from 'lucide-react';

// FAQ Item component with collapsible functionality
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-muted rounded-lg mb-4 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-xl font-bold">{question}</h3>
        {isOpen ? <ChevronUp className="h-5 w-5 text-[#62BFF0]" /> : <ChevronDown className="h-5 w-5 text-[#62BFF0]" />}
      </button>
      
      {isOpen && (
        <div className="p-6 pt-0 border-t">
          <p className="text-lg text-muted-foreground">{answer}</p>
        </div>
      )}
    </div>
  );
};

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
    }
  ];

  const faqs = [
    {
      question: "How does the 20% discount work?",
      answer: "The 20% discount is applied to our standard one-time service rates for all scheduled visits under your contract. This discount remains in effect for the entire duration of your contract."
    },
    {
      question: "Can I modify my contract after signing?",
      answer: "Yes, contracts can be modified with advance notice. You can add additional services, change frequency, or make other adjustments. Our team will work with you to accommodate your changing needs."
    },
    {
      question: "What if I need to cancel a scheduled service?",
      answer: "We understand that schedules change. With 48 hours notice, you can reschedule any service at no additional cost. We'll work with you to find a convenient alternative date."
    },
    {
      question: "Is there a minimum contract term?",
      answer: "Our service contracts have a minimum term of one year. This allows us to properly plan resources and maintain the discounted pricing structure for all contract customers."
    }
  ];

  return (
    <Layout>
      <div className="px-0 py-0 w-full">
        {/* Hero section with updated background image */}
        <div className="relative w-full h-[600px] mb-0">
          {/* Background image */}
          <div className="absolute inset-0 bg-black">
            <img 
              src="/lovable-uploads/75c1d2ff-1e68-49eb-8387-5ba3eb53dee2.png" 
              alt="Savings Concept" 
              className="w-full h-full object-cover opacity-80" 
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white animate-wipe-in leading-tight">Service <span className="text-white/80">Contracts</span></h1>
              <p className="text-white text-2xl font-bold mb-6 animate-wipe-in" style={{"--delay": "0.2s"} as React.CSSProperties}>
                SAVINGS! SAVINGS! SAVINGS!
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-white text-lg mb-8 animate-wipe-in max-w-xl opacity-90" style={{"--delay": "0.3s"} as React.CSSProperties}>
                  At High Shine Cleaning, we recognize the importance of consistent property maintenance and the value of cost-effective solutions. Our service contracts are designed to provide both quality care and significant savings through our scheduled maintenance plans.
                </p>
                <Link to="/booking?quote=true&contract=true" className="inline-block bg-white text-[#62BFF0] hover:bg-white/90 px-8 py-3 rounded-md font-medium animate-wipe-in" style={{"--delay": "0.5s"} as React.CSSProperties}>
                  Request Contract Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contract benefits section - Improved text sections with fewer buttons */}
        <div className="bg-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Choose a Service Contract?</h2>
              <div className="h-1 w-24 bg-[#62BFF0] mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our service contracts offer significant advantages over one-time cleanings, providing both convenience and savings.
                With High Shine's contract services, you'll receive consistent, high-quality maintenance while enjoying 
                substantial cost benefits throughout the year.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
              <Card className="border-t-4 border-t-[#62BFF0] hover-lift shadow-md">
                <CardContent className="pt-8 p-8">
                  <TrendingDown className="h-14 w-14 text-[#62BFF0] mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Save 20% On Every Service</h3>
                  <p className="text-muted-foreground text-lg">
                    Contract clients enjoy a 20% discount off our regular pricing for all scheduled services, providing significant long-term savings.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-[#62BFF0] hover-lift shadow-md">
                <CardContent className="pt-8 p-8">
                  <Calendar className="h-14 w-14 text-[#62BFF0] mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Priority Scheduling</h3>
                  <p className="text-muted-foreground text-lg">
                    Contract customers receive preferred scheduling and guaranteed time slots, ensuring your services are performed when you need them.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-[#62BFF0] hover-lift shadow-md">
                <CardContent className="pt-8 p-8">
                  <ShieldCheck className="h-14 w-14 text-[#62BFF0] mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Locked-In Pricing</h3>
                  <p className="text-muted-foreground text-lg">
                    Your contract rate is guaranteed for the full term, protecting you from price increases even during peak seasons.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Updated to not have frames */}
            <div className="max-w-4xl mx-auto mb-24">
              <h3 className="text-3xl font-bold mb-6 text-center">Professional Service at Predictable Rates</h3>
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Regular professional cleaning and maintenance not only keeps your property looking its best, but it also helps prevent long-term damage and costly repairs. With High Shine's maintenance contracts, you'll benefit from consistent expert care while enjoying significant cost savings.
                </p>
                <p>
                  Our service contracts are customized to your property's specific needs and schedule. Whether you need weekly, bi-weekly, monthly, quarterly, or bi-annual service, we'll create a maintenance plan that ensures your property always looks its best while providing you with maximum value.
                </p>
                <p>
                  All our contract clients receive priority scheduling, ensuring you get the service times that work best for you. And with our locked-in pricing, you'll know exactly what to expect with each visit, with no surprises or seasonal rate increases.
                </p>
                <div className="mt-8 text-center">
                  <Link to="/booking?quote=true&contract=true" className="inline-block bg-[#62BFF0] text-white px-8 py-3 rounded-md font-medium hover:bg-[#62BFF0]/90 transition-colors">
                    Start Saving Today
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Service Plans */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Available Service Plans</h2>
              <div className="h-1 w-24 bg-[#62BFF0] mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Choose the maintenance schedule that best fits your property's needs, and start enjoying the benefits of our professional service at a reduced rate.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <Card key={index} className="hover-lift shadow-md overflow-hidden">
                  <div className="bg-[#62BFF0] text-white p-6">
                    <h3 className="text-2xl font-bold">{plan.title}</h3>
                    <p className="text-xl opacity-90">{plan.frequency}</p>
                  </div>
                  <CardContent className="p-8">
                    <div className="bg-[#62BFF0]/10 text-[#62BFF0] font-medium px-4 py-2 rounded-full inline-block mb-6">
                      {plan.discount}
                    </div>
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
                    <div className="flex justify-center">
                      <Link to="/booking?quote=true&contract=true" className="inline-block bg-[#62BFF0] text-white px-8 py-3 rounded-md font-medium hover:bg-[#62BFF0]/90 transition-colors">
                        Get Quote
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Payment Information Section - Improved spacing and removed frame */}
        <div className="bg-gray-50 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">How Our Contracts Work</h2>
              <div className="h-1 w-24 bg-[#62BFF0] mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Understanding our service contract policies
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center">Contract Payment & Scheduling</h3>
              
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Our contract process is designed to be simple, transparent, and beneficial to you. When you sign up for a High Shine service contract, you're not just securing regular maintenance for your property – you're also locking in significant savings and preferred scheduling.
                </p>
                <p>
                  Contract payments are structured to provide you with the maximum benefit. We typically offer upfront payment options that secure your discount across all scheduled services, but we can also accommodate monthly payment plans for your convenience.
                </p>
                <p>
                  Our scheduling team works closely with you to establish service dates that fit perfectly with your calendar and preferences. We understand that flexibility is important, which is why we allow services to be rescheduled with advance notice at no additional cost.
                </p>
                
                <div className="bg-[#62BFF0]/10 p-6 rounded-lg mt-8">
                  <h4 className="font-medium mb-3 text-lg">Important Note:</h4>
                  <p className="text-base">
                    Contract services are based on your initial quote with a 20% discount applied. This gives you significant savings while maintaining the same high-quality service you expect from High Shine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section - With collapsible items */}
        <div className="bg-white py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="h-1 w-24 bg-[#62BFF0] mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground mb-12">
                Common questions about our service contracts
              </p>
            </div>
            
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
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
            <Link to="/booking?quote=true&contract=true" className="inline-block bg-white text-[#62BFF0] hover:bg-white/90 px-10 py-4 rounded-md font-medium text-xl">
              Request Contract Quote
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contracts;
