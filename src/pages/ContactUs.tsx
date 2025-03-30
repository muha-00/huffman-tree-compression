
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MapComponent from '@/components/MapComponent';

const ContactUs = () => {
  return (
    <Layout>
      {/* Full-width Map Section */}
      <section className="w-full">
        <MapComponent />
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
      
      {/* Hidden contact information section that will still be accessible for SEO and screen readers */}
      <div className="sr-only">
        <div>
          <h3>Contact Information</h3>
          <p>Phone: 437-858-5005</p>
          <p>Email: highshinecleaning123@gmail.com</p>
          <p>Service Area: Greater Toronto Area and surrounding regions</p>
          <p>Hours of Operation: Monday to Sunday, 8:30am to 9:30pm</p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
