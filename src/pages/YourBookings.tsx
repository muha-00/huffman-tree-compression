
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Calendar, Clock, MapPin, Trash2 } from 'lucide-react';

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  date: string;
  time: string;
  message: string;
  isQuote: boolean;
  status: string;
  createdAt: string;
}

const YourBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [email, setEmail] = useState('');
  const [searched, setSearched] = useState(false);

  const loadBookings = () => {
    const allBookings = JSON.parse(localStorage.getItem('highshine-bookings') || '[]');
    const filteredBookings = allBookings.filter((booking: Booking) => 
      booking.email.toLowerCase() === email.toLowerCase()
    );
    setBookings(filteredBookings);
    setSearched(true);

    if (filteredBookings.length === 0 && email) {
      toast.info('No bookings found for this email address.');
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loadBookings();
  };

  const handleCancelBooking = (id: string) => {
    const allBookings = JSON.parse(localStorage.getItem('highshine-bookings') || '[]');
    const updatedBookings = allBookings.filter((booking: Booking) => booking.id !== id);
    localStorage.setItem('highshine-bookings', JSON.stringify(updatedBookings));
    
    setBookings(bookings.filter(booking => booking.id !== id));
    toast.success('Booking cancelled successfully');
  };

  const getServiceName = (serviceCode: string) => {
    const services: Record<string, string> = {
      'window': 'Window Cleaning',
      'house': 'House Washing',
      'roof': 'Roof Washing',
      'gutter': 'Gutter Cleaning',
      'combo': 'Combination Service'
    };
    
    return services[serviceCode] || serviceCode;
  };

  const getTimeName = (timeCode: string) => {
    const times: Record<string, string> = {
      'morning': 'Morning (8 AM - 12 PM)',
      'afternoon': 'Afternoon (12 PM - 4 PM)',
      'evening': 'Evening (4 PM - 7 PM)'
    };
    
    return times[timeCode] || timeCode;
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">Your Bookings</h1>
            <p className="text-muted-foreground">
              View and manage your bookings and quote requests
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <form onSubmit={handleSearchSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Enter your email to find your bookings</Label>
                  <div className="flex gap-2">
                    <Input 
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="your@email.com"
                      className="flex-1"
                    />
                    <Button type="submit">Search</Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {searched && (
            <>
              {bookings.length > 0 ? (
                <div className="space-y-6">
                  {bookings.map((booking) => (
                    <Card key={booking.id} className="overflow-hidden">
                      <div className={`p-4 ${booking.isQuote ? 'bg-secondary' : 'bg-highshine/10'} border-b flex justify-between items-center`}>
                        <div className="flex flex-col">
                          <span className="font-medium">{booking.isQuote ? 'Quote Request' : 'Service Booking'}</span>
                          <span className="text-sm text-muted-foreground">
                            {new Date(booking.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {booking.status}
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-medium mb-2">Service Details</h3>
                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="font-medium">Service Type:</span>{' '}
                                {getServiceName(booking.service)}
                              </div>
                              
                              {!booking.isQuote && booking.date && (
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                                  <span>{booking.date}</span>
                                </div>
                              )}
                              
                              {!booking.isQuote && booking.time && (
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                                  <span>{getTimeName(booking.time)}</span>
                                </div>
                              )}
                              
                              <div className="flex items-start">
                                <MapPin className="h-4 w-4 mr-2 text-muted-foreground mt-1" />
                                <span>{booking.address}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="font-medium mb-2">Contact Information</h3>
                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="font-medium">Name:</span> {booking.name}
                              </div>
                              <div>
                                <span className="font-medium">Email:</span> {booking.email}
                              </div>
                              <div>
                                <span className="font-medium">Phone:</span> {booking.phone}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {booking.message && (
                          <div className="mt-6">
                            <h3 className="font-medium mb-2">Additional Information</h3>
                            <p className="text-sm">{booking.message}</p>
                          </div>
                        )}
                        
                        <div className="mt-6 pt-4 border-t flex justify-end">
                          <Button 
                            variant="destructive" 
                            size="sm"
                            className="flex items-center"
                            onClick={() => handleCancelBooking(booking.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Cancel {booking.isQuote ? 'Quote Request' : 'Booking'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h2 className="text-xl font-medium mb-4">No bookings found</h2>
                  {email && (
                    <p className="text-muted-foreground mb-6">
                      We couldn't find any bookings or quote requests for {email}.
                    </p>
                  )}
                  <Button asChild>
                    <Link to="/booking">Make a New Booking</Link>
                  </Button>
                </div>
              )}
            </>
          )}
          
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/booking">Book a New Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default YourBookings;
