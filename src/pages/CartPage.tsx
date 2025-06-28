import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  ShoppingBag, Minus, Plus, X, Heart, Truck, Shield, RotateCcw,
  Award, ArrowRight, Trash2, Bookmark, AlertCircle, Check
} from 'lucide-react';

interface CartItem {
  id: string;
  product: {
    id: string;
    name: string;
    image: string;
    artisan: {
      name: string;
      location: string;
    };
    category: string;
  };
  quantity: number;
  price: number;
  originalPrice?: number;
  selectedOptions?: Record<string, string>;
  estimatedDelivery: string;
  freeShipping: boolean;
}

interface CartSummary {
  subtotal: number;
  shipping: number;
  taxes: number;
  discount: number;
  total: number;
  itemCount: number;
  appliedPromo?: {
    code: string;
    discount: number;
  };
}

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [summary, setSummary] = useState<CartSummary>({
    subtotal: 0,
    shipping: 0,
    taxes: 0,
    discount: 0,
    total: 0,
    itemCount: 0
  });
  const [promoCode, setPromoCode] = useState('');
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [loading, setLoading] = useState(true);

  // Mock cart data - replace with actual cart state management
  useEffect(() => {
    const mockCartItems: CartItem[] = [
      {
        id: 'cart-1',
        product: {
          id: 'product-1',
          name: 'Handwoven Silk Tassel with Traditional Motifs',
          image: 'https://images.pexels.com/photos/9594701/pexels-photo-9594701.jpeg?auto=compress&cs=tinysrgb&w=400',
          artisan: {
            name: 'Priya Sharma',
            location: 'Rajasthan, India'
          },
          category: 'Textiles'
        },
        quantity: 2,
        price: 2499,
        originalPrice: 3199,
        selectedOptions: {
          color: 'Golden',
          size: 'Medium'
        },
        estimatedDelivery: 'Dec 15, 2024',
        freeShipping: true
      },
      {
        id: 'cart-2',
        product: {
          id: 'product-2',
          name: 'Blue Pottery Decorative Vase',
          image: 'https://images.pexels.com/photos/8447577/pexels-photo-8447577.jpeg?auto=compress&cs=tinysrgb&w=400',
          artisan: {
            name: 'Rajesh Kumar',
            location: 'Jaipur, Rajasthan'
          },
          category: 'Pottery'
        },
        quantity: 1,
        price: 2899,
        estimatedDelivery: 'Dec 18, 2024',
        freeShipping: true
      },
      {
        id: 'cart-3',
        product: {
          id: 'product-3',
          name: 'Kundan Polki Earrings',
          image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
          artisan: {
            name: 'Meera Devi',
            location: 'Delhi, India'
          },
          category: 'Jewelry'
        },
        quantity: 1,
        price: 8499,
        originalPrice: 10999,
        estimatedDelivery: 'Dec 20, 2024',
        freeShipping: false
      }
    ];

    setTimeout(() => {
      setCartItems(mockCartItems);
      calculateSummary(mockCartItems);
      setLoading(false);
    }, 500);
  }, []);

  const calculateSummary = (items: CartItem[]) => {
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = items.some(item => !item.freeShipping) ? 99 : 0;
    const taxes = Math.round(subtotal * 0.18); // 18% GST
    const discount = summary.appliedPromo?.discount || 0;
    const total = subtotal + shipping + taxes - discount;
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    setSummary({
      subtotal,
      shipping,
      taxes,
      discount,
      total,
      itemCount,
      appliedPromo: summary.appliedPromo
    });
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    calculateSummary(updatedItems);
  };

  const removeItem = (itemId: string) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
    calculateSummary(updatedItems);
  };

  const saveForLater = (itemId: string) => {
    // Move to wishlist logic
    removeItem(itemId);
  };

  const clearCart = () => {
    setCartItems([]);
    setSummary({
      subtotal: 0,
      shipping: 0,
      taxes: 0,
      discount: 0,
      total: 0,
      itemCount: 0
    });
  };

  const applyPromoCode = async () => {
    if (!promoCode.trim()) return;
    
    setIsApplyingPromo(true);
    setPromoError('');

    // Mock promo validation
    setTimeout(() => {
      if (promoCode.toUpperCase() === 'SAVE10') {
        const discount = Math.round(summary.subtotal * 0.1);
        setSummary(prev => ({
          ...prev,
          discount,
          total: prev.subtotal + prev.shipping + prev.taxes - discount,
          appliedPromo: { code: promoCode.toUpperCase(), discount }
        }));
        setPromoCode('');
      } else {
        setPromoError('Invalid promo code');
      }
      setIsApplyingPromo(false);
    }, 1000);
  };

  const removePromo = () => {
    setSummary(prev => ({
      ...prev,
      discount: 0,
      total: prev.subtotal + prev.shipping + prev.taxes,
      appliedPromo: undefined
    }));
  };

  const proceedToCheckout = () => {
    navigate('/checkout');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="animate-pulse">
              <div className="h-8 bg-warm-gray-200 rounded w-64 mb-8"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-32 bg-warm-gray-200 rounded-xl"></div>
                  ))}
                </div>
                <div className="h-96 bg-warm-gray-200 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Shopping Cart ({summary.itemCount}) - Sudori</title>
        <meta name="description" content="Review your selected handcrafted items and proceed to checkout." />
      </Helmet>

      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        
        <main className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto container-padding">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-display font-bold text-warm-gray-900">
                Shopping Cart {cartItems.length > 0 && `(${summary.itemCount} items)`}
              </h1>
              {cartItems.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 flex items-center gap-2 text-sm font-medium"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear Cart
                </button>
              )}
            </div>

            {cartItems.length === 0 ? (
              /* Empty Cart State */
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <div className="w-32 h-32 bg-warm-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-16 h-16 text-warm-gray-400" />
                </div>
                <h2 className="text-2xl font-semibold text-warm-gray-600 mb-2">
                  Your cart is empty
                </h2>
                <p className="text-warm-gray-500 mb-8 max-w-md mx-auto">
                  Discover amazing handcrafted products from talented artisans across India
                </p>
                <button 
                  onClick={() => navigate('/marketplace')}
                  className="btn-primary"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Start Shopping
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  <AnimatePresence>
                    {cartItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100, height: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-white rounded-xl border border-warm-gray-200 p-6 hover:shadow-lg transition-all duration-200"
                      >
                        <div className="flex gap-6">
                          {/* Product Image */}
                          <div className="relative">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                            {item.product.category === 'Textiles' && (
                              <div className="absolute -top-1 -right-1 w-5 h-5 bg-saffron-500 rounded-full flex items-center justify-center">
                                <Heart className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>

                          {/* Product Info */}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold text-warm-gray-900 mb-1">
                                  {item.product.name}
                                </h3>
                                <p className="text-sm text-warm-gray-600">
                                  by {item.product.artisan.name} • {item.product.artisan.location}
                                </p>
                                {item.selectedOptions && (
                                  <div className="flex gap-4 mt-1 text-xs text-warm-gray-500">
                                    {Object.entries(item.selectedOptions).map(([key, value]) => (
                                      <span key={key}>{key}: {value}</span>
                                    ))}
                                  </div>
                                )}
                              </div>

                              {/* Actions */}
                              <div className="flex gap-2">
                                <button
                                  onClick={() => saveForLater(item.id)}
                                  className="p-1 text-warm-gray-400 hover:text-saffron-600 transition-colors"
                                  title="Save for later"
                                >
                                  <Bookmark className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="p-1 text-warm-gray-400 hover:text-red-600 transition-colors"
                                  title="Remove item"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            </div>

                            {/* Quantity and Pricing */}
                            <div className="flex items-center justify-between">
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-3">
                                <div className="flex items-center border border-warm-gray-300 rounded-lg">
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="p-2 hover:bg-warm-gray-100 transition-colors"
                                    disabled={item.quantity <= 1}
                                  >
                                    <Minus className="w-4 h-4" />
                                  </button>
                                  <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="p-2 hover:bg-warm-gray-100 transition-colors"
                                  >
                                    <Plus className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>

                              {/* Pricing */}
                              <div className="text-right">
                                {item.originalPrice && (
                                  <div className="text-sm text-warm-gray-500 line-through">
                                    ₹{(item.originalPrice * item.quantity).toLocaleString()}
                                  </div>
                                )}
                                <div className="text-lg font-bold text-warm-gray-900">
                                  ₹{(item.price * item.quantity).toLocaleString()}
                                </div>
                                {item.originalPrice && (
                                  <div className="text-sm text-green-600">
                                    Save ₹{((item.originalPrice - item.price) * item.quantity).toLocaleString()}
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Delivery Info */}
                            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                              <div className="flex items-center gap-2 text-sm">
                                <Truck className="w-4 h-4 text-blue-600" />
                                <span className="text-blue-800">
                                  Delivery by {item.estimatedDelivery}
                                </span>
                                {item.freeShipping && (
                                  <span className="ml-2 text-green-600 font-medium">
                                    Free Shipping
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Order Summary */}
                <div className="bg-white rounded-xl border border-warm-gray-200 p-6 h-fit sticky top-24">
                  <h3 className="text-lg font-semibold text-warm-gray-900 mb-6">
                    Order Summary
                  </h3>

                  {/* Summary Breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-warm-gray-600">Subtotal ({summary.itemCount} items)</span>
                      <span className="font-medium">₹{summary.subtotal.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-warm-gray-600">Shipping</span>
                      <span className="font-medium">
                        {summary.shipping === 0 ? (
                          <span className="text-green-600">Free</span>
                        ) : (
                          `₹${summary.shipping}`
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-warm-gray-600">Taxes (GST)</span>
                      <span className="font-medium">₹{summary.taxes.toLocaleString()}</span>
                    </div>

                    {summary.discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span className="font-medium">-₹{summary.discount.toLocaleString()}</span>
                      </div>
                    )}

                    <hr className="border-warm-gray-200" />

                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>₹{summary.total.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 px-3 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                      />
                      <button
                        onClick={applyPromoCode}
                        disabled={!promoCode || isApplyingPromo}
                        className="btn-secondary text-sm"
                      >
                        {isApplyingPromo ? 'Applying...' : 'Apply'}
                      </button>
                    </div>

                    {summary.appliedPromo && (
                      <div className="mt-2 p-2 bg-green-50 rounded-lg flex items-center justify-between">
                        <span className="text-green-700 text-sm flex items-center gap-1">
                          <Check className="w-4 h-4" />
                          {summary.appliedPromo.code} applied
                        </span>
                        <button 
                          onClick={removePromo}
                          className="text-green-600 hover:text-green-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    {promoError && (
                      <div className="mt-2 p-2 bg-red-50 rounded-lg flex items-center gap-1 text-red-700 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {promoError}
                      </div>
                    )}
                  </div>

                  {/* Checkout Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={proceedToCheckout}
                    className="w-full btn-primary py-4 text-lg mb-4"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>

                  {/* Trust Indicators */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-warm-gray-600">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>Secure 256-bit SSL encryption</span>
                    </div>
                    <div className="flex items-center gap-2 text-warm-gray-600">
                      <RotateCcw className="w-4 h-4 text-blue-500" />
                      <span>30-day easy returns</span>
                    </div>
                    <div className="flex items-center gap-2 text-warm-gray-600">
                      <Award className="w-4 h-4 text-purple-500" />
                      <span>Authenticity guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CartPage;