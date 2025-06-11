'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Accommodations', href: '/accommodations' },
  { name: 'Activities', href: '/activities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Tools', href: '/tools' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Playa Saldamando</span>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-ocean-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">PS</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">
                  Playa Saldamando
                </h1>
                <p className="text-xs text-gray-600">
                  Beachfront Paradise
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-ocean-600 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right side controls */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
          {/* Call Button */}
          <Link
            href="tel:+16198579242"
            className="flex items-center space-x-2 bg-ocean-600 hover:bg-ocean-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="text-sm font-medium">Call Now</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Playa Saldamando</span>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-ocean-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">PS</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">
                    Playa Saldamando
                  </span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="tel:+16198579242"
                    className="flex items-center justify-center space-x-2 bg-ocean-600 hover:bg-ocean-700 text-white px-4 py-3 rounded-lg transition-colors duration-200 w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <PhoneIcon className="h-5 w-5" />
                    <span className="font-medium">Call for Reservations</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
