import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Gift, Calendar, Zap, Check, Send, Users, Globe } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const benefits = [
    {
      icon: Gift,
      title: '10% Welcome Discount',
      description: 'Exclusive offer on your first purchase',
    },
    {
      icon: Calendar,
      title: 'Early Access',
      description: 'Be first to see new collections',
    },
    {
      icon: Zap,
      title: 'Weekly Stories',
      description: 'Artisan features and craft insights',
    },
    {
      icon: Mail,
      title: 'Event Invites',
      description: 'Virtual workshops and cultural events',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-warm-gray-900 via-warm-gray-800 to-warm-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-saffron-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-terracotta-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4"
              >
                Stay Connected
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-display font-bold mb-4"
              >
                Stay Connected to
                <span className="block text-gradient bg-gradient-to-r from-saffron-400 to-marigold-400 bg-clip-text text-transparent">Indian Culture</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-warm-gray-300 leading-relaxed"
              >
                Get exclusive access to new collections, artisan stories, and cultural insights 
                delivered straight to your inbox
              </motion.p>
            </div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-saffron-500 to-terracotta-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-warm-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-6 text-sm text-warm-gray-400"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-saffron-400" />
                <span>25k+ subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-heritage-blue-400" />
                <span>50+ countries</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-saffron-100 to-terracotta-100 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-heritage-blue-100 to-saffron-100 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                {!isSubscribed ? (
                  <>
                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 bg-gradient-to-br from-saffron-500 to-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <Mail className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-display font-bold text-warm-gray-900 mb-2">
                        Join Our Community
                      </h3>
                      <p className="text-warm-gray-600">
                        15,000+ craft lovers already subscribed
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-warm-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-4 border border-warm-gray-300 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-200 text-warm-gray-900"
                          required
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isLoading || !email}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-saffron-500 to-terracotta-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Subscribing...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Join Our Community
                          </>
                        )}
                      </motion.button>
                    </form>

                    <p className="text-xs text-warm-gray-500 text-center mt-6">
                      By subscribing, you agree to our Privacy Policy and Terms of Service
                    </p>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <Check className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-display font-bold text-warm-gray-900 mb-4">
                      Welcome to Sudori!
                    </h3>
                    
                    <p className="text-warm-gray-600 mb-6">
                      Thank you for joining our community. Check your email for your 
                      welcome discount and first artisan story.
                    </p>
                    
                    <div className="bg-saffron-50 border border-saffron-200 rounded-xl p-4">
                      <p className="text-saffron-800 font-medium text-sm">
                        🎉 Your 10% discount code will arrive in 2-3 minutes
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsSubscribed(false)}
                      className="mt-4 text-saffron-600 hover:text-saffron-700 text-sm underline"
                    >
                      Subscribe another email
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 w-8 h-8 bg-saffron-500 rounded-full opacity-20"
            ></motion.div>
            
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-terracotta-500 rounded-full opacity-30"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;