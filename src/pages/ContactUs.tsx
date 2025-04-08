
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
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <div className="h-1 w-24 bg-white/30 mx-auto mb-6"></div>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Have questions or ready to book? Reach out to our team for prompt, friendly service.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information Cards - Enhanced Layout */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {/* Call Us Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-[#62BFF0] shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#62BFF0]/10 rounded-full flex items-center justify-center group-hover:bg-[#62BFF0]/20 transition-colors">
                  <Phone className="h-10 w-10 text-[#62BFF0]" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Call Us</h2>
                <a href="tel:4378585005" className="text-xl font-medium text-[#62BFF0] hover:underline block mb-4">
                  437-858-5005
                </a>
                <p className="text-muted-foreground text-lg">
                  For immediate assistance or to book a service over the phone.
                </p>
              </CardContent>
            </Card>
            
            {/* Email Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-[#62BFF0] shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#62BFF0]/10 rounded-full flex items-center justify-center group-hover:bg-[#62BFF0]/20 transition-colors">
                  <Mail className="h-10 w-10 text-[#62BFF0]" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Email Us</h2>
                <a href="mailto:highshinecleaning123@gmail.com" className="text-xl font-medium text-[#62BFF0] hover:underline block mb-4">
                  highshinecleaning123@gmail.com
                </a>
                <p className="text-muted-foreground text-lg">
                  Send us an email for quotes, inquiries, or feedback.
                </p>
              </CardContent>
            </Card>
            
            {/* Book Online Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-[#62BFF0] shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#62BFF0]/10 rounded-full flex items-center justify-center group-hover:bg-[#62BFF0]/20 transition-colors">
                  <Calendar className="h-10 w-10 text-[#62BFF0]" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Book Online</h2>
                <Button 
                  onClick={() => navigate('/booking')} 
                  className="bg-[#62BFF0] hover:bg-[#62BFF0]/90 text-white px-6 py-6 text-lg"
                >
                  Schedule Service
                </Button>
                <p className="mt-6 text-muted-foreground text-lg">
                  Book your service online at your convenience.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Service Areas - Improved layout */}
          <div className="max-w-3xl mx-auto text-center mb-24 bg-white p-10 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-6">Our Service Areas</h2>
            <div className="h-1 w-20 bg-[#62BFF0] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground mb-10">
              We proudly serve residential and commercial clients throughout the Greater Toronto Area, including but not limited to:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="px-5 py-3 bg-[#62BFF0]/10 text-[#62BFF0] rounded-lg font-medium text-lg">Mississauga</div>
              <div className="px-5 py-3 bg-[#62BFF0]/10 text-[#62BFF0] rounded-lg font-medium text-lg">Oakville</div>
              <div className="px-5 py-3 bg-[#62BFF0]/10 text-[#62BFF0] rounded-lg font-medium text-lg">Brampton</div>
              <div className="px-5 py-3 bg-[#62BFF0]/10 text-[#62BFF0] rounded-lg font-medium text-lg">Milton</div>
              <div className="px-5 py-3 bg-[#62BFF0]/10 text-[#62BFF0] rounded-lg font-medium text-lg">Etobicoke</div>
              <div className="px-5 py-3 bg-[#62BFF0]/10 text-[#62BFF0] rounded-lg font-medium text-lg">Toronto</div>
            </div>
          </div>
          
          {/* Contact Form & Additional Information - Improved Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Contact Form - Enhanced styling */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl shadow-md p-10 border border-gray-100">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                  <div className="h-1 w-16 bg-[#62BFF0] mb-6"></div>
                  <p className="text-lg text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-lg">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Your name" 
                      className="p-6 text-lg"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-lg">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="your@email.com" 
                        className="p-6 text-lg"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-lg">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="(xxx) xxx-xxxx" 
                        className="p-6 text-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-lg">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      required 
                      placeholder="How can we help you?" 
                      className="p-6 text-lg"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-lg">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      placeholder="Please provide details about your inquiry..." 
                      rows={5} 
                      className="p-6 text-lg"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-[#62BFF0] hover:bg-[#62BFF0]/90 py-7 text-lg">
                    <Send className="h-5 w-5 mr-3" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Hours & Quick Response Promise - Enhanced Styling */}
            <div className="lg:col-span-5 space-y-10">              
              {/* Hours of Operation Box */}
              <div className="bg-gray-900 text-white rounded-xl shadow-md p-10">
                <div className="flex items-center mb-8">
                  <Clock className="h-8 w-8 mr-4 text-[#62BFF0]" />
                  <h2 className="text-3xl font-bold">Hours of Operation</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between py-3 border-b border-gray-700">
                    <span className="font-medium text-lg">Monday - Friday</span>
                    <span className="text-lg">8:30 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-700">
                    <span className="font-medium text-lg">Saturday</span>
                    <span className="text-lg">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="font-medium text-lg">Sunday</span>
                    <span className="text-lg">10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
              
              {/* Quick Response Promise Box */}
              <div className="bg-white rounded-xl shadow-md p-10 border border-gray-100">
                <div className="flex items-center mb-8">
                  <MessageSquare className="h-8 w-8 mr-4 text-[#62BFF0]" />
                  <h2 className="text-3xl font-bold">Quick Response Promise</h2>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8">
                  We pride ourselves on our rapid response times. When you reach out to High Shine, you can expect:
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-[#62BFF0] flex items-center justify-center text-white text-sm mr-4 mt-0.5 flex-shrink-0">✓</div>
                    <span className="text-lg">Phone calls returned within 2 hours during business hours</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-[#62BFF0] flex items-center justify-center text-white text-sm mr-4 mt-0.5 flex-shrink-0">✓</div>
                    <span className="text-lg">Email inquiries answered within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-[#62BFF0] flex items-center justify-center text-white text-sm mr-4 mt-0.5 flex-shrink-0">✓</div>
                    <span className="text-lg">Free quotes typically provided within 48 hours</span>
                  </li>
                </ul>
              </div>
              
              {/* Service Area Card */}
              <div className="bg-[#62BFF0] text-white rounded-xl shadow-md p-10">
                <div className="flex items-start mb-6">
                  <MapPin className="h-7 w-7 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Service Area</h3>
                    <p className="text-xl">Greater Toronto Area & Surrounding Communities</p>
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
