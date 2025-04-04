
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, Calendar, MessageSquare } from 'lucide-react';
import { toast } from "sonner";

const ContactUs = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCZJXL-z1yKUi7EfC10qYbJh8Ytg9akdwg&callback=initMap';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    
    // Create a global function that Google Maps will call when ready
    window.initMap = () => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 43.5890, lng: -79.6441 }, // Mississauga
        zoom: 10,
        styles: [
          {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#444444"}]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{"color": "#f2f2f2"}]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{"saturation": -100}, {"lightness": 45}]
          },
          {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{"visibility": "simplified"}]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{"color": "#62BFF0"}, {"visibility": "on"}]
          }
        ]
      });
      
      // Define service areas with custom markers
      const serviceAreas = [
        { position: { lat: 43.5890, lng: -79.6441 }, title: "Mississauga" },
        { position: { lat: 43.4668, lng: -79.6831 }, title: "Oakville" },
        { position: { lat: 43.7315, lng: -79.7624 }, title: "Brampton" }
      ];
      
      // Custom marker icon
      const markerIcon = {
        url: '/lovable-uploads/9be1a361-2200-495e-92be-5bcb9a2779e2.png',
        scaledSize: new google.maps.Size(40, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 20)
      };
      
      // Add markers for each service area
      serviceAreas.forEach(area => {
        const marker = new google.maps.Marker({
          position: area.position,
          map: map,
          title: area.title,
          icon: markerIcon
        });
        
        // Add info window with service area name
        const infoWindow = new google.maps.InfoWindow({
          content: `<div style="font-weight: bold; color: #333;">${area.title} - Service Area</div>`
        });
        
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });
    };
    
    return () => {
      // Clean up
      delete window.initMap;
      const mapScript = document.querySelector('script[src*="maps.googleapis.com/maps/api"]');
      if (mapScript) {
        mapScript.remove();
      }
    };
  }, []);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Show success toast
    toast.success("Your message has been sent successfully. We'll get back to you shortly!");
    
    // Reset form (in a real app, you'd also send the data to a server here)
    e.currentTarget.reset();
  };

  return (
    <Layout>
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
      
      {/* Contact Information Cards */}
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
          
          {/* Map */}
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md mb-16">
            <div id="map" className="w-full h-full"></div>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info Section - Enhanced Design */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
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
                  
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Information & Hours */}
            <div>
              <div className="bg-[#62BFF0] text-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a href="tel:4378585005" className="hover:underline">437-858-5005</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:highshinecleaning123@gmail.com" className="hover:underline">highshinecleaning123@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium">Service Area</h3>
                      <p>Greater Toronto Area</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 text-white rounded-xl shadow-sm p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-6 w-6 mr-3" />
                  <h2 className="text-2xl font-bold">Hours of Operation</h2>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:30 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Sunday</span>
                    <span className="font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 mr-3 text-[#62BFF0]" />
                  <h2 className="text-2xl font-bold">Quick Response Promise</h2>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  We pride ourselves on our rapid response times. When you reach out to High Shine, you can expect:
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#62BFF0] flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</div>
                    <span>Phone calls returned within 2 hours during business hours</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#62BFF0] flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</div>
                    <span>Email inquiries answered within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#62BFF0] flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</div>
                    <span>Free quotes typically provided within 48 hours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
