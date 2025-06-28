import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Award, ArrowRight, Play, Users, Package } from 'lucide-react';
import type { Artisan } from '../../types';

const ArtisanSpotlight: React.FC = () => {
  const [currentArtisan, setCurrentArtisan] = useState(0);
  const navigate = useNavigate();

  const artisans: Artisan[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      specialty: 'Traditional Textile Weaving',
      location: 'Rajasthan, India',
      experience: 25,
      rating: 4.9,
      totalProducts: 127,
      totalSales: 2543,
      profileImage: 'https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=400',
      coverImage: 'https://images.pexels.com/photos/6069276/pexels-photo-6069276.jpeg?auto=compress&cs=tinysrgb&w=800',
      isVerified: true,
      story: 'Priya has been weaving traditional Rajasthani textiles for over two decades, learning the craft from her grandmother. Her vibrant silk scarves and tapestries showcase the rich heritage of Indian textile art.',
    },
    {
      id: '2',
      name: 'Rajesh Kumar',
      specialty: 'Blue Pottery & Ceramics',
      location: 'Jaipur, Rajasthan',
      experience: 18,
      rating: 4.8,
      totalProducts: 89,
      totalSales: 1876,
      profileImage: 'https://images.pexels.com/photos/6754074/pexels-photo-6754074.jpeg?auto=compress&cs=tinysrgb&w=400',
      coverImage: 'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=800',
      isVerified: true,
      story: 'Rajesh is a master of Jaipur\'s famous blue pottery, a craft that dates back to the Mughal era. His contemporary interpretations of traditional patterns have earned international recognition.',
    },
    {
      id: '3',
      name: 'Meera Devi',
      specialty: 'Kundan Jewelry Making',
      location: 'Delhi, India',
      experience: 30,
      rating: 4.9,
      totalProducts: 156,
      totalSales: 3421,
      profileImage: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg?auto=compress&cs=tinysrgb&w=400',
      coverImage: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800',
      isVerified: true,
      story: 'Meera is a third-generation Kundan jewelry artisan whose family has been crafting exquisite pieces for three decades. Her intricate designs blend traditional techniques with contemporary aesthetics.',
    },
  ];

  const currentArtisanData = artisans[currentArtisan];

  // Auto-rotate artisans
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentArtisan((prev) => (prev + 1) % artisans.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [artisans.length]);

  return (
    <section className="section-padding bg-gradient-to-br from-saffron-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-terracotta-200/30 to-saffron-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-heritage-blue-200/30 to-saffron-200/30 rounded-full blur-xl"></div>
      
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
            className="inline-block px-4 py-2 bg-heritage-blue-100 text-heritage-blue-700 rounded-full text-sm font-medium mb-4"
          >
            Master Craftspeople
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-warm-gray-900 mb-4">
            Meet Our <span className="text-gradient bg-gradient-to-r from-heritage-blue-600 to-saffron-500 bg-clip-text text-transparent">Master Artisans</span>
          </h2>
          <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto">
            Preserving centuries-old traditions through skilled craftsmanship and passion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Artisan Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentArtisan}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Artisan Header */}
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img
                      src={currentArtisanData.profileImage}
                      alt={currentArtisanData.name}
                      className="w-20 h-20 rounded-full object-cover ring-4 ring-saffron-200"
                    />
                    {currentArtisanData.isVerified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-heritage-blue-500 rounded-full flex items-center justify-center">
                        <Award className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-warm-gray-900 mb-1">
                      {currentArtisanData.name}
                    </h3>
                    <p className="text-saffron-600 font-medium mb-2">
                      {currentArtisanData.specialty}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-warm-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{currentArtisanData.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{currentArtisanData.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-3 gap-6 p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-saffron-600">
                      {currentArtisanData.experience}
                    </div>
                    <div className="text-sm text-warm-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-terracotta-600">
                      {currentArtisanData.totalProducts}
                    </div>
                    <div className="text-sm text-warm-gray-600">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-heritage-blue-600">
                      {currentArtisanData.totalSales.toLocaleString()}
                    </div>
                    <div className="text-sm text-warm-gray-600">Sales</div>
                  </div>
                </div>

                {/* Story */}
                <div className="prose prose-lg">
                  <p className="text-warm-gray-700 leading-relaxed">
                    {currentArtisanData.story}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-gradient-to-r from-saffron-500 to-terracotta-500 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center"
                    onClick={() => navigate(`/artisan/${currentArtisanData.id}`)}
                  >
                    View Portfolio
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group border-2 border-saffron-500 text-saffron-600 px-6 py-3 rounded-full font-semibold hover:bg-saffron-50 transition-all duration-200 flex items-center justify-center"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Story
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Artisan Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentArtisan}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={currentArtisanData.coverImage}
                  alt={`${currentArtisanData.name}'s work`}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Floating Achievement Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute top-6 right-6 bg-white rounded-xl p-4 shadow-lg"
                >
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-saffron-500 to-terracotta-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-xs font-semibold text-warm-gray-900">
                      Master Artisan
                    </div>
                    <div className="text-xs text-warm-gray-600">
                      Verified
                    </div>
                  </div>
                </motion.div>

                {/* Craft Statistics Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="flex items-center gap-1 mb-1">
                        <Users className="w-4 h-4 text-saffron-600" />
                        <span className="text-sm font-bold text-warm-gray-900">
                          {Math.floor(currentArtisanData.totalSales / 100)}K+
                        </span>
                      </div>
                      <div className="text-xs text-warm-gray-600">Happy Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1 mb-1">
                        <Package className="w-4 h-4 text-terracotta-600" />
                        <span className="text-sm font-bold text-warm-gray-900">
                          {currentArtisanData.totalProducts}+
                        </span>
                      </div>
                      <div className="text-xs text-warm-gray-600">Unique Pieces</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Artisan Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="flex gap-2 bg-white rounded-full p-2 shadow-lg">
            {artisans.map((artisan, index) => (
              <button
                key={artisan.id}
                onClick={() => setCurrentArtisan(index)}
                className={`relative w-16 h-16 rounded-full overflow-hidden ring-2 transition-all duration-300 ${
                  currentArtisan === index
                    ? 'ring-saffron-500 scale-110'
                    : 'ring-warm-gray-200 hover:ring-saffron-300'
                }`}
              >
                <img
                  src={artisan.profileImage}
                  alt={artisan.name}
                  className="w-full h-full object-cover"
                />
                {currentArtisan === index && (
                  <div className="absolute inset-0 bg-saffron-500/20"></div>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Explore All Artisans */}
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
            className="group border-2 border-heritage-blue-500 text-heritage-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-heritage-blue-50 transition-all duration-200 inline-flex items-center"
            onClick={() => navigate('/artisans')}
          >
            Explore All Artisans
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ArtisanSpotlight;