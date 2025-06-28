import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ShoppingBag, Eye, MapPin, Award } from 'lucide-react';
import type { Product } from '../../types';
import { useNavigate } from 'react-router-dom';

interface ProductGridProps {
  products: Product[];
  viewMode: 'grid' | 'list';
  loading: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, viewMode, loading }) => {
  if (loading) {
    return <ProductGridSkeleton viewMode={viewMode} />;
  }

  if (products.length === 0) {
    return <EmptyState />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={itemVariants}>
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
            >
              <Heart className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            >
              <Eye className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {discountPercentage > 0 && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
              {discountPercentage}% OFF
            </span>
          )}
          {product.isHandmade && (
            <span className="bg-saffron-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Award className="w-3 h-3" />
              Handmade
            </span>
          )}
          {product.isFeatured && (
            <span className="bg-heritage-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-warm-gray-900 group-hover:text-saffron-600 transition-colors duration-200 line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-warm-gray-700">
              {product.rating}
            </span>
          </div>
        </div>

        <p className="text-warm-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-3 h-3 text-warm-gray-400" />
          <span className="text-sm font-medium text-saffron-600">
            {product.artisan.name}
          </span>
          <span className="text-xs text-warm-gray-500">•</span>
          <span className="text-xs text-warm-gray-500">
            {product.artisan.location}
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-warm-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-warm-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-saffron-500 text-white rounded-lg hover:bg-saffron-600 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic
            }}
          >
            <ShoppingBag className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="flex items-center justify-between text-xs text-warm-gray-500">
          <span>{product.reviewCount} reviews</span>
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
            Free Shipping
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ProductListItem: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="flex gap-6 p-6">
        {/* Product Image */}
        <div className="relative w-48 h-48 flex-shrink-0 overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {discountPercentage > 0 && (
              <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                {discountPercentage}% OFF
              </span>
            )}
            {product.isHandmade && (
              <span className="bg-saffron-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Handmade
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-xl text-warm-gray-900 group-hover:text-saffron-600 transition-colors duration-200">
                {product.name}
              </h3>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-warm-gray-700">
                  {product.rating}
                </span>
                <span className="text-sm text-warm-gray-500">
                  ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="text-warm-gray-600 mb-4 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-warm-gray-400" />
              <span className="text-sm font-medium text-saffron-600">
                {product.artisan.name}
              </span>
              <span className="text-xs text-warm-gray-500">•</span>
              <span className="text-sm text-warm-gray-500">
                {product.artisan.location}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-warm-gray-900">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-warm-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-warm-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  // Add to wishlist logic
                }}
              >
                <Heart className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-saffron-500 text-white rounded-lg hover:bg-saffron-600 transition-colors duration-200 flex items-center gap-2"
                onClick={(e) => {
                  e.stopPropagation();
                  // Add to cart logic
                }}
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductGridSkeleton: React.FC<{ viewMode: 'grid' | 'list' }> = ({ viewMode }) => {
  const skeletonCount = viewMode === 'grid' ? 9 : 6;

  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {Array.from({ length: skeletonCount }, (_, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex gap-6">
              <div className="w-48 h-48 bg-warm-gray-200 rounded-xl animate-pulse" />
              <div className="flex-1 space-y-4">
                <div className="h-6 bg-warm-gray-200 rounded animate-pulse" />
                <div className="h-4 bg-warm-gray-200 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-warm-gray-200 rounded w-1/2 animate-pulse" />
                <div className="flex justify-between items-center">
                  <div className="h-8 bg-warm-gray-200 rounded w-32 animate-pulse" />
                  <div className="h-10 bg-warm-gray-200 rounded w-32 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: skeletonCount }, (_, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="w-full h-64 bg-warm-gray-200 animate-pulse" />
          <div className="p-6 space-y-4">
            <div className="h-6 bg-warm-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-warm-gray-200 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-warm-gray-200 rounded w-1/2 animate-pulse" />
            <div className="flex justify-between items-center">
              <div className="h-6 bg-warm-gray-200 rounded w-24 animate-pulse" />
              <div className="h-8 bg-warm-gray-200 rounded w-8 animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const EmptyState: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-16"
    >
      <div className="w-32 h-32 bg-warm-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <ShoppingBag className="w-16 h-16 text-warm-gray-400" />
      </div>
      <h3 className="text-2xl font-semibold text-warm-gray-900 mb-2">
        No products found
      </h3>
      <p className="text-warm-gray-600 mb-8 max-w-md mx-auto">
        We couldn't find any products matching your criteria. Try adjusting your filters or search terms.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-saffron-500 text-white rounded-lg hover:bg-saffron-600 transition-colors duration-200"
        >
          Clear Filters
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 border border-warm-gray-300 text-warm-gray-700 rounded-lg hover:bg-warm-gray-50 transition-colors duration-200"
        >
          Browse All Products
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductGrid;