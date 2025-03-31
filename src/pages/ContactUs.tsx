
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
      <div className="container max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Map Section */}
          <div className="w-full">
            <MapComponent height="h-[400px]" />
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-[#3AA1E0] mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-700">437-858-5005</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[#3AA1E0] mt-1" />
                    <div>
                      <h3 className="font-semibold">Service Area</h3>
                      <p className="text-gray-700">Greater Toronto Area and surrounding regions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="h-5 w-5 text-[#3AA1E0] mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-700">highshinecleaning123@gmail.com</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold">Hours of Operation</h3>
                    <p className="text-gray-700">Monday to Sunday, 8:30am to 9:30pm</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#3AA1E0] hover:bg-[#3AA1E0]/90 text-white flex-1">
                <Link to="/booking?quote=true">GET FREE QUOTE</Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-[#3AA1E0] text-[#3AA1E0] hover:bg-[#3AA1E0]/10 flex-1">
                <a href="mailto:highshinecleaning123@gmail.com">SEND MESSAGE</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
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
