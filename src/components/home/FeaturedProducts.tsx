import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Star, ShoppingBag, Eye, Award } from 'lucide-react';
import { products } from '../../mockData/productData';

const FeaturedProducts: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const filters = [
    { id: 'all', label: 'All Products' },
    { id: 'textiles', label: 'Textiles' },
    { id: 'jewelry', label: 'Jewelry' },
    { id: 'pottery', label: 'Pottery' },
    { id: 'woodwork', label: 'Woodwork' },
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === activeFilter);

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-br from-warm-gray-50 to-saffron-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-saffron-200/20 to-terracotta-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-heritage-blue-200/20 to-saffron-200/20 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-terracotta-100 text-terracotta-700 rounded-full text-sm font-medium mb-4"
          >
            Handpicked Collection
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-warm-gray-900 mb-4">
            Handpicked <span className="text-gradient bg-gradient-to-r from-terracotta-600 to-saffron-500 bg-clip-text text-transparent">Treasures</span>
          </h2>
          <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto">
            Curated collection of authentic masterpieces from India's most talented artisans
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-saffron-500 text-white shadow-lg'
                  : 'bg-white text-warm-gray-600 hover:bg-saffron-50 hover:text-saffron-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          key={activeFilter} // Re-animate when filter changes
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
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
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to wishlist logic
                      }}
                    >
                      <Heart className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white rounded-full shadow-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Quick view logic
                      }}
                    >
                      <Eye className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.originalPrice && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                  {product.isHandmade && (
                    <span className="bg-saffron-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      Handmade
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
                  <span className="text-xs text-warm-gray-500">by</span>
                  <span className="text-sm font-medium text-saffron-600">
                    {product.artisan.name}
                  </span>
                  <span className="text-xs text-warm-gray-500">•</span>
                  <span className="text-xs text-warm-gray-500">
                    {product.artisan.location}
                  </span>
                </div>

                <div className="flex items-center justify-between">
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

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-warm-gray-200">
                  <span className="text-xs text-warm-gray-500">
                    {product.reviewCount} reviews
                  </span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    Free Shipping
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/marketplace"
              className="group bg-gradient-to-r from-saffron-500 to-terracotta-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center"
            >
              View All Products
              <ShoppingBag className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-200" />
            </Link>
          </motion.button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-8 mt-16 p-6 bg-white rounded-2xl shadow-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Award className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-sm font-medium text-warm-gray-700">Authenticity Guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-warm-gray-700">Secure Payments</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-warm-gray-700">Artisan Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;