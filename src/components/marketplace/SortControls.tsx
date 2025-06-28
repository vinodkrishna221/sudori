import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SortControlsProps {
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

const SortControls: React.FC<SortControlsProps> = ({ sortBy, onSortChange }) => {
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest First' },
    { value: 'price_low', label: 'Price: Low to High' },
    { value: 'price_high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'popularity', label: 'Most Popular' },
  ];

  const currentOption = sortOptions.find(option => option.value === sortBy);

  return (
    <div className="relative">
      <label htmlFor="sort-select" className="sr-only">
        Sort products by
      </label>
      <select
        id="sort-select"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="appearance-none bg-white border border-warm-gray-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-warm-gray-700 hover:bg-warm-gray-50 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent cursor-pointer"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            Sort by: {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-warm-gray-500 pointer-events-none" />
    </div>
  );
};

export default SortControls;