'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { tidesService, type TideInfo } from '@/services/tidesService';

export default function TideChart() {
  const [tideInfo, setTideInfo] = useState<TideInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showTomorrow, setShowTomorrow] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    const fetchTideData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await tidesService.getTideData();
        setTideInfo(data);

        // Set last updated time
        const updateTime = new Date(data.lastUpdated).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
        setLastUpdated(updateTime);

      } catch (err) {
        console.error('Error fetching tide data:', err);
        setError('Unable to load tide data');
      } finally {
        setLoading(false);
      }
    };

    fetchTideData();

    // Refresh tide data every 30 minutes
    const interval = setInterval(fetchTideData, 30 * 60 * 1000);

    return () => clearInterval(interval);
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

  if (error || !tideInfo) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="text-center text-red-600">
          <p className="text-sm">Unable to load tide data</p>
          <p className="text-xs text-gray-500 mt-1">Showing simulated data</p>
        </div>
      </div>
    );
  }

  const currentTides = showTomorrow ? tideInfo.tomorrowTides : tideInfo.todayTides;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-6 border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Tide Information</h3>
        <div className="text-xs text-gray-500">{tideInfo.location}</div>
      </div>

      {/* Current Tide Status */}
      <div className="mb-4 p-3 bg-blue-100 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full animate-pulse ${
              tideInfo.currentTide.status === 'Rising' ? 'bg-green-500' : 'bg-orange-500'
            }`}></div>
            <span className="text-sm font-medium text-blue-800">
              {tideInfo.currentTide.status} Tide
            </span>
          </div>
          <div className="text-xs text-blue-600">
            Next: {tideInfo.currentTide.nextTide.type} in {tideInfo.currentTide.timeToNext}
          </div>
        </div>
        <div className="mt-2 text-xs text-blue-700">
          {tidesService.getTideAdvice(tideInfo.currentTide.status, tideInfo.currentTide.nextTide)}
        </div>
      </div>

      {/* Day Toggle */}
      <div className="flex mb-4">
        <button
          onClick={() => setShowTomorrow(false)}
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-l-lg transition-colors ${
            !showTomorrow
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Today
        </button>
        <button
          onClick={() => setShowTomorrow(true)}
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-r-lg transition-colors ${
            showTomorrow
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Tomorrow
        </button>
      </div>

      {/* Tide List */}
      <div className="space-y-3">
        {currentTides.map((tide, index) => (
          <motion.div
            key={`${showTomorrow ? 'tomorrow' : 'today'}-${index}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${
                tide.type === 'High'
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-orange-100 text-orange-600'
              }`}>
                <span className="text-lg">
                  {tide.type === 'High' ? '⬆️' : '⬇️'}
                </span>
              </div>
              <div>
                <div className="font-medium text-gray-900">{tide.time}</div>
                <div className="text-sm text-gray-500">
                  {tide.type} Tide
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-900">
                {tidesService.getTideHeight(tide.height)}
              </div>
              <div className="text-xs text-gray-500">
                {tide.timestamp > Date.now() ? 'Upcoming' : 'Past'}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
          <div>
            Data from NOAA • Updated: {lastUpdated}
          </div>
          <div>
            Station: Ensenada, MX
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <span className="text-blue-500 mt-0.5">ℹ️</span>
          <div className="text-xs text-gray-600">
            Real-time tide data from NOAA. Times are in local time (PST/PDT).
            Check current conditions before water activities.
          </div>
        </div>
      </div>
    </motion.div>
  );
}
