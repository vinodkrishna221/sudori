import React from 'react';
import { motion } from 'framer-motion';
import { Users, TreePine, Heart, Award, TrendingUp, Globe, Shield, Truck } from 'lucide-react';

const ImpactSection: React.FC = () => {
  const impactMetrics = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Artisan Families Empowered',
      description: 'Direct income generation for traditional craftspeople',
      color: 'text-saffron-500',
      bgColor: 'bg-saffron-100',
    },
    {
      icon: TreePine,
      value: '85%',
      label: 'Lower Carbon Footprint',
      description: 'Compared to mass production manufacturing',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
    },
    {
      icon: Heart,
      value: '500+',
      label: 'Ancient Traditions Preserved',
      description: 'Craft techniques passed down through generations',
      color: 'text-terracotta-500',
      bgColor: 'bg-terracotta-100',
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Artisan Income Growth',
      description: 'Average increase since joining Sudori',
      color: 'text-heritage-blue-500',
      bgColor: 'bg-heritage-blue-100',
    },
  ];

  const sustainabilityFeatures = [
    {
      title: 'Eco-Friendly Materials',
      description: 'Natural, sustainable materials sourced responsibly',
      icon: TreePine,
    },
    {
      title: 'Fair Trade Practices',
      description: 'Ensuring fair wages and working conditions',
      icon: Heart,
    },
    {
      title: 'Cultural Preservation',
      description: 'Keeping traditional crafts alive for future generations',
      icon: Award,
    },
    {
      title: 'Global Impact',
      description: 'Connecting local artisans with worldwide customers',
      icon: Globe,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-br from-heritage-blue-50 to-saffron-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-saffron-200/20 to-terracotta-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-heritage-blue-200/20 to-saffron-200/20 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4"
          >
            Social Impact
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-warm-gray-900 mb-4">
            Creating <span className="text-gradient bg-gradient-to-r from-green-600 to-heritage-blue-500 bg-clip-text text-transparent">Positive Impact</span>
          </h2>
          <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto">
            Every purchase supports artisan communities, preserves cultural heritage, 
            and contributes to sustainable development
          </p>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 ${metric.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-warm-gray-900 mb-2"
              >
                {metric.value}
              </motion.div>
              
              <h3 className="font-semibold text-lg text-warm-gray-900 mb-2">
                {metric.label}
              </h3>
              
              <p className="text-warm-gray-600 text-sm">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sustainability Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-warm-gray-900 mb-4">
              Our Commitment to Sustainability
            </h3>
            <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
              We believe in responsible business practices that benefit artisans, 
              customers, and the planet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-gradient-to-br from-saffron-500 to-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-200"
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <h4 className="font-semibold text-warm-gray-900 mb-2">
                  {feature.title}
                </h4>
                
                <p className="text-warm-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Stories Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-saffron-500 to-terracotta-500 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <pattern id="impact-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#impact-pattern)" className="text-white"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-bold mb-4">
                Be Part of the Change
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join thousands of customers who are making a difference in artisan lives 
                while bringing authentic Indian craftsmanship to their homes
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-saffron-600 px-8 py-3 rounded-xl font-semibold hover:bg-warm-gray-100 transition-colors duration-200"
                >
                  Read Impact Stories
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-saffron-600 transition-all duration-200"
                >
                  Join Our Mission
                </motion.button>
              </div>

              {/* Trust Badges */}
              <div className="flex justify-center items-center gap-8 mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2 text-white/90">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Secure & Trusted</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Truck className="w-5 h-5" />
                  <span className="text-sm">Global Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Award className="w-5 h-5" />
                  <span className="text-sm">Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;