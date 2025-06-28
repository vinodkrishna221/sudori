import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatCard from '../../components/dashboard/StatCard';
import ProductSummaryCard from '../../components/dashboard/ProductSummaryCard';
import OrderSummaryCard from '../../components/dashboard/OrderSummaryCard';
import RecentActivityCard from '../../components/dashboard/RecentActivityCard';
import { 
  IndianRupee, Package, Users, Percent, ShoppingBag, Plus,
  ChevronRight, BarChart3, MessageSquare, Zap, TrendingUp, Award
} from 'lucide-react';
import { artisanDashboardData } from '../../mockData/dashboardData';

const ArtisanDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  
  const { stats, pendingOrders, topProducts, recentActivities } = artisanDashboardData;

  const statCards = [
    { 
      title: 'Today\'s Revenue', 
      value: stats.todayRevenue, 
      change: { value: 8, isPositive: true }, 
      icon: <IndianRupee className="w-5 h-5" />, 
      color: 'success' 
    },
    { 
      title: 'Active Orders', 
      value: stats.activeOrders, 
      change: { value: 12, isPositive: true }, 
      icon: <Package className="w-5 h-5" />, 
      color: 'primary',
      link: '/artisan/orders'
    },
    { 
      title: 'Products Listed', 
      value: stats.productsListed, 
      change: { value: 3, isPositive: true }, 
      icon: <ShoppingBag className="w-5 h-5" />, 
      color: 'info',
      link: '/artisan/products'
    },
    { 
      title: 'Conversion Rate', 
      value: stats.conversionRate, 
      change: { value: 0.5, isPositive: false }, 
      icon: <Percent className="w-5 h-5" />, 
      color: 'warning' 
    }
  ];

  const quickActions = [
    { name: 'Add New Product', icon: Plus, href: '/artisan/products/add', color: 'bg-emerald-500' },
    { name: 'Process Orders', icon: Package, href: '/artisan/orders', color: 'bg-blue-500' },
    { name: 'View Analytics', icon: BarChart3, href: '/artisan/analytics', color: 'bg-purple-500' },
    { name: 'Customer Messages', icon: MessageSquare, href: '/artisan/messages', color: 'bg-amber-500' }
  ];

  return (
    <DashboardLayout 
      title="Artisan Dashboard" 
      subtitle="Welcome back, Priya! Here's an overview of your craft business."
      userType="artisan"
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

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.name}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              onClick={() => navigate(action.href)}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${action.color} text-white`}>
                  <action.icon className="w-6 h-6" />
                </div>
                <span className="font-medium text-warm-gray-900">{action.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pending Orders */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-warm-gray-900">Pending Orders</h2>
                <button 
                  onClick={() => navigate('/artisan/orders')}
                  className="text-sm text-saffron-600 hover:text-saffron-700 flex items-center"
                >
                  View All Orders
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              {pendingOrders.map((order) => (
                <OrderSummaryCard key={order.id} order={order} />
              ))}
            </div>

            {/* Top Products */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-warm-gray-900">Top Products</h2>
                <button 
                  onClick={() => navigate('/artisan/products')}
                  className="text-sm text-saffron-600 hover:text-saffron-700 flex items-center"
                >
                  Manage Products
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              {topProducts.map((product) => (
                <ProductSummaryCard key={product.id} product={product} userType="artisan" />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <RecentActivityCard activities={recentActivities} userType="artisan" />
            
            {/* Revenue Snapshot */}
            <div className="bg-white rounded-xl border border-warm-gray-200 p-6">
              <h3 className="font-semibold text-warm-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                Revenue Snapshot
              </h3>
              
              <div className="space-y-3">
                <div className="bg-warm-gray-50 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-warm-gray-600">Today</span>
                  <span className="font-semibold text-warm-gray-900">₹12,450</span>
                </div>
                <div className="bg-warm-gray-50 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-warm-gray-600">This Week</span>
                  <span className="font-semibold text-warm-gray-900">₹56,780</span>
                </div>
                <div className="bg-warm-gray-50 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-warm-gray-600">This Month</span>
                  <span className="font-semibold text-warm-gray-900">₹2,45,890</span>
                </div>
                
                <button 
                  onClick={() => navigate('/artisan/analytics')}
                  className="w-full btn-secondary text-sm mt-2"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Detailed Analytics
                </button>
              </div>
            </div>
            
            {/* Tips & Insights */}
            <div className="bg-gradient-to-br from-saffron-500 to-terracotta-500 rounded-xl text-white p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Business Growth Tips
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-medium flex items-center mb-2">
                    <Award className="w-4 h-4 mr-2" />
                    Improve Your Product Photos
                  </h4>
                  <p className="text-sm text-white/90">
                    Products with high-quality images sell 32% better. Try using natural lighting and multiple angles.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-medium flex items-center mb-2">
                    <Users className="w-4 h-4 mr-2" />
                    Respond to Customer Inquiries
                  </h4>
                  <p className="text-sm text-white/90">
                    You have 3 unread messages. Fast responses increase your conversion rate by 40%.
                  </p>
                </div>
                
                <button className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 rounded-lg transition-colors mt-2">
                  View All Tips
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ArtisanDashboardPage;