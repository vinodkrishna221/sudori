import React, { ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  User, Package, Heart, MapPin, CreditCard, Settings, 
  Bell, ShoppingCart, LogOut, Search, ChevronDown, Menu, X,
  LayoutGrid, ShoppingBag, BarChart3, Archive, MessageSquare, 
} from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  userType: 'customer' | 'artisan';
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  title, 
  subtitle, 
  userType 
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [notifications, setNotifications] = React.useState(3);
  
  // Mock user data
  const user = {
    name: userType === 'customer' ? 'John Doe' : 'Priya Sharma',
    email: userType === 'customer' ? 'john.doe@example.com' : 'priya.sharma@example.com',
    avatar: userType === 'customer' 
      ? 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400'
      : 'https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: userType,
  };

  // Navigation items based on user type
  const customerNavItems: NavItem[] = [
    { name: 'Dashboard', href: '/customer/dashboard', icon: LayoutGrid },
    { name: 'Orders', href: '/customer/orders', icon: Package, badge: 2 },
    { name: 'Wishlist', href: '/customer/wishlist', icon: Heart, badge: 5 },
    { name: 'Addresses', href: '/customer/addresses', icon: MapPin },
    { name: 'Payment Methods', href: '/customer/payment-methods', icon: CreditCard },
    { name: 'Profile', href: '/customer/profile', icon: User },
  ];
  
  const artisanNavItems: NavItem[] = [
    { name: 'Dashboard', href: '/artisan/dashboard', icon: LayoutGrid },
    { name: 'Products', href: '/artisan/products', icon: ShoppingBag, badge: 3 },
    { name: 'Orders', href: '/artisan/orders', icon: Package, badge: 4 },
    { name: 'Inventory', href: '/artisan/inventory', icon: Archive },
    { name: 'Messages', href: '/artisan/messages', icon: MessageSquare, badge: 2 },
    { name: 'Analytics', href: '/artisan/analytics', icon: BarChart3 },
    { name: 'Profile', href: '/artisan/profile', icon: User },
  ];

  const navItems = userType === 'customer' ? customerNavItems : artisanNavItems;

  const isCurrentPage = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-warm-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-warm-gray-200 fixed w-full z-20">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <button
              className="lg:hidden mr-2 p-2 text-warm-gray-500 hover:text-warm-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-saffron-500 to-terracotta-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-display font-bold text-warm-gray-900">
                Sudori
              </span>
            </Link>
          </div>

          {/* Type Switcher - in a real app this would be properly authenticated */}
          <div className="hidden md:block">
            <div className="bg-warm-gray-100 rounded-lg p-1 flex">
              <Link 
                to="/customer/dashboard"
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  userType === 'customer' 
                    ? 'bg-white text-saffron-700 shadow-sm' 
                    : 'text-warm-gray-600 hover:text-warm-gray-900'
                }`}
              >
                Customer View
              </Link>
              <Link
                to="/artisan/dashboard"
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  userType === 'artisan' 
                    ? 'bg-white text-saffron-700 shadow-sm' 
                    : 'text-warm-gray-600 hover:text-warm-gray-900'
                }`}
              >
                Artisan View
              </Link>
            </div>
          </div>

          {/* Header Right */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-warm-gray-600 hover:text-saffron-600 hover:bg-saffron-50 rounded-lg transition-colors relative">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
            
            <button className="p-2 text-warm-gray-600 hover:text-saffron-600 hover:bg-saffron-50 rounded-lg transition-colors">
              <Search className="h-5 w-5" />
            </button>
            
            {userType === 'customer' && (
              <button 
                className="p-2 text-warm-gray-600 hover:text-saffron-600 hover:bg-saffron-50 rounded-lg transition-colors relative"
                onClick={() => navigate('/cart')}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-saffron-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
            )}
            
            {/* User Menu */}
            <div className="relative">
              <button className="flex items-center space-x-2 rounded-full p-1 hover:bg-warm-gray-100 transition-colors">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="hidden lg:block text-sm font-medium text-warm-gray-700">{user.name}</span>
                <ChevronDown className="hidden lg:block h-4 w-4 text-warm-gray-500" />
              </button>
              
              {/* Dropdown would go here */}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 z-10 lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black/30" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="fixed inset-y-0 left-0 w-72 bg-white shadow-xl flex flex-col">
          {/* User Info */}
          <div className="p-6 border-b border-warm-gray-200">
            <div className="flex items-center space-x-3">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-warm-gray-900">{user.name}</h3>
                <p className="text-xs text-warm-gray-500">{user.email}</p>
              </div>
            </div>
            
            {/* Type Switcher - Mobile */}
            <div className="mt-4 bg-warm-gray-100 rounded-lg p-1 flex">
              <Link 
                to="/customer/dashboard"
                className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-medium text-center transition-colors ${
                  userType === 'customer' 
                    ? 'bg-white text-saffron-700 shadow-sm' 
                    : 'text-warm-gray-600 hover:text-warm-gray-900'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Customer
              </Link>
              <Link
                to="/artisan/dashboard"
                className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-medium text-center transition-colors ${
                  userType === 'artisan' 
                    ? 'bg-white text-saffron-700 shadow-sm' 
                    : 'text-warm-gray-600 hover:text-warm-gray-900'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Artisan
              </Link>
            </div>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isCurrentPage(item.href)
                    ? 'bg-saffron-50 text-saffron-700'
                    : 'text-warm-gray-600 hover:bg-warm-gray-100 hover:text-warm-gray-900'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span>{item.name}</span>
                {item.badge && (
                  <span className="ml-auto bg-saffron-100 text-saffron-700 px-2 py-0.5 rounded-full text-xs">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
          
          {/* Footer Actions */}
          <div className="p-4 border-t border-warm-gray-200">
            <button 
              onClick={() => navigate('/')}
              className="w-full flex items-center space-x-2 px-3 py-3 rounded-lg text-sm font-medium text-warm-gray-600 hover:bg-warm-gray-100 hover:text-warm-gray-900 transition-colors"
            >
              <LogOut className="h-5 w-5 flex-shrink-0" />
              <span>Return to Marketplace</span>
            </button>
          </div>
        </div>
      </div>

      {/* Page Content with Sidebar */}
      <div className="flex pt-16">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-64 fixed inset-y-0 pt-16 bg-white border-r border-warm-gray-200 z-10">
          <div className="h-full flex flex-col overflow-y-auto">
            {/* User Info */}
            <div className="p-6 border-b border-warm-gray-200">
              <div className="flex items-center space-x-3">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-warm-gray-900">{user.name}</h3>
                  <p className="text-xs text-warm-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex-1 p-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isCurrentPage(item.href)
                      ? 'bg-saffron-50 text-saffron-700'
                      : 'text-warm-gray-600 hover:bg-warm-gray-100 hover:text-warm-gray-900'
                  }`}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="ml-auto bg-saffron-100 text-saffron-700 px-2 py-0.5 rounded-full text-xs">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
            
            {/* Footer Actions */}
            <div className="p-4 border-t border-warm-gray-200">
              <Link 
                to="/"
                className="flex items-center space-x-2 px-3 py-3 rounded-lg text-sm font-medium text-warm-gray-600 hover:bg-warm-gray-100 hover:text-warm-gray-900 transition-colors"
              >
                <LogOut className="h-5 w-5 flex-shrink-0" />
                <span>Return to Marketplace</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:pl-64">
          <div className="py-8 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)]">
            {/* Page Header */}
            <div className="mb-8">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-warm-gray-900"
              >
                {title}
              </motion.h1>
              {subtitle && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-warm-gray-600"
                >
                  {subtitle}
                </motion.p>
              )}
            </div>

            {/* Page Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {children}
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;