import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import OrderSummaryCard from '../../components/dashboard/OrderSummaryCard';
import { Search, Filter, ChevronDown, Calendar, Download } from 'lucide-react';
import { orders } from '../../mockData/orderData';

const CustomerOrdersPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter orders based on active tab
  const filteredOrders = orders.filter(order => {
    if (activeTab === 'all') return true;
    return activeTab === order.status;
  }).filter(order => {
    if (!searchTerm) return true;
    return order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
           order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  return (
    <DashboardLayout
      title="My Orders"
      subtitle="Track and manage your purchases"
      userType="customer"
    >
      <div className="space-y-6">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-gray-400" />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button className="btn-ghost inline-flex items-center text-sm">
              <Filter className="w-4 h-4 mr-1" />
              Filter
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <button className="btn-ghost inline-flex items-center text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              Date Range
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <button className="btn-secondary inline-flex items-center text-sm">
              <Download className="w-4 h-4 mr-1" />
              Export
            </button>
          </div>
        </div>
        
        {/* Order Status Tabs */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-2 border-b border-warm-gray-200 pb-2">
          {['all', 'pending', 'confirmed', 'shipped', 'delivered', 'cancelled'].map((status) => (
            <button
              key={status}
              onClick={() => setActiveTab(status)}
              className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeTab === status
                  ? 'bg-saffron-100 text-saffron-700'
                  : 'text-warm-gray-600 hover:bg-warm-gray-100 hover:text-warm-gray-900'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
              {status === 'all' && ` (${orders.length})`}
            </button>
          ))}
        </div>
        
        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <OrderSummaryCard key={order.id} order={order} />
            ))
          ) : (
            <div className="bg-white rounded-xl border border-warm-gray-200 p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-warm-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-warm-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-warm-gray-900 mb-2">No orders found</h3>
              <p className="text-warm-gray-500 mb-6">
                {searchTerm 
                  ? `No orders matching "${searchTerm}"`
                  : activeTab !== 'all' 
                    ? `You don't have any ${activeTab} orders`
                    : "You haven't placed any orders yet"
                }
              </p>
              <button
                onClick={() => navigate('/marketplace')}
                className="btn-primary"
              >
                Explore Marketplace
              </button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerOrdersPage;