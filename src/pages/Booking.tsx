
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  date: string;
  time: string;
  message: string;
  isQuote: boolean;
  isContract: boolean;
}

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isQuoteRequest = queryParams.get('quote') === 'true';
  const isContractRequest = queryParams.get('contract') === 'true';
  const preselectedService = queryParams.get('service') || '';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: preselectedService,
    date: '',
    time: '',
    message: '',
    isQuote: isQuoteRequest,
    isContract: isContractRequest
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      service: preselectedService,
      isQuote: isQuoteRequest,
      isContract: isContractRequest
    }));
  }, [preselectedService, isQuoteRequest, isContractRequest]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to your backend
    // For this demo, we'll simulate saving to localStorage
    
    const bookings = JSON.parse(localStorage.getItem('highshine-bookings') || '[]');
    const bookingId = `booking-${Date.now()}`;
    
    const newBooking = {
      id: bookingId,
      ...formData,
      status: formData.isQuote ? (formData.isContract ? 'Contract Quote Requested' : 'Quote Requested') : 'Scheduled',
      createdAt: new Date().toISOString()
    };
    
    bookings.push(newBooking);
    localStorage.setItem('highshine-bookings', JSON.stringify(bookings));
    
    // Show success message
    toast.success(
      formData.isQuote 
        ? (formData.isContract ? 'Contract quote request submitted successfully!' : 'Quote request submitted successfully!')
        : 'Service booked successfully!'
    );
    
    // Redirect to Your Bookings page
    navigate('/your-bookings');
  };
  
  return (
    <Layout>
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">
              {formData.isQuote ? (formData.isContract ? 'Request a Contract Quote' : 'Request a Quote') : 'Book a Service'}
            </h1>
            <p className="text-muted-foreground">
              {formData.isQuote 
                ? (formData.isContract ? 'Fill out the form below to request a quote for our service contract options.' : 'Fill out the form below to request a free, no-obligation quote for our services.')
                : 'Schedule your cleaning service by completing the booking form below.'}
            </p>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(xxx) xxx-xxxx"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Service Address</Label>
                    <Input 
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="Your address"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type</Label>
                    <Select 
                      value={formData.service} 
                      onValueChange={(value) => handleSelectChange('service', value)}
                      required
                    >
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="window">Window Cleaning</SelectItem>
                        <SelectItem value="pressure">Pressure Washing</SelectItem>
                        <SelectItem value="soft">Soft Washing</SelectItem>
                        <SelectItem value="roof">Roof Washing</SelectItem>
                        <SelectItem value="gutter">Gutter Cleaning</SelectItem>
                        <SelectItem value="combo">Combination Service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="requestType">Request Type</Label>
                    <Select 
                      value={formData.isQuote ? (formData.isContract ? 'contract' : 'quote') : 'booking'} 
                      onValueChange={(value) => setFormData({
                        ...formData,
                        isQuote: value === 'quote' || value === 'contract',
                        isContract: value === 'contract'
                      })}
                    >
                      <SelectTrigger id="requestType">
                        <SelectValue placeholder="Select request type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="booking">Book a Service</SelectItem>
                        <SelectItem value="quote">Request a Quote</SelectItem>
                        <SelectItem value="contract">Request a Contract Quote</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {!formData.isQuote && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input 
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required={!formData.isQuote}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time</Label>
                        <Select 
                          value={formData.time} 
                          onValueChange={(value) => handleSelectChange('time', value)}
                          required={!formData.isQuote}
                        >
                          <SelectTrigger id="time">
                            <SelectValue placeholder="Select a time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                            <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide any additional details about your service needs..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  {formData.isQuote ? (formData.isContract ? 'Submit Contract Quote Request' : 'Submit Quote Request') : 'Book Service'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Need help? Contact us directly at <a href="tel:4378585005" className="text-highshine">437-858-5005</a> or <a href="mailto:highshinecleaning123@gmail.com" className="text-highshine">highshinecleaning123@gmail.com</a></p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
