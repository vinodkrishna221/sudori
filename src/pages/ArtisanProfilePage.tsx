import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import OptimizedImage from '../components/ui/OptimizedImage';
import { 
  MapPin, Star, Award, Users, Package, MessageCircle, UserPlus,
  Calendar, Eye, Heart, ShoppingBag, Play, BookOpen, Video
} from 'lucide-react';
import { findArtisanById } from '../mockData/artisanData';

interface Artisan {
  id: string;
  name: string;
  specialty: string;
  location: string;
  experience: number;
  rating: number;
  totalProducts: number;
  totalSales: number;
  profileImage: string;
  coverImage: string;
  isVerified: boolean;
  story: string;
  specialties: string[];
  achievements: string[];
  portfolio: {
    images: string[];
    videos?: string[];
  };
  workshops: {
    id: string;
    title: string;
    description: string;
    duration: string;
    price: number;
    thumbnail: string;
    rating: number;
  }[];
  products: Array<{
    id: string;
    name: string;
    price: number;
    image: string;
    rating: number;
  }>;
}

const ArtisanProfilePage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artisan, setArtisan] = useState<Artisan | null>(null);
  const [activeTab, setActiveTab] = useState('story');
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const foundArtisan = findArtisanById(id || '1');
      setArtisan(foundArtisan || null);
      setLoading(false);
    }, 800);
  }, [id]);

  const handleFollowArtisan = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMessageArtisan = () => {
    // Navigate to messaging or open chat
    console.log('Message artisan');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="animate-pulse">
              <div className="w-full h-80 bg-warm-gray-200 rounded-xl mb-8"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  <div className="h-8 bg-warm-gray-200 rounded w-3/4"></div>
                  <div className="h-32 bg-warm-gray-200 rounded"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-64 bg-warm-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!artisan) {
    return (
      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        <div className="pt-20 pb-16 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-display font-bold text-warm-gray-900 mb-4">
              Artisan Not Found
            </h1>
            <p className="text-warm-gray-600 mb-8">
              The artisan profile you're looking for doesn't exist.
            </p>
            <button 
              onClick={() => navigate('/marketplace')}
              className="btn-primary"
            >
              Browse Artisans
            </button>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'story', label: 'Story', icon: BookOpen },
    { id: 'portfolio', label: 'Portfolio', icon: Eye },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'workshops', label: 'Workshops', icon: Video }
  ];

  return (
    <>
      <Helmet>
        <title>{artisan.name} - Master Artisan | Sudori</title>
        <meta name="description" content={`Discover ${artisan.name}, expert in ${artisan.specialty} from ${artisan.location}. ${artisan.story.substring(0, 150)}...`} />
      </Helmet>

      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative h-80 overflow-hidden">
            <OptimizedImage
              src={artisan.coverImage}
              alt={`${artisan.name}'s workshop`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="max-w-7xl mx-auto container-padding">
                <div className="flex items-end gap-6">
                  {/* Profile Image */}
                  <div className="relative">
                    <OptimizedImage
                      src={artisan.profileImage}
                      alt={artisan.name}
                      className="w-24 h-24 rounded-full border-4 border-white/20 object-cover"
                    />
                    {artisan.isVerified && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-heritage-blue-500 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Basic Info */}
                  <div className="flex-1 text-white">
                    <h1 className="text-3xl font-display font-bold mb-1">{artisan.name}</h1>
                    <p className="text-xl text-white/90 mb-2">{artisan.specialty}</p>
                    <div className="flex items-center gap-4 text-white/80">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {artisan.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {artisan.experience} years experience
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        {artisan.rating} rating
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleFollowArtisan}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                        isFollowing
                          ? 'bg-green-500 text-white'
                          : 'bg-saffron-500 hover:bg-saffron-600 text-white'
                      }`}
                    >
                      <UserPlus className="w-4 h-4" />
                      {isFollowing ? 'Following' : 'Follow'}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleMessageArtisan}
                      className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl font-semibold transition-all duration-200 flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Message
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto container-padding">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  {/* Tab Navigation */}
                  <div className="flex gap-1 mb-8 bg-white rounded-xl p-2 shadow-sm">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          activeTab === tab.id
                            ? 'bg-saffron-500 text-white shadow-md'
                            : 'text-warm-gray-600 hover:bg-warm-gray-100'
                        }`}
                      >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-xl shadow-sm p-8"
                  >
                    {activeTab === 'story' && (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-display font-bold text-warm-gray-900">
                          Artisan's Journey
                        </h2>
                        <p className="text-warm-gray-700 leading-relaxed text-lg">
                          {artisan.story}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                          <div>
                            <h3 className="font-semibold text-warm-gray-900 mb-3">Specialties</h3>
                            <div className="flex flex-wrap gap-2">
                              {(artisan.specialties || []).map((specialty) => (
                                <span
                                  key={specialty}
                                  className="px-3 py-1 bg-saffron-100 text-saffron-700 rounded-full text-sm"
                                >
                                  {specialty}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold text-warm-gray-900 mb-3">Achievements</h3>
                            <ul className="space-y-2">
                              {(artisan.achievements || []).map((achievement) => (
                                <li
                                  key={achievement}
                                  className="flex items-center gap-2 text-warm-gray-700"
                                >
                                  <Award className="w-4 h-4 text-gold-500" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'portfolio' && (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-display font-bold text-warm-gray-900">
                          Portfolio
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {(artisan.portfolio?.images || []).map((image, index) => (
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
                              >
                                <OptimizedImage
                                  src={image}
                                  alt={`${artisan.name}'s portfolio item ${index + 1}`}
                                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                />
                              </motion.div>
                            </AnimatePresence>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'products' && (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h2 className="text-2xl font-display font-bold text-warm-gray-900">
                            Products ({(artisan.products || []).length})
                          </h2>
                          <button 
                            onClick={() => navigate('/marketplace')}
                            className="text-saffron-600 hover:text-saffron-700 font-medium"
                          >
                            View All →
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {(artisan.products || []).map((product) => (
                            <motion.div
                              key={product.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4 }}
                              className="group border border-warm-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer"
                              onClick={() => navigate(`/product/${product.id}`)}
                            >
                              <div className="aspect-video overflow-hidden">
                                <OptimizedImage
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                              </div>
                              <div className="p-4">
                                <h3 className="font-semibold text-warm-gray-900 mb-2">
                                  {product.name}
                                </h3>
                                <div className="flex items-center justify-between">
                                  <span className="text-lg font-bold text-saffron-600">
                                    ₹{product.price.toLocaleString()}
                                  </span>
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="text-sm text-warm-gray-600">{product.rating}</span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'workshops' && (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-display font-bold text-warm-gray-900">
                          Available Workshops
                        </h2>
                        <div className="space-y-6">
                          {(artisan.workshops || []).map((workshop) => (
                            <motion.div
                              key={workshop.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4 }}
                              className="border border-warm-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200"
                            >
                              <div className="md:flex">
                                <div className="md:w-1/3">
                                  <div className="relative h-48 md:h-full">
                                    <OptimizedImage
                                      src={workshop.thumbnail}
                                      alt={workshop.title}
                                      className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-lg text-sm flex items-center gap-1">
                                      <Play className="w-3 h-3" />
                                      {workshop.duration}
                                    </div>
                                  </div>
                                </div>
                                <div className="md:w-2/3 p-6">
                                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-2">
                                    {workshop.title}
                                  </h3>
                                  <p className="text-warm-gray-600 mb-4">
                                    {workshop.description}
                                  </p>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                      <span className="text-2xl font-bold text-saffron-600">
                                        ₹{workshop.price.toLocaleString()}
                                      </span>
                                      <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-sm text-warm-gray-600">{workshop.rating}</span>
                                      </div>
                                    </div>
                                    <button className="btn-primary">
                                      Book Workshop
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Stats Card */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-semibold text-warm-gray-900 mb-4">Artisan Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-saffron-600">{artisan.experience}</div>
                        <div className="text-sm text-warm-gray-600">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-terracotta-600">{artisan.totalProducts}</div>
                        <div className="text-sm text-warm-gray-600">Products</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-heritage-blue-600">{artisan.totalSales.toLocaleString()}</div>
                        <div className="text-sm text-warm-gray-600">Sales</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{artisan.rating}</div>
                        <div className="text-sm text-warm-gray-600">Rating</div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Card */}
                  <div className="bg-gradient-to-br from-saffron-500 to-terracotta-500 rounded-xl text-white p-6">
                    <h3 className="font-semibold mb-4">Connect with {artisan.name}</h3>
                    <p className="text-white/90 text-sm mb-6">
                      Have questions about custom orders or want to learn more about the craft?
                    </p>
                    <div className="space-y-3">
                      <button 
                        onClick={handleMessageArtisan}
                        className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-3 rounded-lg transition-colors duration-200"
                      >
                        Send Message
                      </button>
                      <button className="w-full bg-white text-saffron-600 hover:bg-warm-gray-100 font-medium py-3 rounded-lg transition-colors duration-200">
                        Schedule Video Call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ArtisanProfilePage;