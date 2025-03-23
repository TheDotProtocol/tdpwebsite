'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navigation = [
  { name: 'What is Dot Protocol?', href: '/' },
  { name: 'DPC20 Standard', href: '/dpc20' },
  { name: 'Ecosystem', href: '/ecosystem' },
  { name: 'Developers', href: '/developers' },
  { name: 'Community', href: '/community' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    console.log('Navigation clicked:', href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Dot Protocol"
                width={40}
                height={40}
                className="w-auto h-8"
              />
            </Link>

            <div className="hidden md:flex md:items-center md:space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-200 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="http://dotprotocolscan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-600 transition-all duration-300 space-x-2 hover:scale-105"
              >
                <span>Launch Mainnet</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-4 h-4"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" 
                  />
                </svg>
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-200 hover:text-primary"
              >
                <span className="sr-only">Open menu</span>
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 right-0 bottom-0 w-64 bg-dark-500/95 backdrop-blur-xl transform transition-transform ease-in-out duration-300 z-50`}
      >
        <div className="pt-16 px-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-gray-200 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4">
            <a
              href="http://dotprotocolscan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-600 transition-all duration-300 space-x-2 hover:scale-105 w-full"
            >
              <span>Launch Mainnet</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-4 h-4"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 