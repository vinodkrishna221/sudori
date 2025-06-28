import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import OptimizedImage from '../components/common/OptimizedImage';
import { 
  Filter, Search, X, ChevronDown, 
  ArrowRight, Check, Users, Package, Heart
} from 'lucide-react';
import { categories } from '../mockData/categoryData';

const CollectionsPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const filters = [
    { value: 'all', label: 'All Collections' },
    { value: 'textiles', label: 'Textiles & Fabrics' },
    { value: 'jewelry', label: 'Jewelry & Accessories' },
    { value: 'pottery', label: 'Pottery & Ceramics' },
    { value: 'woodwork', label: 'Wooden Crafts' },
    { value: 'metalwork', label: 'Metal Crafts' },
    { value: 'leather', label: 'Leather Goods' }
  ];

  // Filter collections based on search and active filter
  const filteredCollections = categories.filter(category => {
    // Filter by type
    if (activeFilter !== 'all' && !category.name.toLowerCase().includes(activeFilter)) {
      return false;
    }
    
    // Filter by search term
    if (searchQuery && !category.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !category.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  // Simulate loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [activeFilter, searchQuery]);

  // Featured collections (for top section)
  const featuredCollections = categories.filter(cat => cat.featured).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Curated Collections | Sudori - Indian Handicrafts</title>
        <meta name="description" content="Explore our curated collections of premium Indian handicrafts. Discover themed collections that showcase the best of India's rich crafting heritage." />
      </Helmet>

      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-terracotta-600 to-saffron-600 text-white py-16 overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 paisley-pattern opacity-10"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto container-padding relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4"
                >
                  Curated by Experts
                </motion.span>
                
                <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
                  Explore Our <span className="text-gradient bg-gradient-to-r from-white to-saffron-200 bg-clip-text">Curated Collections</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                  Thoughtfully curated collections of India's finest handicrafts, organized by theme, region, and craft technique
                </p>
                
                {/* Search Bar */}
                <div className="max-w-2xl mx-auto relative">
                  <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
                    <Search className="w-5 h-5 text-warm-gray-400 ml-6" />
                    <input
                      type="text"
                      placeholder="Search collections by name or craft..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 px-4 py-4 text-warm-gray-900 focus:outline-none"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="p-2 text-warm-gray-400 hover:text-warm-gray-600 mr-2"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Featured Collections */}
          <section className="py-12 bg-warm-gray-50">
            <div className="max-w-7xl mx-auto container-padding">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
              >
                <h2 className="text-3xl font-display font-bold text-warm-gray-900 mb-4">
                  Featured Collections
                </h2>
                <p className="text-lg text-warm-gray-600 max-w-3xl mx-auto">
                  Our most popular collections, showcasing the finest craftsmanship from across India
                </p>
              </motion.div>

              {/* Featured Collections Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredCollections.map((collection, index) => (
                  <motion.div
                    key={collection.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="group relative rounded-2xl overflow-hidden shadow-lg h-80 cursor-pointer"
                    onClick={() => navigate(`/marketplace?category=${collection.id}`)}
                  >
                    <OptimizedImage
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300" />
                    
                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-display font-semibold mb-2 text-white group-hover:text-saffron-300 transition-colors duration-300">
                          {collection.name}
                        </h3>
                        <p className="text-white/80 mb-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {collection.description}
                        </p>
                        <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white/90 text-sm">
                            {collection.productCount.toLocaleString()} products
                          </span>
                          <span className="flex items-center text-white group-hover:text-saffron-300 text-sm">
                            Explore <ArrowRight className="ml-1 w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Regions Badges */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
                        {collection.regions && collection.regions[0]}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* All Collections */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto container-padding">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h2 className="text-3xl font-display font-bold text-warm-gray-900">
                    All Collections
                  </h2>
                  <p className="text-warm-gray-600">
                    {filteredCollections.length} collections to explore
                  </p>
                </div>

                {/* Filter Dropdown */}
                <div className="relative">
                  <button
                    className="flex items-center space-x-2 px-4 py-2 bg-warm-gray-100 rounded-lg hover:bg-warm-gray-200 transition-colors"
                    onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  >
                    <Filter className="w-4 h-4 text-warm-gray-500" />
                    <span className="text-warm-gray-700">
                      {filters.find(f => f.value === activeFilter)?.label || 'All Collections'}
                    </span>
                    <ChevronDown className="w-4 h-4 text-warm-gray-500" />
                  </button>
                  
                  {showFilterDropdown && (
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg z-10 p-2">
                      {filters.map((filter) => (
                        <button
                          key={filter.value}
                          onClick={() => {
                            setActiveFilter(filter.value);
                            setShowFilterDropdown(false);
                          }}
                          className="flex items-center justify-between w-full px-4 py-2 text-left rounded-lg hover:bg-warm-gray-100 transition-colors"
                        >
                          <span className="text-warm-gray-700">{filter.label}</span>
                          {activeFilter === filter.value && (
                            <Check className="w-4 h-4 text-saffron-500" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Collections Grid */}
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <div key={index} className="animate-pulse">
                      <div className="bg-warm-gray-200 rounded-2xl h-64"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {filteredCollections.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredCollections.map((collection, index) => (
                        <motion.div
                          key={collection.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.05 * index }}
                          whileHover={{ y: -5 }}
                          className="group bg-warm-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                          onClick={() => navigate(`/marketplace?category=${collection.id}`)}
                        >
                          <div className="h-48 overflow-hidden">
                            <OptimizedImage
                              src={collection.image}
                              alt={collection.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-display font-semibold text-warm-gray-900 mb-2 group-hover:text-saffron-600 transition-colors">
                              {collection.name}
                            </h3>
                            <p className="text-warm-gray-600 text-sm mb-4">
                              {collection.description}
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <Package className="w-4 h-4 text-saffron-500" />
                                <span className="text-sm text-warm-gray-500">
                                  {collection.productCount.toLocaleString()} products
                                </span>
                              </div>
                              <span className="flex items-center text-sm text-saffron-600 font-medium group-hover:translate-x-1 transition-transform">
                                Explore <ArrowRight className="ml-1 w-4 h-4" />
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-16 text-center">
                      <div className="w-16 h-16 bg-warm-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-warm-gray-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-warm-gray-900 mb-2">No collections found</h3>
                      <p className="text-warm-gray-500 mb-6">
                        Try adjusting your search or filter criteria
                      </p>
                      <button 
                        onClick={() => {
                          setSearchQuery('');
                          setActiveFilter('all');
                        }}
                        className="btn-primary"
                      >
                        Reset Filters
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>

          {/* Community Collections */}
          <section className="py-16 bg-gradient-to-br from-warm-gray-50 to-saffron-50/30">
            <div className="max-w-7xl mx-auto container-padding">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-display font-bold text-warm-gray-900 mb-4">
                  Community Curated Collections
                </h2>
                <p className="text-lg text-warm-gray-600 max-w-3xl mx-auto">
                  Discover collections curated by our community of craft enthusiasts and interior designers
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-md"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-2/5 h-48 md:h-auto">
                      <OptimizedImage
                        src="/images/products/Whisk_storyboard861b54c63f8f432ca5c9113a.png"
                        alt="Festive Decor Collection"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="text-xs bg-saffron-100 text-saffron-800 px-2 py-1 rounded-full">
                            Community Favorite
                          </span>
                          <div className="flex items-center ml-3">
                            <Heart className="w-3 h-3 text-red-500 fill-current" />
                            <span className="text-xs text-warm-gray-500 ml-1">
                              458 loves
                            </span>
                          </div>
                        </div>
                        <h3 className="text-xl font-display font-semibold text-warm-gray-900 mb-2">
                          Festive Decor Collection
                        </h3>
                        <p className="text-sm text-warm-gray-600 mb-4">
                          Handpicked traditional and contemporary pieces to adorn your home during the festive season
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full overflow-hidden">
                            <OptimizedImage
                              src="/images/profile/customers/sarah-johnson.jpg"
                              alt="Sarah Johnson"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-xs text-warm-gray-500 ml-2">
                            Curated by Sarah Johnson
                          </span>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('/marketplace');
                          }}
                          className="text-sm text-saffron-600 hover:text-saffron-700 flex items-center"
                        >
                          Explore <ArrowRight className="ml-1 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-md"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-2/5 h-48 md:h-auto">
                      <OptimizedImage
                        src="/images/products/Whisk_storyboard6ed87fdba0b64823adeee3f1.png"
                        alt="Minimalist Home Collection"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="text-xs bg-heritage-blue-100 text-heritage-blue-800 px-2 py-1 rounded-full">
                            Designer's Choice
                          </span>
                          <div className="flex items-center ml-3">
                            <Heart className="w-3 h-3 text-red-500 fill-current" />
                            <span className="text-xs text-warm-gray-500 ml-1">
                              372 loves
                            </span>
                          </div>
                        </div>
                        <h3 className="text-xl font-display font-semibold text-warm-gray-900 mb-2">
                          Minimalist Home Collection
                        </h3>
                        <p className="text-sm text-warm-gray-600 mb-4">
                          Contemporary handicrafts that blend traditional techniques with modern minimalist design sensibilities
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full overflow-hidden">
                            <OptimizedImage
                              src="/images/profile/customers/michael-chen.jpg"
                              alt="Michael Chen"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-xs text-warm-gray-500 ml-2">
                            Curated by Michael Chen
                          </span>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('/marketplace');
                          }}
                          className="text-sm text-saffron-600 hover:text-saffron-700 flex items-center"
                        >
                          Explore <ArrowRight className="ml-1 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <button 
                  onClick={() => navigate('/marketplace')}
                  className="btn-primary"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Our Community
                </button>
                <p className="mt-4 text-sm text-warm-gray-500">
                  Create an account to start your own collections and share them with the world
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CollectionsPage;