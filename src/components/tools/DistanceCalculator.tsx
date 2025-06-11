'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface City {
  name: string;
  country: string;
  distance: number; // in kilometers
  driveTime: string;
  borderCrossing?: string;
  tolls?: string;
  fuelCost?: string;
}

const cities: City[] = [
  {
    name: 'San Diego',
    country: 'USA',
    distance: 120,
    driveTime: '2.5 hours',
    borderCrossing: 'Tijuana',
    tolls: '$15 USD',
    fuelCost: '$25-35 USD'
  },
  {
    name: 'Los Angeles',
    country: 'USA', 
    distance: 280,
    driveTime: '4.5 hours',
    borderCrossing: 'Tijuana',
    tolls: '$15 USD',
    fuelCost: '$45-65 USD'
  },
  {
    name: 'Tijuana',
    country: 'Mexico',
    distance: 94,
    driveTime: '1.5 hours',
    tolls: '$12 USD',
    fuelCost: '$15-25 USD'
  },
  {
    name: 'Ensenada',
    country: 'Mexico',
    distance: 30,
    driveTime: '30 minutes',
    tolls: 'None',
    fuelCost: '$5-10 USD'
  },
  {
    name: 'Mexicali',
    country: 'Mexico',
    distance: 250,
    driveTime: '3.5 hours',
    tolls: '$8 USD',
    fuelCost: '$35-45 USD'
  },
  {
    name: 'Phoenix',
    country: 'USA',
    distance: 450,
    driveTime: '6 hours',
    borderCrossing: 'Mexicali',
    tolls: '$8 USD',
    fuelCost: '$70-90 USD'
  },
  {
    name: 'Las Vegas',
    country: 'USA',
    distance: 380,
    driveTime: '5.5 hours',
    borderCrossing: 'Tijuana',
    tolls: '$15 USD',
    fuelCost: '$60-80 USD'
  }
];

const borderInfo = {
  tijuana: {
    name: 'Tijuana Border Crossing',
    hours: '24/7',
    waitTimes: 'Check CBP app for current wait times',
    tips: [
      'Have passport ready',
      'Declare any items over $300 USD',
      'Consider SENTRI/Global Entry for faster crossing',
      'Avoid peak hours (7-9 AM, 5-7 PM)'
    ]
  },
  mexicali: {
    name: 'Mexicali Border Crossing',
    hours: '24/7',
    waitTimes: 'Generally shorter than Tijuana',
    tips: [
      'Less crowded alternative',
      'Good option from Arizona',
      'Have passport ready',
      'Check current wait times online'
    ]
  }
};

export default function DistanceCalculator() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [showBorderInfo, setShowBorderInfo] = useState(false);

  const handleCitySelect = (city: City) => {
    setSelectedCity(city);
    setShowBorderInfo(!!city.borderCrossing);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-blue-100 rounded-lg">
          <span className="text-2xl">🗺️</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Distance Calculator</h3>
          <p className="text-gray-600">Plan your journey to Playa Saldamando</p>
        </div>
      </div>

      {/* City Selection */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Select your starting city:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {cities.map((city) => (
            <motion.button
              key={`${city.name}-${city.country}`}
              onClick={() => handleCitySelect(city)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-3 rounded-lg border-2 text-left transition-all duration-200 ${
                selectedCity?.name === city.name
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="font-medium">{city.name}</div>
              <div className="text-sm text-gray-500">{city.country}</div>
              <div className="text-xs text-gray-400 mt-1">{city.distance} km</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Selected City Details */}
      {selectedCity && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-50 to-ocean-50 rounded-lg p-6 mb-6"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Journey from {selectedCity.name} to Playa Saldamando
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-2xl mb-1">📏</div>
              <div className="text-sm text-gray-600">Distance</div>
              <div className="font-semibold text-blue-600">{selectedCity.distance} km</div>
            </div>
            
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-2xl mb-1">⏱️</div>
              <div className="text-sm text-gray-600">Drive Time</div>
              <div className="font-semibold text-green-600">{selectedCity.driveTime}</div>
            </div>
            
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-2xl mb-1">💰</div>
              <div className="text-sm text-gray-600">Tolls</div>
              <div className="font-semibold text-orange-600">{selectedCity.tolls}</div>
            </div>
            
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-2xl mb-1">⛽</div>
              <div className="text-sm text-gray-600">Est. Fuel</div>
              <div className="font-semibold text-purple-600">{selectedCity.fuelCost}</div>
            </div>
          </div>

          {selectedCity.borderCrossing && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg">🛂</span>
                <span className="font-medium text-yellow-800">Border Crossing Required</span>
              </div>
              <p className="text-sm text-yellow-700">
                You'll need to cross the border at {selectedCity.borderCrossing}. 
                Make sure to have your passport ready and check current wait times.
              </p>
            </div>
          )}
        </motion.div>
      )}

      {/* Border Information */}
      {showBorderInfo && selectedCity?.borderCrossing && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-gray-200 rounded-lg p-6 mb-6"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <span className="text-xl mr-2">🛂</span>
            Border Crossing Information
          </h4>
          
          {selectedCity.borderCrossing === 'Tijuana' && (
            <div>
              <h5 className="font-medium text-gray-900 mb-2">{borderInfo.tijuana.name}</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Hours:</strong> {borderInfo.tijuana.hours}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Wait Times:</strong> {borderInfo.tijuana.waitTimes}
                  </p>
                </div>
                <div>
                  <h6 className="font-medium text-gray-900 mb-2">Tips:</h6>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {borderInfo.tijuana.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedCity.borderCrossing === 'Mexicali' && (
            <div>
              <h5 className="font-medium text-gray-900 mb-2">{borderInfo.mexicali.name}</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Hours:</strong> {borderInfo.mexicali.hours}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Wait Times:</strong> {borderInfo.mexicali.waitTimes}
                  </p>
                </div>
                <div>
                  <h6 className="font-medium text-gray-900 mb-2">Tips:</h6>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {borderInfo.mexicali.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* General Travel Tips */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h5 className="font-medium text-gray-900 mb-3 flex items-center">
          <span className="text-lg mr-2">💡</span>
          Travel Tips
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <ul className="space-y-1">
            <li>• Download offline maps before crossing</li>
            <li>• Bring Mexican pesos for tolls and gas</li>
            <li>• Check your car insurance coverage</li>
            <li>• Keep passport accessible</li>
          </ul>
          <ul className="space-y-1">
            <li>• Fill up gas tank before crossing</li>
            <li>• Have emergency contact numbers</li>
            <li>• Check road conditions and weather</li>
            <li>• Consider travel insurance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
