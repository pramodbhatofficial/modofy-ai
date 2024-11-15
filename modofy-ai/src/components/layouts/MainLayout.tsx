'use client';

import React from 'react';
import Navigation from '../ui/Navigation';
import Footer from '../ui/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/20 to-black text-white">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
