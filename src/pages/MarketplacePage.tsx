import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FilterSidebar from '../components/marketplace/FilterSidebar';
import ProductGrid from '../components/marketplace/ProductGrid';
import SortControls from '../components/marketplace/SortControls';
import ViewToggle from '../components/marketplace/ViewToggle';
import { Search, Filter, Grid, List, MapPin, X } from 'lucide-react';
import { ProductFilters } from '../types';
import { products } from '../mockData/productData';
import { productFilters } from '../mockData/productData';

const MarketplacePage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState<ProductFilters>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Initialize products
  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setFilteredProducts(products);
      setLoading(false);
    }, 1000);
  }, []);

  // Apply filters and search
  useEffect(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.artisan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (filters.category && filters.category.length > 0) {
      filtered = filtered.filter(product =>
        filters.category!.some(cat => product.category.toLowerCase() === cat.toLowerCase())
      );
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      filtered = filtered.filter(product =>
        product.price >= min && product.price <= max
      );
    }

    // Rating filter
    if (filters.rating) {
      filtered = filtered.filter(product => product.rating >= filters.rating!);
    }

    // Location filter
    if (filters.location && filters.location.length > 0) {
      filtered = filtered.filter(product =>
        filters.location!.some(loc =>
          product.artisan.location.toLowerCase().includes(loc.toLowerCase())
        )
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price_low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price_high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Mock newest sorting
        filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return b.rating - a.rating;
        });
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [products, filters, searchQuery, sortBy]);

  // Paginated products
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleFilterChange = (newFilters: ProductFilters) => {
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
    setSearchQuery('');
  };

  const activeFilterCount = Object.keys(filters).filter(key => {
    const value = filters[key as keyof ProductFilters];
    if (Array.isArray(value)) return value.length > 0;
    return value !== undefined && value !== null;
  }).length + (searchQuery ? 1 : 0);

  return (
    <>
      <Helmet>
        <title>Marketplace - Discover Authentic Indian Handicrafts | Sudori</title>
        <meta name="description" content="Browse thousands of authentic Indian handicrafts. Filter by category, artisan, price, and region. Handwoven textiles, traditional jewelry, pottery & more." />
      </Helmet>

      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        
        <main className="pt-20">
          {/* Marketplace Header */}
          <section className="bg-gradient-to-r from-saffron-500 to-terracotta-500 text-white py-16">
            <div className="max-w-7xl mx-auto container-padding">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
                  Discover Authentic Handicrafts
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                  Explore thousands of handcrafted treasures from India's master artisans
                </p>
                
                {/* Search Bar */}
                <div className="max-w-2xl mx-auto relative">
                  <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
                    <Search className="w-5 h-5 text-warm-gray-400 ml-6" />
                    <input
                      type="text"
                      placeholder="Search for products, artisans, or categories..."
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

                {/* Quick Filter Tags */}
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  {['Textiles', 'Jewelry', 'Pottery', 'Woodwork', 'Art'].map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilters({ ...filters, category: [category] })}
                      className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors duration-200"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Filters and Products */}
          <section className="py-8">
            <div className="max-w-7xl mx-auto container-padding">
              {/* Results Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-semibold text-warm-gray-900">
                    {filteredProducts.length} Products Found
                  </h2>
                  {activeFilterCount > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-warm-gray-600">
                        {activeFilterCount} filter{activeFilterCount !== 1 ? 's' : ''} applied
                      </span>
                      <button
                        onClick={clearFilters}
                        className="text-sm text-saffron-600 hover:text-saffron-700 underline"
                      >
                        Clear all
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  {/* Mobile Filter Toggle */}
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-warm-gray-300 rounded-lg hover:bg-warm-gray-50 transition-colors"
                  >
                    <Filter className="w-4 h-4" />
                    Filters
                    {activeFilterCount > 0 && (
                      <span className="bg-saffron-500 text-white text-xs px-2 py-1 rounded-full">
                        {activeFilterCount}
                      </span>
                    )}
                  </button>

                  {/* View Toggle */}
                  <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />

                  {/* Sort Controls */}
                  <SortControls sortBy={sortBy} onSortChange={setSortBy} />
                </div>
              </div>

              {/* Main Content */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Filter Sidebar */}
                <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
                  <FilterSidebar
                    filters={filters}
                    onFiltersChange={handleFilterChange}
                    onClose={() => setShowFilters(false)}
                  />
                </div>

                {/* Products Grid */}
                <div className="lg:col-span-3">
                  <ProductGrid
                    products={paginatedProducts}
                    viewMode={viewMode}
                    loading={loading}
                  />

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-12">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                          className="px-4 py-2 bg-white border border-warm-gray-300 rounded-lg hover:bg-warm-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Previous
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-2 rounded-lg ${
                              currentPage === page
                                ? 'bg-saffron-500 text-white'
                                : 'bg-white border border-warm-gray-300 hover:bg-warm-gray-50'
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                        
                        <button
                          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                          disabled={currentPage === totalPages}
                          className="px-4 py-2 bg-white border border-warm-gray-300 rounded-lg hover:bg-warm-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MarketplacePage;