
import React, { useState, useEffect } from 'react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  title: string;
  icon?: React.ReactNode;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = "", title, icon }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const element = document.getElementById(`counter-${title.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [title]);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);
  
  return (
    <div id={`counter-${title.replace(/\s+/g, '-').toLowerCase()}`} className="text-center">
      {icon && <div className="flex justify-center mb-3">{icon}</div>}
      <div className="text-4xl font-bold text-[#62BFF0]">
        {count}{suffix}
      </div>
      <h3 className="mt-2 text-lg font-medium">{title}</h3>
    </div>
  );
};

const StatsCounter: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Impact By The Numbers</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            See the difference we've made for hundreds of satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <Counter 
            title="Homes Serviced" 
            end={500} 
            duration={2000} 
            suffix="+" 
          />
          <Counter 
            title="Satisfaction Rate" 
            end={100} 
            duration={2000} 
            suffix="%" 
          />
          <Counter 
            title="Windows Cleaned" 
            end={25000} 
            duration={2500} 
            suffix="+" 
          />
          <Counter 
            title="Repeat Clients" 
            end={85} 
            duration={2000} 
            suffix="%" 
          />
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
