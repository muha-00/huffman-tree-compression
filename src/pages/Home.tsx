
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ArrowRight, Check, Phone } from 'lucide-react';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ServicesCollage from '@/components/ServicesCollage';
import GoogleRating from '@/components/GoogleRating';

const Home = () => {
  const testimonials = [
    {
      id: 1,
      text: "We've been using these guys for years for our home. They show up on time, do an immaculate job on the gutters, and leave the windows completely streak free. Satisfied every time.",
      author: "Jennifer Thompson"
    },
    {
      id: 2,
      text: "The team at High Shine Cleaning transformed our house exterior. They're professional, efficient, and the results are outstanding. Highly recommend for any home cleaning needs!",
      author: "Michael Rodriguez"
    },
    {
      id: 3,
      text: "After years of neglect, our windows were in terrible shape. One visit from High Shine and they look brand new! Their attention to detail is impressive.",
      author: "Sarah Lewis"
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Jennifer T.",
      rating: 5,
      text: "The team at High Shine Cleaning did an amazing job on our windows! They were spotless and the team was professional and efficient."
    },
    {
      id: 2,
      name: "Michael R.",
      rating: 5,
      text: "I was very impressed with their house washing service. They removed years of dirt and grime, and my house looks brand new again!"
    },
    {
      id: 3,
      name: "Sarah L.",
      rating: 5,
      text: "They cleaned our gutters thoroughly and even fixed a minor issue at no extra charge. Highly recommend their services!"
    },
  ];

  const services = [
    {
      id: 1,
      title: "Window Cleaning",
      description: "Professional window cleaning for crystal clear views. We clean interior and exterior windows for homes of all sizes.",
      path: "/window-cleaning",
      icon: "✨"
    },
    {
      id: 2,
      title: "House Washing",
      description: "Restore your home's exterior with our gentle but effective house washing services to remove dirt, mold, and mildew.",
      path: "/house-washing",
      icon: "🏠"
    },
    {
      id: 3,
      title: "Roof Washing",
      description: "Extend the life of your roof with our specialized roof washing services that safely remove harmful growth.",
      path: "/roof-washing",
      icon: "🏡"
    },
    {
      id: 4,
      title: "Gutter Cleaning",
      description: "Keep your gutters flowing freely with our thorough gutter cleaning services, inside and out.",
      path: "/gutter-cleaning",
      icon: "🌧️"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-highshine/10 to-transparent z-0"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight hero-animate" style={{"--delay": "0.1s"} as React.CSSProperties}>
              Professional Window & Home Cleaning Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground hero-animate" style={{"--delay": "0.3s"} as React.CSSProperties}>
              A team of experienced professionals providing exceptional window cleaning, house washing, roof washing, and gutter cleaning services.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 hero-animate" style={{"--delay": "0.5s"} as React.CSSProperties}>
              <Button asChild size="lg" className="px-8">
                <Link to="/booking">Book a Service</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/booking?quote=true">Request a Quote</Link>
              </Button>
            </div>
            
            <div className="mt-8 hero-animate" style={{"--delay": "0.7s"} as React.CSSProperties}>
              <GoogleRating />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Carousel */}
      <section>
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* Services Collage */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Professional Services</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We provide a range of high-quality cleaning services to keep your home looking its best.
            </p>
          </div>
          
          <ServicesCollage />
        </div>
      </section>

      {/* Services Section - Cards */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Services We Offer</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Learn more about our professional cleaning services and how we can help you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover-lift hover:border-highshine/50 transition-all">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button asChild variant="ghost" className="group">
                    <Link to={service.path}>
                      Learn More 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Young Hustlers, Exceptional Results</h2>
              <p className="text-muted-foreground mb-6">
                At High Shine Cleaning, we're a dedicated team of young professionals who take pride in delivering exceptional cleaning services. 
                Our extensive experience and attention to detail ensure that every job is completed to the highest standards.
              </p>
              
              <ul className="space-y-3">
                {["100% Satisfaction Guaranteed", "Fully Insured", "Eco-Friendly Products", "Experienced Team"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-highshine mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Button asChild>
                  <Link to="/booking">Book Our Services</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-muted rounded-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-highshine/20 rounded-bl-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Need a Quote?</h3>
                <p className="text-muted-foreground mb-6">
                  We provide free, no-obligation quotes for all our services. 
                  Contact us today to discuss your cleaning needs.
                </p>
                
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-highshine mr-3" />
                    <a href="tel:4378585005" className="hover:underline">437-858-5005</a>
                  </div>
                  <Button asChild variant="outline">
                    <Link to="/booking?quote=true">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gradient-to-b from-highshine/5 to-transparent">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Customer Reviews</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              See what our satisfied customers have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="overflow-hidden hover-lift">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="italic mb-4">"{review.text}"</p>
                  <p className="font-medium">- {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/booking">Experience the Difference</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-highshine text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for a Cleaner, Brighter Home?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Book our professional cleaning services today and see the difference that High Shine Cleaning can make for your home.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-highshine hover:bg-white/90">
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
