'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    type: 'US Phone',
    value: '(619) 857-9242',
    href: 'tel:+16198579242',
    emoji: '📞',
    description: 'Call from United States'
  },
  {
    type: 'Mexico Mobile',
    value: '+52 646 118 5974',
    href: 'tel:+526461185974',
    emoji: '📱',
    description: 'Call from Mexico'
  },
  {
    type: 'Email',
    value: 'gsaldamando@cox.net',
    href: 'mailto:gsaldamando@cox.net',
    emoji: '✉️',
    description: 'Send us an email'
  },
  {
    type: 'WhatsApp',
    value: '+52 646 118 5974',
    href: 'https://wa.me/526461185974',
    emoji: '💬',
    description: 'Message us on WhatsApp'
  }
];

const locationInfo = {
  address: 'Kilometer 94, Tijuana-Ensenada Toll Road',
  city: 'Ensenada, Baja California, Mexico',
  coordinates: '31.8444° N, 116.6062° W',
  directions: 'Located between Tijuana and Ensenada on the scenic coastal highway'
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    accommodationType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '',
        accommodationType: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Contact & Reservations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to book your beachfront getaway? Get in touch with us for reservations, questions, or more information about Playa Saldamando.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.type}
                  href={contact.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl mr-4">{contact.emoji}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{contact.type}</div>
                    <div className="text-ocean-600 font-medium">{contact.value}</div>
                    <div className="text-sm text-gray-500">{contact.description}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">📍</span>
                Location
              </h4>
              <div className="space-y-2 text-gray-600">
                <p><strong>Address:</strong> {locationInfo.address}</p>
                <p><strong>City:</strong> {locationInfo.city}</p>
                <p><strong>Coordinates:</strong> {locationInfo.coordinates}</p>
                <p className="text-sm italic">{locationInfo.directions}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <h5 className="font-medium text-gray-900 mb-2">Operating Hours</h5>
                <div className="text-sm text-gray-600">
                  <p>• Check-in: 2:00 PM</p>
                  <p>• Check-out: 12:00 PM</p>
                  <p>• Office: 24/7 staff available</p>
                  <p>• Day camping: 6:00 AM - 6:00 PM</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Reservation Request</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span className="text-green-800">Thank you! We'll contact you soon to confirm your reservation.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
                  placeholder="(619) 123-4567"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
                  >
                    <option value="">Select guests</option>
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Accommodation Type
                  </label>
                  <select
                    name="accommodationType"
                    value={formData.accommodationType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
                  >
                    <option value="">Select type</option>
                    <option value="camping">Beachfront Camping</option>
                    <option value="trailer">Trailer Rental</option>
                    <option value="day-camping">Day Camping</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message or Special Requests
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
                  placeholder="Tell us about any special requests or questions..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-ocean-600 hover:bg-ocean-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>📧</span>
                    <span>Send Reservation Request</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> This is a reservation request. We'll contact you within 24 hours to confirm availability and finalize your booking.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
