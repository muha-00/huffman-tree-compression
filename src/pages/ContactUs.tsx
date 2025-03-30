import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';

const ContactUs = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions about our services? Get in touch with our team for a prompt response.
            </p>
          </div>
          
          {/* Map Section */}
          <div className="w-full mb-12 relative">
            <img 
              src="/lovable-uploads/678d85f9-8995-43fc-b09b-4f7afc68f8bf.png" 
              alt="Map of GTA and surrounding areas" 
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex flex-col justify-end p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Serving GTA and Surrounding Areas</h2>
              <p className="text-white text-xl mb-6">Contact now for a free quote!</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[#62BFF0] hover:bg-[#62BFF0]/90">
                  <Link to="/booking?quote=true">Get a Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/20 border-white text-white hover:bg-white/30">
                  <a href="tel:4378585005">
                    <Phone className="mr-2 h-5 w-5" /> Call Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Information and Form Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-[#62BFF0]/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-[#62BFF0]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone</h3>
                    <a href="tel:4378585005" className="text-lg hover:text-[#62BFF0]">437-858-5005</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-[#62BFF0]/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[#62BFF0]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <a href="mailto:highshinecleaning123@gmail.com" className="hover:text-[#62BFF0]">
                      highshinecleaning123@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-[#62BFF0]/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-[#62BFF0]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Service Area</h3>
                    <p>Greater Toronto Area and surrounding regions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-[#62BFF0]/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-[#62BFF0]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Hours of Operation</h3>
                    <p>Monday to Friday</p>
                    <p>8:30am to 9:00pm</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61560420295116" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#62BFF0] hover:text-[#62BFF0]/80 bg-[#62BFF0]/10 p-3 rounded-full transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.google.com/search?q=high+shine+cleaning&rlz=1C1CHBF_enCA959CA959&oq=high&aqs=chrome.0.69i59l2j69i57j69i59j0i131i273i433i512i650j69i60l3.964j0j7&sourceid=chrome&ie=UTF-8&lqi=ChNoaWdoIHNoaW5lIGNsZWFuaW5nSJC7ytqHu4CACFohEAAQARACGAAYARgCIhNoaWdoIHNoaW5lIGNsZWFuaW5negtNaXNzaXNzYXVnYZIBF3dpbmRvd19jbGVhbmluZ19zZXJ2aWNlqgFVEAEqFyITaGlnaCBzaGluZSBjbGVhbmluZygAMh8QASIbL6gy_w3fDhGDXAOLhpdTQ5kHswNOvN9ouRZwMhcQAiITaGlnaCBzaGluZSBjbGVhbmluZw#rlimm=4094031844201864335" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#62BFF0] hover:text-[#62BFF0]/80 bg-[#62BFF0]/10 p-3 rounded-full transition-colors"
                  >
                    <img 
                      src="/lovable-uploads/60806a1c-46ea-4ef6-9f81-9a2a0cc1ea10.png" 
                      alt="Google" 
                      className="w-6 h-6" 
                    />
                  </a>
                  <a 
                    href="https://maps.app.goo.gl/KXvLYrL6SQG3uRQb8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#62BFF0] hover:text-[#62BFF0]/80 bg-[#62BFF0]/10 p-3 rounded-full transition-colors"
                  >
                    <MapPin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-muted p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-[#62BFF0]" 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-[#62BFF0]" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-[#62BFF0]" 
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-[#62BFF0]" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-[#62BFF0]" 
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-[#62BFF0] hover:bg-[#62BFF0]/90">Send Message</Button>
              </form>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready for a Cleaner, Brighter Home?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get in touch today for a free quote. Our friendly team is ready to help you with all your exterior cleaning needs.
            </p>
            <Button asChild size="lg" className="bg-[#62BFF0] hover:bg-[#62BFF0]/90">
              <Link to="/booking?quote=true">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
