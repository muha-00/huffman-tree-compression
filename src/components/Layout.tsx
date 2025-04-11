import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, ChevronDown, Facebook, Instagram, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import PromoBanner from './PromoBanner';
interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}
const Layout: React.FC<LayoutProps> = ({
  children,
  className
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const services = [{
    name: 'Window Cleaning',
    path: '/window-cleaning'
  }, {
    name: 'Pressure Washing',
    path: '/pressure-washing'
  }, {
    name: 'Soft Washing',
    path: '/soft-washing'
  }, {
    name: 'Gutter Cleaning',
    path: '/gutter-cleaning'
  }];
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About Us',
    path: '/about-us'
  }, {
    name: 'Contracts',
    path: '/contracts'
  }, {
    name: 'Request Quote',
    path: '/booking?quote=true'
  }, {
    name: 'Contact Us',
    path: '/contact-us'
  }];

  // Scroll to top on link click
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };
  return <div className={cn("min-h-screen flex flex-col antialiased", className)}>
      {/* Promo Banner */}
      <PromoBanner />
      
      {/* Top contact bar */}
      <div className="bg-[#62BFF0] text-white py-2 px-4">
        <div className="container flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center mb-2 sm:mb-0">
            <Phone size={16} className="mr-2" />
            <a href="tel:4378585005" className="hover:underline">437-858-5005</a>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-2" />
            <a href="mailto:highshinecleaning123@gmail.com" className="hover:underline">highshinecleaning123@gmail.com</a>
          </div>
        </div>
      </div>
      
      {/* Header with navigation - Updated layout with improved spacing */}
      <header className="py-4 border-b bg-white md:bg-background/80 md:backdrop-blur-sm sticky top-0 z-30">
        <div className="container flex justify-between items-center">
          {/* Logo area - Moved further left with consistent horizontal layout */}
          <div className="flex items-center space-x-3 pl-0 md:pl-0 pr-8">
            <Link to="/" className="flex items-center" onClick={handleLinkClick}>
              <img src="/lovable-uploads/7f0d75a7-fa68-4a92-951b-d21e7dff95ff.png" alt="High Shine Cleaning" className="h-16 md:h-10\n" />
              <span className="ml-2 text-xl font-bold text-[#62BFF0] hidden sm:inline-block whitespace-nowrap">High Shine Cleaning</span>
            </Link>
            
            {/* Social Icons next to logo with more space */}
            <div className="flex items-center ml-5">
              <div className="flex space-x-2">
                <a href="https://www.facebook.com/profile.php?id=61560420295116" target="_blank" rel="noopener noreferrer" className="bg-[#62BFF0] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#62BFF0]/90 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-[#62BFF0] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#62BFF0]/90 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://maps.app.goo.gl/KXvLYrL6SQG3uRQb8" target="_blank" rel="noopener noreferrer" className="bg-[#62BFF0] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#62BFF0]/90 transition-colors">
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation - Adding more space between the logo section and navigation */}
          <div className="hidden md:flex items-center ml-auto">
            <nav className="mr-4">
              <ul className="flex items-center space-x-1">
                {/* Navigation links - All in one straight line */}
                <li>
                  <Link to="/" className={cn("flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap", isActive('/') && "bg-accent text-accent-foreground")} onClick={handleLinkClick}>
                    Home
                  </Link>
                </li>
                
                {/* About Us link - Fixed layout */}
                <li>
                  <Link to="/about-us" className={cn("flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap", isActive('/about-us') && "bg-accent text-accent-foreground")} onClick={handleLinkClick}>
                    About Us
                  </Link>
                </li>
                
                {/* Services Dropdown */}
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className={cn("flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap", services.some(service => isActive(service.path)) && "bg-accent text-accent-foreground")}>
                        Services <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-[200px] p-2 bg-popover shadow-lg rounded-md">
                      {services.map(service => <DropdownMenuItem key={service.path} asChild>
                          <Link to={service.path} className={cn("flex h-9 items-center px-3 py-2 rounded-md text-sm no-underline transition-colors hover:bg-accent hover:text-accent-foreground", isActive(service.path) && "bg-accent text-accent-foreground")} onClick={handleLinkClick}>
                            {service.name}
                          </Link>
                        </DropdownMenuItem>)}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                
                {/* Reviews Link */}
                <li>
                  <Link to="/reviews" className={cn("flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap", isActive('/reviews') && "bg-accent text-accent-foreground")} onClick={handleLinkClick}>
                    Reviews
                  </Link>
                </li>
                
                {/* Contracts Link */}
                <li>
                  <Link to="/contracts" className={cn("flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap", isActive('/contracts') && "bg-accent text-accent-foreground")} onClick={handleLinkClick}>
                    Contracts
                  </Link>
                </li>
                
                {/* Other navigation links */}
                <li>
                  <Link to="/booking?quote=true" className={cn("flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap", isActive('/booking') && "bg-accent text-accent-foreground")} onClick={handleLinkClick}>
                    Request Quote
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className={cn("flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap", isActive('/contact-us') && "bg-accent text-accent-foreground")} onClick={handleLinkClick}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
            
            {/* Phone button on right side */}
            <a href="tel:4378585005" className="flex items-center bg-[#62BFF0] text-white rounded-full px-5 py-3 hover:bg-[#62BFF0]/90 transition-colors whitespace-nowrap">
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-medium">(437) 858-5005</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && <div className="md:hidden fixed inset-0 top-[77px] bg-white z-20">
            <nav className="container py-4 flex flex-col space-y-3">
              {/* Home link */}
              <Link to="/" className={cn("py-2 px-4 rounded hover:bg-muted transition-colors", isActive('/') && "bg-muted font-medium text-[#62BFF0]")} onClick={handleLinkClick}>
                Home
              </Link>
              
              {/* About Us link */}
              <Link to="/about-us" className={cn("py-2 px-4 rounded hover:bg-muted transition-colors", isActive('/about-us') && "bg-muted font-medium text-[#62BFF0]")} onClick={handleLinkClick}>
                About Us
              </Link>
              
              {/* Social Icons for Mobile */}
              <div className="flex items-center space-x-4 py-2 px-4">
                <a href="https://www.facebook.com/profile.php?id=61560420295116" target="_blank" rel="noopener noreferrer" className="bg-[#62BFF0] text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-[#62BFF0] text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://maps.app.goo.gl/KXvLYrL6SQG3uRQb8" target="_blank" rel="noopener noreferrer" className="bg-[#62BFF0] text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className={cn("w-full justify-start py-2 px-4 rounded hover:bg-muted transition-colors", services.some(service => isActive(service.path)) && "bg-muted font-medium text-[#62BFF0]")}>
                    Services <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 rounded-md bg-white z-50">
                  {services.map(service => <DropdownMenuItem key={service.path} asChild>
                      <Link to={service.path} className={cn("block px-2 py-1.5 rounded-sm", isActive(service.path) && "bg-accent text-accent-foreground font-medium")} onClick={handleLinkClick}>
                        {service.name}
                      </Link>
                    </DropdownMenuItem>)}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Reviews Link */}
              <Link to="/reviews" className={cn("py-2 px-4 rounded hover:bg-muted transition-colors", isActive('/reviews') && "bg-muted font-medium text-[#62BFF0]")} onClick={handleLinkClick}>
                Reviews
              </Link>
              
              {/* Contracts Link */}
              <Link to="/contracts" className={cn("py-2 px-4 rounded hover:bg-muted transition-colors", isActive('/contracts') && "bg-muted font-medium text-[#62BFF0]")} onClick={handleLinkClick}>
                Contracts
              </Link>
              
              {/* Other navigation links */}
              <Link to="/booking?quote=true" className={cn("py-2 px-4 rounded hover:bg-muted transition-colors", isActive('/booking') && "bg-muted font-medium text-[#62BFF0]")} onClick={handleLinkClick}>
                Request Quote
              </Link>
              <Link to="/contact-us" className={cn("py-2 px-4 rounded hover:bg-muted transition-colors", isActive('/contact-us') && "bg-muted font-medium text-[#62BFF0]")} onClick={handleLinkClick}>
                Contact Us
              </Link>
              
              {/* Phone button for mobile */}
              <a href="tel:4378585005" className="flex items-center bg-[#62BFF0] text-white rounded-full px-5 py-3 mt-4 mx-4 justify-center">
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-medium">(437) 858-5005</span>
              </a>
            </nav>
          </div>}
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          {/* Contact Section */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-white">Get Your Quote Today!</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-2 rounded border bg-background/20 border-background/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#62BFF0]" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-2 rounded border bg-background/20 border-background/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#62BFF0]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                  <input type="email" id="email" required className="w-full px-4 py-2 rounded border bg-background/20 border-background/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#62BFF0]" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 rounded border bg-background/20 border-background/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#62BFF0]"></textarea>
                </div>
                <Button type="submit" className="w-full bg-[#62BFF0] hover:bg-[#62BFF0]/90">Submit</Button>
              </form>
            </div>
            
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">CONTACT</h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="font-medium mb-1">Phone Number</p>
                    <a href="tel:4378585005" className="text-lg hover:text-[#62BFF0]">437-858-5005</a>
                  </div>
                  <div>
                    <p className="font-medium mb-1">E-mail address</p>
                    <a href="mailto:highshinecleaning123@gmail.com" className="hover:text-[#62BFF0]">highshinecleaning123@gmail.com</a>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Hours of Operation</p>
                    <p>Monday to Sunday</p>
                    <p>8:30am to 9:30pm</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium mb-3">Follow Us on</p>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/profile.php?id=61560420295116" target="_blank" rel="noopener noreferrer" className="text-[#62BFF0]">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://www.google.com/search?q=high+shine+cleaning&rlz=1C1CHBF_enCA959CA959&oq=high&aqs=chrome.0.69i59l2j69i57j69i59j0i131i273i433i512i650j69i60l3.964j0j7&sourceid=chrome&ie=UTF-8&lqi=ChNoaWdoIHNoaW5lIGNsZWFuaW5nSJC7ytqHu4CACFohEAAQARACGAAYARgCIhNoaWdoIHNoaW5lIGNsZWFuaW5negtNaXNzaXNzYXVnYZIBF3dpbmRvd19jbGVhbmluZ19zZXJ2aWNlqgFVEAEqFyITaGlnaCBzaGluZSBjbGVhbmluZygAMh8QASIbL6gy_w3fDhGDXAOLhpdTQ5kHswNOvN9ouRZwMhcQAiITaGlnaCBzaGluZSBjbGVhbmluZw#rlimm=4094031844201864335" target="_blank" rel="noopener noreferrer" className="text-[#62BFF0]">
                      <img src="/lovable-uploads/60806a1c-46ea-4ef6-9f81-9a2a0cc1ea10.png" alt="Google" className="w-5 h-5" />
                    </a>
                    <a href="https://maps.app.goo.gl/KXvLYrL6SQG3uRQb8" target="_blank" rel="noopener noreferrer" className="text-[#62BFF0]">
                      <MapPin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild size="lg" className="bg-[#62BFF0] hover:bg-[#62BFF0]/90">
                  <Link to="/booking?quote=true" onClick={handleLinkClick}>Request a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">High Shine Cleaning</h3>
              <p className="text-muted-foreground">A team of young professionals providing exceptional cleaning services for your home.</p>
              <div className="mt-4 flex items-center text-muted-foreground">
                <Phone size={16} className="mr-2" />
                <a href="tel:4378585005" className="hover:text-white transition-colors">437-858-5005</a>
              </div>
              <div className="mt-2 flex items-center text-muted-foreground">
                <Mail size={16} className="mr-2" />
                <a href="mailto:highshinecleaning123@gmail.com" className="hover:text-white transition-colors">highshinecleaning123@gmail.com</a>
              </div>
              <div className="mt-4">
                <Link to="/reviews" className="flex items-center text-muted-foreground hover:text-white transition-colors" onClick={handleLinkClick}>
                  <img src="/lovable-uploads/60806a1c-46ea-4ef6-9f81-9a2a0cc1ea10.png" alt="Google Rating" className="h-6 mr-2" />
                  <span>5.0 Rating on Google</span>
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                {services.map(service => <li key={service.path}>
                    <Link to={service.path} className="hover:text-white transition-colors" onClick={handleLinkClick}>
                      {service.name}
                    </Link>
                  </li>)}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-white transition-colors" onClick={handleLinkClick}>Home</Link></li>
                <li><Link to="/booking?quote=true" className="hover:text-white transition-colors" onClick={handleLinkClick}>Request a Quote</Link></li>
                <li><Link to="/your-bookings" className="hover:text-white transition-colors" onClick={handleLinkClick}>Check Your Bookings</Link></li>
                <li><Link to="/reviews" className="hover:text-white transition-colors" onClick={handleLinkClick}>Reviews</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-muted text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} High Shine Cleaning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Layout;