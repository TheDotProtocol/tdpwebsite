'use client';
import { ReactNode } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-dark text-white relative">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-dark-500/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/homepagevideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
