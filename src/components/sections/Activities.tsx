'use client';

import { motion } from 'framer-motion';

const activities = [
  {
    id: 'surfing',
    title: 'Surfing & Bodyboarding',
    description: 'Perfect waves for beginners and experienced surfers alike. Boogie boards available for rent.',
    emoji: '🏄‍♂️',
    features: ['Consistent waves', 'Boogie board rentals', 'Safe for beginners', 'Great for all skill levels'],
    bestTime: 'Morning hours (6 AM - 10 AM)'
  },
  {
    id: 'fishing',
    title: 'Beach Fishing',
    description: 'Cast your line from our pristine shoreline and catch local Pacific fish species.',
    emoji: '🎣',
    features: ['Shore fishing', 'Local fish species', 'Peaceful environment', 'No license required'],
    bestTime: 'Early morning & evening'
  },
  {
    id: 'swimming',
    title: 'Swimming & Water Sports',
    description: 'Enjoy the refreshing Pacific waters in our safe, monitored swimming areas.',
    emoji: '🏊‍♀️',
    features: ['Safe swimming areas', '24/7 staff supervision', 'Clean facilities', 'Shower areas'],
    bestTime: 'All day (10 AM - 6 PM)'
  },
  {
    id: 'camping',
    title: 'Beach Camping',
    description: 'Sleep under the stars with the sound of waves as your lullaby.',
    emoji: '⛺',
    features: ['Beachfront sites', 'Fire pits included', 'Restroom facilities', 'Security patrol'],
    bestTime: 'Year-round'
  },
  {
    id: 'photography',
    title: 'Photography & Sightseeing',
    description: 'Capture stunning sunrises, sunsets, and coastal landscapes.',
    emoji: '📸',
    features: ['Scenic viewpoints', 'Wildlife spotting', 'Sunrise/sunset views', 'Instagram-worthy spots'],
    bestTime: 'Golden hour (sunrise/sunset)'
  },
  {
    id: 'relaxation',
    title: 'Beach Relaxation',
    description: 'Unwind on our mile-long stretch of pristine Pacific coastline.',
    emoji: '🏖️',
    features: ['Private beach access', 'Peaceful environment', 'Beach chairs available', 'Shade areas'],
    bestTime: 'All day'
  }
];

const nearbyAttractions = [
  {
    name: 'Puerto Nuevo',
    distance: '15 km',
    description: 'Famous lobster village with authentic Mexican cuisine',
    emoji: '🦞'
  },
  {
    name: 'Valle de Guadalupe',
    distance: '45 km',
    description: 'Mexico\'s premier wine region with world-class wineries',
    emoji: '🍷'
  },
  {
    name: 'Ensenada',
    distance: '30 km',
    description: 'Vibrant port city with markets, restaurants, and culture',
    emoji: '🏙️'
  },
  {
    name: 'La Bocana',
    distance: '10 km',
    description: 'Popular surfing spot with consistent waves',
    emoji: '🌊'
  }
];

export default function Activities() {
  return (
    <section className="py-16 bg-white">
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
            Activities & Adventures
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From thrilling water sports to peaceful beach relaxation, discover endless ways to enjoy your time at Playa Saldamando.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-ocean-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{activity.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {activity.description}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {activity.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-center text-sm">
                    <span className="text-lg mr-2">⏰</span>
                    <span className="text-gray-600">
                      <strong>Best Time:</strong> {activity.bestTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nearby Attractions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-sunset-50 to-sand-50 rounded-xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Nearby Attractions
            </h3>
            <p className="text-gray-600">
              Explore the beautiful Baja California region during your stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyAttractions.map((attraction, index) => (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-2">{attraction.emoji}</div>
                <h4 className="font-semibold text-gray-900 mb-1">{attraction.name}</h4>
                <p className="text-sm text-ocean-600 font-medium mb-2">{attraction.distance} away</p>
                <p className="text-xs text-gray-600">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Safety Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-200"
        >
          <div className="flex items-start space-x-3">
            <div className="text-2xl">🛡️</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Safety First</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <ul className="space-y-1">
                  <li>• 24/7 staff supervision and security</li>
                  <li>• First aid station on premises</li>
                  <li>• Emergency contact numbers posted</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Swimming areas clearly marked</li>
                  <li>• Weather condition updates</li>
                  <li>• Safety equipment available</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
