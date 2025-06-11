import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Activities & Adventures - Beach Fun at Playa Saldamando',
  description: 'Discover endless activities at Playa Saldamando: surfing, fishing, swimming, camping, and exploring beautiful Baja California attractions.',
};

const beachActivities = [
  {
    id: 'surfing',
    title: 'Surfing & Bodyboarding',
    description: 'Perfect waves for beginners and experienced surfers alike. Boogie boards available for rent.',
    emoji: '🏄‍♂️',
    difficulty: 'All Levels',
    bestTime: 'Morning hours (6 AM - 10 AM)',
    equipment: 'Boogie boards available for rent',
    tips: ['Check tide conditions', 'Morning waves are typically best', 'Wetsuits recommended in winter'],
    image: '/images/IMG_9264.jpg'
  },
  {
    id: 'fishing',
    title: 'Beach Fishing',
    description: 'Cast your line from our pristine shoreline and catch local Pacific fish species.',
    emoji: '🎣',
    difficulty: 'Beginner Friendly',
    bestTime: 'Early morning & evening',
    equipment: 'Bring your own gear',
    tips: ['No fishing license required', 'Best spots near rocky areas', 'Early morning yields best results'],
    image: '/images/IMG_9269.jpg'
  },
  {
    id: 'swimming',
    title: 'Swimming & Water Sports',
    description: 'Enjoy the refreshing Pacific waters in our safe, monitored swimming areas.',
    emoji: '🏊‍♀️',
    difficulty: 'All Levels',
    bestTime: 'All day (10 AM - 6 PM)',
    equipment: 'Bring your own gear',
    tips: ['Swim in designated areas only', 'Check with staff for conditions', 'Lifeguard supervision available'],
    image: '/images/IMG_9248.jpg'
  },
  {
    id: 'beachcombing',
    title: 'Beachcombing & Photography',
    description: 'Explore tide pools, collect shells, and capture stunning coastal photography.',
    emoji: '📸',
    difficulty: 'All Ages',
    bestTime: 'Low tide & golden hour',
    equipment: 'Camera, collection bag',
    tips: ['Best during low tide', 'Respect marine life', 'Golden hour for best photos'],
    image: '/images/IMG_9272.jpg'
  }
];

const nearbyAttractions = [
  {
    name: 'Puerto Nuevo',
    distance: '15 km',
    driveTime: '20 minutes',
    description: 'Famous lobster village with authentic Mexican cuisine and oceanfront dining.',
    highlights: ['Fresh lobster dinners', 'Local artisan shops', 'Ocean views', 'Traditional Mexican atmosphere'],
    image: '/images/IMG_9283.jpg',
    type: 'Dining & Culture'
  },
  {
    name: 'Valle de Guadalupe',
    distance: '45 km',
    driveTime: '1 hour',
    description: 'Mexico\'s premier wine region with world-class wineries and gourmet restaurants.',
    highlights: ['Wine tastings', 'Gourmet dining', 'Scenic vineyards', 'Boutique hotels'],
    image: '/images/IMG_9287.jpg',
    type: 'Wine & Dining'
  },
  {
    name: 'Ensenada',
    distance: '30 km',
    driveTime: '30 minutes',
    description: 'Vibrant port city with markets, restaurants, cultural attractions, and nightlife.',
    highlights: ['Fish market', 'Street food', 'Cultural center', 'Shopping'],
    image: '/images/IMG_9294.jpg',
    type: 'City & Culture'
  },
  {
    name: 'La Bocana',
    distance: '10 km',
    driveTime: '15 minutes',
    description: 'Popular surfing spot with consistent waves and beautiful coastal scenery.',
    highlights: ['Surfing', 'Beach walks', 'Tide pools', 'Photography'],
    image: '/images/IMG_9298.jpg',
    type: 'Beach & Surfing'
  }
];

const seasonalInfo = [
  {
    season: 'Spring (Mar-May)',
    weather: '18-24°C, mild winds',
    activities: ['Perfect for all activities', 'Wildflower blooms', 'Ideal camping weather'],
    tips: 'Best overall season for visiting'
  },
  {
    season: 'Summer (Jun-Aug)',
    weather: '20-28°C, warm & sunny',
    activities: ['Swimming', 'Water sports', 'Beach camping', 'Sunset photography'],
    tips: 'Peak season - book early'
  },
  {
    season: 'Fall (Sep-Nov)',
    weather: '16-22°C, calm seas',
    activities: ['Surfing', 'Fishing', 'Photography', 'Peaceful camping'],
    tips: 'Great for photography and peaceful stays'
  },
  {
    season: 'Winter (Dec-Feb)',
    weather: '12-18°C, occasional rain',
    activities: ['Storm watching', 'Cozy camping', 'Whale watching offshore'],
    tips: 'Bring warm clothes for evenings'
  }
];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-ocean-600 to-ocean-800 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_9264.jpg"
            alt="Beach Activities at Playa Saldamando"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Activities & Adventures</h1>
          <p className="text-xl md:text-2xl">Endless Fun on the Pacific Coast</p>
        </div>
      </section>

      {/* Beach Activities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Beach Activities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From thrilling water sports to peaceful beach walks, discover endless ways to enjoy your time at Playa Saldamando.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {beachActivities.map((activity, index) => (
              <div key={activity.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <span className="text-2xl">{activity.emoji}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Difficulty:</span>
                      <p className="text-sm text-gray-900">{activity.difficulty}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Best Time:</span>
                      <p className="text-sm text-gray-900">{activity.bestTime}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-500">Equipment:</span>
                    <p className="text-sm text-gray-900">{activity.equipment}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-gray-500">Tips:</span>
                    <ul className="text-sm text-gray-600 mt-1">
                      {activity.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start">
                          <span className="text-ocean-500 mr-2">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nearby Attractions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the beautiful Baja California region with these amazing destinations just a short drive away.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nearbyAttractions.map((attraction, index) => (
              <div key={attraction.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-ocean-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {attraction.type}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{attraction.name}</h3>
                    <div className="text-right">
                      <p className="text-sm font-medium text-ocean-600">{attraction.distance}</p>
                      <p className="text-xs text-gray-500">{attraction.driveTime}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{attraction.description}</p>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Highlights:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {attraction.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Times to Visit</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each season offers unique experiences and activities at Playa Saldamando.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalInfo.map((season, index) => (
              <div key={season.season} className="bg-gradient-to-br from-ocean-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{season.season}</h3>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500">Weather:</span>
                  <p className="text-sm text-gray-900">{season.weather}</p>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500">Best Activities:</span>
                  <ul className="text-sm text-gray-600 mt-1">
                    {season.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start">
                        <span className="text-ocean-500 mr-2">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/50 rounded p-3">
                  <span className="text-xs font-medium text-ocean-600">💡 Tip:</span>
                  <p className="text-xs text-gray-700 mt-1">{season.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Guidelines */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety & Guidelines</h2>
            <p className="text-lg text-gray-600">Your safety is our top priority</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">🛡️</span>
                Safety Measures
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 24/7 staff supervision and security patrol</li>
                <li>• First aid station on premises</li>
                <li>• Emergency contact numbers posted</li>
                <li>• Swimming areas clearly marked</li>
                <li>• Weather condition updates provided</li>
                <li>• Safety equipment available</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">📋</span>
                Guidelines
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Follow all posted signs and instructions</li>
                <li>• Respect marine life and environment</li>
                <li>• No glass containers on beach</li>
                <li>• Keep noise levels reasonable</li>
                <li>• Dispose of trash properly</li>
                <li>• Report any concerns to staff immediately</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ocean-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Your Adventure?</h2>
          <p className="text-ocean-100 mb-8 text-lg">
            Book your stay today and start planning your perfect beach getaway with endless activities and adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/accommodations"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-ocean-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              View Accommodations
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-ocean-700 text-white font-medium rounded-lg hover:bg-ocean-800 transition-colors duration-200"
            >
              Make Reservation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
