'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ChecklistItem {
  id: string;
  name: string;
  category: string;
  essential: boolean;
  seasonal?: boolean;
}

const packingItems: ChecklistItem[] = [
  // Beach Essentials
  { id: 'sunscreen', name: 'Sunscreen (SPF 30+)', category: 'Beach Essentials', essential: true },
  { id: 'swimwear', name: 'Swimwear', category: 'Beach Essentials', essential: true },
  { id: 'beach-towels', name: 'Beach Towels', category: 'Beach Essentials', essential: true },
  { id: 'sunglasses', name: 'Sunglasses', category: 'Beach Essentials', essential: true },
  { id: 'hat', name: 'Sun Hat/Cap', category: 'Beach Essentials', essential: true },
  { id: 'flip-flops', name: 'Flip-flops/Sandals', category: 'Beach Essentials', essential: true },
  { id: 'water-bottle', name: 'Reusable Water Bottle', category: 'Beach Essentials', essential: true },

  // Camping Gear
  { id: 'tent', name: 'Tent (if not renting trailer)', category: 'Camping Gear', essential: true },
  { id: 'sleeping-bag', name: 'Sleeping Bag', category: 'Camping Gear', essential: true },
  { id: 'pillow', name: 'Pillow/Inflatable Pillow', category: 'Camping Gear', essential: true },
  { id: 'flashlight', name: 'Flashlight/Headlamp', category: 'Camping Gear', essential: true },
  { id: 'camping-chairs', name: 'Camping Chairs', category: 'Camping Gear', essential: false },
  { id: 'cooler', name: 'Cooler with Ice', category: 'Camping Gear', essential: false },
  { id: 'portable-grill', name: 'Portable Grill (if allowed)', category: 'Camping Gear', essential: false },

  // Clothing
  { id: 'casual-clothes', name: 'Casual Clothes', category: 'Clothing', essential: true },
  { id: 'warm-jacket', name: 'Warm Jacket (evenings)', category: 'Clothing', essential: true },
  { id: 'rain-gear', name: 'Rain Jacket/Poncho', category: 'Clothing', essential: false, seasonal: true },
  { id: 'extra-underwear', name: 'Extra Underwear', category: 'Clothing', essential: true },
  { id: 'comfortable-shoes', name: 'Comfortable Walking Shoes', category: 'Clothing', essential: true },

  // Food & Drinks
  { id: 'snacks', name: 'Snacks', category: 'Food & Drinks', essential: false },
  { id: 'drinking-water', name: 'Drinking Water', category: 'Food & Drinks', essential: true },
  { id: 'coffee-tea', name: 'Coffee/Tea', category: 'Food & Drinks', essential: false },
  { id: 'cooking-supplies', name: 'Basic Cooking Supplies', category: 'Food & Drinks', essential: false },

  // Personal Care
  { id: 'toiletries', name: 'Toiletries', category: 'Personal Care', essential: true },
  { id: 'medications', name: 'Personal Medications', category: 'Personal Care', essential: true },
  { id: 'first-aid', name: 'Basic First Aid Kit', category: 'Personal Care', essential: false },
  { id: 'insect-repellent', name: 'Insect Repellent', category: 'Personal Care', essential: false },

  // Electronics & Documents
  { id: 'phone-charger', name: 'Phone Charger', category: 'Electronics', essential: true },
  { id: 'camera', name: 'Camera', category: 'Electronics', essential: false },
  { id: 'power-bank', name: 'Portable Power Bank', category: 'Electronics', essential: false },
  { id: 'passport-id', name: 'Passport/ID', category: 'Documents', essential: true },
  { id: 'travel-insurance', name: 'Travel Insurance', category: 'Documents', essential: false },
  { id: 'emergency-contacts', name: 'Emergency Contact List', category: 'Documents', essential: true },
];

const categories = [
  'Beach Essentials',
  'Camping Gear', 
  'Clothing',
  'Food & Drinks',
  'Personal Care',
  'Electronics',
  'Documents'
];

export default function PackingChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [showEssentialOnly, setShowEssentialOnly] = useState(false);

  const toggleItem = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const getFilteredItems = () => {
    return showEssentialOnly 
      ? packingItems.filter(item => item.essential)
      : packingItems;
  };

  const getItemsByCategory = (category: string) => {
    return getFilteredItems().filter(item => item.category === category);
  };

  const getCompletionStats = () => {
    const filteredItems = getFilteredItems();
    const totalItems = filteredItems.length;
    const checkedCount = filteredItems.filter(item => checkedItems.has(item.id)).length;
    const percentage = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;
    
    return { totalItems, checkedCount, percentage };
  };

  const stats = getCompletionStats();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <span className="text-2xl">📋</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Packing Checklist</h3>
            <p className="text-gray-600">Don't forget the essentials for your beach trip</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-2xl font-bold text-green-600">{stats.percentage}%</div>
          <div className="text-sm text-gray-500">{stats.checkedCount}/{stats.totalItems} items</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <motion.div
            className="bg-green-500 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${stats.percentage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Filter Toggle */}
      <div className="mb-6">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showEssentialOnly}
            onChange={(e) => setShowEssentialOnly(e.target.checked)}
            className="rounded border-gray-300 text-green-600 focus:ring-green-500"
          />
          <span className="text-sm text-gray-700">Show essentials only</span>
          <span className="text-xs text-gray-500">(recommended for first-time visitors)</span>
        </label>
      </div>

      {/* Checklist by Category */}
      <div className="space-y-6">
        {categories.map((category) => {
          const categoryItems = getItemsByCategory(category);
          if (categoryItems.length === 0) return null;

          const categoryChecked = categoryItems.filter(item => checkedItems.has(item.id)).length;
          const categoryTotal = categoryItems.length;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-gray-200 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{category}</h4>
                <span className="text-sm text-gray-500">
                  {categoryChecked}/{categoryTotal}
                </span>
              </div>
              
              <div className="space-y-2">
                {categoryItems.map((item) => (
                  <motion.label
                    key={item.id}
                    className={`flex items-center space-x-3 p-2 rounded cursor-pointer transition-colors duration-200 ${
                      checkedItems.has(item.id) 
                        ? 'bg-green-50 text-green-800' 
                        : 'hover:bg-gray-50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="checkbox"
                      checked={checkedItems.has(item.id)}
                      onChange={() => toggleItem(item.id)}
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <span className={`flex-1 text-sm ${
                      checkedItems.has(item.id) ? 'line-through' : ''
                    }`}>
                      {item.name}
                    </span>
                    {item.essential && (
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                        Essential
                      </span>
                    )}
                    {item.seasonal && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        Seasonal
                      </span>
                    )}
                  </motion.label>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Completion Message */}
      {stats.percentage === 100 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center"
        >
          <div className="text-2xl mb-2">🎉</div>
          <div className="text-green-800 font-medium">
            Congratulations! You're all packed and ready for your beach adventure!
          </div>
        </motion.div>
      )}

      {/* Tips */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h5 className="font-medium text-blue-900 mb-2">💡 Packing Tips</h5>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Pack light - you can buy basics in Ensenada if needed</li>
          <li>• Bring layers - coastal weather can change quickly</li>
          <li>• Don't forget your passport for border crossing</li>
          <li>• Consider bringing Mexican pesos for local purchases</li>
        </ul>
      </div>
    </div>
  );
}
