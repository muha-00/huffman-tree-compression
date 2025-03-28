
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WindowCleaning from "./pages/WindowCleaning";
import HouseWashing from "./pages/HouseWashing";
import RoofWashing from "./pages/RoofWashing";
import GutterCleaning from "./pages/GutterCleaning";
import Booking from "./pages/Booking";
import YourBookings from "./pages/YourBookings";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Global Elfsight widget - this is the chat widget that should appear on all pages
const ElfsightWidget = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // This is the chat widget that should appear on all pages
  return <div className="elfsight-app-a10a4e02-712a-4f41-beb8-712c86ff2341" data-elfsight-app-lazy></div>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/window-cleaning" element={<WindowCleaning />} />
          <Route path="/house-washing" element={<HouseWashing />} />
          <Route path="/roof-washing" element={<RoofWashing />} />
          <Route path="/gutter-cleaning" element={<GutterCleaning />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/your-bookings" element={<YourBookings />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ElfsightWidget />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
