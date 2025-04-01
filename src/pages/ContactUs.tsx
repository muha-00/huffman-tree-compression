
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MapComponent from '@/components/MapComponent';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, MapPin, MessageSquare, Clock, CheckCircle, Facebook } from 'lucide-react';

const ContactUs = () => {
  return (
    <Layout>
      {/* Full-width Map Section with reduced height */}
      <section className="w-full">
        <MapComponent />
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-12 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact High Shine Cleaning</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to answer your questions and provide the exceptional cleaning services you deserve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
              <p className="text-gray-600 max-w-lg">
                Have questions about our services? Want to schedule a cleaning? We're here to help you keep your home or business looking its best!
              </p>
              
              <div className="space-y-6 pt-4">
                <Card className="shadow-sm border-[#62BFF0]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Phone className="text-[#62BFF0] mt-1 h-6 w-6" />
                      <div>
                        <h3 className="font-medium text-gray-900 text-lg">Phone</h3>
                        <p className="text-gray-600 text-xl font-bold">437-858-5005</p>
                        <p className="text-sm text-gray-500 mt-1">Monday to Sunday, 8:30am to 9:30pm</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm border-[#62BFF0]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-[#62BFF0] mt-1 h-6 w-6" />
                      <div>
                        <h3 className="font-medium text-gray-900 text-lg">Service Area</h3>
                        <p className="text-gray-600">Greater Toronto Area and surrounding regions</p>
                        <p className="text-sm text-gray-500 mt-1">Mississauga, Oakville, Brampton, Toronto, and beyond</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm border-[#62BFF0]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <MessageSquare className="text-[#62BFF0] mt-1 h-6 w-6" />
                      <div>
                        <h3 className="font-medium text-gray-900 text-lg">Email</h3>
                        <p className="text-gray-600 font-medium">highshinecleaning123@gmail.com</p>
                        <p className="text-sm text-gray-500 mt-1">We respond to all inquiries within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm border-[#62BFF0]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Clock className="text-[#62BFF0] mt-1 h-6 w-6" />
                      <div>
                        <h3 className="font-medium text-gray-900 text-lg">Business Hours</h3>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <p className="text-gray-600">Monday - Friday:</p>
                          <p className="text-gray-600">8:30 AM - 9:30 PM</p>
                          <p className="text-gray-600">Saturday:</p>
                          <p className="text-gray-600">9:00 AM - 7:00 PM</p>
                          <p className="text-gray-600">Sunday:</p>
                          <p className="text-gray-600">10:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="pt-6">
                <Button asChild size="lg" className="w-full bg-[#62BFF0] hover:bg-[#62BFF0]/90">
                  <Link to="/booking?quote=true">GET FREE QUOTE</Link>
                </Button>
                
                <div className="mt-4 flex justify-center space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61560420295116" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#62BFF0] hover:text-[#62BFF0]/80 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.google.com/search?q=high+shine+cleaning&rlz=1C1CHBF_enCA959CA959&oq=high&aqs=chrome.0.69i59l2j69i57j69i59j0i131i273i433i512i650j69i60l3.964j0j7&sourceid=chrome&ie=UTF-8&lqi=ChNoaWdoIHNoaW5lIGNsZWFuaW5nSJC7ytqHu4CACFohEAAQARACGAAYARgCIhNoaWdoIHNoaW5lIGNsZWFuaW5negtNaXNzaXNzYXVnYZIBF3dpbmRvd19jbGVhbmluZ19zZXJ2aWNlqgFVEAEqFyITaGlnaCBzaGluZSBjbGVhbmluZygAMh8QASIbL6gy_w3fDhGDXAOLhpdTQ5kHswNOvN9ouRZwMhcQAiITaGlnaCBzaGluZSBjbGVhbmluZw#rlimm=4094031844201864335" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#62BFF0] hover:text-[#62BFF0]/80 transition-colors"
                  >
                    <img 
                      src="/lovable-uploads/60806a1c-46ea-4ef6-9f81-9a2a0cc1ea10.png" 
                      alt="Google" 
                      className="w-6 h-6" 
                    />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Interested Service</Label>
                    <select id="service" className="w-full h-10 px-3 py-2 bg-white border border-input rounded-md">
                      <option value="">Select a service</option>
                      <option value="window">Window Cleaning</option>
                      <option value="house">House Washing</option>
                      <option value="roof">Roof Washing</option>
                      <option value="gutter">Gutter Cleaning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" rows={4} />
                  </div>
                  
                  <Button className="w-full bg-black hover:bg-black/90">
                    SEND MESSAGE
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose High Shine Cleaning</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              We take pride in our commitment to excellence and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <CheckCircle className="text-[#62BFF0] mr-3 h-6 w-6" />
                  <h3 className="text-xl font-bold">Professional Team</h3>
                </div>
                <p className="text-gray-600">
                  Our team consists of experienced professionals dedicated to delivering exceptional cleaning services.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <CheckCircle className="text-[#62BFF0] mr-3 h-6 w-6" />
                  <h3 className="text-xl font-bold">Quality Service</h3>
                </div>
                <p className="text-gray-600">
                  We use professional-grade equipment and eco-friendly cleaning solutions for the best results.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <CheckCircle className="text-[#62BFF0] mr-3 h-6 w-6" />
                  <h3 className="text-xl font-bold">Satisfaction Guarantee</h3>
                </div>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We stand behind our work with a 100% satisfaction guarantee.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section with Light Blue Background */}
      <section className="bg-gradient-to-r from-[#62BFF0] to-[#3AA1E0] py-12 text-center text-white">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Get Your Quote Today!</h2>
          
          <Button asChild size="lg" className="bg-black hover:bg-black/90 text-white px-12 py-6 text-lg">
            <Link to="/booking?quote=true">GET QUOTE</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
