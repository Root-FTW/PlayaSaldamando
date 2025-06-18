import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accommodations - Camping & Trailer Rentals',
  description: 'Choose from beachfront camping sites or comfortable trailer rentals at Playa Saldamando. All accommodations include beach access and modern facilities.',
};

const accommodations = [
  {
    id: 'beachfront-camping',
    title: 'Beachfront Camping',
    subtitle: 'Sleep Under the Stars',
    price: '$450 MXN',
    priceNote: 'per night (up to 4 people)',
    description: 'Experience the ultimate beach camping adventure with your tent just steps from the Pacific Ocean. Wake up to stunning sunrises and fall asleep to the sound of waves.',
    features: [
      'Direct beach access',
      'Fire pit included',
      'Picnic table',
      'Restroom facilities nearby',
      '24/7 security patrol',
      'Parking space included',
      'Fresh water access',
      'Trash collection'
    ],
    images: [
      '/images/IMG_9230.jpg',
      '/images/IMG_9243.jpg',
      '/images/IMG_9264.jpg'
    ],
    popular: true,
    capacity: '4 people (max 10 with extra fees)'
  },
  {
    id: 'trailer-rentals',
    title: 'Trailer Rentals',
    subtitle: 'Comfort Meets Nature',
    price: '$1,700 MXN',
    priceNote: 'per night (average)',
    description: 'Enjoy all the beauty of beachfront camping with the comfort of a fully equipped trailer. Perfect for families or those who prefer more amenities.',
    features: [
      'Fully equipped kitchen',
      'Private bathroom',
      'Air conditioning',
      'Ocean view deck',
      'Bedding included',
      'WiFi available',
      'Refrigerator',
      'Hot water'
    ],
    images: [
      '/images/playa-saldamando-trailer3a-scaled.jpg',
      '/images/IMG_9272.jpg',
      '/images/IMG_9279.jpg'
    ],
    popular: false,
    capacity: '4-6 people'
  },
  {
    id: 'day-camping',
    title: 'Day Camping',
    subtitle: 'Perfect Day Trip',
    price: '$310 MXN',
    priceNote: 'per day (6 AM - 6 PM)',
    description: 'Enjoy all our beach facilities for a perfect day trip. Great for families who want to experience Playa Saldamando without staying overnight.',
    features: [
      'Beach access all day',
      'Restroom facilities',
      'Picnic areas',
      'Parking included',
      'Fire pit access',
      'Fresh water',
      'Trash collection',
      'Security supervision'
    ],
    images: [
      '/images/playa-saldamando-mexico.jpeg',
      '/images/IMG_9248.jpg',
      '/images/IMG_9269.jpg'
    ],
    popular: false,
    capacity: 'Up to 10 people'
  }
];

const extras = [
  { name: 'Extra Person (over 4)', price: '$70 MXN', description: 'Additional charge per person per night' },
  { name: 'Firewood Bundle', price: '$120 MXN', description: 'Seasoned wood perfect for campfires' },
  { name: 'Charcoal', price: '$150 MXN', description: 'High-quality charcoal for grilling' },
  { name: 'Boogie Board Rental', price: '$75 MXN', description: 'Daily rental for beach fun' },
];

const policies = [
  {
    title: 'Check-in / Check-out',
    details: [
      'Check-in: 2:00 PM',
      'Check-out: 12:00 PM',
      'Early check-in available upon request',
      'Late check-out may incur additional fees'
    ]
  },
  {
    title: 'Cancellation Policy',
    details: [
      '48 hours notice for full refund',
      '24 hours notice for 50% refund',
      'Same day cancellation: no refund',
      'Weather-related cancellations: full refund'
    ]
  },
  {
    title: 'Rules & Guidelines',
    details: [
      'Quiet hours: 10 PM - 7 AM',
      'No glass containers on beach',
      'Pets welcome with restrictions',
      'Maximum vehicle size restrictions apply'
    ]
  }
];

export default function AccommodationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-ocean-600 to-ocean-800 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/playa-saldamando-trailer3a-scaled.jpg"
            alt="Accommodations at Playa Saldamando"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Accommodations</h1>
          <p className="text-xl md:text-2xl">Your Perfect Beachfront Stay Awaits</p>
        </div>
      </section>

      {/* Accommodations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Experience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From adventurous beachfront camping to comfortable trailer rentals, we have the perfect accommodation for your coastal getaway.
            </p>
          </div>

          <div className="space-y-16">
            {accommodations.map((accommodation, index) => (
              <div key={accommodation.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
                {/* Images */}
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Image
                        src={accommodation.images[0]}
                        alt={accommodation.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    {accommodation.images.slice(1).map((image, imgIndex) => (
                      <Image
                        key={imgIndex}
                        src={image}
                        alt={`${accommodation.title} ${imgIndex + 2}`}
                        width={300}
                        height={200}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="relative">
                    {accommodation.popular && (
                      <span className="absolute -top-2 -left-2 bg-ocean-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    )}
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{accommodation.title}</h3>
                      <p className="text-ocean-600 font-medium mb-4">{accommodation.subtitle}</p>
                      
                      <div className="flex items-baseline space-x-2 mb-4">
                        <span className="text-3xl font-bold text-ocean-600">{accommodation.price}</span>
                        <span className="text-gray-500">{accommodation.priceNote}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{accommodation.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {accommodation.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <span className="text-green-500">✓</span>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-500">Capacity: </span>
                          <span className="font-medium text-gray-900">{accommodation.capacity}</span>
                        </div>
                        <Link
                          href="/contact"
                          className="bg-ocean-600 hover:bg-ocean-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
                        >
                          Reserve Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Add-ons & Extras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extras.map((extra, index) => (
              <div key={extra.name} className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{extra.name}</h3>
                <p className="text-2xl font-bold text-ocean-600 mb-2">{extra.price}</p>
                <p className="text-sm text-gray-600">{extra.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Policies & Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <div key={policy.title} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{policy.title}</h3>
                <ul className="space-y-2">
                  {policy.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-600 text-sm flex items-start">
                      <span className="text-ocean-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ocean-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Book Your Stay?</h2>
          <p className="text-ocean-100 mb-8 text-lg">
            Contact us today to check availability and make your reservation for an unforgettable beachfront experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-ocean-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Make Reservation
            </Link>
            <a
              href="tel:+16198579242"
              className="inline-flex items-center justify-center px-8 py-3 bg-ocean-700 text-white font-medium rounded-lg hover:bg-ocean-800 transition-colors duration-200"
            >
              Call Now: (619) 857-9242
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
