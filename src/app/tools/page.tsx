import type { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Planning Tools - Trip Calculator, Weather & More',
  description: 'Use our comprehensive planning tools: trip cost calculator, weather widget, tide chart, packing checklist, and distance calculator for your Playa Saldamando visit.',
};

// Loading component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ocean-600"></div>
    </div>
  );
}

// Dynamic imports for better performance
const TripPlanner = dynamic(() => import('@/components/tools/TripPlanner'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

const WeatherWidget = dynamic(() => import('@/components/widgets/WeatherWidget'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

const TideChart = dynamic(() => import('@/components/widgets/TideChart'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

const PackingChecklist = dynamic(() => import('@/components/tools/PackingChecklist'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

const DistanceCalculator = dynamic(() => import('@/components/tools/DistanceCalculator'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

const tools = [
  {
    id: 'trip-planner',
    title: 'Trip Cost Calculator',
    description: 'Calculate the total cost of your stay including accommodations, extras, and fees.',
    emoji: '🧮',
    component: 'TripPlanner'
  },
  {
    id: 'weather',
    title: 'Weather Information',
    description: 'Current weather conditions and forecast for Playa Saldamando.',
    emoji: '☀️',
    component: 'WeatherWidget'
  },
  {
    id: 'tides',
    title: 'Tide Chart',
    description: 'Daily tide information to plan your beach activities perfectly.',
    emoji: '🌊',
    component: 'TideChart'
  },
  {
    id: 'packing',
    title: 'Packing Checklist',
    description: 'Interactive checklist to ensure you don\'t forget any essentials.',
    emoji: '📋',
    component: 'PackingChecklist'
  },
  {
    id: 'distance',
    title: 'Distance Calculator',
    description: 'Calculate travel distance, time, and costs from major cities.',
    emoji: '🗺️',
    component: 'DistanceCalculator'
  }
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-ocean-600 to-ocean-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Planning Tools
          </h1>
          <p className="text-xl md:text-2xl text-ocean-100 max-w-3xl mx-auto">
            Everything you need to plan the perfect trip to Playa Saldamando
          </p>
        </div>
      </section>

      {/* Tools Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Planning Suite
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our suite of planning tools helps you prepare for every aspect of your beachfront getaway, 
              from calculating costs to checking weather conditions.
            </p>
          </div>

          {/* Tools Grid Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tools.map((tool, index) => (
              <div key={tool.id} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{tool.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.title}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Planning Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start Planning Your Trip
            </h2>
            <p className="text-lg text-gray-600">
              Use these interactive tools to plan every detail of your visit
            </p>
          </div>
          
          {/* Primary Tools */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Trip Planner */}
            <div className="lg:col-span-2">
              <Suspense fallback={<LoadingSpinner />}>
                <TripPlanner />
              </Suspense>
            </div>
            
            {/* Weather & Tide Widgets */}
            <div className="space-y-6">
              <Suspense fallback={<LoadingSpinner />}>
                <WeatherWidget />
              </Suspense>
              
              <Suspense fallback={<LoadingSpinner />}>
                <TideChart />
              </Suspense>
            </div>
          </div>

          {/* Secondary Tools */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Packing Checklist */}
            <Suspense fallback={<LoadingSpinner />}>
              <PackingChecklist />
            </Suspense>
            
            {/* Distance Calculator */}
            <Suspense fallback={<LoadingSpinner />}>
              <DistanceCalculator />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Planning Tips</h2>
            <p className="text-lg text-gray-600">Make the most of your Playa Saldamando experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">📅</span>
                Best Times to Visit
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Spring (Mar-May):</strong> Perfect weather, fewer crowds</li>
                <li>• <strong>Summer (Jun-Aug):</strong> Warmest weather, peak season</li>
                <li>• <strong>Fall (Sep-Nov):</strong> Great for surfing, peaceful</li>
                <li>• <strong>Winter (Dec-Feb):</strong> Cooler, ideal for cozy camping</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">💡</span>
                Pro Tips
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Book early during peak season (summer)</li>
                <li>• Bring layers - coastal weather changes quickly</li>
                <li>• Check border wait times before traveling</li>
                <li>• Download offline maps for the area</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">🛂</span>
                Border Crossing
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Valid passport required for all travelers</li>
                <li>• Consider SENTRI for faster crossing</li>
                <li>• Check CBP app for current wait times</li>
                <li>• Avoid peak hours (7-9 AM, 5-7 PM)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">💰</span>
                Money Matters
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Bring Mexican pesos for tolls and local purchases</li>
                <li>• USD widely accepted but change given in pesos</li>
                <li>• ATMs available in Ensenada</li>
                <li>• Consider travel insurance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ocean-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Book Your Adventure?</h2>
          <p className="text-ocean-100 mb-8 text-lg">
            Now that you've planned your perfect trip, it's time to make it happen!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/accommodations"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-ocean-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              View Accommodations
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-ocean-700 text-white font-medium rounded-lg hover:bg-ocean-800 transition-colors duration-200"
            >
              Make Reservation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
