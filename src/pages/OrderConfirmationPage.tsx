import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  CheckCircle, Package, Download, Search, MapPin, Phone, CreditCard,
  Calendar, Truck, MessageCircle, Star, ArrowRight, Share2
} from 'lucide-react';

interface OrderDetail {
  id: string;
  orderNumber: string;
  status: 'confirmed' | 'processing' | 'shipped' | 'delivered';
  items: Array<{
    id: string;
    name: string;
    image: string;
    artisan: string;
    quantity: number;
    price: number;
  }>;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  shipping: {
    address: {
      name: string;
      line1: string;
      line2?: string;
      city: string;
      state: string;
      zipCode: string;
      phone: string;
    };
  };
  payment: {
    method: string;
    status: 'completed' | 'pending' | 'failed';
    transactionId: string;
  };
  summary: {
    subtotal: number;
    shipping: number;
    taxes: number;
    discount: number;
    total: number;
  };
  estimatedDelivery: string;
  placedAt: string;
}

const OrderConfirmationPage: React.FC = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock order data - replace with API call
    const mockOrder: OrderDetail = {
      id: orderId || 'ORD-1234567890',
      orderNumber: 'ORD-1234567890',
      status: 'confirmed',
      items: [
        {
          id: '1',
          name: 'Handwoven Silk Tassel with Traditional Motifs',
          image: 'https://images.pexels.com/photos/9594701/pexels-photo-9594701.jpeg?auto=compress&cs=tinysrgb&w=200',
          artisan: 'Priya Sharma',
          quantity: 2,
          price: 2499
        },
        {
          id: '2',
          name: 'Blue Pottery Decorative Vase',
          image: 'https://images.pexels.com/photos/8447577/pexels-photo-8447577.jpeg?auto=compress&cs=tinysrgb&w=200',
          artisan: 'Rajesh Kumar',
          quantity: 1,
          price: 2899
        },
        {
          id: '3',
          name: 'Kundan Polki Earrings',
          image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=200',
          artisan: 'Meera Devi',
          quantity: 1,
          price: 8499
        }
      ],
      customer: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+91 98765 43210'
      },
      shipping: {
        address: {
          name: 'John Doe',
          line1: '123 Heritage Street',
          line2: 'Near Cultural Center',
          city: 'Mumbai',
          state: 'Maharashtra',
          zipCode: '400001',
          phone: '+91 98765 43210'
        }
      },
      payment: {
        method: 'Credit Card ending in 4242',
        status: 'completed',
        transactionId: 'TXN-ABC123DEF456'
      },
      summary: {
        subtotal: 13897,
        shipping: 0,
        taxes: 2501,
        discount: 1389,
        total: 15009
      },
      estimatedDelivery: 'December 20, 2024',
      placedAt: new Date().toISOString()
    };

    setTimeout(() => {
      setOrder(mockOrder);
      setLoading(false);
    }, 1000);
  }, [orderId]);

  const downloadInvoice = () => {
    // Invoice download logic
    console.log('Downloading invoice...');
  };

  const shareOrder = () => {
    // Share order logic
    if (navigator.share) {
      navigator.share({
        title: `My Sudori Order ${order?.orderNumber}`,
        text: 'Check out my handcrafted items from Sudori!',
        url: window.location.href
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="animate-pulse text-center">
              <div className="w-16 h-16 bg-warm-gray-200 rounded-full mx-auto mb-4"></div>
              <div className="h-8 bg-warm-gray-200 rounded w-64 mx-auto mb-2"></div>
              <div className="h-6 bg-warm-gray-200 rounded w-48 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        <div className="pt-20 pb-16 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-display font-bold text-warm-gray-900 mb-4">
              Order Not Found
            </h1>
            <p className="text-warm-gray-600 mb-8">
              The order you're looking for doesn't exist or has been removed.
            </p>
            <button 
              onClick={() => navigate('/marketplace')}
              className="btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Order Confirmed - {order.orderNumber} | Sudori</title>
        <meta name="description" content={`Your order ${order.orderNumber} has been confirmed. Thank you for supporting our artisan community.`} />
      </Helmet>

      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto container-padding">
            {/* Success Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-12 h-12 text-white" />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl lg:text-4xl font-display font-bold text-warm-gray-900 mb-4"
              >
                Order Confirmed!
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-lg text-warm-gray-600 mb-4"
              >
                Thank you for supporting our artisan community
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex items-center justify-center gap-2 text-warm-gray-500"
              >
                <span>Order ID:</span>
                <span className="font-mono font-semibold text-warm-gray-900">{order.orderNumber}</span>
              </motion.div>
            </motion.div>

            {/* Order Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Order Items */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-xl border border-warm-gray-200 p-6"
                >
                  <h2 className="text-xl font-semibold text-warm-gray-900 mb-6 flex items-center gap-2">
                    <Package className="w-5 h-5 text-saffron-500" />
                    Order Items
                  </h2>
                  
                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        className="flex gap-4 p-4 bg-warm-gray-50 rounded-lg"
                      >
                        <img 
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-warm-gray-900 mb-1">{item.name}</h3>
                          <p className="text-sm text-warm-gray-600 mb-2">by {item.artisan}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-warm-gray-500">Qty: {item.quantity}</span>
                            <span className="font-semibold text-warm-gray-900">
                              ₹{(item.price * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Delivery Information */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white rounded-xl border border-warm-gray-200 p-6"
                >
                  <h2 className="text-xl font-semibold text-warm-gray-900 mb-6 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-blue-500" />
                    Delivery Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-warm-gray-800 mb-3 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Shipping Address
                      </h3>
                      <div className="text-warm-gray-600 space-y-1">
                        <p>{order.shipping.address.name}</p>
                        <p>{order.shipping.address.line1}</p>
                        {order.shipping.address.line2 && <p>{order.shipping.address.line2}</p>}
                        <p>{order.shipping.address.city}, {order.shipping.address.state} {order.shipping.address.zipCode}</p>
                        <p className="flex items-center gap-1 mt-2">
                          <Phone className="w-3 h-3" />
                          {order.shipping.address.phone}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-warm-gray-800 mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Expected Delivery
                      </h3>
                      <div className="text-2xl font-bold text-saffron-600 mb-2">
                        {order.estimatedDelivery}
                      </div>
                      <p className="text-warm-gray-600 text-sm">
                        We'll send you tracking information once your order ships
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Order Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-wrap gap-4"
                >
                  <button 
                    onClick={() => navigate(`/track-order/${order.id}`)}
                    className="btn-primary"
                  >
                    <Package className="w-5 h-5" />
                    Track Order
                  </button>
                  
                  <button 
                    onClick={downloadInvoice}
                    className="btn-secondary"
                  >
                    <Download className="w-5 h-5" />
                    Download Invoice
                  </button>
                  
                  <button 
                    onClick={() => navigate('/marketplace')}
                    className="btn-ghost"
                  >
                    <Search className="w-5 h-5" />
                    Continue Shopping
                  </button>

                  <button 
                    onClick={shareOrder}
                    className="btn-ghost"
                  >
                    <Share2 className="w-5 h-5" />
                    Share Order
                  </button>
                </motion.div>
              </div>

              {/* Order Summary Sidebar */}
              <div className="space-y-6">
                {/* Order Summary */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-xl border border-warm-gray-200 p-6"
                >
                  <h3 className="text-lg font-semibold text-warm-gray-900 mb-4">
                    Order Summary
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-warm-gray-600">Subtotal</span>
                      <span>₹{order.summary.subtotal.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-warm-gray-600">Shipping</span>
                      <span>{order.summary.shipping === 0 ? 'Free' : `₹${order.summary.shipping}`}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-warm-gray-600">Taxes</span>
                      <span>₹{order.summary.taxes.toLocaleString()}</span>
                    </div>
                    
                    {order.summary.discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-₹{order.summary.discount.toLocaleString()}</span>
                      </div>
                    )}
                    
                    <hr className="border-warm-gray-200" />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Paid</span>
                      <span>₹{order.summary.total.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="pt-4 border-t border-warm-gray-200">
                    <h4 className="font-semibold text-warm-gray-800 mb-2 flex items-center gap-2">
                      <CreditCard className="w-4 h-4" />
                      Payment Method
                    </h4>
                    <div className="text-warm-gray-700 text-sm">
                      {order.payment.method}
                    </div>
                    <div className="text-xs text-warm-gray-500 mt-1">
                      Transaction ID: {order.payment.transactionId}
                    </div>
                  </div>
                </motion.div>

                {/* Support */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-gradient-to-br from-saffron-500 to-terracotta-500 rounded-xl text-white p-6"
                >
                  <h3 className="font-semibold mb-4">Need Help?</h3>
                  <p className="text-white/90 text-sm mb-6">
                    Our customer support team is here to help with any questions about your order.
                  </p>
                  <div className="space-y-3">
                    <button className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-3 rounded-lg transition-colors duration-200">
                      <MessageCircle className="w-4 h-4 inline mr-2" />
                      Chat with Support
                    </button>
                    <div className="text-center text-white/80 text-xs">
                      Available 24/7 • Response within 2 hours
                    </div>
                  </div>
                </motion.div>

                {/* Next Steps */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-blue-50 border border-blue-200 rounded-xl p-6"
                >
                  <h3 className="font-semibold text-blue-900 mb-4">What's Next?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span className="text-blue-800">We'll send you email updates as your order progresses</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span className="text-blue-800">Track your order anytime with the tracking link</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span className="text-blue-800">Leave a review after delivery to help other customers</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Artisan Thank You Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 bg-gradient-to-r from-saffron-50 to-terracotta-50 border border-saffron-200 rounded-xl p-8 text-center"
            >
              <h3 className="text-xl font-semibold text-warm-gray-900 mb-4">
                Thank You for Supporting Our Artisan Community! 🙏
              </h3>
              <p className="text-warm-gray-700 max-w-2xl mx-auto">
                Your purchase directly supports skilled artisans and helps preserve India's rich cultural heritage. 
                Each item is crafted with love and traditional techniques passed down through generations.
              </p>
              <div className="flex items-center justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-warm-gray-600">Rated 4.9/5 by 10,000+ customers</span>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OrderConfirmationPage;