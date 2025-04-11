
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Building, Home, Users, Award, Star, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import MapComponent from '@/components/MapComponent';

const AboutUs = () => {
  return (
    <Layout>
      {/* Service Area Map Section - Full width to match Contact Us page */}
      <section className="py-10 bg-white w-full">
        <div className="container max-w-6xl mx-auto px-4 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Service Area</h2>
            <div className="h-1 w-24 bg-[#62BFF0] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proudly serving residential and commercial clients throughout the Greater Toronto Area
            </p>
          </div>
        </div>
          
        <div className="w-full mb-16">
          <MapComponent fullWidth={true} />
        </div>

        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mx-auto max-w-2xl">
            <h3 className="text-2xl font-bold mb-6 text-[#62BFF0]">Serving the Greater Toronto Area</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our team provides professional cleaning services throughout the GTA, including:
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#62BFF0] mr-2 flex-shrink-0" />
                    <span>Toronto</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#62BFF0] mr-2 flex-shrink-0" />
                    <span>Mississauga</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#62BFF0] mr-2 flex-shrink-0" />
                    <span>Brampton</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#62BFF0] mr-2 flex-shrink-0" />
                    <span>Vaughan</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#62BFF0] mr-2 flex-shrink-0" />
                    <span>Markham</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#62BFF0] mr-2 flex-shrink-0" />
                    <span>Richmond Hill</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#62BFF0] mr-2 flex-shrink-0" />
                    <span>Oakville</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#62BFF0] mr-2 flex-shrink-0" />
                    <span>Burlington</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-[#62BFF0] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Call for service anywhere in the GTA</p>
                  <a href="tel:4378585005" className="text-lg text-[#62BFF0] hover:underline">(437) 858-5005</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-[#62BFF0] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email us for a free quote</p>
                  <a href="mailto:highshinecleaning123@gmail.com" className="text-[#62BFF0] hover:underline">highshinecleaning123@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero section with animated title - moved after map */}
      <div className="relative w-full h-[450px] bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700"></div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-wipe-in" style={{"--delay": "0.1s"} as React.CSSProperties}>
              About High Shine Cleaning
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-wipe-in" style={{"--delay": "0.3s"} as React.CSSProperties}>
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

      {/* Residential Services section - Enhanced */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Residential Services</h2>
            <div className="h-1 w-16 bg-[#62BFF0] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your home with our comprehensive exterior cleaning services, designed to enhance your property's beauty and protect your investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-[#62BFF0] leading-tight">Why Your Home Needs <br />Professional Cleaning</h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#62BFF0] hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <div className="bg-[#62BFF0]/10 rounded-full p-2 mr-3">
                      <Home className="h-6 w-6 text-[#62BFF0]" />
                    </div>
                    <h4 className="text-xl font-bold">Preserves Property Value</h4>
                  </div>
                  <p className="text-gray-700">
                    Regular professional cleaning prevents the buildup of damaging elements like mold, mildew, and algae. This preventative maintenance protects your home's surfaces and structural integrity, ensuring your property maintains its market value over time.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#62BFF0] hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <div className="bg-[#62BFF0]/10 rounded-full p-2 mr-3">
                      <Star className="h-6 w-6 text-[#62BFF0]" />
                    </div>
                    <h4 className="text-xl font-bold">Enhances Curb Appeal</h4>
                  </div>
                  <p className="text-gray-700">
                    First impressions matter. Clean windows, siding, and driveways dramatically improve your home's appearance. Whether you're planning to sell or simply want to be proud of your home, our services create a striking visual difference you'll notice immediately.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#62BFF0] hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <div className="bg-[#62BFF0]/10 rounded-full p-2 mr-3">
                      <Check className="h-6 w-6 text-[#62BFF0]" />
                    </div>
                    <h4 className="text-xl font-bold">Healthier Living Environment</h4>
                  </div>
                  <p className="text-gray-700">
                    Exterior contaminants don't just affect your home's appearance—they can impact indoor air quality and your family's health. Our thorough cleaning processes remove allergens, pollutants, and irritants that can otherwise make their way inside your home.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/booking?quote=true" className="inline-flex items-center justify-center bg-[#62BFF0] text-white px-6 py-3 rounded-md font-medium hover:bg-[#62BFF0]/90 transition-colors">
                  Get a Residential Quote
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                
                <Link to="/window-cleaning" className="inline-flex items-center justify-center border border-[#62BFF0] text-[#62BFF0] px-6 py-3 rounded-md font-medium hover:bg-[#62BFF0]/10 transition-colors">
                  Explore Services
                </Link>
              </div>
            </div>
            
            <div>
              <div className="bg-[#62BFF0]/10 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Our Residential Services</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block mb-1">Interior & exterior window cleaning</span>
                      <p className="text-gray-600">Professional cleaning of all window surfaces, frames, and screens for crystal-clear views.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block mb-1">House washing and siding cleaning</span>
                      <p className="text-gray-600">Gentle yet effective removal of dirt, algae, and mildew from all exterior surfaces.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block mb-1">Roof washing and moss removal</span>
                      <p className="text-gray-600">Safe techniques to remove damaging organic growth and extend roof life.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block mb-1">Gutter cleaning and maintenance</span>
                      <p className="text-gray-600">Complete clearing of debris and proper water flow restoration to prevent water damage.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block mb-1">Deck, patio & concrete cleaning</span>
                      <p className="text-gray-600">Restoration of outdoor living spaces with specialized surface-appropriate cleaning.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services section - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Commercial Services</h2>
            <div className="h-1 w-16 bg-[#62BFF0] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Make your business shine with our specialized commercial cleaning services, designed to maintain your professional image and protect your commercial property.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Our Commercial Services</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block mb-1">Multi-story window cleaning</span>
                      <p className="text-gray-600">Safe and efficient cleaning for buildings of all heights using professional equipment.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block mb-1">Building exterior washing</span>
                      <p className="text-gray-600">Comprehensive cleaning of all external surfaces to maintain appearance and structural integrity.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block mb-1">Awning and signage cleaning</span>
                      <p className="text-gray-600">Specialized care for branded elements to ensure visibility and professional appearance.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block mb-1">Parking lot and garage cleaning</span>
                      <p className="text-gray-600">Thorough cleaning of high-traffic areas to remove stains, oil, and debris.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#62BFF0] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block mb-1">Scheduled maintenance programs</span>
                      <p className="text-gray-600">Custom maintenance plans with discounted rates for ongoing service.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6 text-[#62BFF0] leading-tight">Why Your Business Needs <br />Professional Cleaning</h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white p-6 rounded-lg border-l-4 border-[#62BFF0] hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <div className="bg-[#62BFF0]/10 rounded-full p-2 mr-3">
                      <Building className="h-6 w-6 text-[#62BFF0]" />
                    </div>
                    <h4 className="text-xl font-bold">Professional Image</h4>
                  </div>
                  <p className="text-gray-700">
                    Your building's exterior is a reflection of your business. Clean, well-maintained commercial properties communicate professionalism, attention to detail, and success to clients, customers, and partners. Our commercial cleaning services help maintain your company's reputation and credibility.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border-l-4 border-[#62BFF0] hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <div className="bg-[#62BFF0]/10 rounded-full p-2 mr-3">
                      <Check className="h-6 w-6 text-[#62BFF0]" />
                    </div>
                    <h4 className="text-xl font-bold">Property Preservation</h4>
                  </div>
                  <p className="text-gray-700">
                    Commercial properties represent significant investments. Regular professional cleaning prevents deterioration from environmental contaminants, extends the lifespan of building materials, and helps avoid costly repairs and renovations. Our maintenance programs are designed to protect your investment for years to come.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border-l-4 border-[#62BFF0] hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <div className="bg-[#62BFF0]/10 rounded-full p-2 mr-3">
                      <Users className="h-6 w-6 text-[#62BFF0]" />
                    </div>
                    <h4 className="text-xl font-bold">Employee & Customer Comfort</h4>
                  </div>
                  <p className="text-gray-700">
                    Clean exteriors contribute to better indoor environments. By removing contaminants from windows, walls, and entrances, you enhance natural lighting and improve air quality. This creates more pleasant surroundings for employees and customers, potentially increasing productivity and satisfaction.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/booking?quote=true&commercial=true" className="inline-flex items-center justify-center bg-[#62BFF0] text-white px-6 py-3 rounded-md font-medium hover:bg-[#62BFF0]/90 transition-colors">
                  Get a Commercial Quote
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                
                <Link to="/pressure-washing" className="inline-flex items-center justify-center border border-[#62BFF0] text-[#62BFF0] px-6 py-3 rounded-md font-medium hover:bg-[#62BFF0]/10 transition-colors">
                  Explore Commercial Services
                </Link>
              </div>
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
