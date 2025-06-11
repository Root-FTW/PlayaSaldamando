'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Categories for filtering photos
const categories = [
  { id: 'all', name: 'All Photos', emoji: '📸' },
  { id: 'beach', name: 'Beach Views', emoji: '🏖️' },
  { id: 'camping', name: 'Camping', emoji: '⛺' },
  { id: 'trailers', name: 'Trailers', emoji: '🏠' },
  { id: 'activities', name: 'Activities', emoji: '🏄‍♂️' },
  { id: 'sunset', name: 'Sunsets', emoji: '🌅' },
];

// Sample of photos from the images folder (we'll load all 84)
const photos = [
  {
    id: 1,
    src: '/images/playa-saldamando-mexico.jpeg',
    alt: 'Playa Saldamando Beach View',
    category: 'beach',
    featured: true
  },
  {
    id: 2,
    src: '/images/playa-saldamando-trailer3a-scaled.jpg',
    alt: 'Trailer Accommodation',
    category: 'trailers',
    featured: true
  },
  {
    id: 3,
    src: '/images/IMG_9229.jpg',
    alt: 'Beach Activities',
    category: 'activities',
    featured: false
  },
  {
    id: 4,
    src: '/images/IMG_9230.jpg',
    alt: 'Camping Area',
    category: 'camping',
    featured: false
  },
  {
    id: 5,
    src: '/images/IMG_9236.jpg',
    alt: 'Ocean View',
    category: 'beach',
    featured: false
  },
  {
    id: 6,
    src: '/images/IMG_9241.jpg',
    alt: 'Sunset at Playa Saldamando',
    category: 'sunset',
    featured: true
  },
  {
    id: 7,
    src: '/images/IMG_9243.jpg',
    alt: 'Beach Camping Setup',
    category: 'camping',
    featured: false
  },
  {
    id: 8,
    src: '/images/IMG_9248.jpg',
    alt: 'Ocean Waves',
    category: 'beach',
    featured: false
  },
  {
    id: 9,
    src: '/images/IMG_9264.jpg',
    alt: 'Coastal Activities',
    category: 'activities',
    featured: false
  },
  {
    id: 10,
    src: '/images/IMG_9272.jpg',
    alt: 'Beautiful Sunset',
    category: 'sunset',
    featured: false
  },
  {
    id: 11,
    src: '/images/IMG_9269.jpg',
    alt: 'Beach Fishing',
    category: 'activities',
    featured: false
  },
  {
    id: 12,
    src: '/images/IMG_9279.jpg',
    alt: 'Trailer Interior',
    category: 'trailers',
    featured: false
  },
  {
    id: 13,
    src: '/images/IMG_9283.jpg',
    alt: 'Coastal View',
    category: 'beach',
    featured: false
  },
  {
    id: 14,
    src: '/images/IMG_9287.jpg',
    alt: 'Sunset Colors',
    category: 'sunset',
    featured: false
  },
  {
    id: 15,
    src: '/images/IMG_9294.jpg',
    alt: 'Beach Activities',
    category: 'activities',
    featured: false
  },
  {
    id: 16,
    src: '/images/IMG_9298.jpg',
    alt: 'Ocean Panorama',
    category: 'beach',
    featured: false
  }
  // More photos available - total 84 images
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [filteredPhotos, setFilteredPhotos] = useState(photos);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPhotos(photos);
    } else {
      setFilteredPhotos(photos.filter(photo => photo.category === selectedCategory));
    }
  }, [selectedCategory]);

  const openLightbox = (photo: typeof photos[0]) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the natural beauty and unforgettable moments at Playa Saldamando through our collection of stunning photographs.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-ocean-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-ocean-50 hover:text-ocean-600 shadow-md'
              }`}
            >
              <span className="text-lg">{category.emoji}</span>
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  photo.featured ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
                onClick={() => openLightbox(photo)}
              >
                <div className={`relative ${photo.featured ? 'h-96' : 'h-64'}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <span className="text-2xl">🔍</span>
                    </div>
                  </div>
                </div>
                {photo.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-ocean-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-ocean-600 hover:bg-ocean-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
            Load More Photos
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] rounded-lg"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors duration-200"
              >
                <span className="text-xl">✕</span>
              </button>
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg">
                <p className="font-medium">{selectedPhoto.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
