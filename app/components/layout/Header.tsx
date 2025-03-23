'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavItem } from '@/app/types';

const navigation: NavItem[] = [
  { label: 'What is Dot Protocol?', href: '/about' },
  { label: 'DPC20 Standard', href: '/dpc20' },
  { label: 'Ecosystem', href: '/ecosystem' },
  { label: 'Developers', href: '/developers' },
  { label: 'Community', href: '/community' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-dark-100/95 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Dot Protocol"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">The Future of</span>
              <span className="text-lg font-semibold">Blockchains</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-primary hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-dark-50">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <button className="mt-4 w-full bg-primary hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
