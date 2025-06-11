'use client';

import { motion } from 'framer-motion';
import {
  HomeIcon,
  UserGroupIcon,
  FireIcon,
  WifiIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const accommodations = [
  {
    id: 'camping',
    title: 'Beachfront Camping',
    description: 'Pitch your tent just steps from the Pacific Ocean with stunning sunrise views.',
    price: '$460 MXN',
    priceNote: 'per night (up to 4 people)',
    features: [
      'Direct beach access',
      'Fire pit included',
      'Picnic table',
      'Restroom facilities',
      '24/7 security',
      'Parking included'
    ],
    image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'trailer',
    title: 'Trailer Rentals',
    description: 'Comfortable trailers with all amenities for a hassle-free beach vacation.',
    price: '$1,700 MXN',
    priceNote: 'per night (average)',
    features: [
      'Fully equipped kitchen',
      'Private bathroom',
      'Air conditioning',
      'Ocean view deck',
      'Bedding included',
      'WiFi available'
    ],
    image: 'https://images.unsplash.com/photo-1520637736862-4d197d17c93a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: false
  },
  {
    id: 'day-camping',
    title: 'Day Camping',
    description: 'Perfect for day trips with full access to beach and facilities.',
    price: '$310 MXN',
    priceNote: 'per day (6 AM - 6 PM)',
    features: [
      'Beach access',
      'Restroom facilities',
      'Picnic areas',
      'Parking included',
      'Fire pit access',
      'Fresh water'
    ],
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: false
  }
];

const extras = [
  { name: 'Firewood Bundle', price: '$120 MXN', icon: FireIcon },
  { name: 'Charcoal', price: '$150 MXN', icon: FireIcon },
  { name: 'Boogie Board Rental', price: '$75 MXN', icon: UserGroupIcon },
  { name: 'Extra Person (over 4)', price: '$70 MXN', icon: UserGroupIcon },
];

export default function Accommodations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Choose Your Perfect Stay
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From beachfront camping under the stars to comfortable trailer rentals,
            we have the perfect accommodation for your Pacific coast adventure.
          </p>
        </motion.div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {accommodations.map((accommodation, index) => (
            <motion.div
              key={accommodation.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                accommodation.popular ? 'border-ocean-500' : 'border-gray-200'
              }`}
            >
              {accommodation.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-ocean-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="aspect-w-16 aspect-h-9 relative h-48">
                <img
                  src={accommodation.image}
                  alt={accommodation.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {accommodation.title}
                  </h3>
                  <HomeIcon className="h-6 w-6 text-ocean-600" />
                </div>

                <p className="text-gray-600 mb-4">
                  {accommodation.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-ocean-600">
                      {accommodation.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {accommodation.priceNote}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {accommodation.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <ShieldCheckIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                  Reserve Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extras Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Enhance Your Stay
            </h3>
            <p className="text-gray-600">
              Add these extras to make your beach experience even better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extras.map((extra, index) => (
              <motion.div
                key={extra.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 border border-gray-200 rounded-lg hover:border-ocean-300 hover:shadow-md transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-ocean-100 rounded-lg mb-3">
                  <extra.icon className="h-6 w-6 text-ocean-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1">{extra.name}</h4>
                <p className="text-ocean-600 font-semibold">{extra.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-ocean-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Book Your Stay?</h3>
            <p className="text-ocean-100 mb-6 max-w-2xl mx-auto">
              Contact us directly for reservations, availability, and current rates.
              Our friendly staff is available 24/7 to help plan your perfect beach getaway.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+16198579242"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-ocean-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Call US: (619) 857-9242
              </a>
              <a
                href="tel:+526461185974"
                className="inline-flex items-center justify-center px-6 py-3 bg-ocean-700 text-white font-medium rounded-lg hover:bg-ocean-800 transition-colors duration-200"
              >
                Call Mexico: +52 646 118 5974
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
