
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
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#62BFF0] to-blue-600 text-white">
        <div className="container py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Have questions or ready to book? Reach out to our team for prompt, friendly service.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information Cards - Improved Layout */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Call Us Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-t-[#62BFF0]">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#62BFF0]/10 rounded-full flex items-center justify-center group-hover:bg-[#62BFF0]/20 transition-colors">
                  <Phone className="h-8 w-8 text-[#62BFF0]" />
                </div>
                <h2 className="text-xl font-bold mb-2">Call Us</h2>
                <a href="tel:4378585005" className="text-lg font-medium text-[#62BFF0] hover:underline">
                  437-858-5005
                </a>
                <p className="mt-2 text-muted-foreground">
                  For immediate assistance or to book a service over the phone.
                </p>
              </CardContent>
            </Card>
            
            {/* Email Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-t-[#62BFF0]">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#62BFF0]/10 rounded-full flex items-center justify-center group-hover:bg-[#62BFF0]/20 transition-colors">
                  <Mail className="h-8 w-8 text-[#62BFF0]" />
                </div>
                <h2 className="text-xl font-bold mb-2">Email Us</h2>
                <a href="mailto:highshinecleaning123@gmail.com" className="text-lg font-medium text-[#62BFF0] hover:underline">
                  highshinecleaning123@gmail.com
                </a>
                <p className="mt-2 text-muted-foreground">
                  Send us an email for quotes, inquiries, or feedback.
                </p>
              </CardContent>
            </Card>
            
            {/* Book Online Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-t-[#62BFF0]">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#62BFF0]/10 rounded-full flex items-center justify-center group-hover:bg-[#62BFF0]/20 transition-colors">
                  <Calendar className="h-8 w-8 text-[#62BFF0]" />
                </div>
                <h2 className="text-xl font-bold mb-2">Book Online</h2>
                <Button 
                  onClick={() => navigate('/booking')} 
                  className="bg-[#62BFF0] hover:bg-[#62BFF0]/90 text-white"
                >
                  Schedule Service
                </Button>
                <p className="mt-4 text-muted-foreground">
                  Book your service online at your convenience.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-md mx-auto text-center mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Service Areas</h2>
            <p className="text-muted-foreground mb-8">
              We proudly serve residential and commercial clients throughout the Greater Toronto Area, including but not limited to:
            </p>
            
            <div className="inline-flex flex-wrap justify-center gap-2">
              <span className="px-4 py-2 bg-[#62BFF0]/10 text-[#62BFF0] rounded-full font-medium">Mississauga</span>
              <span className="px-4 py-2 bg-[#62BFF0]/10 text-[#62BFF0] rounded-full font-medium">Oakville</span>
              <span className="px-4 py-2 bg-[#62BFF0]/10 text-[#62BFF0] rounded-full font-medium">Brampton</span>
              <span className="px-4 py-2 bg-[#62BFF0]/10 text-[#62BFF0] rounded-full font-medium">Milton</span>
              <span className="px-4 py-2 bg-[#62BFF0]/10 text-[#62BFF0] rounded-full font-medium">Etobicoke</span>
              <span className="px-4 py-2 bg-[#62BFF0]/10 text-[#62BFF0] rounded-full font-medium">Toronto</span>
            </div>
          </div>
          
          {/* Contact Form & Hours/Response Promise - Improved Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 h-full">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Your name" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="your@email.com" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="(xxx) xxx-xxxx" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      required 
                      placeholder="How can we help you?" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      placeholder="Please provide details about your inquiry..." 
                      rows={5} 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-[#62BFF0] hover:bg-[#62BFF0]/90">
                    <Send className="h-4 w-4 mr-2" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Hours & Quick Response Promise */}
            <div className="lg:col-span-5 space-y-8">              
              {/* Hours of Operation Box */}
              <div className="bg-gray-900 text-white rounded-xl shadow-sm p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-6 w-6 mr-3" />
                  <h2 className="text-2xl font-bold">Hours of Operation</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="font-medium">Monday - Friday</span>
                    <span>8:30 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="font-medium">Saturday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium">Sunday</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
              
              {/* Quick Response Promise Box */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 mr-3 text-[#62BFF0]" />
                  <h2 className="text-2xl font-bold">Quick Response Promise</h2>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  We pride ourselves on our rapid response times. When you reach out to High Shine, you can expect:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#62BFF0] flex items-center justify-center text-white text-xs mr-3 mt-0.5 flex-shrink-0">✓</div>
                    <span>Phone calls returned within 2 hours during business hours</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#62BFF0] flex items-center justify-center text-white text-xs mr-3 mt-0.5 flex-shrink-0">✓</div>
                    <span>Email inquiries answered within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#62BFF0] flex items-center justify-center text-white text-xs mr-3 mt-0.5 flex-shrink-0">✓</div>
                    <span>Free quotes typically provided within 48 hours</span>
                  </li>
                </ul>
              </div>
              
              {/* Service Area Card */}
              <div className="bg-[#62BFF0] text-white rounded-xl shadow-sm p-8">
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl">Service Area</h3>
                    <p className="mt-2">Greater Toronto Area & Surrounding Communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
