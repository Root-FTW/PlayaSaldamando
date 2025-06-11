import type { Metadata } from 'next';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact & Reservations - Book Your Stay',
  description: 'Contact Playa Saldamando for reservations and information. Call (619) 857-9242 or +52 646 118 5974. Located at Km 94 Tijuana-Ensenada Highway.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-16">
        <Contact />
      </div>
    </div>
  );
}
