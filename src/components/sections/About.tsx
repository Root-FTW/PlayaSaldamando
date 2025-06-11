'use client';

import { motion } from 'framer-motion';

export default function About() {

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Your Beachfront Paradise Awaits
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            For over 30 years, Playa Saldamando has been providing unforgettable coastal experiences. Located at Kilometer 94 on the scenic Tijuana-Ensenada toll road, our private beachfront property offers over a mile of pristine Pacific coastline.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
