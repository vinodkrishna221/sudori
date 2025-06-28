import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import OptimizedImage from '../components/common/OptimizedImage';
import { 
  Heart, Star, ShoppingCart, Eye, Award, MapPin, Truck, RotateCcw, 
  Shield, ChevronLeft, ChevronRight, Play, Minus, Plus, Share2, 
  MessageCircle, Check, Zap, Package
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  videos?: string[];
  artisan: {
    id: string;
    name: string;
    location: string;
    rating: number;
    profileImage: string;
    specialties: string[];
  };
  category: string;
  rating: number;
  reviewCount: number;
  isHandmade: boolean;
  isFeatured: boolean;
  specifications: Record<string, string>;
  deliveryInfo: {
    estimatedDays: number;
    freeShipping: boolean;
    expressAvailable: boolean;
  };
  customizationOptions?: {
    colors: string[];
    sizes: string[];
    materials: string[];
  };
}

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [loading, setLoading] = useState(true);

  // Mock product data - replace with API call
  useEffect(() => {
    const mockProduct: Product = {
      id: id || '1',
      name: 'Handwoven Silk Tassel with Traditional Motifs',
      description: 'Exquisite handwoven silk tassel featuring intricate traditional Indian motifs. Each piece is carefully crafted by master artisans using time-honored techniques passed down through generations. The vibrant colors and detailed patterns make this a perfect addition to any traditional or contemporary outfit.',
      price: 2499,
      originalPrice: 3199,
      images: [
        'https://images.pexels.com/photos/9594701/pexels-photo-9594701.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6069276/pexels-photo-6069276.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5838237/pexels-photo-5838237.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      artisan: {
        id: 'artisan-1',
        name: 'Priya Sharma',
        location: 'Rajasthan, India',
        rating: 4.9,
        profileImage: 'https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=400',
        specialties: ['Traditional Weaving', 'Silk Work', 'Heritage Patterns']
      },
      category: 'Textiles',
      rating: 4.8,
      reviewCount: 156,
      isHandmade: true,
      isFeatured: true,
      specifications: {
        'Material': 'Pure Silk',
        'Length': '12 inches',
        'Width': '3 inches',
        'Weight': '25 grams',
        'Care': 'Dry clean only',
        'Origin': 'Rajasthan, India'
      },
      deliveryInfo: {
        estimatedDays: 5,
        freeShipping: true,
        expressAvailable: true
      },
      customizationOptions: {
        colors: ['Golden', 'Red', 'Blue', 'Green', 'Purple'],
        sizes: ['Small', 'Medium', 'Large'],
        materials: ['Silk', 'Cotton Silk', 'Pure Cotton']
      }
    };

    setTimeout(() => {
      setProduct(mockProduct);
      setLoading(false);
    }, 800);
  }, [id]);

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Adding to cart:', { productId: id, quantity, options: selectedOptions });
  };

  const handleBuyNow = () => {
    // Direct checkout logic
    navigate('/checkout');
  };

  const handleContactArtisan = () => {
    navigate(`/artisan/${product?.artisan.id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="animate-pulse">
                <div className="w-full h-96 bg-warm-gray-200 rounded-xl mb-4"></div>
                <div className="flex gap-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-16 h-16 bg-warm-gray-200 rounded-lg"></div>
                  ))}
                </div>
              </div>
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-warm-gray-200 rounded w-3/4"></div>
                <div className="h-6 bg-warm-gray-200 rounded w-1/2"></div>
                <div className="h-24 bg-warm-gray-200 rounded"></div>
                <div className="h-12 bg-warm-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        <div className="pt-20 pb-16 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-display font-bold text-warm-gray-900 mb-4">
              Product Not Found
            </h1>
            <p className="text-warm-gray-600 mb-8">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <button 
              onClick={() => navigate('/marketplace')}
              className="btn-primary"
            >
              Browse Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <>
      <Helmet>
        <title>{product.name} - Sudori</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        
        <main className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto container-padding">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-warm-gray-600 mb-8">
              <button onClick={() => navigate('/')} className="hover:text-saffron-600">
                Home
              </button>
              <span>/</span>
              <button onClick={() => navigate('/marketplace')} className="hover:text-saffron-600">
                Marketplace
              </button>
              <span>/</span>
              <span className="text-warm-gray-900">{product.category}</span>
              <span>/</span>
              <span className="text-warm-gray-900">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <OptimizedImage
                    src={product.images[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-96 object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex(prev => 
                          prev === 0 ? product.images.length - 1 : prev - 1
                        )}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex(prev => 
                          prev === product.images.length - 1 ? 0 : prev + 1
                        )}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {discountPercentage > 0 && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {discountPercentage}% OFF
                      </span>
                    )}
                    {product.isHandmade && (
                      <span className="bg-saffron-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        Handmade
                      </span>
                    )}
                    {product.isFeatured && (
                      <span className="bg-heritage-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`p-2 rounded-full shadow-lg transition-colors ${
                        isWishlisted 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white/80 text-warm-gray-700 hover:bg-white'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Thumbnail Images */}
                <div className="flex gap-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        currentImageIndex === index 
                          ? 'border-saffron-500' 
                          : 'border-warm-gray-200 hover:border-saffron-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Product Information */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Title and Rating */}
                <div>
                  <h1 className="text-3xl font-display font-bold text-warm-gray-900 mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-semibold text-warm-gray-900">{product.rating}</span>
                      <span className="text-warm-gray-600">({product.reviewCount} reviews)</span>
                    </div>
                    <span className="text-warm-gray-400">•</span>
                    <span className="text-green-600 font-medium">In Stock</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-warm-gray-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-warm-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                        Save ₹{(product.originalPrice - product.price).toLocaleString()}
                      </span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="text-warm-gray-700 leading-relaxed">
                  {product.description}
                </p>

                {/* Artisan Information */}
                <div className="bg-saffron-50 border border-saffron-200 rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <OptimizedImage
                      src={product.artisan.profileImage}
                      alt={product.artisan.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-warm-gray-900">
                        Crafted by {product.artisan.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-warm-gray-600">
                        <MapPin className="w-4 h-4" />
                        {product.artisan.location}
                        <span>•</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        {product.artisan.rating} rating
                      </div>
                    </div>
                    <button 
                      onClick={handleContactArtisan}
                      className="btn-secondary text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Contact
                    </button>
                  </div>
                </div>

                {/* Customization Options */}
                {product.customizationOptions && (
                  <div className="space-y-4">
                    {/* Colors */}
                    {product.customizationOptions.colors.length > 0 && (
                      <div>
                        <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                          Color: {selectedOptions.color || 'Select'}
                        </label>
                        <div className="flex gap-2">
                          {product.customizationOptions.colors.map((color) => (
                            <button
                              key={color}
                              onClick={() => setSelectedOptions(prev => ({ ...prev, color }))}
                              className={`px-4 py-2 border rounded-lg text-sm transition-colors ${
                                selectedOptions.color === color
                                  ? 'border-saffron-500 bg-saffron-50 text-saffron-700'
                                  : 'border-warm-gray-300 hover:border-saffron-300'
                              }`}
                            >
                              {color}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Sizes */}
                    {product.customizationOptions.sizes.length > 0 && (
                      <div>
                        <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                          Size: {selectedOptions.size || 'Select'}
                        </label>
                        <div className="flex gap-2">
                          {product.customizationOptions.sizes.map((size) => (
                            <button
                              key={size}
                              onClick={() => setSelectedOptions(prev => ({ ...prev, size }))}
                              className={`px-4 py-2 border rounded-lg text-sm transition-colors ${
                                selectedOptions.size === size
                                  ? 'border-saffron-500 bg-saffron-50 text-saffron-700'
                                  : 'border-warm-gray-300 hover:border-saffron-300'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Quantity Selector */}
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium text-warm-gray-700">Quantity:</label>
                  <div className="flex items-center border border-warm-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-warm-gray-100 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-warm-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className="w-full btn-primary py-4 text-lg"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBuyNow}
                    className="w-full btn-secondary py-4 text-lg"
                  >
                    <Zap className="w-5 h-5" />
                    Buy Now
                  </motion.button>
                </div>

                {/* Delivery Information */}
                <div className="bg-white border border-warm-gray-200 rounded-xl p-4 space-y-3">
                  <h3 className="font-semibold text-warm-gray-900">Delivery Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-warm-gray-700">
                      <Truck className="w-4 h-4 text-green-600" />
                      <span>
                        {product.deliveryInfo.freeShipping ? 'Free delivery' : 'Paid delivery'} in {product.deliveryInfo.estimatedDays} days
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-warm-gray-700">
                      <Shield className="w-4 h-4 text-blue-600" />
                      <span>Secure payment & authenticity guaranteed</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-warm-gray-700">
                      <RotateCcw className="w-4 h-4 text-purple-600" />
                      <span>30-day easy returns</span>
                    </div>
                  </div>
                </div>

                {/* Specifications */}
                <div className="bg-white border border-warm-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-warm-gray-900 mb-3">Specifications</h3>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <React.Fragment key={key}>
                        <span className="text-warm-gray-600">{key}:</span>
                        <span className="text-warm-gray-900 font-medium">{value}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProductDetailPage;