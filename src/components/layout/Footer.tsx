import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Heart 
} from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Marketplace',
      links: [
        { name: 'Browse Products', href: '/marketplace' },
        { name: 'Categories', href: '/categories' },
        { name: 'Featured Items', href: '/featured' },
        { name: 'New Arrivals', href: '/new-arrivals' },
      ]
    },
    {
      title: 'Artisans',
      links: [
        { name: 'Join as Artisan', href: '/join-artisan' },
        { name: 'Artisan Directory', href: '/artisans' },
        { name: 'Success Stories', href: '/stories' },
        { name: 'Resources', href: '/resources' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Shipping Info', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/mission' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-warm-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-saffron-500 to-terracotta-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-display font-bold">Sudori</span>
            </Link>
            
            <p className="text-warm-gray-300 mb-6 leading-relaxed">
              Connecting you with India's finest artisans and their authentic handcrafted treasures. 
              Every purchase supports traditional craftsmanship and preserves cultural heritage.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-saffron-400" />
                <span className="text-warm-gray-300">hello@sudori.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-saffron-400" />
                <span className="text-warm-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-saffron-400" />
                <span className="text-warm-gray-300">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-warm-gray-300 hover:text-saffron-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-warm-gray-800">
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-2">Stay Connected</h3>
            <p className="text-warm-gray-300 mb-4">
              Get updates on new collections and artisan stories
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-warm-gray-800 border border-warm-gray-700 rounded-l-lg focus:outline-none focus:border-saffron-500 text-white placeholder-warm-gray-400"
              />
              <button className="px-6 py-3 bg-saffron-500 hover:bg-saffron-600 rounded-r-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-warm-gray-800">
        <div className="max-w-7xl mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-warm-gray-400">
              <span>© 2024 Sudori. Made with</span>
              <Heart className="w-4 h-4 text-terracotta-500 fill-current" />
              <span>for Indian craftsmanship</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 text-warm-gray-400 hover:text-saffron-400 hover:bg-warm-gray-800 rounded-lg transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <Link 
                to="/privacy" 
                className="text-warm-gray-400 hover:text-saffron-400 transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link 
                to="/terms" 
                className="text-warm-gray-400 hover:text-saffron-400 transition-colors duration-200"
              >
                Terms
              </Link>
              <Link 
                to="/cookies" 
                className="text-warm-gray-400 hover:text-saffron-400 transition-colors duration-200"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;