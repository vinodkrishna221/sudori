import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp, Star, MapPin, Palette } from 'lucide-react';
import type { ProductFilters } from '../../types';
import { productFilters } from '../../mockData/productData';

interface FilterSidebarProps {
  filters: ProductFilters;
  onFiltersChange: (filters: ProductFilters) => void;
  onClose?: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFiltersChange,
  onClose
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'category', 'price', 'rating'
  ]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const { categories, regions, priceRanges } = productFilters;

  const updateFilter = (key: keyof ProductFilters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const currentCategories = filters.category || [];
    const updatedCategories = checked
      ? [...currentCategories, categoryId]
      : currentCategories.filter(id => id !== categoryId);
    
    updateFilter('category', updatedCategories.length > 0 ? updatedCategories : undefined);
  };

  const handleLocationChange = (locationId: string, checked: boolean) => {
    const currentLocations = filters.location || [];
    const updatedLocations = checked
      ? [...currentLocations, locationId]
      : currentLocations.filter(id => id !== locationId);
    
    updateFilter('location', updatedLocations.length > 0 ? updatedLocations : undefined);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    updateFilter('priceRange', [min, max]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-24">
      {/* Mobile Header */}
      {onClose && (
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-warm-gray-200">
          <h3 className="text-lg font-semibold text-warm-gray-900">Filters</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-warm-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="p-6">
        <h3 className="hidden lg:block text-lg font-semibold text-warm-gray-900 mb-6">
          Refine Your Search
        </h3>

        <div className="space-y-6">
          {/* Categories */}
          <div className="filter-section">
            <button
              onClick={() => toggleSection('category')}
              className="flex items-center justify-between w-full py-2 text-left"
            >
              <h4 className="font-semibold text-warm-gray-900 flex items-center gap-2">
                <Palette className="w-4 h-4 text-saffron-500" />
                Categories
              </h4>
              {expandedSections.includes('category') ? (
                <ChevronUp className="w-4 h-4 text-warm-gray-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-warm-gray-500" />
              )}
            </button>
            
            <AnimatePresence>
              {expandedSections.includes('category') && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 space-y-3">
                    {categories.map((category) => (
                      <label
                        key={category.id}
                        className="flex items-center gap-3 cursor-pointer hover:bg-warm-gray-50 p-2 rounded-lg transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={(filters.category || []).includes(category.id)}
                          onChange={(e) => handleCategoryChange(category.id, e.target.checked)}
                          className="w-4 h-4 text-saffron-500 border-warm-gray-300 rounded focus:ring-saffron-500"
                        />
                        <span className="flex-1 text-sm text-warm-gray-700">
                          {category.label}
                        </span>
                        <span className="text-xs text-warm-gray-500">
                          ({category.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Price Range */}
          <div className="filter-section">
            <button
              onClick={() => toggleSection('price')}
              className="flex items-center justify-between w-full py-2 text-left"
            >
              <h4 className="font-semibold text-warm-gray-900">Price Range</h4>
              {expandedSections.includes('price') ? (
                <ChevronUp className="w-4 h-4 text-warm-gray-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-warm-gray-500" />
              )}
            </button>
            
            <AnimatePresence>
              {expandedSections.includes('price') && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 space-y-3">
                    {priceRanges.map((range) => (
                      <label
                        key={range.id}
                        className="flex items-center gap-3 cursor-pointer hover:bg-warm-gray-50 p-2 rounded-lg transition-colors"
                      >
                        <input
                          type="radio"
                          name="priceRange"
                          checked={
                            filters.priceRange?.[0] === range.min &&
                            filters.priceRange?.[1] === range.max
                          }
                          onChange={() => handlePriceRangeChange(range.min, range.max)}
                          className="w-4 h-4 text-saffron-500 border-warm-gray-300 focus:ring-saffron-500"
                        />
                        <span className="text-sm text-warm-gray-700">
                          {range.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Rating */}
          <div className="filter-section">
            <button
              onClick={() => toggleSection('rating')}
              className="flex items-center justify-between w-full py-2 text-left"
            >
              <h4 className="font-semibold text-warm-gray-900">Customer Rating</h4>
              {expandedSections.includes('rating') ? (
                <ChevronUp className="w-4 h-4 text-warm-gray-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-warm-gray-500" />
              )}
            </button>
            
            <AnimatePresence>
              {expandedSections.includes('rating') && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 space-y-3">
                    {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                      <label
                        key={rating}
                        className="flex items-center gap-3 cursor-pointer hover:bg-warm-gray-50 p-2 rounded-lg transition-colors"
                      >
                        <input
                          type="radio"
                          name="rating"
                          checked={filters.rating === rating}
                          onChange={() => updateFilter('rating', rating)}
                          className="w-4 h-4 text-saffron-500 border-warm-gray-300 focus:ring-saffron-500"
                        />
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(rating)
                                  ? 'text-yellow-400 fill-current'
                                  : i < rating
                                  ? 'text-yellow-400 fill-current opacity-50'
                                  : 'text-warm-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-warm-gray-700 ml-1">
                            {rating}+ Stars
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Artisan Location */}
          <div className="filter-section">
            <button
              onClick={() => toggleSection('location')}
              className="flex items-center justify-between w-full py-2 text-left"
            >
              <h4 className="font-semibold text-warm-gray-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-heritage-blue-500" />
                Artisan Region
              </h4>
              {expandedSections.includes('location') ? (
                <ChevronUp className="w-4 h-4 text-warm-gray-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-warm-gray-500" />
              )}
            </button>
            
            <AnimatePresence>
              {expandedSections.includes('location') && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 space-y-3">
                    {regions.map((region) => (
                      <label
                        key={region.id}
                        className="flex items-center gap-3 cursor-pointer hover:bg-warm-gray-50 p-2 rounded-lg transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={(filters.location || []).includes(region.id)}
                          onChange={(e) => handleLocationChange(region.id, e.target.checked)}
                          className="w-4 h-4 text-heritage-blue-500 border-warm-gray-300 rounded focus:ring-heritage-blue-500"
                        />
                        <span className="flex-1 text-sm text-warm-gray-700">
                          {region.label}
                        </span>
                        <span className="text-xs text-warm-gray-500">
                          ({region.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Authenticity Badges */}
          <div className="filter-section">
            <h4 className="font-semibold text-warm-gray-900 mb-3">Authenticity</h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer hover:bg-warm-gray-50 p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  checked={filters.handmade || false}
                  onChange={(e) => updateFilter('handmade', e.target.checked || undefined)}
                  className="w-4 h-4 text-saffron-500 border-warm-gray-300 rounded focus:ring-saffron-500"
                />
                <span className="text-sm text-warm-gray-700">Certified Handmade</span>
              </label>
              
              <label className="flex items-center gap-3 cursor-pointer hover:bg-warm-gray-50 p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  checked={filters.ecoFriendly || false}
                  onChange={(e) => updateFilter('ecoFriendly', e.target.checked || undefined)}
                  className="w-4 h-4 text-green-500 border-warm-gray-300 rounded focus:ring-green-500"
                />
                <span className="text-sm text-warm-gray-700">Eco-Friendly</span>
              </label>
              
              <label className="flex items-center gap-3 cursor-pointer hover:bg-warm-gray-50 p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  checked={filters.fairTrade || false}
                  onChange={(e) => updateFilter('fairTrade', e.target.checked || undefined)}
                  className="w-4 h-4 text-purple-500 border-warm-gray-300 rounded focus:ring-purple-500"
                />
                <span className="text-sm text-warm-gray-700">Fair Trade</span>
              </label>
            </div>
          </div>
        </div>

        {/* Clear Filters */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onFiltersChange({})}
          className="w-full mt-6 py-3 text-center text-saffron-600 hover:text-saffron-700 border border-saffron-200 hover:border-saffron-300 rounded-lg transition-colors"
        >
          Clear All Filters
        </motion.button>
      </div>
    </div>
  );
};

export default FilterSidebar;