
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, Calendar, MessageSquare } from 'lucide-react';
import { toast } from "sonner";
import MapComponent from '@/components/MapComponent';

const ContactUs = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Show success toast
    toast.success("Your message has been sent successfully. We'll get back to you shortly!");
    
    // Reset form (in a real app, you'd also send the data to a server here)
    e.currentTarget.reset();
  };

  return (
    <Layout>
      {/* Full-width Map at Top */}
      <section className="w-full">
        <MapComponent className="w-full h-[calc(100vh-400px)] min-h-[350px]" />
      </section>
      
      {/* Hero Section - Improved spacing and clarity */}
      <section className="w-full bg-gradient-to-r from-[#62BFF0] to-blue-600 text-white">
        <div className="container py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <div className="h-1 w-24 bg-white/30 mx-auto mb-6"></div>
            <p className="text-xl opacity-90">
              Have questions or ready to book? Reach out to our team for prompt, friendly service.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction and Key Contact Info - New section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Can We Help You?</h2>
            <div className="h-1 w-16 bg-[#62BFF0] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At High Shine Cleaning, we believe in open, responsive communication with our clients. 
              Whether you have questions about our services, want to request a quote, or need to schedule 
              a cleaning appointment, our team is here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#62BFF0]/10 rounded-full flex items-center justify-center">
                <Phone className="h-8 w-8 text-[#62BFF0]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <a href="tel:4378585005" className="text-[#62BFF0] hover:underline text-lg font-medium">
                437-858-5005
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#62BFF0]/10 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-[#62BFF0]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <a href="mailto:highshinecleaning123@gmail.com" className="text-[#62BFF0] hover:underline text-lg font-medium">
                highshinecleaning123@gmail.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#62BFF0]/10 rounded-full flex items-center justify-center">
                <MapPin className="h-8 w-8 text-[#62BFF0]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Service Area</h3>
              <p className="text-lg">Greater Toronto Area</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Areas - Improved layout with text instead of buttons */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Service Areas</h2>
            <div className="h-1 w-20 bg-[#62BFF0] mx-auto mb-8"></div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-center mb-10">
                We proudly serve residential and commercial clients throughout the Greater Toronto Area, providing exceptional cleaning services to the following communities:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-[#62BFF0]/10 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-medium text-[#62BFF0]">Mississauga</h3>
                </div>
                <div className="bg-[#62BFF0]/10 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-medium text-[#62BFF0]">Oakville</h3>
                </div>
                <div className="bg-[#62BFF0]/10 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-medium text-[#62BFF0]">Brampton</h3>
                </div>
                <div className="bg-[#62BFF0]/10 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-medium text-[#62BFF0]">Milton</h3>
                </div>
                <div className="bg-[#62BFF0]/10 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-medium text-[#62BFF0]">Etobicoke</h3>
                </div>
                <div className="bg-[#62BFF0]/10 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-medium text-[#62BFF0]">Toronto</h3>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-lg text-muted-foreground">
                  Don't see your area listed? Contact us to check if we service your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Business Hours - Improved Layout */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Form - Enhanced styling */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl shadow-md p-10 border border-gray-100 h-full">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                  <div className="h-1 w-16 bg-[#62BFF0] mb-6"></div>
                  <p className="text-lg text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-base font-medium mb-1 block">First Name</Label>
                      <Input 
                        id="firstName" 
                        name="firstName" 
                        required 
                        className="h-12"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="lastName" className="text-base font-medium mb-1 block">Last Name</Label>
                      <Input 
                        id="lastName" 
                        name="lastName" 
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-base font-medium mb-1 block">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        className="h-12"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium mb-1 block">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-base font-medium mb-1 block">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      required 
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-base font-medium mb-1 block">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={5} 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-[#62BFF0] hover:bg-[#62BFF0]/90 h-12">
                    <Send className="h-5 w-5 mr-2" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Hours & Information - Enhanced Styling */}
            <div className="lg:col-span-5 space-y-8">              
              {/* Business Information */}
              <div className="bg-[#62BFF0] text-white rounded-xl shadow-md p-10 h-full">
                <div className="space-y-10">
                  {/* Hours of Operation */}
                  <div>
                    <div className="flex items-center mb-6">
                      <Clock className="h-7 w-7 mr-4" />
                      <h3 className="text-2xl font-bold">Hours of Operation</h3>
                    </div>
                    
                    <div className="space-y-4 ml-11">
                      <div className="border-b border-white/20 pb-4">
                        <p className="font-medium">Monday - Friday</p>
                        <p className="text-white/80">8:30 AM - 9:00 PM</p>
                      </div>
                      <div className="border-b border-white/20 pb-4">
                        <p className="font-medium">Saturday</p>
                        <p className="text-white/80">9:00 AM - 7:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium">Sunday</p>
                        <p className="text-white/80">10:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 mr-3 mt-1" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <a href="tel:4378585005" className="text-white/80 hover:text-white">437-858-5005</a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 mr-3 mt-1" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a href="mailto:highshinecleaning123@gmail.com" className="text-white/80 hover:text-white">highshinecleaning123@gmail.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Response Promise */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Our Response Promise</h3>
                    <p className="text-white/80">
                      We aim to respond to all inquiries within 24 hours during business hours. 
                      For urgent matters, we recommend calling us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the High Shine Difference?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you need a one-time cleaning or are interested in our maintenance contracts, 
            we're here to help you keep your property looking its best.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button 
              onClick={() => navigate('/booking')} 
              className="bg-[#62BFF0] hover:bg-[#62BFF0]/90 h-12 px-8"
            >
              <Calendar className="mr-2 h-5 w-5" /> Schedule Service
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
