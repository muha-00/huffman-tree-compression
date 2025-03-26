
import React from 'react';
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Window Cleaning', path: '/window-cleaning' },
    { name: 'House Washing', path: '/house-washing' },
    { name: 'Roof Washing', path: '/roof-washing' },
    { name: 'Gutter Cleaning', path: '/gutter-cleaning' },
    { name: 'Book Now', path: '/booking' },
    { name: 'Your Bookings', path: '/your-bookings' },
  ];

  return (
    <div className={cn(
      "min-h-screen flex flex-col antialiased",
      className
    )}>
      {/* Top contact bar */}
      <div className="bg-highshine text-white py-2 px-4">
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
      
      {/* Header with navigation */}
      <header className="py-4 border-b backdrop-blur-sm bg-background/80 sticky top-0 z-10">
        <div className="container flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/public/lovable-uploads/9be1a361-2200-495e-92be-5bcb9a2779e2.png" 
              alt="High Shine Cleaning" 
              className="h-12 md:h-16"
            />
            <span className="ml-2 text-xl font-bold text-highshine hidden sm:inline-block">High Shine Cleaning</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "text-foreground hover:text-highshine transition-colors",
                  isActive(link.path) && "text-highshine font-medium"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b z-20">
            <nav className="container py-4 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={cn(
                    "py-2 px-4 rounded hover:bg-muted transition-colors",
                    isActive(link.path) && "bg-muted font-medium text-highshine"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-foreground text-background py-12">
        <div className="container">
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
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/window-cleaning" className="hover:text-white transition-colors">Window Cleaning</Link></li>
                <li><Link to="/house-washing" className="hover:text-white transition-colors">House Washing</Link></li>
                <li><Link to="/roof-washing" className="hover:text-white transition-colors">Roof Washing</Link></li>
                <li><Link to="/gutter-cleaning" className="hover:text-white transition-colors">Gutter Cleaning</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/booking" className="hover:text-white transition-colors">Book a Service</Link></li>
                <li><Link to="/your-bookings" className="hover:text-white transition-colors">Check Your Bookings</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-muted text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} High Shine Cleaning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
