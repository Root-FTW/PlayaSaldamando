import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Accommodations from '@/components/sections/Accommodations';
import Activities from '@/components/sections/Activities';
import Gallery from '@/components/sections/Gallery';
import Contact from '@/components/sections/Contact';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Dynamic imports for better performance
const WeatherWidget = dynamic(() => import('@/components/widgets/WeatherWidget'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

const TideChart = dynamic(() => import('@/components/widgets/TideChart'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

const TripPlanner = dynamic(() => import('@/components/tools/TripPlanner'), {
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

export default function HomePage() {
  return (
    <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Accommodations Section */}
        <Accommodations />
        
        {/* Activities Section */}
        <Activities />
        
        {/* Gallery Section */}
        <Gallery />
        
        {/* Tools & Widgets Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Plan Your Perfect Trip
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Use our comprehensive tools to plan your visit and stay informed about conditions
              </p>
            </div>

            {/* Main Planning Tools */}
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

            {/* Additional Planning Tools */}
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
        
        {/* Contact Section */}
        <Contact />
    </main>
  );
}
