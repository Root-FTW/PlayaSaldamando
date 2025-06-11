import type { Metadata } from 'next';
import Gallery from '@/components/sections/Gallery';

export const metadata: Metadata = {
  title: 'Photo Gallery - Beautiful Moments at Playa Saldamando',
  description: 'Browse our stunning photo gallery showcasing the natural beauty, accommodations, and unforgettable moments at Playa Saldamando beach resort.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-16">
        <Gallery />
      </div>
    </div>
  );
}
