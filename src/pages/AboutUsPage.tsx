import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import OptimizedImage from '../components/common/OptimizedImage';
import { Heart, Award, Globe, Users, Leaf, ShieldCheck, LucideHeart as LucideHandHeart, ArrowRight } from 'lucide-react';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Sudori - Connecting Artisans with the World</title>
        <meta name="description" content="Learn about Sudori's mission to connect talented Indian artisans with global consumers. Our journey, values, and commitment to sustainable craftsmanship." />
      </Helmet>

      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        
        <main className="pt-20 overflow-hidden">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-heritage-blue-600 to-saffron-600 text-white py-20 overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 paisley-pattern opacity-10"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto container-padding relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4"
                  >
                    Our Story
                  </motion.span>
                  
                  <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
                    Connecting <span className="text-gradient bg-gradient-to-r from-white to-saffron-200 bg-clip-text">Artisan Heritage</span> with Global Consumers
                  </h1>
                  
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    At Sudori, we're building bridges between India's most talented artisans and conscious consumers worldwide, preserving cultural heritage while creating sustainable livelihoods.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Award className="w-5 h-5" />
                      <span className="font-medium">Est. 2023</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Users className="w-5 h-5" />
                      <span className="font-medium">10,000+ Artisans</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Globe className="w-5 h-5" />
                      <span className="font-medium">50+ Countries</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                      src="/images/profile/artisans/priya sharma_cover.png"
                      alt="Indian artisan crafting traditional textile"
                      className="w-full h-[28rem] object-cover"
                    />
                  </div>
                  
                  {/* Floating Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl max-w-xs"
                  >
                    <div className="flex items-center gap-3">
                      <OptimizedImage
                        src="/images/profile/artisans/priya sharma.png"
                        alt="Artisan portrait"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-warm-gray-900">
                          "Sudori has connected me with customers who appreciate my craft."
                        </p>
                        <p className="text-sm text-warm-gray-600 mt-1">
                          — Priya Sharma, Master Weaver
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Our Mission */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto container-padding">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <OptimizedImage
                      src="/images/products/Whisk_storyboarde3d063b7068249a38d4a80ec.png"
                      alt="Traditional Indian textile"
                      className="w-full h-[24rem] object-cover"
                    />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-2xl bg-saffron-100 -z-10"></div>
                  <div className="absolute -top-8 -left-8 w-32 h-32 rounded-2xl bg-heritage-blue-100 -z-10"></div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-2 bg-heritage-blue-100 text-heritage-blue-600 rounded-full text-sm font-medium"
                  >
                    Our Mission
                  </motion.span>
                  
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-warm-gray-900 leading-tight">
                    Preserving Heritage,<br />
                    <span className="text-gradient bg-gradient-to-r from-heritage-blue-600 to-saffron-500 bg-clip-text text-transparent">Creating Livelihoods</span>
                  </h2>
                  
                  <p className="text-lg text-warm-gray-600 leading-relaxed">
                    Sudori exists to preserve India's rich craft heritage by connecting skilled artisans with global markets, ensuring fair compensation and sustainable business growth while bringing authentic handcrafted treasures to conscious consumers.
                  </p>
                  
                  <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-saffron-100 text-saffron-600 rounded-full flex-shrink-0">
                        <Heart className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-warm-gray-900 mb-1">
                          Artisan Empowerment
                        </h3>
                        <p className="text-warm-gray-600">
                          We provide artisans with fair pay, business training, and direct access to global markets, increasing their income by 300% on average.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-terracotta-100 text-terracotta-600 rounded-full flex-shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-warm-gray-900 mb-1">
                          Heritage Preservation
                        </h3>
                        <p className="text-warm-gray-600">
                          We're documenting and preserving over 500 ancient craft techniques that risk being lost to mass production.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-heritage-blue-100 text-heritage-blue-600 rounded-full flex-shrink-0">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-warm-gray-900 mb-1">
                          Global Connection
                        </h3>
                        <p className="text-warm-gray-600">
                          We bridge the gap between artisan communities and conscious consumers worldwide who value authenticity and craftsmanship.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-20 bg-gradient-to-br from-warm-gray-50 to-saffron-50/30">
            <div className="max-w-7xl mx-auto container-padding">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-2 bg-terracotta-100 text-terracotta-600 rounded-full text-sm font-medium mb-4"
                >
                  Our Journey
                </motion.span>
                
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-warm-gray-900 mb-4">
                  The Sudori <span className="text-gradient bg-gradient-to-r from-terracotta-600 to-saffron-500 bg-clip-text text-transparent">Story</span>
                </h2>
                <p className="text-lg text-warm-gray-600 max-w-3xl mx-auto">
                  Our founder's journey from a small village to creating a platform that celebrates Indian craftsmanship
                </p>
              </motion.div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-saffron-500 to-terracotta-500"></div>
                
                {/* Timeline Points */}
                <div className="space-y-24 relative">
                  {/* 2020 - The Beginning */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="md:text-right relative"
                    >
                      {/* Year Point */}
                      <div className="absolute right-0 top-0 md:block hidden">
                        <div className="relative">
                          <div className="h-8 w-8 bg-saffron-500 rounded-full absolute top-0 right-0 transform translate-x-1/2"></div>
                          <div className="h-16 w-16 bg-saffron-500/20 rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-4"></div>
                        </div>
                      </div>
                      
                      <span className="text-3xl font-bold text-saffron-600 mb-2 inline-block">
                        2020
                      </span>
                      <h3 className="text-2xl font-display font-bold text-warm-gray-900 mb-3">
                        The Beginning
                      </h3>
                      <p className="text-warm-gray-600">
                        During a visit to her ancestral village in Rajasthan, our founder Anika Sharma was struck by the declining interest in traditional crafts despite their beauty and cultural significance. This inspired her to create a platform that would connect these skilled artisans with global markets.
                      </p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center"
                    >
                      <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-md">
                        <OptimizedImage
                          src="/images/profile/artisans/meera devi_cover.png"
                          alt="Traditional Indian craft"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* 2021 - First Marketplace */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center md:order-1"
                    >
                      <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-md">
                        <OptimizedImage
                          src="/images/products/Whisk_storyboardcf823d9988de48188b9197a0.png"
                          alt="First marketplace products"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="relative md:order-2"
                    >
                      {/* Year Point */}
                      <div className="absolute left-0 top-0 md:block hidden">
                        <div className="relative">
                          <div className="h-8 w-8 bg-terracotta-500 rounded-full absolute top-0 left-0 transform -translate-x-1/2"></div>
                          <div className="h-16 w-16 bg-terracotta-500/20 rounded-full absolute top-0 left-0 transform -translate-x-1/2 -translate-y-4"></div>
                        </div>
                      </div>
                      
                      <span className="text-3xl font-bold text-terracotta-600 mb-2 inline-block">
                        2021
                      </span>
                      <h3 className="text-2xl font-display font-bold text-warm-gray-900 mb-3">
                        First Marketplace
                      </h3>
                      <p className="text-warm-gray-600">
                        After months of traveling to remote villages and establishing relationships with artisan communities, Sudori launched with 50 artisans and 200 unique products. Our first sales demonstrated the global appeal of authentic Indian craftsmanship.
                      </p>
                    </motion.div>
                  </div>

                  {/* 2023 - Artisan Empowerment */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="md:text-right relative"
                    >
                      {/* Year Point */}
                      <div className="absolute right-0 top-0 md:block hidden">
                        <div className="relative">
                          <div className="h-8 w-8 bg-heritage-blue-500 rounded-full absolute top-0 right-0 transform translate-x-1/2"></div>
                          <div className="h-16 w-16 bg-heritage-blue-500/20 rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-4"></div>
                        </div>
                      </div>
                      
                      <span className="text-3xl font-bold text-heritage-blue-600 mb-2 inline-block">
                        2023
                      </span>
                      <h3 className="text-2xl font-display font-bold text-warm-gray-900 mb-3">
                        Artisan Empowerment
                      </h3>
                      <p className="text-warm-gray-600">
                        We launched the Artisan Empowerment Program, providing business training, digital skills, and micro-loans to help craftspeople scale their operations. This program has already helped 500+ artisans increase their income by an average of 300%.
                      </p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center"
                    >
                      <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-md">
                        <OptimizedImage
                          src="/images/profile/artisans/rajesh kumar_cover.png"
                          alt="Artisan empowerment program"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* 2025 - Global Expansion */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center md:order-1"
                    >
                      <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-md">
                        <OptimizedImage
                          src="/images/profile/artisans/arjun singh_cover.png"
                          alt="Global expansion"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="relative md:order-2"
                    >
                      {/* Year Point */}
                      <div className="absolute left-0 top-0 md:block hidden">
                        <div className="relative">
                          <div className="h-8 w-8 bg-saffron-500 rounded-full absolute top-0 left-0 transform -translate-x-1/2"></div>
                          <div className="h-16 w-16 bg-saffron-500/20 rounded-full absolute top-0 left-0 transform -translate-x-1/2 -translate-y-4"></div>
                        </div>
                      </div>
                      
                      <span className="text-3xl font-bold text-saffron-600 mb-2 inline-block">
                        Today
                      </span>
                      <h3 className="text-2xl font-display font-bold text-warm-gray-900 mb-3">
                        Global Impact
                      </h3>
                      <p className="text-warm-gray-600">
                        Sudori now connects 10,000+ artisans with customers in 50+ countries. We've documented and preserved over 500 traditional craft techniques, and our community marketplace has become a thriving platform for cultural exchange and sustainable commerce.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto container-padding">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-2 bg-saffron-100 text-saffron-600 rounded-full text-sm font-medium mb-4"
                >
                  Our Core Values
                </motion.span>
                
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-warm-gray-900 mb-4">
                  The Principles That <span className="text-gradient bg-gradient-to-r from-saffron-600 to-terracotta-600 bg-clip-text text-transparent">Guide Us</span>
                </h2>
                <p className="text-lg text-warm-gray-600 max-w-3xl mx-auto">
                  These values define our approach to business, our relationships with artisans, and our commitment to customers
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Authenticity",
                    description: "We celebrate and preserve genuine traditional craftsmanship, ensuring every product tells an authentic story.",
                    icon: <Award className="w-6 h-6" />,
                    color: "from-saffron-500 to-marigold-500",
                    delay: 0
                  },
                  {
                    title: "Sustainability",
                    description: "We promote environmentally responsible practices throughout our supply chain and operations.",
                    icon: <Leaf className="w-6 h-6" />,
                    color: "from-green-500 to-teal-500",
                    delay: 0.1
                  },
                  {
                    title: "Transparency",
                    description: "We provide complete visibility into our sourcing, pricing, and the journey of each product.",
                    icon: <ShieldCheck className="w-6 h-6" />,
                    color: "from-heritage-blue-500 to-blue-500",
                    delay: 0.2
                  },
                  {
                    title: "Fair Trade",
                    description: "We ensure artisans receive fair compensation for their work and skills, eliminating exploitation.",
                    icon: <Heart className="w-6 h-6" />,
                    color: "from-terracotta-500 to-red-500",
                    delay: 0.3
                  },
                  {
                    title: "Community",
                    description: "We foster meaningful connections between artisans and customers, creating a global craft community.",
                    icon: <Users className="w-6 h-6" />,
                    color: "from-purple-500 to-indigo-500",
                    delay: 0.4
                  },
                  {
                    title: "Empowerment",
                    description: "We equip artisans with the tools, skills, and resources needed to thrive in the global marketplace.",
                    icon: <LucideHandHeart className="w-6 h-6" />,
                    color: "from-amber-500 to-orange-500",
                    delay: 0.5
                  }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + value.delay }}
                    viewport={{ once: true }}
                    className="bg-white border border-warm-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-6`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-display font-bold text-warm-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-warm-gray-600">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 bg-gradient-to-br from-warm-gray-50 to-heritage-blue-50/30">
            <div className="max-w-7xl mx-auto container-padding">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-2 bg-heritage-blue-100 text-heritage-blue-600 rounded-full text-sm font-medium mb-4"
                >
                  Our Leadership
                </motion.span>
                
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-warm-gray-900 mb-4">
                  Meet The Team Behind <span className="text-gradient bg-gradient-to-r from-heritage-blue-600 to-saffron-500 bg-clip-text text-transparent">Sudori</span>
                </h2>
                <p className="text-lg text-warm-gray-600 max-w-3xl mx-auto">
                  A diverse group of passionate individuals dedicated to our mission of connecting artisans with global markets
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Anika Sharma",
                    title: "Founder & CEO",
                    bio: "With a background in design and business, Anika founded Sudori after witnessing the challenges faced by artisans in her ancestral village.",
                    image: "/images/profile/artisans/priya sharma.png"
                  },
                  {
                    name: "Raj Patel",
                    title: "Chief Operating Officer",
                    bio: "Raj brings 15 years of experience in supply chain and operations, ensuring our artisans can deliver their creations to customers worldwide.",
                    image: "/images/profile/artisans/rajesh kumar.png"
                  },
                  {
                    name: "Maya Singh",
                    title: "Director of Artisan Relations",
                    bio: "As a third-generation textile artisan herself, Maya leads our artisan onboarding and training programs with deep cultural understanding.",
                    image: "/images/profile/artisans/meera devi.png"
                  }
                ].map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-64 overflow-hidden">
                      <OptimizedImage
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold text-warm-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-saffron-600 font-medium mb-3">{member.title}</p>
                      <p className="text-warm-gray-600 text-sm">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 paisley-accent opacity-20"></div>
            
            <div className="max-w-7xl mx-auto container-padding relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4"
                >
                  Our Impact
                </motion.span>
                
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-warm-gray-900 mb-4">
                  Creating <span className="text-gradient bg-gradient-to-r from-green-600 to-saffron-600 bg-clip-text text-transparent">Positive Change</span>
                </h2>
                <p className="text-lg text-warm-gray-600 max-w-3xl mx-auto">
                  Beyond commerce, we're committed to sustainable practices, cultural preservation, and community development
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        stat: "10,000+",
                        label: "Artisans Supported",
                        description: "Providing sustainable livelihoods for thousands of skilled craftspeople across India.",
                        color: "from-saffron-500 to-marigold-500"
                      },
                      {
                        stat: "300%",
                        label: "Average Income Growth",
                        description: "Artisans on our platform have seen their earnings triple compared to traditional sales channels.",
                        color: "from-terracotta-500 to-red-500"
                      },
                      {
                        stat: "500+",
                        label: "Craft Techniques Preserved",
                        description: "We've documented and helped preserve centuries-old crafting techniques that were at risk of disappearing.",
                        color: "from-heritage-blue-500 to-blue-500"
                      },
                      {
                        stat: "85%",
                        label: "Reduced Carbon Footprint",
                        description: "Our products have an 85% lower carbon footprint compared to mass-produced alternatives.",
                        color: "from-green-500 to-teal-500"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        className="bg-white border border-warm-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                      >
                        <div className={`text-3xl font-bold mb-2 text-gradient bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.stat}
                        </div>
                        <h3 className="text-lg font-semibold text-warm-gray-900 mb-2">
                          {item.label}
                        </h3>
                        <p className="text-sm text-warm-gray-600">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-green-50 to-saffron-50 rounded-xl p-8 border border-green-100"
                >
                  <h3 className="text-2xl font-display font-bold text-warm-gray-900 mb-4">
                    Sustainability Commitment
                  </h3>
                  <p className="text-warm-gray-600 mb-6">
                    We're committed to environmentally and socially responsible practices across our entire operation.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Leaf className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-warm-gray-900">Eco-Friendly Packaging</h4>
                        <p className="text-sm text-warm-gray-600">100% recyclable and biodegradable materials</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-warm-gray-900">Fair Trade Practices</h4>
                        <p className="text-sm text-warm-gray-600">Ethical sourcing and fair compensation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-warm-gray-900">Natural Materials</h4>
                        <p className="text-sm text-warm-gray-600">Focus on natural, sustainable materials</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-warm-gray-900">Community Reinvestment</h4>
                        <p className="text-sm text-warm-gray-600">5% of profits go back to artisan communities</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 py-3 bg-gradient-to-r from-green-500 to-saffron-500 text-white rounded-lg hover:shadow-md transition-all duration-300 flex items-center justify-center group">
                    Learn About Our Impact
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Join Our Journey */}
          <section className="py-20 bg-gradient-to-r from-warm-gray-900 to-heritage-blue-900 text-white">
            <div className="max-w-7xl mx-auto container-padding">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                  Join Our <span className="text-gradient bg-gradient-to-r from-saffron-400 to-terracotta-400 bg-clip-text text-transparent">Journey</span>
                </h2>
                <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
                  Be part of our mission to preserve crafting heritage and create sustainable livelihoods for artisan communities
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-saffron-500 to-terracotta-500 px-8 py-4 rounded-xl text-white font-semibold text-lg hover:shadow-lg transition-all duration-200"
                  >
                    Shop the Marketplace
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-4 rounded-xl text-white font-semibold text-lg border border-white/20 transition-all duration-200"
                  >
                    Partner With Us
                  </motion.button>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-8 mt-16">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">50+</div>
                    <div className="text-white/70 text-sm">Countries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">10,000+</div>
                    <div className="text-white/70 text-sm">Artisan Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">500+</div>
                    <div className="text-white/70 text-sm">Craft Techniques</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">85%</div>
                    <div className="text-white/70 text-sm">Lower Carbon Footprint</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;