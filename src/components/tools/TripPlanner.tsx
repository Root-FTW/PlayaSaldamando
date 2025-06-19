'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
// Using emoji icons to avoid import issues

interface TripPlannerState {
  guests: number;
  nights: number;
  accommodationType: 'camping' | 'trailer';
  checkIn: string;
  checkOut: string;
}

const accommodationPrices = {
  camping: {
    overnight: 450, // MXN per night (up to 4 people)
    day: 300, // MXN for day camping
    extraPerson: 70, // MXN per additional person
  },
  trailer: {
    overnight: 2000, // MXN per night (average)
    extraPerson: 70,
  }
};

const extras = [
  { name: 'Firewood', price: 120 },
  { name: 'Charcoal', price: 150 },
  { name: 'Boogie Board', price: 75 },
];

export default function TripPlanner() {
  const [tripData, setTripData] = useState<TripPlannerState>({
    guests: 2,
    nights: 2,
    accommodationType: 'camping',
    checkIn: '',
    checkOut: '',
  });

  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const calculateTotal = () => {
    const { guests, nights, accommodationType } = tripData;
    const basePrice = accommodationPrices[accommodationType].overnight;
    const extraPersons = Math.max(0, guests - 4);
    const extraPersonCost = extraPersons * accommodationPrices[accommodationType].extraPerson;

    const accommodationTotal = (basePrice + extraPersonCost) * nights;
    const extrasTotal = selectedExtras.reduce((sum, extraName) => {
      const extra = extras.find(e => e.name === extraName);
      return sum + (extra?.price || 0);
    }, 0);

    return {
      accommodation: accommodationTotal,
      extras: extrasTotal,
      total: accommodationTotal + extrasTotal,
      usd: Math.round((accommodationTotal + extrasTotal) / 17), // Approximate USD conversion
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const costs = calculateTotal();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-ocean-100 rounded-lg">
          <div className="text-2xl">🧮</div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Trip Cost Calculator</h3>
          <p className="text-gray-600">Plan your perfect stay at Playa Saldamando</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Inputs */}
        <div className="space-y-4">
          {/* Number of Guests */}
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <span className="text-lg">👥</span>
              <span>Number of Guests</span>
            </label>
            <select
              value={tripData.guests}
              onChange={(e) => setTripData(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
            >
              {[1,2,3,4,5,6,7,8,9,10].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>

          {/* Number of Nights */}
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <span className="text-lg">📅</span>
              <span>Number of Nights</span>
            </label>
            <select
              value={tripData.nights}
              onChange={(e) => setTripData(prev => ({ ...prev, nights: parseInt(e.target.value) }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
            >
              {[1,2,3,4,5,6,7].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Night' : 'Nights'}</option>
              ))}
            </select>
          </div>

          {/* Accommodation Type */}
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <span className="text-lg">🏠</span>
              <span>Accommodation Type</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setTripData(prev => ({ ...prev, accommodationType: 'camping' }))}
                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  tripData.accommodationType === 'camping'
                    ? 'border-ocean-500 bg-ocean-50 text-ocean-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-sm font-medium">Camping</div>
                <div className="text-xs text-gray-500">$450 MXN/night</div>
              </button>
              <button
                onClick={() => setTripData(prev => ({ ...prev, accommodationType: 'trailer' }))}
                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  tripData.accommodationType === 'trailer'
                    ? 'border-ocean-500 bg-ocean-50 text-ocean-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-sm font-medium">Trailer Rental</div>
                <div className="text-xs text-gray-500">$1,700 MXN/night</div>
              </button>
            </div>
          </div>

          {/* Extras */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Add-ons</label>
            <div className="space-y-2">
              {extras.map((extra) => (
                <label key={extra.name} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedExtras.includes(extra.name)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedExtras(prev => [...prev, extra.name]);
                      } else {
                        setSelectedExtras(prev => prev.filter(name => name !== extra.name));
                      }
                    }}
                    className="rounded border-gray-300 text-ocean-600 focus:ring-ocean-500"
                  />
                  <span className="text-sm text-gray-700">{extra.name}</span>
                  <span className="text-sm text-gray-500">${extra.price} MXN</span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <span className="text-lg">🧮</span>
            <span>Calculate Total Cost</span>
          </button>
        </div>

        {/* Right Column - Results */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <span className="text-lg">💰</span>
            <span>Cost Breakdown</span>
          </h4>

          {showResults ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">
                  {tripData.accommodationType === 'camping' ? 'Camping' : 'Trailer'}
                  ({tripData.nights} {tripData.nights === 1 ? 'night' : 'nights'})
                </span>
                <span className="font-medium">${costs.accommodation} MXN</span>
              </div>

              {tripData.guests > 4 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    Extra guests ({tripData.guests - 4})
                  </span>
                  <span className="font-medium">
                    ${(tripData.guests - 4) * accommodationPrices[tripData.accommodationType].extraPerson * tripData.nights} MXN
                  </span>
                </div>
              )}

              {selectedExtras.length > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Add-ons</span>
                  <span className="font-medium">${costs.extras} MXN</span>
                </div>
              )}

              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <div className="text-right">
                    <div className="text-ocean-600">${costs.total} MXN</div>
                    <div className="text-sm text-gray-500">≈ ${costs.usd} USD</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-ocean-50 rounded-lg">
                <p className="text-xs text-ocean-700">
                  * Prices are estimates. Final pricing may vary. Contact us for reservations and current rates.
                </p>
              </div>
            </motion.div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <div className="text-4xl mx-auto mb-2 opacity-50">🧮</div>
              <p>Click "Calculate Total Cost" to see your trip breakdown</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
