import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import OptimizedImage from '../common/OptimizedImage';
import { ArrowRight, Play, Users, Package, Globe, ChevronDown } from 'lucide-react';
import { products } from '../../mockData/productData';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Discover India's Finest Handcrafts",
      subtitle: "Where every thread tells a story of tradition, every creation carries the soul of an artisan",
      image: products[0].image,
      hindi: "हस्तकला की अनूठी दुनिया"
    },
    {
      title: "Connect with Master Artisans",
      subtitle: "Direct from their workshops to your doorstep - authentic handmade treasures",
      image: products[2].image,
      hindi: "कुशल कारीगरों से जुड़ें"
    },
    {
      title: "Preserve Cultural Heritage",
      subtitle: "Every purchase supports traditional craftsmanship and preserves India's rich cultural legacy",
      image: products[1].image,
      hindi: "सांस्कृतिक विरासत का संरक्षण"
    }
  ];

  const trustIndicators = [
    { icon: Users, value: '10,000+', label: 'Master Artisans' },
    { icon: Package, value: '50,000+', label: 'Unique Products' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
  ];

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            <OptimizedImage
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />
          </motion.div>
        ))}
      </div>

      {/* Cultural Pattern Overlay */}
      <div className="absolute inset-0 mandala-bg opacity-10"></div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-saffron-400/20 to-marigold-500/20 rounded-full"
      />
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-32 right-32 w-16 h-16 bg-gradient-to-br from-terracotta-400/20 to-saffron-500/20 rounded-full"
      />
      <motion.div
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-br from-heritage-blue-400/20 to-saffron-400/20 rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto container-padding pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Hindi Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-saffron-400 font-medium text-lg"
            >
              {heroSlides[currentSlide].hindi}
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              key={currentSlide} // Re-animate on slide change
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-white/90 leading-relaxed max-w-lg"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(244, 169, 80, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/marketplace"
                  className="group bg-gradient-to-r from-saffron-500 to-marigold-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
                >
                  Explore Marketplace
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-warm-gray-900 transition-all duration-300 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Our Story
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <indicator.icon className="w-6 h-6 text-saffron-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {indicator.value}
                  </div>
                  <div className="text-sm text-white/70">
                    {indicator.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual - Featured Products Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Floating Product Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs animate-float"
              >
                <div className="flex items-center space-x-3">
                  <OptimizedImage
                    src={products[0].image}
                    alt="Handwoven textile"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-warm-gray-900">
                      Handwoven Silk Tassel
                    </h4>
                    <p className="text-xs text-warm-gray-600">by Priya Sharma</p>
                    <p className="text-sm font-bold text-saffron-600">₹2,499</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center space-x-3">
                  <OptimizedImage
                    src={products[1].image}
                    alt="Blue Pottery Vase"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-warm-gray-900">
                      Blue Pottery Vase
                    </h4>
                    <p className="text-xs text-warm-gray-600">by Rajesh Kumar</p>
                    <p className="text-sm font-bold text-saffron-600">₹1,899</p>
                  </div>
                </div>
              </motion.div>

              {/* Cultural Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="bg-gradient-to-r from-saffron-500 to-terracotta-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
              >
                ✨ Authentic Handmade
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2"
        >
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-saffron-500 scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm font-medium">Discover More</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;