import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';
import OrderSummaryCard from '../../components/dashboard/OrderSummaryCard';
import { Search, Filter, ChevronDown, Calendar, Download, CheckSquare, Truck } from 'lucide-react';
import { orders } from '../../mockData/orderData';

interface Order {
  id: string;
  orderNumber: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  total: number;
  customer: {
    name: string;
    location: string;
    avatar: string;
  };
  items: Array<{
    id: string;
    name: string;
    image: string;
    quantity: number;
  }>;
  estimatedDelivery?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

const ArtisanOrdersPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  
  // Filter orders based on active tab
  const filteredOrders = orders.filter(order => {
    if (activeTab === 'all') return true;
    return activeTab === order.status;
  }).filter(order => {
    if (!searchTerm) return true;
    return order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
           order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  const handleSelectOrder = (orderId: string) => {
    if (selectedOrders.includes(orderId)) {
      setSelectedOrders(selectedOrders.filter(id => id !== orderId));
    } else {
      setSelectedOrders([...selectedOrders, orderId]);
    }
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === filteredOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrders.map(order => order.id));
    }
  };

  const handleBulkAction = (action: string) => {
    // Implement bulk action logic
    console.log(`Bulk ${action} on`, selectedOrders);
    setSelectedOrders([]);
  };

  const getOrdersByStatus = (status: string) => {
    return orders.filter(order => order.status === status).length;
  };

  return (
    <DashboardLayout
      title="Orders"
      subtitle="Manage and fulfill customer orders"
      userType="artisan"
    >
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 border border-warm-gray-200">
            <div className="text-center">
              <p className="text-xs text-warm-gray-500 mb-1">Pending</p>
              <p className="text-2xl font-bold text-amber-600">{getOrdersByStatus('pending')}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-warm-gray-200">
            <div className="text-center">
              <p className="text-xs text-warm-gray-500 mb-1">Processing</p>
              <p className="text-2xl font-bold text-blue-600">{getOrdersByStatus('processing') + getOrdersByStatus('confirmed')}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-warm-gray-200">
            <div className="text-center">
              <p className="text-xs text-warm-gray-500 mb-1">Shipped</p>
              <p className="text-2xl font-bold text-green-600">{getOrdersByStatus('shipped')}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-warm-gray-200">
            <div className="text-center">
              <p className="text-xs text-warm-gray-500 mb-1">Delivered</p>
              <p className="text-2xl font-bold text-green-700">{getOrdersByStatus('delivered')}</p>
            </div>
          </div>
        </div>
        
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
          {['all', 'pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'].map((status) => (
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
        
        {/* Bulk Actions (visible when items are selected) */}
        {selectedOrders.length > 0 && (
          <div className="bg-saffron-50 border border-saffron-200 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckSquare className="w-5 h-5 text-saffron-600" />
              <span className="font-medium text-warm-gray-900">
                {selectedOrders.length} order{selectedOrders.length > 1 ? 's' : ''} selected
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                className="btn-primary text-sm py-1.5"
                onClick={() => handleBulkAction('process')}
              >
                Process Orders
              </button>
              <button 
                className="btn-secondary text-sm py-1.5"
                onClick={() => handleBulkAction('ship')}
              >
                <Truck className="w-4 h-4 mr-1" />
                Mark as Shipped
              </button>
              <button 
                onClick={() => setSelectedOrders([])}
                className="p-2 text-warm-gray-500 hover:bg-white rounded-full transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
        
        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.length > 0 ? (
            <>
              {/* Select All Option */}
              <div className="flex items-center">
                <label className="flex items-center text-sm text-warm-gray-600">
                  <input
                    type="checkbox"
                    checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                    onChange={handleSelectAll}
                    className="w-4 h-4 rounded text-saffron-500 focus:ring-saffron-500 mr-2"
                  />
                  Select All
                </label>
                
                {selectedOrders.length > 0 && (
                  <span className="ml-4 text-sm text-warm-gray-600">
                    {selectedOrders.length} of {filteredOrders.length} selected
                  </span>
                )}
              </div>
              
              {/* Order Items */}
              {filteredOrders.map((order) => (
                <div key={order.id} className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedOrders.includes(order.id)}
                    onChange={() => handleSelectOrder(order.id)}
                    className="w-5 h-5 rounded text-saffron-500 focus:ring-saffron-500 mr-3"
                  />
                  <div className="flex-1">
                    <OrderSummaryCard order={order} />
                  </div>
                </div>
              ))}
            </>
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
                    : "You haven't received any orders yet"
                }
              </p>
              <button className="btn-primary">
                Browse Orders
              </button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ArtisanOrdersPage;