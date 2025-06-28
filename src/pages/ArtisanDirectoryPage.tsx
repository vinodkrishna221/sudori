import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import OptimizedImage from '../components/common/OptimizedImage';
import { 
  Search, Filter, MapPin, Award, 
  Star, Users, ChevronDown, X, 
  Sliders, ArrowUpDown, Check 
} from 'lucide-react';
import { artisans, craftCategories, artisanRegions, artisanSortOptions } from '../mockData/artisanData';

const ArtisanDirectoryPage: React.FC = () => {
  const navigate = useNavigate();
  const [filteredArtisans, setFilteredArtisans] = useState(artisans);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [loading, setLoading] = useState(true);
  
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showRegionDropdown, setShowRegionDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Simulate loading and filter artisans
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [searchQuery, selectedCategory, selectedRegion]);

  // Filter artisans based on search query, category, and region
  useEffect(() => {
    const filtered = artisans.filter(artisan => {
      const matchesSearch = searchQuery === '' || 
        artisan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artisan.specialty.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
        artisan.specialty.toLowerCase().includes(selectedCategory.toLowerCase());
      
      const matchesRegion = selectedRegion === 'all' || 
        artisan.location.toLowerCase().includes(selectedRegion.toLowerCase());
      
      return matchesSearch && matchesCategory && matchesRegion;
    });

    // Sort filtered artisans
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'experience':
          return b.experience - a.experience;
        case 'rating':
          return b.rating - a.rating;
        case 'products':
          return b.totalProducts - a.totalProducts;
        case 'popularity':
        default:
          return b.totalSales - a.totalSales;
      }
    });

    setFilteredArtisans(sorted);
  }, [searchQuery, selectedCategory, selectedRegion, sortBy]);

  // Click outside handler for dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showCategoryDropdown || showRegionDropdown || showSortDropdown) {
        setShowCategoryDropdown(false);
        setShowRegionDropdown(false);
        setShowSortDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCategoryDropdown, showRegionDropdown, showSortDropdown]);

  return (
    <>
      <Helmet>
        <title>Artisan Directory | Sudori - Indian Handicrafts Marketplace</title>
        <meta name="description" content="Discover talented artisans behind Sudori's authentic Indian handicrafts. Learn about their stories, crafts, and traditional techniques." />
      </Helmet>

      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-heritage-blue-600 to-saffron-600 text-white py-16 overflow-hidden">
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
                  Master Craftspeople
                </motion.span>
                
                <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
                  Meet Our <span className="text-gradient bg-gradient-to-r from-white to-saffron-200 bg-clip-text">Master Artisans</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                  Discover the skilled craftspeople behind our authentic Indian handicrafts and their stories
                </p>
                
                {/* Search Bar */}
                <div className="max-w-2xl mx-auto relative">
                  <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
                    <Search className="w-5 h-5 text-warm-gray-400 ml-6" />
                    <input
                      type="text"
                      placeholder="Search artisans by name, craft, or location..."
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

                {/* Quick Category Tags */}
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  {craftCategories.slice(0, 5).map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        selectedCategory === category.value
                          ? 'bg-white/90 text-heritage-blue-600'
                          : 'bg-white/20 hover:bg-white/30 text-white'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Directory Content */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto container-padding">
              {/* Filters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm p-6 mb-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-4">
                    {/* Category Filter */}
                    <div className="relative">
                      <button
                        className="flex items-center space-x-2 px-4 py-2 bg-warm-gray-100 rounded-lg hover:bg-warm-gray-200 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowCategoryDropdown(!showCategoryDropdown);
                          setShowRegionDropdown(false);
                          setShowSortDropdown(false);
                        }}
                      >
                        <Filter className="w-4 h-4 text-warm-gray-500" />
                        <span className="text-warm-gray-700">
                          Craft: {craftCategories.find(c => c.value === selectedCategory)?.label || 'All Categories'}
                        </span>
                        <ChevronDown className="w-4 h-4 text-warm-gray-500" />
                      </button>
                      
                      {/* Category Dropdown */}
                      {showCategoryDropdown && (
                        <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg z-10 p-2">
                          {craftCategories.map((category) => (
                            <button
                              key={category.value}
                              onClick={() => {
                                setSelectedCategory(category.value);
                                setShowCategoryDropdown(false);
                              }}
                              className="flex items-center justify-between w-full px-4 py-2 text-left rounded-lg hover:bg-warm-gray-100 transition-colors"
                            >
                              <span className="text-warm-gray-700">{category.label}</span>
                              {selectedCategory === category.value && (
                                <Check className="w-4 h-4 text-saffron-500" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Region Filter */}
                    <div className="relative">
                      <button
                        className="flex items-center space-x-2 px-4 py-2 bg-warm-gray-100 rounded-lg hover:bg-warm-gray-200 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowRegionDropdown(!showRegionDropdown);
                          setShowCategoryDropdown(false);
                          setShowSortDropdown(false);
                        }}
                      >
                        <MapPin className="w-4 h-4 text-warm-gray-500" />
                        <span className="text-warm-gray-700">
                          Region: {artisanRegions.find(r => r.value === selectedRegion)?.label || 'All Regions'}
                        </span>
                        <ChevronDown className="w-4 h-4 text-warm-gray-500" />
                      </button>
                      
                      {/* Region Dropdown */}
                      {showRegionDropdown && (
                        <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg z-10 p-2">
                          {artisanRegions.map((region) => (
                            <button
                              key={region.value}
                              onClick={() => {
                                setSelectedRegion(region.value);
                                setShowRegionDropdown(false);
                              }}
                              className="flex items-center justify-between w-full px-4 py-2 text-left rounded-lg hover:bg-warm-gray-100 transition-colors"
                            >
                              <span className="text-warm-gray-700">{region.label}</span>
                              {selectedRegion === region.value && (
                                <Check className="w-4 h-4 text-saffron-500" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* More Filters Button */}
                    <button className="flex items-center space-x-2 px-4 py-2 bg-warm-gray-100 rounded-lg hover:bg-warm-gray-200 transition-colors">
                      <Sliders className="w-4 h-4 text-warm-gray-500" />
                      <span className="text-warm-gray-700">More Filters</span>
                    </button>
                  </div>

                  <div className="relative">
                    <button
                      className="flex items-center space-x-2 px-4 py-2 bg-warm-gray-100 rounded-lg hover:bg-warm-gray-200 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowSortDropdown(!showSortDropdown);
                        setShowCategoryDropdown(false);
                        setShowRegionDropdown(false);
                      }}
                    >
                      <ArrowUpDown className="w-4 h-4 text-warm-gray-500" />
                      <span className="text-warm-gray-700">
                        Sort: {artisanSortOptions.find(o => o.value === sortBy)?.label}
                      </span>
                      <ChevronDown className="w-4 h-4 text-warm-gray-500" />
                    </button>
                    
                    {/* Sort Dropdown */}
                    {showSortDropdown && (
                      <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg z-10 p-2">
                        {artisanSortOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setSortBy(option.value);
                              setShowSortDropdown(false);
                            }}
                            className="flex items-center justify-between w-full px-4 py-2 text-left rounded-lg hover:bg-warm-gray-100 transition-colors"
                          >
                            <span className="text-warm-gray-700">{option.label}</span>
                            {sortBy === option.value && (
                              <Check className="w-4 h-4 text-saffron-500" />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Results Info */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4"
              >
                <h2 className="text-xl font-semibold text-warm-gray-900">
                  {filteredArtisans.length} Artisans Found
                </h2>
                
                {/* Applied Filters */}
                {(selectedCategory !== 'all' || selectedRegion !== 'all' || searchQuery) && (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-warm-gray-600">Filters:</span>
                    {selectedCategory !== 'all' && (
                      <span className="px-3 py-1 bg-saffron-100 text-saffron-800 rounded-full text-xs flex items-center">
                        {craftCategories.find(c => c.value === selectedCategory)?.label}
                        <button 
                          onClick={() => setSelectedCategory('all')}
                          className="ml-1.5 hover:text-saffron-900"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {selectedRegion !== 'all' && (
                      <span className="px-3 py-1 bg-heritage-blue-100 text-heritage-blue-800 rounded-full text-xs flex items-center">
                        {artisanRegions.find(r => r.value === selectedRegion)?.label}
                        <button 
                          onClick={() => setSelectedRegion('all')}
                          className="ml-1.5 hover:text-heritage-blue-900"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {searchQuery && (
                      <span className="px-3 py-1 bg-warm-gray-100 text-warm-gray-800 rounded-full text-xs flex items-center">
                        "{searchQuery}"
                        <button 
                          onClick={() => setSearchQuery('')}
                          className="ml-1.5 hover:text-warm-gray-900"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    <button 
                      onClick={() => {
                        setSelectedCategory('all');
                        setSelectedRegion('all');
                        setSearchQuery('');
                      }}
                      className="text-sm text-saffron-600 hover:text-saffron-700 hover:underline"
                    >
                      Clear all
                    </button>
                  </div>
                )}
              </motion.div>

              {/* Artisans Grid */}
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="animate-pulse">
                      <div className="bg-warm-gray-200 rounded-2xl h-96"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredArtisans.map((artisan, index) => (
                    <ArtisanCard 
                      key={artisan.id} 
                      artisan={artisan}
                      index={index} 
                      onClick={() => navigate(`/artisan/${artisan.id}`)} 
                    />
                  ))}
                </motion.div>
              )}

              {/* Empty State */}
              {!loading && filteredArtisans.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-warm-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-warm-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-warm-gray-900 mb-2">No artisans found</h3>
                  <p className="text-warm-gray-500 mb-6">
                    We couldn't find any artisans matching your criteria. Try adjusting your filters.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedRegion('all');
                      setSearchQuery('');
                    }}
                    className="btn-primary"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </div>
          </section>

          {/* Call to Action */}
          {!loading && filteredArtisans.length > 0 && (
            <section className="py-16 bg-gradient-to-br from-warm-gray-50 to-saffron-50/30">
              <div className="max-w-7xl mx-auto container-padding text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-warm-gray-900 mb-6">
                    Connect With Our <span className="text-gradient bg-gradient-to-r from-saffron-600 to-terracotta-600 bg-clip-text text-transparent">Master Artisans</span>
                  </h2>
                  <p className="text-lg text-warm-gray-600 max-w-3xl mx-auto mb-8">
                    Discover the stories behind the crafts, request custom pieces, or book a virtual workshop with our skilled artisans
                  </p>
                  <button 
                    onClick={() => navigate('/marketplace')}
                    className="btn-primary"
                  >
                    Shop Artisan Products
                  </button>
                </motion.div>
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

// Artisan Card Component
interface ArtisanCardProps {
  artisan: any;
  index: number;
  onClick: () => void;
}

const ArtisanCard: React.FC<ArtisanCardProps> = ({ artisan, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="artisan-card bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Cover Image */}
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage 
          src={artisan.coverImage} 
          alt={`${artisan.name}'s craft`}
          className="w-full h-full object-cover"
          fallbackSrc="/images/profile/artisans/priya-sharma_cover.png"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      </div>
      
      {/* Artisan Details */}
      <div className="p-6 relative">
        {/* Profile Image */}
        <div className="absolute -top-12 left-6 w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-lg">
          <OptimizedImage
            src={artisan.profileImage}
            alt={artisan.name}
            className="w-full h-full object-cover"
            fallbackSrc="/images/profile/artisans/priya-sharma.png"
          />
        </div>
        
        {/* Verification Badge */}
        {artisan.isVerified && (
          <div className="absolute -top-6 left-[5.5rem] bg-heritage-blue-500 rounded-full p-1 shadow-lg">
            <Award className="w-4 h-4 text-white" />
          </div>
        )}
        
        {/* Basic Info */}
        <div className="ml-24 mb-4">
          <h3 className="font-semibold text-warm-gray-900 text-lg">{artisan.name}</h3>
          <p className="text-saffron-600">{artisan.specialty}</p>
        </div>
        
        {/* Stats & Location */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4 text-warm-gray-400" />
              <span className="text-sm text-warm-gray-600">{artisan.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-medium">{artisan.rating}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-warm-gray-50 p-2 rounded-lg">
              <span className="block text-lg font-semibold text-heritage-blue-600">{artisan.experience}</span>
              <span className="text-xs text-warm-gray-500">Years</span>
            </div>
            <div className="bg-warm-gray-50 p-2 rounded-lg">
              <span className="block text-lg font-semibold text-terracotta-600">{artisan.totalProducts}</span>
              <span className="text-xs text-warm-gray-500">Products</span>
            </div>
            <div className="bg-warm-gray-50 p-2 rounded-lg">
              <span className="block text-lg font-semibold text-saffron-600">{artisan.totalSales > 1000 ? `${(artisan.totalSales / 1000).toFixed(1)}k` : artisan.totalSales}</span>
              <span className="text-xs text-warm-gray-500">Sales</span>
            </div>
          </div>
          
          {/* Preview Text */}
          <p className="text-warm-gray-600 text-sm line-clamp-2 mt-2">
            {artisan.story}
          </p>
          
          {/* CTA */}
          <button className="w-full mt-2 py-2 px-4 bg-gradient-to-r from-saffron-500 to-terracotta-500 hover:from-saffron-600 hover:to-terracotta-600 text-white rounded-lg transition-all duration-200 flex items-center justify-center group">
            View Profile
            <motion.span 
              className="ml-2 inline-block" 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            >
              →
            </motion.span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtisanDirectoryPage;