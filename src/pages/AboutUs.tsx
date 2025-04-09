
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Building, Home, Users, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <Layout>
      {/* Hero section */}
      <div className="relative w-full h-[400px]">
        <div className="absolute inset-0 bg-black">
          <img 
            src="/lovable-uploads/04d6b65c7-ec2b-42e6-95bd-35a36fbd751e.png" 
            alt="High Shine Cleaning Team" 
            className="w-full h-full object-cover opacity-70" 
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">About High Shine Cleaning</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Quality exterior cleaning services by a dedicated team of professionals
            </p>
          </div>
        </div>
      </div>

      {/* Our Story section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <div className="h-1 w-16 bg-[#62BFF0] mx-auto mb-8"></div>
          </div>
          
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              High Shine Cleaning began with a simple observation: there was a need for reliable, high-quality exterior cleaning services in the Greater Toronto Area. Founded by a team with years of experience in property maintenance, we set out to create a company that delivers exceptional results while providing outstanding customer service.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              What started as a small window cleaning operation has grown into a comprehensive exterior cleaning service provider. Through word-of-mouth recommendations and consistently exceeding client expectations, we've built a reputation for excellence throughout the communities we serve.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Today, High Shine Cleaning continues to grow, but our core values remain the same. We're committed to quality workmanship, environmental responsibility, transparent pricing, and treating every property with the utmost care and respect.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <div className="h-1 w-16 bg-[#62BFF0] mx-auto mb-8"></div>
          </div>
          
          <div className="prose prose-lg max-w-3xl mx-auto text-center mb-12">
            <p className="text-2xl italic text-gray-700">
              "To enhance the beauty and longevity of residential and commercial properties through superior cleaning services, environmental responsibility, and exceptional customer care."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-[#62BFF0] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every service we provide, continuously improving our techniques and equipment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#62BFF0] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in every client interaction and business decision.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#62BFF0] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-gray-600">
                We deliver consistent, high-quality results that our customers can count on every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Residential Services</h2>
            <div className="h-1 w-16 bg-[#62BFF0] mx-auto mb-8"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-[#62BFF0]">Why Your Home Needs Professional Cleaning</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1" />
                  <span>
                    <strong>Preserves Property Value</strong>: Regular exterior cleaning prevents long-term damage and maintains your home's value.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1" />
                  <span>
                    <strong>Enhances Curb Appeal</strong>: Clean windows, siding, and roofs dramatically improve your home's appearance.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1" />
                  <span>
                    <strong>Healthier Living Environment</strong>: Removes mold, mildew, and allergens that can affect indoor air quality.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1" />
                  <span>
                    <strong>Prevents Costly Repairs</strong>: Regular cleaning helps identify and address potential issues before they become serious problems.
                  </span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                Our residential services are tailored to the unique needs of homeowners, with flexible scheduling and comprehensive care for all your exterior cleaning requirements.
              </p>
              <Link to="/booking?quote=true" className="inline-block bg-[#62BFF0] text-white px-6 py-3 rounded-md font-medium hover:bg-[#62BFF0]/90 transition-colors">
                Get a Residential Quote
              </Link>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-full">
                <img 
                  src="/lovable-uploads/9e89cf68-5550-4bc9-82b8-1795b0402ba6.png" 
                  alt="Residential Window Cleaning" 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-4">Our Residential Services Include:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#62BFF0] mr-2" />
                      <span>Window cleaning (interior and exterior)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#62BFF0] mr-2" />
                      <span>House washing and siding cleaning</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#62BFF0] mr-2" />
                      <span>Roof washing and moss removal</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#62BFF0] mr-2" />
                      <span>Gutter cleaning and maintenance</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#62BFF0] mr-2" />
                      <span>Deck and patio cleaning</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#62BFF0] mr-2" />
                      <span>Concrete and driveway cleaning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Commercial Services</h2>
            <div className="h-1 w-16 bg-[#62BFF0] mx-auto mb-8"></div>
          </div>
          
          <div className="flex flex-col-reverse md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                <img 
                  src="/lovable-uploads/e6e02d29-51c3-4b83-bee4-9139cc64faf4.png" 
                  alt="Commercial Building Cleaning" 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-4">Our Commercial Services Include:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#62BFF0] mr-2" />
                      <span>Multi-story window cleaning</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#62BFF0] mr-2" />
                      <span>Building exterior washing</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#62BFF0] mr-2" />
                      <span>Awning and signage cleaning</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#62BFF0] mr-2" />
                      <span>Parking lot and garage cleaning</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#62BFF0] mr-2" />
                      <span>Scheduled maintenance programs</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#62BFF0] mr-2" />
                      <span>After-hours service availability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-[#62BFF0]">Why Your Business Needs Professional Cleaning</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1" />
                  <span>
                    <strong>Professional Appearance</strong>: First impressions matter. Clean exteriors convey professionalism and attention to detail.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1" />
                  <span>
                    <strong>Property Maintenance</strong>: Regular cleaning protects your investment and reduces long-term maintenance costs.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1" />
                  <span>
                    <strong>Safety Compliance</strong>: We adhere to all safety regulations and insurance requirements for commercial properties.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1" />
                  <span>
                    <strong>Minimal Business Disruption</strong>: Our team works efficiently with scheduling options that don't interfere with your business operations.
                  </span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                Our commercial cleaning services are designed to meet the unique needs of businesses, property managers, and commercial building owners. We offer customized maintenance plans to keep your property looking its best year-round.
              </p>
              <Link to="/booking?quote=true&commercial=true" className="inline-block bg-[#62BFF0] text-white px-6 py-3 rounded-md font-medium hover:bg-[#62BFF0]/90 transition-colors">
                Get a Commercial Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#62BFF0] text-white">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the High Shine Difference?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contact us today for a free, no-obligation quote. Our team is ready to provide the exceptional service and results that your property deserves.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-[#62BFF0] hover:bg-white/90">
              <Link to="/booking?quote=true">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
