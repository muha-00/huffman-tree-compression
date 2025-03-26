
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <div className="container py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-highshine mb-4">404</h1>
        <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-lg">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/" className="flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
