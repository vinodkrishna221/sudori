import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatCard from '../../components/dashboard/StatCard';
import OrderSummaryCard from '../../components/dashboard/OrderSummaryCard';
import RecentActivityCard from '../../components/dashboard/RecentActivityCard';
import { 
  Package, Heart, CreditCard, Star, User, Settings, 
  TrendingUp, Gift, Calendar, Bell, ShoppingBag
} from 'lucide-react';
import { customerDashboardData } from '../../mockData/dashboardData';

const CustomerDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  
  const { stats, recentOrders, recentActivities, featuredProducts } = customerDashboardData;

  const statCards = [
    { 
      title: 'Active Orders', 
      value: stats.activeOrders.toString(), 
      change: { value: 15, isPositive: true }, 
      icon: <Package className="w-5 h-5" />, 
      color: 'primary',
      link: '/customer/orders'
    },
    { 
      title: 'Wishlist Items', 
      value: stats.wishlistItems.toString(), 
      icon: <Heart className="w-5 h-5" />, 
      color: 'info',
      link: '/customer/wishlist'
    },
    { 
      title: 'Total Spent', 
      value: `₹${stats.totalSpent.toLocaleString()}`, 
      change: { value: 8, isPositive: true }, 
      icon: <CreditCard className="w-5 h-5" />, 
      color: 'success' 
    },
    { 
      title: 'Loyalty Points', 
      value: stats.loyaltyPoints.toString(), 
      change: { value: 25, isPositive: true }, 
      icon: <Gift className="w-5 h-5" />, 
      color: 'warning' 
    }
  ];

  const quickLinks = [
    { name: 'My Orders', icon: Package, href: '/customer/orders' },
    { name: 'Wishlist', icon: Heart, href: '/customer/wishlist' },
    { name: 'Payment Methods', icon: CreditCard, href: '/customer/payment-methods' },
    { name: 'My Addresses', icon: User, href: '/customer/addresses' },
    { name: 'Account Settings', icon: Settings, href: '/customer/profile' },
  ];

  return (
    <DashboardLayout 
      title="Dashboard" 
      subtitle="Welcome back to your Sudori account"
      userType="customer"
    >
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat, index) => (
            <div key={index} onClick={() => stat.link && navigate(stat.link)} className={stat.link ? "cursor-pointer" : ""}>
              <StatCard
                title={stat.title}
                value={stat.value}
                change={stat.change}
                icon={stat.icon}
                color={stat.color}
                index={index}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-warm-gray-900">Recent Orders</h2>
              <button 
                onClick={() => navigate('/customer/orders')}
                className="text-sm text-saffron-600 hover:text-saffron-700"
              >
                View All Orders
              </button>
            </div>
            
            {recentOrders.map((order) => (
              <OrderSummaryCard key={order.id} order={order} />
            ))}

            {/* Recommendations */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-warm-gray-900 mb-4">Recommended for You</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredProducts.map((product) => (
                  <div 
                    key={product.id}
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="bg-white rounded-xl border border-warm-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div className="aspect-square">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-sm text-warm-gray-900 line-clamp-1">{product.name}</h3>
                      <p className="text-xs text-warm-gray-500">by {product.artisan}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-1">
                          <span className="font-semibold text-warm-gray-900">₹{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-xs line-through text-warm-gray-500">₹{product.originalPrice}</span>
                          )}
                        </div>
                        <button 
                          className="p-1 text-warm-gray-500 hover:text-red-600"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Add to wishlist logic
                          }}
                        >
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <RecentActivityCard activities={recentActivities} userType="customer" />
            
            {/* Quick Links */}
            <div className="bg-white rounded-xl border border-warm-gray-200 p-6">
              <h3 className="font-semibold text-warm-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => navigate(link.href)}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg text-warm-gray-600 hover:bg-saffron-50 hover:text-saffron-700 transition-colors"
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Upcoming Events */}
            <div className="bg-gradient-to-br from-saffron-500 to-terracotta-500 rounded-xl text-white p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">DEC 20</span>
                  <h4 className="font-medium mt-2">Traditional Weaving Workshop</h4>
                  <p className="text-sm text-white/80 mt-1">Learn authentic techniques from master artisans</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">DEC 25</span>
                  <h4 className="font-medium mt-2">Holiday Sale Begins</h4>
                  <p className="text-sm text-white/80 mt-1">Exclusive discounts on select handicrafts</p>
                </div>
                <button className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 rounded-lg transition-colors mt-2">
                  View All Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerDashboardPage;