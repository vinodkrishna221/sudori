import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Truck, Package, Eye, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface OrderSummaryCardProps {
  order: {
    id: string;
    orderNumber: string;
    status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    date: string;
    total: number;
    items: Array<{
      id: string;
      name: string;
      image: string;
      quantity: number;
    }>;
    estimatedDelivery?: string;
  };
}

const OrderSummaryCard: React.FC<OrderSummaryCardProps> = ({ order }) => {
  const navigate = useNavigate();
  
  const getStatusDetails = (status: string) => {
    switch (status) {
      case 'pending':
        return { 
          icon: <Clock className="w-4 h-4" />, 
          text: 'Pending Confirmation',
          color: 'text-amber-600 bg-amber-100'
        };
      case 'confirmed':
        return { 
          icon: <CheckCircle className="w-4 h-4" />, 
          text: 'Order Confirmed',
          color: 'text-blue-600 bg-blue-100'
        };
      case 'processing':
        return { 
          icon: <Package className="w-4 h-4" />, 
          text: 'Processing',
          color: 'text-purple-600 bg-purple-100'
        };
      case 'shipped':
        return { 
          icon: <Truck className="w-4 h-4" />, 
          text: 'Shipped',
          color: 'text-green-600 bg-green-100'
        };
      case 'delivered':
        return { 
          icon: <CheckCircle className="w-4 h-4" />, 
          text: 'Delivered',
          color: 'text-green-700 bg-green-100'
        };
      case 'cancelled':
        return { 
          icon: <Clock className="w-4 h-4" />, 
          text: 'Cancelled',
          color: 'text-red-600 bg-red-100'
        };
      default:
        return { 
          icon: <Clock className="w-4 h-4" />, 
          text: 'Processing',
          color: 'text-warm-gray-600 bg-warm-gray-100'
        };
    }
  };

  const statusDetails = getStatusDetails(order.status);

  const handleViewDetails = () => {
    navigate(`/customer/orders/${order.id}`);
  };

  const handleTrackOrder = () => {
    navigate(`/track-order/${order.id}`);
  };

  return (
    <div className="bg-white rounded-xl border border-warm-gray-200 p-6 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="font-mono text-xs text-warm-gray-500">#{order.orderNumber}</span>
          <div className="flex items-center gap-2 mt-1">
            <span className={`px-2 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 ${statusDetails.color}`}>
              {statusDetails.icon}
              {statusDetails.text}
            </span>
            <span className="text-sm text-warm-gray-500">{order.date}</span>
          </div>
        </div>
        <div className="text-right">
          <span className="font-semibold text-lg text-warm-gray-900">₹{order.total.toLocaleString()}</span>
          {order.estimatedDelivery && (
            <div className="text-xs text-warm-gray-500 mt-1">
              Expected: {order.estimatedDelivery}
            </div>
          )}
        </div>
      </div>
      
      {/* Order Items Preview */}
      <div className="flex items-center space-x-2 mb-4">
        {order.items.slice(0, 3).map((item, index) => (
          <img 
            key={item.id}
            src={item.image} 
            alt={item.name}
            className="w-12 h-12 rounded-lg object-cover border border-warm-gray-100"
          />
        ))}
        {order.items.length > 3 && (
          <div className="w-12 h-12 rounded-lg bg-warm-gray-100 flex items-center justify-center text-warm-gray-500">
            +{order.items.length - 3}
          </div>
        )}
      </div>
      
      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-warm-gray-500">
          {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={handleViewDetails}
            className="btn-secondary text-sm px-3 py-1.5"
          >
            <Eye className="w-3.5 h-3.5 mr-1" />
            Details
          </button>
          
          {(order.status === 'shipped' || order.status === 'processing') && (
            <button 
              onClick={handleTrackOrder}
              className="btn-primary text-sm px-3 py-1.5"
            >
              <Truck className="w-3.5 h-3.5 mr-1" />
              Track
            </button>
          )}
          
          {order.status === 'delivered' && (
            <button className="btn-primary text-sm px-3 py-1.5">
              <RotateCcw className="w-3.5 h-3.5 mr-1" />
              Reorder
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryCard;