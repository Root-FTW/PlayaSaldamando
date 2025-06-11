import type { Metadata } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'About Us - Our Story',
  description: 'Learn about Playa Saldamando\'s 30+ year history of providing unforgettable beachfront experiences in Baja California, Mexico.',
};

const milestones = [
  {
    year: '1990s',
    title: 'The Beginning',
    description: 'Started as a small family business with a vision to share the beauty of Baja California\'s coast.',
    emoji: '🌱'
  },
  {
    year: '2000s',
    title: 'Growth & Development',
    description: 'Expanded facilities and improved infrastructure while maintaining our commitment to nature.',
    emoji: '🏗️'
  },
  {
    year: '2010s',
    title: 'Modern Amenities',
    description: 'Added trailer rentals and upgraded facilities to serve a wider range of guests.',
    emoji: '🏠'
  },
  {
    year: '2020s',
    title: 'Sustainable Future',
    description: 'Continuing to evolve while preserving the natural beauty that makes us special.',
    emoji: '🌊'
  }
];

const values = [
  {
    title: 'Family Tradition',
    description: 'Three decades of family ownership and operation, ensuring personal attention to every guest.',
    emoji: '👨‍👩‍👧‍👦'
  },
  {
    title: 'Natural Beauty',
    description: 'Committed to preserving over a mile of pristine Pacific coastline for future generations.',
    emoji: '🌿'
  },
  {
    title: 'Safety First',
    description: '24/7 staff presence and security to ensure all guests feel safe and welcome.',
    emoji: '🛡️'
  },
  {
    title: 'Authentic Experience',
    description: 'Genuine Baja California coastal experience away from crowded tourist areas.',
    emoji: '⭐'
  }
];

const stats = [
  { number: '30+', label: 'Years of Experience', emoji: '📅' },
  { number: '1+', label: 'Mile of Beach', emoji: '🏖️' },
  { number: '24/7', label: 'Staff Available', emoji: '👥' },
  { number: '1000s', label: 'Happy Guests', emoji: '😊' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-ocean-600 to-ocean-800 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/playa-saldamando-mexico.jpeg"
            alt="Playa Saldamando Beach"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl">30+ Years of Beachfront Excellence</p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Welcome to Playa Saldamando
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                For over three decades, Playa Saldamando has been a hidden gem on the stunning Pacific coast of Baja California. 
                Located at Kilometer 94 on the scenic Tijuana-Ensenada toll road, our family-owned beachfront property offers 
                more than a mile of pristine coastline where memories are made and the spirit is renewed.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                What started as a small family vision has grown into one of the region's most beloved beachfront destinations. 
                We've maintained our commitment to providing an authentic, peaceful, and safe environment where families and 
                friends can connect with nature and each other.
              </p>
              <p className="text-lg leading-relaxed">
                Our property features both camping sites for the adventurous and comfortable trailer rentals for those seeking 
                more amenities, all while maintaining the natural beauty and tranquility that makes Playa Saldamando special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <div className="text-3xl font-bold text-ocean-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{milestone.emoji}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="text-sm font-medium text-ocean-600 mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{value.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Us Today</h2>
          <div className="bg-gradient-to-r from-ocean-50 to-blue-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📍 Location</h3>
                <p className="text-gray-600 mb-2">Kilometer 94</p>
                <p className="text-gray-600 mb-2">Tijuana-Ensenada Toll Road</p>
                <p className="text-gray-600">Ensenada, Baja California, Mexico</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📞 Contact</h3>
                <p className="text-gray-600 mb-2">US: (619) 857-9242</p>
                <p className="text-gray-600 mb-2">Mexico: +52 646 118 5974</p>
                <p className="text-gray-600">gsaldamando@cox.net</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-ocean-600 hover:bg-ocean-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Make a Reservation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
