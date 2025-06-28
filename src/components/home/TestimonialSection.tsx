import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { testimonials } from '../../mockData/testimonialsData';

const TestimonialSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="section-padding bg-gradient-to-br from-warm-gray-900 via-warm-gray-800 to-warm-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-saffron-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-terracotta-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-saffron-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
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
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4"
          >
            Customer Stories
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Stories from Our <span className="text-gradient bg-gradient-to-r from-saffron-400 to-marigold-400 bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl text-warm-gray-300 max-w-3xl mx-auto">
            See why customers worldwide love Sudori and how we're making a difference in artisan lives
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-16 h-16 bg-gradient-to-br from-saffron-500 to-terracotta-500 rounded-full flex items-center justify-center"
                >
                  <Quote className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Testimonial Content */}
              <motion.blockquote
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl lg:text-3xl font-medium leading-relaxed mb-8 text-warm-gray-100"
              >
                "{currentData.comment}"
              </motion.blockquote>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex justify-center mb-8"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < currentData.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-warm-gray-600'
                    }`}
                  />
                ))}
              </motion.div>

              {/* Customer Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col md:flex-row items-center justify-center gap-8"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={currentData.avatar}
                    alt={currentData.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-saffron-500/30"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-white">
                      {currentData.name}
                    </h4>
                    <div className="flex items-center gap-1 text-warm-gray-300">
                      <MapPin className="w-4 h-4" />
                      <span>{currentData.location}</span>
                    </div>
                  </div>
                </div>

                {/* Product Reference */}
                {currentData.product && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-xl backdrop-blur-sm"
                  >
                    <img
                      src={currentData.product.image}
                      alt={currentData.product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="text-left">
                      <p className="text-sm font-medium text-white">
                        Purchased
                      </p>
                      <p className="text-xs text-warm-gray-300">
                        {currentData.product.name}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-8 mt-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? 'bg-saffron-500 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-warm-gray-800"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-saffron-400 mb-2"
            >
              4.9/5
            </motion.div>
            <div className="text-warm-gray-300">Average Rating</div>
            <div className="text-sm text-warm-gray-400">From 15,000+ reviews</div>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-terracotta-400 mb-2"
            >
              98%
            </motion.div>
            <div className="text-warm-gray-300">Customer Satisfaction</div>
            <div className="text-sm text-warm-gray-400">Would recommend us</div>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-heritage-blue-400 mb-2"
            >
              50+
            </motion.div>
            <div className="text-warm-gray-300">Countries</div>
            <div className="text-sm text-warm-gray-400">Happy customers worldwide</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;