import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  Package, MapPin, Truck, CheckCircle, Clock, Phone, Mail,
  MessageCircle, RotateCcw, Download, Share2, ArrowLeft, Play
} from 'lucide-react';
import { orderTracking } from '../mockData/orderData';

interface TrackingEvent {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  location?: string;
  completed: boolean;
  current: boolean;
  image?: string;
}

interface OrderTracking {
  orderId: string;
  orderNumber: string;
  status: 'confirmed' | 'crafting' | 'quality_check' | 'shipped' | 'out_for_delivery' | 'delivered';
  currentStatus: {
    title: string;
    description: string;
    estimatedDate?: string;
  };
  items: Array<{
    id: string;
    name: string;
    image: string;
    artisan: string;
    quantity: number;
  }>;
  shipping: {
    address: {
      name: string;
      line1: string;
      line2?: string;
      city: string;
      state: string;
      zipCode: string;
    };
    carrier: {
      name: string;
      trackingNumber: string;
      contact: string;
    };
  };
  timeline: TrackingEvent[];
  estimatedDelivery: string;
  lastUpdate: string;
}

const OrderTrackingPage: React.FC = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [tracking, setTracking] = useState<OrderTracking | null>(null);
  const [loading, setLoading] = useState(true);
  const [liveUpdates, setLiveUpdates] = useState(true);

  useEffect(() => {
    // Mock tracking data - replace with API call
    setTimeout(() => {
      // Clone the orderTracking to avoid reference issues and use the order ID from URL
      const trackingData = { 
        ...orderTracking,
        orderId: orderId || orderTracking.orderId,
        orderNumber: orderId || orderTracking.orderNumber
      };
      setTracking(trackingData);
      setLoading(false);
    }, 1000);
  }, [orderId]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'crafting':
        return <Package className="w-6 h-6 text-saffron-500" />;
      case 'quality_check':
        return <CheckCircle className="w-6 h-6 text-purple-500" />;
      case 'shipped':
        return <Truck className="w-6 h-6 text-blue-500" />;
      case 'out_for_delivery':
        return <Truck className="w-6 h-6 text-green-500" />;
      case 'delivered':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      default:
        return <Clock className="w-6 h-6 text-warm-gray-500" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        <div className="pt-20 pb-16">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="animate-pulse">
              <div className="h-8 bg-warm-gray-200 rounded w-64 mb-8"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  <div className="h-32 bg-warm-gray-200 rounded-xl"></div>
                  <div className="h-64 bg-warm-gray-200 rounded-xl"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-48 bg-warm-gray-200 rounded-xl"></div>
                  <div className="h-32 bg-warm-gray-200 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!tracking) {
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
        <title>Track Order - {tracking.orderNumber} | Sudori</title>
        <meta name="description" content={`Track your order ${tracking.orderNumber}. Current status: ${tracking.currentStatus.title}.`} />
      </Helmet>

      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        
        <main className="pt-20 pb-16">
          <div className="max-w-6xl mx-auto container-padding">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-warm-gray-600 hover:text-saffron-600 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Orders
            </button>

            {/* Tracking Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl border border-warm-gray-200 p-6 mb-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-warm-gray-900 mb-2">
                    Track Your Order
                  </h1>
                  <p className="text-warm-gray-600">
                    Order ID: <span className="font-mono font-semibold">{tracking.orderNumber}</span>
                  </p>
                  <p className="text-sm text-warm-gray-500">
                    Last updated {tracking.lastUpdate}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => setLiveUpdates(!liveUpdates)}
                    className={`btn-secondary text-sm ${liveUpdates ? 'bg-green-50 text-green-700 border-green-200' : ''}`}
                  >
                    {liveUpdates ? 'Live Updates On' : 'Enable Live Updates'}
                  </button>
                  
                  <button 
                    onClick={() => shareOrder()}
                    className="btn-ghost text-sm"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>

              {/* Current Status */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="status-icon">
                    {getStatusIcon(tracking.status)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900">
                      {tracking.currentStatus.title}
                    </h3>
                    <p className="text-blue-700">
                      {tracking.currentStatus.description}
                    </p>
                    {tracking.currentStatus.estimatedDate && (
                      <p className="text-sm text-blue-600 mt-1">
                        Expected delivery: {tracking.currentStatus.estimatedDate}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Timeline and Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Tracking Timeline */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-xl border border-warm-gray-200 p-6"
                >
                  <h2 className="text-xl font-semibold text-warm-gray-900 mb-6">
                    Order Journey
                  </h2>

                  <div className="space-y-8">
                    {tracking.timeline.map((event, index) => (
                      <div 
                        key={event.id}
                        className={`relative pl-8 ${index < tracking.timeline.length - 1 ? 'pb-8' : ''}`}
                      >
                        {/* Timeline Line */}
                        {index < tracking.timeline.length - 1 && (
                          <div className={`absolute left-3 top-3 bottom-0 w-0.5 ${
                            event.completed ? 'bg-saffron-500' : 'bg-warm-gray-200'
                          }`} />
                        )}

                        {/* Timeline Dot */}
                        <div className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center ${
                          event.completed 
                            ? 'bg-saffron-500 text-white' 
                            : event.current
                              ? 'bg-blue-500 text-white animate-pulse'
                              : 'bg-warm-gray-200 text-warm-gray-500'
                        }`}>
                          {event.completed ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-current" />
                          )}
                        </div>

                        <div className={`${event.current ? 'bg-blue-50 p-4 rounded-lg' : ''}`}>
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className={`font-semibold ${
                                event.current ? 'text-blue-900' : 'text-warm-gray-900'
                              }`}>
                                {event.title}
                              </h3>
                              <p className={event.current ? 'text-blue-700' : 'text-warm-gray-600'}>
                                {event.description}
                              </p>
                            </div>
                            <div className="text-sm text-warm-gray-500">
                              {event.timestamp}
                            </div>
                          </div>

                          {event.location && (
                            <div className="mt-2 flex items-center gap-1 text-sm text-warm-gray-500">
                              <MapPin className="w-3 h-3" />
                              {event.location}
                            </div>
                          )}

                          {event.image && (
                            <div className="mt-3">
                              <div className="relative inline-block">
                                <img
                                  src={event.image}
                                  alt="Tracking update"
                                  className="w-24 h-24 object-cover rounded-lg"
                                />
                                <button className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                                  <Play className="w-8 h-8 text-white" />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Delivery Details */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white rounded-xl border border-warm-gray-200 p-6"
                >
                  <h2 className="text-xl font-semibold text-warm-gray-900 mb-6">
                    Delivery Details
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-warm-gray-800 mb-3 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-saffron-500" />
                        Shipping Address
                      </h3>
                      <div className="text-warm-gray-600 space-y-1">
                        <p>{tracking.shipping.address.name}</p>
                        <p>{tracking.shipping.address.line1}</p>
                        {tracking.shipping.address.line2 && <p>{tracking.shipping.address.line2}</p>}
                        <p>{tracking.shipping.address.city}, {tracking.shipping.address.state} {tracking.shipping.address.zipCode}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-warm-gray-800 mb-3 flex items-center gap-2">
                        <Truck className="w-4 h-4 text-blue-500" />
                        Shipping Carrier
                      </h3>
                      <div className="text-warm-gray-600 space-y-2">
                        <p className="font-medium">{tracking.shipping.carrier.name}</p>
                        <p>Tracking: {tracking.shipping.carrier.trackingNumber}</p>
                        <p>Contact: {tracking.shipping.carrier.contact}</p>
                        <button 
                          className="text-blue-600 hover:text-blue-700 text-sm"
                        >
                          Track on {tracking.shipping.carrier.name} →
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Order Items */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-xl border border-warm-gray-200 p-6"
                >
                  <h3 className="text-lg font-semibold text-warm-gray-900 mb-4">
                    Order Items
                  </h3>
                  
                  <div className="space-y-3">
                    {tracking.items.map((item, index) => (
                      <div key={index} className="flex gap-3 p-3 bg-warm-gray-50 rounded-lg">
                        <img 
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1">
                          <h4 className="font-medium text-warm-gray-900 text-sm">
                            {item.name}
                          </h4>
                          <p className="text-xs text-warm-gray-600">
                            by {item.artisan}
                          </p>
                          <div className="text-xs text-warm-gray-500 mt-1">
                            Qty: {item.quantity}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Contact Support */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white rounded-xl border border-warm-gray-200 p-6"
                >
                  <h3 className="text-lg font-semibold text-warm-gray-900 mb-4">
                    Need Help?
                  </h3>
                  
                  <div className="space-y-3">
                    <button className="w-full btn-secondary">
                      <MessageCircle className="w-4 h-4" />
                      Chat with Support
                    </button>
                    
                    <button className="w-full btn-ghost">
                      <Phone className="w-4 h-4" />
                      Call Support
                    </button>
                    
                    <button className="w-full btn-ghost">
                      <Mail className="w-4 h-4" />
                      Email Support
                    </button>
                  </div>

                  <div className="mt-4 p-3 bg-warm-gray-50 rounded-lg text-sm text-warm-gray-600">
                    <p>Support Hours: Mon-Sat 9AM-8PM</p>
                    <p>Phone: +91-XXXX-XXXXXX</p>
                    <p>Email: support@sudori.com</p>
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white rounded-xl border border-warm-gray-200 p-6"
                >
                  <h3 className="text-lg font-semibold text-warm-gray-900 mb-4">
                    Quick Actions
                  </h3>
                  
                  <div className="space-y-3">
                    <button className="w-full btn-ghost">
                      <Package className="w-4 h-4" />
                      View All Orders
                    </button>
                    
                    <button className="w-full btn-ghost">
                      <RotateCcw className="w-4 h-4" />
                      Reorder Items
                    </button>
                    
                    <button className="w-full btn-ghost">
                      <Download className="w-4 h-4" />
                      Download Invoice
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OrderTrackingPage;