import React from 'react';
import { motion } from 'framer-motion';
import { Grid, List } from 'lucide-react';

interface ViewToggleProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, onViewModeChange }) => {
  return (
    <div className="flex items-center bg-white border border-warm-gray-300 rounded-lg overflow-hidden">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onViewModeChange('grid')}
        className={`p-2 transition-colors duration-200 ${
          viewMode === 'grid'
            ? 'bg-saffron-500 text-white'
            : 'text-warm-gray-600 hover:bg-warm-gray-50'
        }`}
        aria-label="Grid view"
      >
        <Grid className="w-4 h-4" />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onViewModeChange('list')}
        className={`p-2 transition-colors duration-200 ${
          viewMode === 'list'
            ? 'bg-saffron-500 text-white'
            : 'text-warm-gray-600 hover:bg-warm-gray-50'
        }`}
        aria-label="List view"
      >
        <List className="w-4 h-4" />
      </motion.button>
    </div>
  );
};

export default ViewToggle;