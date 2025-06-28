import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
  };
  icon: React.ReactNode;
  color: 'primary' | 'success' | 'warning' | 'info';
  index?: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  icon, 
  color,
  index = 0
}) => {
  const colorClasses = {
    primary: {
      bg: 'bg-saffron-50',
      iconBg: 'bg-saffron-100',
      iconText: 'text-saffron-600',
      border: 'border-l-saffron-500',
      text: 'text-saffron-700'
    },
    success: {
      bg: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconText: 'text-green-600',
      border: 'border-l-green-500',
      text: 'text-green-700'
    },
    warning: {
      bg: 'bg-amber-50',
      iconBg: 'bg-amber-100',
      iconText: 'text-amber-600',
      border: 'border-l-amber-500',
      text: 'text-amber-700'
    },
    info: {
      bg: 'bg-heritage-blue-50',
      iconBg: 'bg-heritage-blue-100',
      iconText: 'text-heritage-blue-600',
      border: 'border-l-heritage-blue-500',
      text: 'text-heritage-blue-700'
    }
  };

  const classes = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`stat-card border-l-4 ${classes.border} p-6 rounded-xl bg-white hover:shadow-md transition-shadow duration-300 relative overflow-hidden`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-warm-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-warm-gray-900">{value}</p>
        </div>
        <div className={`p-2 rounded-lg ${classes.iconBg} ${classes.iconText}`}>
          {icon}
        </div>
      </div>
      
      {change && (
        <div className={`flex items-center mt-3 text-sm ${
          change.isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          {change.isPositive ? (
            <TrendingUp className="w-4 h-4 mr-1" />
          ) : (
            <TrendingDown className="w-4 h-4 mr-1" />
          )}
          <span>
            {change.isPositive ? '+' : '-'}{Math.abs(change.value)}%
          </span>
        </div>
      )}
      
      {/* Decorative Background Pattern */}
      <div className={`absolute top-0 right-0 w-24 h-24 opacity-5 paisley-pattern ${classes.text}`}></div>
    </motion.div>
  );
};

export default StatCard;