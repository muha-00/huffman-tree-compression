
import React from 'react';
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "min-h-screen flex flex-col antialiased pb-12",
      className
    )}>
      <header className="py-6 border-b backdrop-blur-sm bg-background/80 sticky top-0 z-10">
        <div className="container flex justify-center">
          <h1 className="text-2xl font-medium tracking-tight">
            Huffman Tree Compression
          </h1>
        </div>
      </header>
      
      <main className="flex-1 container py-8">
        {children}
      </main>
      
      <footer className="border-t py-6 mt-auto">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground">
            Huffman Tree Compression — A modern implementation of the classic algorithm
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
