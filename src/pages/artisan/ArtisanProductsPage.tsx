import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ProductSummaryCard from '../../components/dashboard/ProductSummaryCard';
import { 
  Search, Filter, Plus, CheckSquare, MoreVertical, Grid,
  List, ChevronDown, UploadCloud, Download, ArrowUpDown 
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  status: 'active' | 'draft' | 'sold-out' | 'archived';
  inventory: number;
  sales: number;
  views: number;
  rating: number;
  reviewCount: number;
  category: string;
  createdAt: string;
}

const ArtisanProductsPage: React.FC = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');
  
  // Mock product data
  const products: Product[] = [
    {
      id: 'prod1',
      name: 'Handwoven Silk Tassel',
      price: 2499,
      originalPrice: 3199,
      image: '/images/products/Whisk_storyboard3b3d67f7b6a448328ea85f9c.png',
      status: 'active',
      inventory: 32,
      sales: 58,
      views: 1245,
      rating: 4.8,
      reviewCount: 156,
      category: 'Textiles',
      createdAt: '2024-10-15'
    },
    {
      id: 'prod2',
      name: 'Traditional Silk Scarf',
      price: 3999,
      image: '/images/products/Whisk_storyboard22d127129b164e319ca7dd50.png',
      status: 'active',
      inventory: 15,
      sales: 42,
      views: 980,
      rating: 4.9,
      reviewCount: 87,
      category: 'Textiles',
      createdAt: '2024-11-05'
    },
    {
      id: 'prod3',
      name: 'Heritage Pattern Tapestry',
      price: 8999,
      originalPrice: 12999,
      image: '/images/products/Whisk_storyboarde3d063b7068249a38d4a80ec.png',
      status: 'active',
      inventory: 8,
      sales: 27,
      views: 745,
      rating: 4.7,
      reviewCount: 36,
      category: 'Textiles',
      createdAt: '2024-09-20'
    },
    {
      id: 'prod4',
      name: 'Hand-Embroidered Cushion Cover',
      price: 1999,
      image: '/images/products/Whisk_storyboardeb7b550068594c50b54bdbf4.png',
      status: 'draft',
      inventory: 20,
      sales: 0,
      views: 0,
      rating: 0,
      reviewCount: 0,
      category: 'Home Decor',
      createdAt: '2024-12-10'
    },
    {
      id: 'prod5',
      name: 'Zari Embroidered Potli Bag',
      price: 1499,
      originalPrice: 1999,
      image: '/images/products/Whisk_storyboarda8bddf974e2447e9872bab59.png',
      status: 'sold-out',
      inventory: 0,
      sales: 30,
      views: 860,
      rating: 4.6,
      reviewCount: 24,
      category: 'Accessories',
      createdAt: '2024-08-15'
    }
  ];

  // Filter products based on active filter and search term
  const filteredProducts = products.filter(product => {
    // Filter by status
    if (activeFilter !== 'all' && product.status !== activeFilter) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'oldest':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'inventory-low':
        return a.inventory - b.inventory;
      case 'inventory-high':
        return b.inventory - a.inventory;
      case 'sales':
        return b.sales - a.sales;
      case 'popularity':
        return b.views - a.views;
      default:
        return 0;
    }
  });

  const handleSelectProduct = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handleSelectAll = () => {
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(filteredProducts.map(product => product.id));
    }
  };

  const handleAddNewProduct = () => {
    navigate('/artisan/products/add');
  };

  const handleBulkActions = () => {
    // Implement bulk actions logic
    console.log('Bulk action on', selectedProducts);
  };

  // Count products by status
  const productCounts = {
    all: products.length,
    active: products.filter(p => p.status === 'active').length,
    draft: products.filter(p => p.status === 'draft').length,
    'sold-out': products.filter(p => p.status === 'sold-out').length,
    archived: products.filter(p => p.status === 'archived').length
  };

  return (
    <DashboardLayout
      title="Products"
      subtitle="Manage your product catalog"
      userType="artisan"
    >
      <div className="space-y-6">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="w-full md:w-80 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={handleAddNewProduct}
              className="btn-primary text-sm"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Product
            </button>
            
            <button className="btn-secondary text-sm">
              <UploadCloud className="w-4 h-4 mr-2" />
              Import
            </button>
            
            <button className="btn-secondary text-sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
            
            <div className="border border-warm-gray-300 rounded-lg overflow-hidden flex">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${
                  viewMode === 'grid' 
                    ? 'bg-saffron-500 text-white' 
                    : 'bg-white text-warm-gray-500 hover:bg-warm-gray-100'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${
                  viewMode === 'list' 
                    ? 'bg-saffron-500 text-white' 
                    : 'bg-white text-warm-gray-500 hover:bg-warm-gray-100'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Status Filters & Sort */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex overflow-x-auto scrollbar-hide space-x-2">
            {Object.entries(productCounts).map(([status, count]) => (
              <button
                key={status}
                onClick={() => setActiveFilter(status)}
                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                  activeFilter === status
                    ? 'bg-saffron-100 text-saffron-700'
                    : 'text-warm-gray-600 hover:bg-warm-gray-100 hover:text-warm-gray-900'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')} ({count})
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-warm-gray-500">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-warm-gray-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-warm-gray-700"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="inventory-low">Inventory: Low to High</option>
                <option value="inventory-high">Inventory: High to Low</option>
                <option value="sales">Best Selling</option>
                <option value="popularity">Most Viewed</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-warm-gray-500 pointer-events-none" />
            </div>
            <button className="btn-ghost p-2 text-warm-gray-500 hover:text-warm-gray-700">
              <ArrowUpDown className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Bulk Actions (visible when items are selected) */}
        {selectedProducts.length > 0 && (
          <div className="bg-saffron-50 border border-saffron-200 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckSquare className="w-5 h-5 text-saffron-600" />
              <span className="font-medium text-warm-gray-900">
                {selectedProducts.length} product{selectedProducts.length > 1 ? 's' : ''} selected
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                className="btn-primary text-sm py-1.5"
                onClick={() => {/* Bulk edit action */}}
              >
                Bulk Edit
              </button>
              <div className="relative">
                <button 
                  onClick={handleBulkActions}
                  className="btn-secondary text-sm py-1.5 inline-flex items-center"
                >
                  More Actions
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {/* Dropdown menu would go here */}
              </div>
              <button 
                onClick={() => setSelectedProducts([])}
                className="p-2 text-warm-gray-500 hover:bg-white rounded-full transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
        
        {/* Product List */}
        {sortedProducts.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" 
            : "space-y-4"
          }>
            {sortedProducts.map(product => (
              <div key={product.id} className="relative">
                {/* Checkbox for selection */}
                <div className="absolute top-3 left-3 z-10">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => handleSelectProduct(product.id)}
                    className="w-5 h-5 rounded text-saffron-500 focus:ring-saffron-500"
                  />
                </div>
                <ProductSummaryCard product={product} userType="artisan" />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-warm-gray-200 p-8 text-center">
            <div className="w-16 h-16 mx-auto bg-warm-gray-100 rounded-full flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-warm-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-warm-gray-900 mb-2">No products found</h3>
            <p className="text-warm-gray-500 mb-6">
              {searchTerm 
                ? `No products matching "${searchTerm}"`
                : activeFilter !== 'all' 
                  ? `You don't have any ${activeFilter.replace('-', ' ')} products`
                  : "You haven't added any products yet"
              }
            </p>
            <button
              onClick={handleAddNewProduct}
              className="btn-primary"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Your First Product
            </button>
          </div>
        )}
        
        {/* Pagination would go here */}
      </div>
    </DashboardLayout>
  );
};

export default ArtisanProductsPage;