import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, ChevronDown, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const services = [
    { name: 'Window Cleaning', path: '/window-cleaning' },
    { name: 'House Washing', path: '/house-washing' },
    { name: 'Roof Washing', path: '/roof-washing' },
    { name: 'Gutter Cleaning', path: '/gutter-cleaning' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
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
          <nav className="hidden md:flex">
            <ul className="flex space-x-1">
              <li>
                <Link 
                  to="/"
                  className={cn(
                    "flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    isActive('/') && "bg-accent text-accent-foreground"
                  )}
                >
                  Home
                </Link>
              </li>
              
              {/* Services Dropdown */}
              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className={cn(
                        "flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                        services.some(service => isActive(service.path)) && "bg-accent text-accent-foreground"
                      )}>
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-[200px] grid gap-1 p-2 bg-popover shadow-lg rounded-md">
                          {services.map((service) => (
                            <li key={service.path}>
                              <NavigationMenuLink asChild>
                                <Link 
                                  to={service.path}
                                  className={cn(
                                    "flex h-9 items-center px-3 py-2 rounded-md text-sm no-underline transition-colors hover:bg-accent hover:text-accent-foreground",
                                    isActive(service.path) && "bg-accent text-accent-foreground"
                                  )}
                                >
                                  {service.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>
              
              {/* Google Reviews Link */}
              <li>
                <a 
                  href="https://www.google.com/maps/place/High+Shine+Cleaning/@43.453034,-80.0131259,10z/data=!3m1!4b1!4m6!3m5!1s0x805650a1c9dbad87:0x38d0ec456cca1c8f!8m2!3d43.4530109!4d-79.6828021!16s%2Fg%2F11w1yp57dj?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <img 
                    src="/public/lovable-uploads/60806a1c-46ea-4ef6-9f81-9a2a0cc1ea10.png" 
                    alt="Google Rating" 
                    className="h-6 mr-2" 
                  />
                  Reviews
                </a>
              </li>
              
              {/* Other navigation links */}
              {navLinks.slice(1).map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className={cn(
                      "flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      isActive(link.path) && "bg-accent text-accent-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
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
              {/* Home link */}
              <Link 
                to="/"
                className={cn(
                  "py-2 px-4 rounded hover:bg-muted transition-colors",
                  isActive('/') && "bg-muted font-medium text-highshine"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className={cn(
                      "w-full justify-start py-2 px-4 rounded hover:bg-muted transition-colors",
                      services.some(service => isActive(service.path)) && "bg-muted font-medium text-highshine"
                    )}
                  >
                    Services <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 rounded-md bg-popover">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.path} asChild>
                      <Link 
                        to={service.path}
                        className={cn(
                          "block px-2 py-1.5 rounded-sm",
                          isActive(service.path) && "bg-accent text-accent-foreground font-medium"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Google Reviews Link */}
              <a 
                href="https://www.google.com/maps/place/High+Shine+Cleaning/@43.453034,-80.0131259,10z/data=!3m1!4b1!4m6!3m5!1s0x805650a1c9dbad87:0x38d0ec456cca1c8f!8m2!3d43.4530109!4d-79.6828021!16s%2Fg%2F11w1yp57dj?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center py-2 px-4 rounded hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img 
                  src="/public/lovable-uploads/60806a1c-46ea-4ef6-9f81-9a2a0cc1ea10.png" 
                  alt="Google Rating" 
                  className="h-6 mr-2" 
                />
                Reviews
              </a>
              
              {/* Other navigation links */}
              {navLinks.slice(1).map((link) => (
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
              <div className="mt-4">
                <a 
                  href="https://www.google.com/maps/place/High+Shine+Cleaning/@43.453034,-80.0131259,10z/data=!3m1!4b1!4m6!3m5!1s0x805650a1c9dbad87:0x38d0ec456cca1c8f!8m2!3d43.4530109!4d-79.6828021!16s%2Fg%2F11w1yp57dj?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-white transition-colors"
                >
                  <img 
                    src="/public/lovable-uploads/60806a1c-46ea-4ef6-9f81-9a2a0cc1ea10.png" 
                    alt="Google Rating" 
                    className="h-6 mr-2" 
                  />
                  <span>5.0 Rating on Google</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link to={service.path} className="hover:text-white transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/booking" className="hover:text-white transition-colors">Book a Service</Link></li>
                <li><Link to="/your-bookings" className="hover:text-white transition-colors">Check Your Bookings</Link></li>
                <li>
                  <a 
                    href="https://www.google.com/maps/place/High+Shine+Cleaning/@43.453034,-80.0131259,10z/data=!3m1!4b1!4m6!3m5!1s0x805650a1c9dbad87:0x38d0ec456cca1c8f!8m2!3d43.4530109!4d-79.6828021!16s%2Fg%2F11w1yp57dj?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Reviews
                  </a>
                </li>
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
