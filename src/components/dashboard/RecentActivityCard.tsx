import React from 'react';
import { 
  Package, Heart, Star, ShoppingCart, Clock, CheckCircle,
  User, DollarSign, MessageSquare, Eye, Award
} from 'lucide-react';

interface Activity {
  id: string;
  type: 'order' | 'wishlist' | 'review' | 'cart' | 'view' | 'sale' | 'message' | 'payment' | 'award';
  title: string;
  description: string;
  time: string;
  link?: string;
}

interface RecentActivityCardProps {
  activities: Activity[];
  userType: 'customer' | 'artisan';
}

const RecentActivityCard: React.FC<RecentActivityCardProps> = ({ activities, userType }) => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'order':
        return <Package className="w-4 h-4 text-blue-600" />;
      case 'wishlist':
        return <Heart className="w-4 h-4 text-red-600" />;
      case 'review':
        return <Star className="w-4 h-4 text-yellow-600" />;
      case 'cart':
        return <ShoppingCart className="w-4 h-4 text-green-600" />;
      case 'view':
        return <Eye className="w-4 h-4 text-purple-600" />;
      case 'sale':
        return <DollarSign className="w-4 h-4 text-green-600" />;
      case 'message':
        return <MessageSquare className="w-4 h-4 text-blue-600" />;
      case 'payment':
        return <DollarSign className="w-4 h-4 text-green-600" />;
      case 'award':
        return <Award className="w-4 h-4 text-amber-600" />;
      default:
        return <Clock className="w-4 h-4 text-warm-gray-600" />;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-warm-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-warm-gray-900">Recent Activity</h3>
        <button className="text-sm text-saffron-600 hover:text-saffron-700">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.length === 0 ? (
          <div className="text-center py-6 text-warm-gray-500">
            <Clock className="w-8 h-8 mx-auto mb-2 text-warm-gray-400" />
            <p>No recent activity to show</p>
          </div>
        ) : (
          activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-warm-gray-50 rounded-full flex items-center justify-center">
                {getActivityIcon(activity.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-warm-gray-900">{activity.title}</p>
                <p className="text-xs text-warm-gray-500">{activity.description}</p>
              </div>
              
              <div className="flex-shrink-0 text-xs text-warm-gray-500 whitespace-nowrap">
                {activity.time}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentActivityCard;