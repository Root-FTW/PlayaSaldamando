'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
  explore: [
    { name: 'Accommodations', href: '/accommodations' },
    { name: 'Activities', href: '/activities' },
    { name: 'Photo Gallery', href: '/gallery' },
    { name: 'Directions', href: '/directions' },
  ],
  plan: [
    { name: 'Trip Calculator', href: '/#trip-planner' },
    { name: 'Packing List', href: '/#packing-checklist' },
    { name: 'Weather Info', href: '/#weather' },
    { name: 'Distance Calculator', href: '/#distance' },
  ],
  contact: [
    { name: 'Make Reservation', href: '/contact' },
    { name: 'Email Us', href: 'mailto:gsaldamando@cox.net' },
    { name: 'Call US', href: 'tel:+16198579242' },
    { name: 'Call Mexico', href: 'tel:+526461185974' },
  ],
};

const socialLinks = [
  { name: 'WhatsApp', href: 'https://wa.me/526461185974', emoji: '💬' },
  { name: 'Email', href: 'mailto:gsaldamando@cox.net', emoji: '✉️' },
  { name: 'Phone', href: 'tel:+16198579242', emoji: '📞' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-ocean-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">PS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Playa Saldamando</h3>
                <p className="text-gray-400 text-sm">Beachfront Paradise</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Experience the ultimate beachfront getaway on the stunning Pacific coast of Baja California.
              Over 30 years of providing unforgettable coastal experiences.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-ocean-600 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.emoji}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Explore Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-ocean-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Plan Your Trip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Plan Your Trip</h4>
            <ul className="space-y-2">
              {footerLinks.plan.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-ocean-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 text-sm">📍 Kilometer 94</p>
                <p className="text-gray-300 text-sm">Tijuana-Ensenada Toll Road</p>
                <p className="text-gray-300 text-sm">Ensenada, Baja California</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">📞 US: (619) 857-9242</p>
                <p className="text-gray-300 text-sm">📱 MX: +52 646 118 5974</p>
                <p className="text-gray-300 text-sm">✉️ gsaldamando@cox.net</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">24/7 Staff Available</p>
                <p className="text-gray-400 text-xs">Check-in: 2:00 PM</p>
                <p className="text-gray-400 text-xs">Check-out: 12:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Playa Saldamando. All rights reserved.</p>
              <p className="mt-1">30+ years of beachfront hospitality in Baja California</p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>🌊 Mile+ of Private Beach</span>
              <span>⛺ Camping & Trailers</span>
              <span>🛡️ 24/7 Security</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
