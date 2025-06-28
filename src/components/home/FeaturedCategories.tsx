import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { categories } from '../../mockData/categoryData';

const FeaturedCategories: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const navigate = useNavigate();

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 paisley-accent opacity-30"></div>
      
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
            className="inline-block px-4 py-2 bg-saffron-100 text-saffron-700 rounded-full text-sm font-medium mb-4"
          >
            Explore by Tradition
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-warm-gray-900 mb-4">
            Discover Our <span className="text-gradient bg-gradient-to-r from-saffron-600 to-terracotta-500 bg-clip-text text-transparent">Craft Categories</span>
          </h2>
          <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto">
            From ancient weaving techniques to contemporary designs, discover the rich 
            tapestry of Indian handicrafts crafted by skilled artisans
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredCategory(category.id)}
              onHoverEnd={() => setHoveredCategory(null)}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white"
              onClick={() => navigate(`/marketplace?category=${category.id}`)}
            >
              <div className="relative h-80">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 className="text-2xl font-display font-semibold mb-2 group-hover:text-saffron-300 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-sm opacity-90 mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {category.description}
                    </p>
                    
                    {/* Region Info */}
                    <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <MapPin className="w-4 h-4 text-saffron-400" />
                      <span className="text-xs">
                        {category.regions?.slice(0, 2).join(', ')}
                        {category.regions && category.regions.length > 2 && ' +more'}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {category.productCount.toLocaleString()} products
                      </span>
                      <Link
                        to={`/marketplace?category=${category.id}`}
                        animate={hoveredCategory === category.id ? { x: 5 } : { x: 0 }}
                        className="flex items-center text-sm font-medium group-hover:text-saffron-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Explore 
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                </div>

                {/* Featured Badge */}
                {category.featured && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="absolute top-4 right-4"
                  >
                    <span className="bg-gradient-to-r from-saffron-500 to-marigold-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      Featured
                    </span>
                  </motion.div>
                )}

                {/* Cultural Pattern Overlay */}
                <div className="absolute top-4 left-4 w-8 h-8 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-saffron-300"
                    />
                    <path
                      d="M16 22c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-saffron-300"
                    />
                  </svg>
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
              className="group border-2 border-saffron-500 text-saffron-600 px-8 py-3 rounded-full font-semibold hover:bg-saffron-500 hover:text-white transition-all duration-300 inline-flex items-center"
            >
              View All Categories
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.button>
        </motion.div>

        {/* Cultural Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-saffron-50 to-terracotta-50 rounded-2xl"
        >
          <blockquote className="text-lg font-medium text-warm-gray-700 italic">
            "Every craft tells the story of generations, every pattern holds the wisdom of ancestors"
          </blockquote>
          <p className="mt-2 text-warm-gray-600">- Ancient Indian Wisdom</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCategories;