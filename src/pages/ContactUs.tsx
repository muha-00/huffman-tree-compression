
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MapComponent from '@/components/MapComponent';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, MapPin, MessageSquare } from 'lucide-react';

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
              <p className="text-gray-600 max-w-lg">
                Have questions about our services? Want to schedule a cleaning? We're here to help you keep your home or business looking its best!
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3">
                  <Phone className="text-highshine mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">437-858-5005</p>
                    <p className="text-sm text-gray-500">Monday to Sunday, 8:30am to 9:30pm</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="text-highshine mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Service Area</h3>
                    <p className="text-gray-600">Greater Toronto Area and surrounding regions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageSquare className="text-highshine mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">highshinecleaning123@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 space-y-4">
                <Button asChild size="lg" className="w-full bg-highshine hover:bg-highshine-dark">
                  <Link to="/booking?quote=true">GET FREE QUOTE</Link>
                </Button>
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
