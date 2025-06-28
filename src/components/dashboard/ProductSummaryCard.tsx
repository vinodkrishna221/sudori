import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Edit, Trash2, Eye, Archive, Heart, ShoppingCart, Star } from 'lucide-react';

interface ProductSummaryCardProps {
  product: {
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
  };
  userType: 'customer' | 'artisan';
}

const ProductSummaryCard: React.FC<ProductSummaryCardProps> = ({ product, userType }) => {
  const navigate = useNavigate();
  
  const getStatusDetails = (status: string) => {
    switch (status) {
      case 'active':
        return { 
          text: 'Active',
          color: 'text-green-700 bg-green-100'
        };
      case 'draft':
        return { 
          text: 'Draft',
          color: 'text-blue-700 bg-blue-100'
        };
      case 'sold-out':
        return { 
          text: 'Sold Out',
          color: 'text-red-700 bg-red-100'
        };
      case 'archived':
        return { 
          text: 'Archived',
          color: 'text-warm-gray-700 bg-warm-gray-100'
        };
      default:
        return { 
          text: 'Unknown',
          color: 'text-warm-gray-700 bg-warm-gray-100'
        };
    }
  };

  const statusDetails = getStatusDetails(product.status);
  
  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };
  
  const handleEditProduct = () => {
    navigate(`/artisan/products/edit/${product.id}`);
  };

  return (
    <div className="bg-white rounded-xl border border-warm-gray-200 p-4 hover:shadow-md transition-all duration-200">
      <div className="flex">
        {/* Product Image */}
        <div className="relative w-24 h-24 rounded-lg overflow-hidden mr-4">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 right-0">
            <span className={`text-xs px-2 py-0.5 rounded-bl-lg font-medium ${statusDetails.color}`}>
              {statusDetails.text}
            </span>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="flex-1">
          <div className="flex justify-between mb-1">
            <h3 className="font-medium text-warm-gray-900 line-clamp-1">{product.name}</h3>
            <div className="flex items-center">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
              <span className="text-xs text-warm-gray-600 ml-1">{product.rating} ({product.reviewCount})</span>
            </div>
          </div>
          
          {/* Pricing */}
          <div className="flex items-center space-x-2 mb-2">
            <span className="font-semibold text-warm-gray-900">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm line-through text-warm-gray-500">₹{product.originalPrice}</span>
            )}
          </div>
          
          {userType === 'artisan' && (
            <div className="flex items-center space-x-4 text-xs text-warm-gray-500 mb-2">
              <div className="flex items-center space-x-1">
                <Archive className="w-3 h-3" />
                <span>{product.inventory} in stock</span>
              </div>
              <div className="flex items-center space-x-1">
                <ShoppingCart className="w-3 h-3" />
                <span>{product.sales} sold</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-3 h-3" />
                <span>{product.views} views</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Actions */}
      <div className="mt-3 pt-3 border-t border-warm-gray-100 flex items-center justify-between">
        {userType === 'artisan' ? (
          <>
            <button 
              onClick={handleViewDetails}
              className="text-xs text-warm-gray-600 hover:text-warm-gray-900 flex items-center"
            >
              <Eye className="w-3.5 h-3.5 mr-1" />
              Preview
            </button>
            <div className="flex space-x-2">
              <button 
                onClick={handleEditProduct}
                className="btn-secondary text-xs px-2 py-1"
              >
                <Edit className="w-3.5 h-3.5 mr-1" />
                Edit
              </button>
              {product.status === 'active' ? (
                <button className="btn-ghost text-xs px-2 py-1 text-red-600 hover:text-red-700">
                  <Archive className="w-3.5 h-3.5 mr-1" />
                  Archive
                </button>
              ) : (
                <button className="btn-primary text-xs px-2 py-1">
                  Activate
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <button 
              onClick={handleViewDetails}
              className="btn-secondary text-xs px-2 py-1"
            >
              <Eye className="w-3.5 h-3.5 mr-1" />
              View Details
            </button>
            <div className="flex space-x-2">
              <button className="btn-ghost text-xs px-2 py-1 text-red-600 hover:text-red-700">
                <Heart className="w-3.5 h-3.5 mr-1" />
                Save
              </button>
              <button className="btn-primary text-xs px-2 py-1">
                <ShoppingCart className="w-3.5 h-3.5 mr-1" />
                Add to Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductSummaryCard;