import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { 
  Heart, Search, Grid, List, ShoppingCart, X, Folder,
  Plus, MoreVertical, ChevronDown, Eye, Share2, Trash2
} from 'lucide-react';
import { wishlistItems, collections } from '../../mockData/wishlistData';

interface WishlistItem {
  id: string;
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    artisan: {
      name: string;
      location: string;
    };
    rating: number;
    reviewCount: number;
    inStock: boolean;
  };
  addedOn: string;
  notes?: string;
}

interface Collection {
  id: string;
  name: string;
  itemCount: number;
  isPublic: boolean;
  isDefault: boolean;
}

const CustomerWishlistPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCollection, setActiveCollection] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredItems = wishlistItems.filter(item => {
    // Filter by collection
    if (activeCollection !== 'all') {
      // This would need actual collection assignment logic
      if (activeCollection === 'default' && item.id === 'wish1') return true;
      if (activeCollection === 'home-decor' && item.id === 'wish2') return true;
      return false;
    }
    
    // Filter by search term
    if (searchTerm) {
      return item.product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             item.product.artisan.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
    
    return true;
  });

  const handleSelectItem = (itemId: string) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleSelectAll = () => {
    if (selectedItems.length === filteredItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredItems.map(item => item.id));
    }
  };

  const handleBulkAddToCart = () => {
    // Add logic to add selected items to cart
    console.log('Adding items to cart:', selectedItems);
    setSelectedItems([]);
  };

  const handleBulkRemove = () => {
    // Add logic to remove selected items from wishlist
    console.log('Removing items from wishlist:', selectedItems);
    setSelectedItems([]);
  };

  const createNewCollection = () => {
    // Add logic to create a new collection
    console.log('Creating new collection');
  };

  // Render list or grid view of wishlist items
  const renderWishlistItems = () => {
    if (filteredItems.length === 0) {
      return (
        <div className="bg-white rounded-xl border border-warm-gray-200 p-8 text-center">
          <div className="w-16 h-16 mx-auto bg-warm-gray-100 rounded-full flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-warm-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-warm-gray-900 mb-2">Your wishlist is empty</h3>
          <p className="text-warm-gray-500 mb-6">
            {searchTerm 
              ? `No items matching "${searchTerm}"`
              : activeCollection !== 'all' 
                ? `No items in this collection`
                : "Save items you love for later"
            }
          </p>
          <button
            onClick={() => navigate('/marketplace')}
            className="btn-primary"
          >
            Explore Marketplace
          </button>
        </div>
      );
    }

    if (viewMode === 'list') {
      return filteredItems.map(item => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl border border-warm-gray-200 p-4 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center gap-4">
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleSelectItem(item.id)}
              className="w-5 h-5 rounded text-saffron-500 focus:ring-saffron-500"
            />
            
            {/* Image */}
            <div className="relative w-24 h-24">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-full h-full rounded-lg object-cover"
                onClick={() => navigate(`/product/${item.product.id}`)}
              />
              
              {!item.product.inStock && (
                <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-medium">Out of Stock</span>
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="flex-1">
              <h3 
                className="font-semibold text-warm-gray-900 hover:text-saffron-600 cursor-pointer"
                onClick={() => navigate(`/product/${item.product.id}`)}
              >
                {item.product.name}
              </h3>
              
              <div className="flex items-center mt-1">
                <span className="text-sm text-warm-gray-600">by {item.product.artisan.name}</span>
                <span className="text-xs text-warm-gray-500 mx-2">•</span>
                <span className="text-xs text-warm-gray-500">Added {item.addedOn}</span>
              </div>
              
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-warm-gray-900">₹{item.product.price.toLocaleString()}</span>
                  {item.product.originalPrice && (
                    <span className="text-sm line-through text-warm-gray-500">₹{item.product.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  {item.product.inStock ? (
                    <button 
                      className="btn-primary text-xs py-1 px-3"
                      onClick={() => console.log('Adding to cart:', item.id)}
                    >
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      Add to Cart
                    </button>
                  ) : (
                    <button className="btn-secondary text-xs py-1 px-3">
                      Notify When Available
                    </button>
                  )}
                  <button 
                    className="btn-ghost text-xs py-1 px-2 text-red-600 hover:bg-red-50"
                    onClick={() => console.log('Removing item:', item.id)}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
              
              {item.notes && (
                <div className="mt-2 p-2 bg-warm-gray-50 rounded text-sm text-warm-gray-600">
                  {item.notes}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ));
    }

    // Grid View
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl border border-warm-gray-200 overflow-hidden hover:shadow-md transition-all duration-200"
          >
            <div className="relative">
              {/* Checkbox */}
              <div className="absolute top-3 left-3 z-10">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                  className="w-5 h-5 rounded text-saffron-500 focus:ring-saffron-500"
                />
              </div>
              
              {/* Image */}
              <div className="relative w-full aspect-square">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => navigate(`/product/${item.product.id}`)}
                />
                
                {!item.product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Out of Stock</span>
                  </div>
                )}
                
                {/* Quick actions overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-200 opacity-0 hover:opacity-100 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <button
                      className="p-2 bg-white rounded-full shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/product/${item.product.id}`);
                      }}
                    >
                      <Eye className="w-4 h-4 text-warm-gray-600" />
                    </button>
                    {item.product.inStock && (
                      <button
                        className="p-2 bg-saffron-500 rounded-full shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log('Adding to cart:', item.id);
                        }}
                      >
                        <ShoppingCart className="w-4 h-4 text-white" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 
                    className="font-semibold text-warm-gray-900 hover:text-saffron-600 cursor-pointer line-clamp-1"
                    onClick={() => navigate(`/product/${item.product.id}`)}
                  >
                    {item.product.name}
                  </h3>
                  <p className="text-sm text-warm-gray-600 mb-2">by {item.product.artisan.name}</p>
                </div>
                <button className="text-warm-gray-400 hover:text-warm-gray-600">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-warm-gray-900">₹{item.product.price.toLocaleString()}</span>
                  {item.product.originalPrice && (
                    <span className="text-sm line-through text-warm-gray-500">₹{item.product.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                <div className="text-xs text-warm-gray-500">
                  {item.addedOn}
                </div>
              </div>
              
              {item.notes && (
                <div className="mt-2 p-2 bg-warm-gray-50 rounded text-xs text-warm-gray-600">
                  {item.notes}
                </div>
              )}
              
              <div className="mt-4 pt-4 border-t border-warm-gray-100">
                {item.product.inStock ? (
                  <button 
                    className="w-full btn-primary text-sm py-2"
                    onClick={() => console.log('Adding to cart:', item.id)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add to Cart
                  </button>
                ) : (
                  <button className="w-full btn-secondary text-sm py-2">
                    Notify When Available
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <DashboardLayout
      title="My Wishlist"
      subtitle="Items you've saved for later"
      userType="customer"
    >
      <div className="space-y-6">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-gray-400" />
            <input
              type="text"
              placeholder="Search wishlist..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            {selectedItems.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-warm-gray-600">
                  {selectedItems.length} selected
                </span>
                <button 
                  className="btn-primary text-sm py-1.5"
                  onClick={handleBulkAddToCart}
                >
                  <ShoppingCart className="w-4 h-4 mr-1" />
                  Add to Cart
                </button>
                <button 
                  className="btn-secondary text-sm py-1.5 text-red-600 border-red-200 hover:bg-red-50"
                  onClick={handleBulkRemove}
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Remove
                </button>
              </div>
            )}
            
            <div className="flex items-center space-x-2 ml-auto">
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
              
              <button 
                className="btn-secondary text-sm py-2"
                onClick={createNewCollection}
              >
                <Plus className="w-4 h-4 mr-1" />
                New Collection
              </button>
            </div>
          </div>
        </div>
        
        {/* Collections Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide border-b border-warm-gray-200 pb-2">
          <button
            onClick={() => setActiveCollection('all')}
            className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
              activeCollection === 'all'
                ? 'bg-saffron-100 text-saffron-700'
                : 'text-warm-gray-600 hover:bg-warm-gray-100 hover:text-warm-gray-900'
            }`}
          >
            All Items ({wishlistItems.length})
          </button>
          
          {collections.map(collection => (
            <button
              key={collection.id}
              onClick={() => setActiveCollection(collection.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeCollection === collection.id
                  ? 'bg-saffron-100 text-saffron-700'
                  : 'text-warm-gray-600 hover:bg-warm-gray-100 hover:text-warm-gray-900'
              }`}
            >
              {collection.name} ({collection.itemCount})
              {collection.isPublic && (
                <span className="ml-2 text-xs bg-warm-gray-100 text-warm-gray-600 px-1 py-0.5 rounded">
                  Public
                </span>
              )}
            </button>
          ))}
          
          <button className="px-4 py-2 text-sm text-saffron-600 hover:text-saffron-700">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        {/* Bulk Selection Header (if items exist) */}
        {filteredItems.length > 0 && (
          <div className="flex items-center">
            <label className="flex items-center text-sm text-warm-gray-600">
              <input
                type="checkbox"
                checked={selectedItems.length === filteredItems.length && filteredItems.length > 0}
                onChange={handleSelectAll}
                className="w-4 h-4 rounded text-saffron-500 focus:ring-saffron-500 mr-2"
              />
              Select All
            </label>
            
            {selectedItems.length > 0 && (
              <span className="ml-4 text-sm text-warm-gray-600">
                {selectedItems.length} of {filteredItems.length} selected
              </span>
            )}
          </div>
        )}
        
        {/* Wishlist Items */}
        <div className="space-y-4">
          {renderWishlistItems()}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerWishlistPage;