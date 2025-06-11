'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ClockIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

interface TideData {
  time: string;
  height: number;
  type: 'high' | 'low';
}

export default function TideChart() {
  const [tides, setTides] = useState<TideData[]>([]);
  const [currentTide, setCurrentTide] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate tide data for Ensenada area
    const generateTideData = () => {
      const now = new Date();
      const tideData: TideData[] = [];

      // Generate 4 tide times for today (2 high, 2 low)
      const baseTimes = [
        { hour: 6, minute: 30, type: 'high' as const, height: 1.8 },
        { hour: 12, minute: 45, type: 'low' as const, height: 0.3 },
        { hour: 18, minute: 15, type: 'high' as const, height: 1.9 },
        { hour: 23, minute: 50, type: 'low' as const, height: 0.2 },
      ];

      baseTimes.forEach(tide => {
        const tideTime = new Date(now);
        tideTime.setHours(tide.hour, tide.minute, 0, 0);

        tideData.push({
          time: tideTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }),
          height: tide.height,
          type: tide.type
        });
      });

      setTides(tideData);

      // Determine current tide status
      const currentHour = now.getHours();
      if (currentHour >= 6 && currentHour < 12) {
        setCurrentTide('Rising tide');
      } else if (currentHour >= 12 && currentHour < 18) {
        setCurrentTide('Falling tide');
      } else if (currentHour >= 18 && currentHour < 23) {
        setCurrentTide('Rising tide');
      } else {
        setCurrentTide('Falling tide');
      }

      setLoading(false);
    };

    generateTideData();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="space-y-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-8 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-6 border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Today's Tides</h3>
        <ClockIcon className="h-5 w-5 text-blue-500" />
      </div>

      <div className="mb-4 p-3 bg-blue-100 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-blue-800">{currentTide}</span>
        </div>
      </div>

      <div className="space-y-3">
        {tides.map((tide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${
                tide.type === 'high'
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-orange-100 text-orange-600'
              }`}>
                {tide.type === 'high' ? (
                  <ArrowUpIcon className="h-4 w-4" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4" />
                )}
              </div>
              <div>
                <div className="font-medium text-gray-900">{tide.time}</div>
                <div className="text-sm text-gray-500">
                  {tide.type === 'high' ? 'High Tide' : 'Low Tide'}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-900">{tide.height}m</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-start space-x-2">
          <InformationCircleIcon className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
          <div className="text-xs text-gray-600">
            Tide times are approximate. Check local conditions before water activities.
          </div>
        </div>
      </div>
    </motion.div>
  );
}
