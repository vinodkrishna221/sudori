import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if we're in a dashboard view to conditionally show dashboard links
  const isCustomerDashboard = location.pathname.includes('/customer/');
  const isArtisanDashboard = location.pathname.includes('/artisan/');
  const isDashboard = isCustomerDashboard || isArtisanDashboard;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Collections', href: '/collections' },
    { name: 'Artisans', href: '/artisans' },
    { name: 'About', href: '/about' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-saffron-500 to-terracotta-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-display font-bold text-warm-gray-900">
              Sudori
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Dashboard Links */}
            {isCustomerDashboard && (
              <>
                <Link
                  to="/customer/dashboard"
                  className="block text-warm-gray-700 hover:text-saffron-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/customer/orders"
                  className="block text-warm-gray-700 hover:text-saffron-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Orders
                </Link>
                <Link
                  to="/customer/wishlist"
                  className="block text-warm-gray-700 hover:text-saffron-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Wishlist
                </Link>
                <Link
                  to="/customer/profile"
                  className="block text-warm-gray-700 hover:text-saffron-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <div className="py-2 border-t border-warm-gray-200 my-2"></div>
              </>
            )}
            
            {isArtisanDashboard && (
              <>
                <Link
                  to="/artisan/dashboard"
                  className="block text-warm-gray-700 hover:text-saffron-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/artisan/products"
                  className="block text-warm-gray-700 hover:text-saffron-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Products
                </Link>
                <Link
                  to="/artisan/orders"
                  className="block text-warm-gray-700 hover:text-saffron-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Orders
                </Link>
                <Link
                  to="/artisan/inventory"
                  className="block text-warm-gray-700 hover:text-saffron-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Inventory
                </Link>
                <Link
                  to="/artisan/profile"
                  className="block text-warm-gray-700 hover:text-saffron-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <div className="py-2 border-t border-warm-gray-200 my-2"></div>
              </>
            )}

            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-warm-gray-700 hover:text-saffron-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-warm-gray-600 hover:text-saffron-600 hover:bg-saffron-50 rounded-lg transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="p-2 text-warm-gray-600 hover:text-saffron-600 hover:bg-saffron-50 rounded-lg transition-colors duration-200 relative"
              onClick={() => navigate('/cart')}
            >
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-terracotta-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button 
              className="p-2 text-warm-gray-600 hover:text-saffron-600 hover:bg-saffron-50 rounded-lg transition-colors duration-200 relative"
              onClick={() => navigate('/cart')}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-terracotta-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button className="btn-primary">
              <User className="w-4 h-4 mr-2" />
              {isDashboard ? 'My Account' : 'Sign In'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-warm-gray-600 hover:text-saffron-600 rounded-lg transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-warm-gray-200"
          >
            <div className="container-padding py-4">
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-warm-gray-700 hover:text-saffron-600 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-warm-gray-200">
                <div className="flex items-center space-x-4">
                  <button className="p-2 text-warm-gray-600 hover:text-saffron-600 rounded-lg">
                    <Search className="w-5 h-5" />
                  </button>
                  <button 
                    className="p-2 text-warm-gray-600 hover:text-saffron-600 rounded-lg relative"
                    onClick={() => {
                      navigate('/cart');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Heart className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-terracotta-500 text-white text-xs rounded-full flex items-center justify-center">
                      2
                    </span>
                  </button>
                  <button 
                    className="p-2 text-warm-gray-600 hover:text-saffron-600 rounded-lg relative"
                    onClick={() => {
                      navigate('/cart');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-terracotta-500 text-white text-xs rounded-full flex items-center justify-center">
                      3
                    </span>
                  </button>
                </div>
                <button className="btn-primary">
                  <User className="w-4 h-4 mr-2" />
                  {isDashboard ? 'My Account' : 'Sign In'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;