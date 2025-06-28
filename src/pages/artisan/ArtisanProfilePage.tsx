import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { 
  User, Mail, Phone, MapPin, Camera, Check, Award, ExternalLink,
  Edit3, Star, Palette, Clock, Upload, Trash2,
  Globe, Eye, Settings, ShoppingBag, Share2, Calendar, 
  Plus
} from 'lucide-react';

interface ArtisanProfile {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  location: {
    city: string;
    state: string;
    country: string;
    pinCode: string;
  };
  bio: string;
  joinedDate: string;
  experience: number;
  avatar: string;
  coverImage: string;
  specializations: string[];
  skills: Array<{
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    year: string;
    image?: string;
  }>;
  socialProfiles: {
    website?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  achievements: Array<{
    title: string;
    year: string;
    description: string;
  }>;
  portfolio: {
    images: string[];
    videos?: string[];
  };
}

const ArtisanProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<ArtisanProfile>({
    name: 'Priya Sharma',
    businessName: 'Priya\'s Traditional Weaves',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    location: {
      city: 'Jaipur',
      state: 'Rajasthan',
      country: 'India',
      pinCode: '302001'
    },
    bio: 'I\'ve been weaving traditional Rajasthani textiles for over two decades, learning the craft from my grandmother. My passion is preserving ancient techniques while creating contemporary designs that appeal to modern tastes. Each piece I create is handcrafted with love and attention to detail.',
    joinedDate: 'January 2024',
    experience: 25,
    avatar: 'https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=400',
    coverImage: 'https://images.pexels.com/photos/6069276/pexels-photo-6069276.jpeg?auto=compress&cs=tinysrgb&w=1200',
    specializations: ['Traditional Textile Weaving', 'Silk Work', 'Hand Embroidery', 'Natural Dyeing'],
    skills: [
      { name: 'Hand Weaving', level: 'Expert' },
      { name: 'Natural Dyeing', level: 'Advanced' },
      { name: 'Pattern Design', level: 'Expert' },
      { name: 'Embroidery', level: 'Intermediate' }
    ],
    certifications: [
      { 
        name: 'Master Craftsperson Award',
        issuer: 'Ministry of Textiles',
        year: '2020'
      },
      { 
        name: 'Heritage Craft Preservation',
        issuer: 'Craft Council of India',
        year: '2018'
      }
    ],
    socialProfiles: {
      website: 'www.priyasweaves.com',
      instagram: '@priya_traditional_weaves',
      facebook: 'PriyasTraditionalWeaves'
    },
    achievements: [
      {
        title: 'National Craft Award',
        year: '2019',
        description: 'Recognized for excellence in traditional textile arts'
      },
      {
        title: 'Featured in Vogue India',
        year: '2020',
        description: 'Highlight on sustainable fashion and traditional crafts'
      }
    ],
    portfolio: {
      images: [
        'https://images.pexels.com/photos/9594701/pexels-photo-9594701.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/5838237/pexels-photo-5838237.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/6069276/pexels-photo-6069276.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    }
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Update profile logic here
    setIsEditing(false);
  };

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-blue-100 text-blue-700';
      case 'Intermediate':
        return 'bg-green-100 text-green-700';
      case 'Advanced':
        return 'bg-purple-100 text-purple-700';
      case 'Expert':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-warm-gray-100 text-warm-gray-700';
    }
  };

  return (
    <DashboardLayout
      title="My Profile"
      subtitle="Manage your artisan profile and showcase your craft"
      userType="artisan"
    >
      <div className="space-y-8">
        {/* Cover Image and Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-xl overflow-hidden"
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={profile.coverImage} 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
            <button className="absolute top-4 right-4 bg-black/30 text-white p-2 rounded-full hover:bg-black/50">
              <Camera className="w-5 h-5" />
            </button>
          </div>
          
          <div className="bg-white rounded-b-xl shadow-sm px-6 py-4 pb-6 flex flex-col md:flex-row md:items-end">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="relative -mt-12 md:-mt-16">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white">
                  <img 
                    src={profile.avatar} 
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 bg-white text-saffron-600 p-1.5 rounded-full shadow-lg">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              
              {/* Profile Info */}
              <div className="text-center md:text-left md:flex-1">
                <h2 className="text-2xl font-bold text-warm-gray-900 mb-1">{profile.name}</h2>
                <p className="text-lg text-saffron-600 mb-3">{profile.businessName}</p>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-6 text-warm-gray-600">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{profile.location.city}, {profile.location.state}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
                  <span className="px-3 py-1 bg-saffron-100 text-saffron-700 rounded-full text-sm">
                    <Palette className="w-3.5 h-3.5 inline mr-1" />
                    {profile.specializations[0]}
                  </span>
                  <span className="px-3 py-1 bg-warm-gray-100 text-warm-gray-700 rounded-full text-sm flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {profile.experience} years experience
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex items-center">
                    <Check className="w-3.5 h-3.5 mr-1" />
                    Verified Artisan
                  </span>
                </div>
              </div>
            </div>
            
            {/* Edit Button */}
            <div className="mt-4 md:mt-0 text-center md:text-left md:ml-auto">
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="btn-primary"
              >
                <Edit3 className="w-4 h-4 mr-2" />
                {isEditing ? 'Cancel Edit' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Profile Tabs and Content */}
        <div>
          {/* Tabs */}
          <div className="border-b border-warm-gray-200 mb-6">
            <div className="flex overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveTab('about')}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === 'about'
                    ? 'border-saffron-500 text-saffron-600'
                    : 'border-transparent text-warm-gray-600 hover:text-warm-gray-900 hover:border-warm-gray-300'
                }`}
              >
                About
              </button>
              
              <button
                onClick={() => setActiveTab('portfolio')}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === 'portfolio'
                    ? 'border-saffron-500 text-saffron-600'
                    : 'border-transparent text-warm-gray-600 hover:text-warm-gray-900 hover:border-warm-gray-300'
                }`}
              >
                Portfolio
              </button>
              
              <button
                onClick={() => setActiveTab('qualifications')}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === 'qualifications'
                    ? 'border-saffron-500 text-saffron-600'
                    : 'border-transparent text-warm-gray-600 hover:text-warm-gray-900 hover:border-warm-gray-300'
                }`}
              >
                Qualifications
              </button>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === 'settings'
                    ? 'border-saffron-500 text-saffron-600'
                    : 'border-transparent text-warm-gray-600 hover:text-warm-gray-900 hover:border-warm-gray-300'
                }`}
              >
                Settings
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl border border-warm-gray-200 p-6">
            {activeTab === 'about' && (
              <form onSubmit={handleProfileUpdate} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={e => setProfile({...profile, name: e.target.value})}
                      disabled={!isEditing}
                      className={`w-full px-4 py-2 border border-warm-gray-300 rounded-lg ${!isEditing && 'bg-warm-gray-50'} focus:ring-2 focus:ring-saffron-500 focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      value={profile.businessName}
                      onChange={e => setProfile({...profile, businessName: e.target.value})}
                      disabled={!isEditing}
                      className={`w-full px-4 py-2 border border-warm-gray-300 rounded-lg ${!isEditing && 'bg-warm-gray-50'} focus:ring-2 focus:ring-saffron-500 focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="flex">
                      <input
                        type="email"
                        value={profile.email}
                        onChange={e => setProfile({...profile, email: e.target.value})}
                        disabled={!isEditing}
                        className={`w-full px-4 py-2 border border-warm-gray-300 rounded-lg ${!isEditing && 'bg-warm-gray-50'} focus:ring-2 focus:ring-saffron-500 focus:border-transparent`}
                      />
                      <div className="ml-2 flex items-center text-green-600">
                        <Check className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="flex">
                      <input
                        type="tel"
                        value={profile.phone}
                        onChange={e => setProfile({...profile, phone: e.target.value})}
                        disabled={!isEditing}
                        className={`w-full px-4 py-2 border border-warm-gray-300 rounded-lg ${!isEditing && 'bg-warm-gray-50'} focus:ring-2 focus:ring-saffron-500 focus:border-transparent`}
                      />
                      <div className="ml-2 flex items-center text-green-600">
                        <Check className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                      Location
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <input
                        type="text"
                        value={profile.location.city}
                        onChange={e => setProfile({...profile, location: {...profile.location, city: e.target.value}})}
                        disabled={!isEditing}
                        placeholder="City"
                        className={`w-full px-4 py-2 border border-warm-gray-300 rounded-lg ${!isEditing && 'bg-warm-gray-50'} focus:ring-2 focus:ring-saffron-500 focus:border-transparent`}
                      />
                      <input
                        type="text"
                        value={profile.location.state}
                        onChange={e => setProfile({...profile, location: {...profile.location, state: e.target.value}})}
                        disabled={!isEditing}
                        placeholder="State"
                        className={`w-full px-4 py-2 border border-warm-gray-300 rounded-lg ${!isEditing && 'bg-warm-gray-50'} focus:ring-2 focus:ring-saffron-500 focus:border-transparent`}
                      />
                      <input
                        type="text"
                        value={profile.location.country}
                        onChange={e => setProfile({...profile, location: {...profile.location, country: e.target.value}})}
                        disabled={!isEditing}
                        placeholder="Country"
                        className={`w-full px-4 py-2 border border-warm-gray-300 rounded-lg ${!isEditing && 'bg-warm-gray-50'} focus:ring-2 focus:ring-saffron-500 focus:border-transparent`}
                      />
                      <input
                        type="text"
                        value={profile.location.pinCode}
                        onChange={e => setProfile({...profile, location: {...profile.location, pinCode: e.target.value}})}
                        disabled={!isEditing}
                        placeholder="PIN Code"
                        className={`w-full px-4 py-2 border border-warm-gray-300 rounded-lg ${!isEditing && 'bg-warm-gray-50'} focus:ring-2 focus:ring-saffron-500 focus:border-transparent`}
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      value={profile.bio}
                      onChange={e => setProfile({...profile, bio: e.target.value})}
                      disabled={!isEditing}
                      className={`w-full px-4 py-2 border border-warm-gray-300 rounded-lg ${!isEditing && 'bg-warm-gray-50'} focus:ring-2 focus:ring-saffron-500 focus:border-transparent`}
                    ></textarea>
                    {isEditing && (
                      <p className="text-xs text-warm-gray-500 mt-1">
                        Craft a compelling story about your journey, passion, and craftsmanship. This helps customers connect with you.
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-warm-gray-900 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-saffron-600" />
                    Craft Specializations
                  </h3>
                  
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {profile.specializations.map((specialization, index) => (
                        <div key={index} className="bg-saffron-50 rounded-full px-3 py-1.5 text-sm text-saffron-700 flex items-center">
                          {specialization}
                          {isEditing && (
                            <button className="ml-2 text-saffron-600 hover:text-saffron-800">
                              <Trash2 className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      ))}
                      
                      {isEditing && (
                        <button className="px-3 py-1.5 border border-dashed border-saffron-300 rounded-full text-sm text-saffron-600 hover:bg-saffron-50">
                          <Plus className="w-3.5 h-3.5 inline mr-1" />
                          Add Specialization
                        </button>
                      )}
                    </div>
                    
                    {isEditing && (
                      <p className="text-xs text-warm-gray-500 mt-2">
                        Add the traditional crafts and techniques you specialize in
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-warm-gray-900 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-blue-600" />
                    Social Profiles
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                        Website
                      </label>
                      <input
                        type="text"
                        value={profile.socialProfiles.website || ''}
                        onChange={e => setProfile({...profile, socialProfiles: {...profile.socialProfiles, website: e.target.value}})}
                        disabled={!isEditing}
                        placeholder="https://www.example.com"
                        className={`w-full px-4 py-2 border border-warm-gray-300 rounded-lg ${!isEditing && 'bg-warm-gray-50'} focus:ring-2 focus:ring-saffron-500 focus:border-transparent`}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                        Instagram
                      </label>
                      <input
                        type="text"
                        value={profile.socialProfiles.instagram || ''}
                        onChange={e => setProfile({...profile, socialProfiles: {...profile.socialProfiles, instagram: e.target.value}})}
                        disabled={!isEditing}
                        placeholder="@username"
                        className={`w-full px-4 py-2 border border-warm-gray-300 rounded-lg ${!isEditing && 'bg-warm-gray-50'} focus:ring-2 focus:ring-saffron-500 focus:border-transparent`}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                        Facebook
                      </label>
                      <input
                        type="text"
                        value={profile.socialProfiles.facebook || ''}
                        onChange={e => setProfile({...profile, socialProfiles: {...profile.socialProfiles, facebook: e.target.value}})}
                        disabled={!isEditing}
                        placeholder="Facebook page name"
                        className={`w-full px-4 py-2 border border-warm-gray-300 rounded-lg ${!isEditing && 'bg-warm-gray-50'} focus:ring-2 focus:ring-saffron-500 focus:border-transparent`}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                        YouTube
                      </label>
                      <input
                        type="text"
                        value={profile.socialProfiles.youtube || ''}
                        onChange={e => setProfile({...profile, socialProfiles: {...profile.socialProfiles, youtube: e.target.value}})}
                        disabled={!isEditing}
                        placeholder="Channel name"
                        className={`w-full px-4 py-2 border border-warm-gray-300 rounded-lg ${!isEditing && 'bg-warm-gray-50'} focus:ring-2 focus:ring-saffron-500 focus:border-transparent`}
                      />
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="btn-secondary"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn-primary"
                    >
                      Save Profile
                    </button>
                  </div>
                )}
              </form>
            )}
            
            {activeTab === 'portfolio' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-warm-gray-900 flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-purple-600" />
                    Portfolio Gallery
                  </h3>
                  
                  <div className="flex items-center space-x-3">
                    <button className="btn-secondary text-sm">
                      <Upload className="w-4 h-4 mr-2" />
                      Add Images
                    </button>
                    <button className="btn-primary text-sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Portfolio
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {profile.portfolio.images.map((image, index) => (
                    <div key={index} className="relative group aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <img 
                        src={image} 
                        alt={`Portfolio item ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                      
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex space-x-2">
                          <button className="p-1 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
                            <Eye className="w-4 h-4 text-warm-gray-700" />
                          </button>
                          <button className="p-1 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
                            <Edit3 className="w-4 h-4 text-warm-gray-700" />
                          </button>
                          <button className="p-1 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="aspect-square rounded-lg border-2 border-dashed border-warm-gray-300 flex items-center justify-center hover:border-saffron-500 hover:bg-saffron-50 transition-colors cursor-pointer text-warm-gray-500 hover:text-saffron-600">
                    <div className="text-center">
                      <Plus className="w-8 h-8 mx-auto mb-1" />
                      <span className="text-sm">Add Image</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-warm-gray-50 rounded-lg p-6 border border-warm-gray-200">
                  <h4 className="font-semibold text-warm-gray-900 mb-4">Portfolio Tips</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2" />
                      <span className="text-warm-gray-600">Show diverse examples of your work to attract different customers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2" />
                      <span className="text-warm-gray-600">Include close-up shots that highlight intricate details of your craftsmanship</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2" />
                      <span className="text-warm-gray-600">Add images of your workshop or creation process to tell your craft's story</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'qualifications' && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-warm-gray-900 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-amber-500" />
                    Skills & Expertise
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profile.skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="flex justify-between items-center p-4 border border-warm-gray-200 rounded-lg hover:border-saffron-300 transition-colors"
                      >
                        <div className="flex items-center">
                          <Palette className="w-5 h-5 text-saffron-600 mr-3" />
                          <span className="font-medium text-warm-gray-900">{skill.name}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSkillLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                    
                    <button className="flex items-center justify-center p-4 border-2 border-dashed border-warm-gray-300 rounded-lg hover:border-saffron-300 hover:bg-saffron-50 transition-colors text-warm-gray-500 hover:text-saffron-600">
                      <Plus className="w-5 h-5 mr-2" />
                      Add Skill
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-warm-gray-900 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" />
                      Certifications & Awards
                    </h3>
                    
                    <button className="btn-secondary text-sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Certification
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {profile.certifications.map((cert, index) => (
                      <div 
                        key={index} 
                        className="p-4 border border-warm-gray-200 rounded-lg hover:shadow-md transition-all"
                      >
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-semibold text-warm-gray-900">{cert.name}</h4>
                            <p className="text-sm text-warm-gray-600">
                              Issued by {cert.issuer} • {cert.year}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="text-warm-gray-400 hover:text-warm-gray-700 p-1">
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button className="text-warm-gray-400 hover:text-red-600 p-1">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-warm-gray-900 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-green-600" />
                      Achievements
                    </h3>
                    
                    <button className="btn-secondary text-sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Achievement
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {profile.achievements.map((achievement, index) => (
                      <div 
                        key={index} 
                        className="p-4 border border-warm-gray-200 rounded-lg hover:shadow-md transition-all"
                      >
                        <div className="flex justify-between">
                          <div>
                            <div className="flex items-center mb-1">
                              <h4 className="font-semibold text-warm-gray-900 mr-2">{achievement.title}</h4>
                              <span className="text-sm text-warm-gray-500">{achievement.year}</span>
                            </div>
                            <p className="text-sm text-warm-gray-600">
                              {achievement.description}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="text-warm-gray-400 hover:text-warm-gray-700 p-1">
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button className="text-warm-gray-400 hover:text-red-600 p-1">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-warm-gray-900 flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-warm-gray-700" />
                    Profile Settings
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-warm-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-warm-gray-900">Public Profile Visibility</h4>
                        <p className="text-sm text-warm-gray-600">
                          Control whether your profile is visible to customers in the marketplace
                        </p>
                      </div>
                      <div className="relative">
                        <input 
                          type="checkbox" 
                          id="profile-visible"
                          checked={true}
                          className="sr-only"
                        />
                        <label
                          htmlFor="profile-visible"
                          className="block w-14 h-7 rounded-full bg-saffron-500"
                        >
                          <span className="block w-5 h-5 mt-1 ml-1 rounded-full transform translate-x-7 bg-white shadow-md" />
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-warm-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-warm-gray-900">Featured Artisan Application</h4>
                        <p className="text-sm text-warm-gray-600">
                          Apply to be featured on the Sudori homepage and marketing materials
                        </p>
                      </div>
                      <button className="btn-primary text-sm">
                        Apply Now
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-warm-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-warm-gray-900">Workshop Availability</h4>
                        <p className="text-sm text-warm-gray-600">
                          Set up virtual or in-person craft workshops for customers
                        </p>
                      </div>
                      <button className="btn-secondary text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        Manage Workshops
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-warm-gray-900 flex items-center">
                    <ShoppingBag className="w-5 h-5 mr-2 text-green-600" />
                    Store Settings
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-warm-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-warm-gray-900">Holiday Mode</h4>
                        <p className="text-sm text-warm-gray-600">
                          Temporarily close your shop when you're away or unable to fulfill orders
                        </p>
                      </div>
                      <div className="relative">
                        <input 
                          type="checkbox" 
                          id="holiday-mode"
                          checked={false}
                          className="sr-only"
                        />
                        <label
                          htmlFor="holiday-mode"
                          className="block w-14 h-7 rounded-full bg-warm-gray-300"
                        >
                          <span className="block w-5 h-5 mt-1 ml-1 rounded-full bg-white shadow-md" />
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-warm-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-warm-gray-900">Order Auto-Accept</h4>
                        <p className="text-sm text-warm-gray-600">
                          Automatically accept new orders without manual approval
                        </p>
                      </div>
                      <div className="relative">
                        <input 
                          type="checkbox" 
                          id="auto-accept"
                          checked={true}
                          className="sr-only"
                        />
                        <label
                          htmlFor="auto-accept"
                          className="block w-14 h-7 rounded-full bg-saffron-500"
                        >
                          <span className="block w-5 h-5 mt-1 ml-1 rounded-full transform translate-x-7 bg-white shadow-md" />
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-warm-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-warm-gray-900">Low Stock Notifications</h4>
                        <p className="text-sm text-warm-gray-600">
                          Get alerts when your products are running low on inventory
                        </p>
                      </div>
                      <div className="relative">
                        <input 
                          type="checkbox" 
                          id="stock-notif"
                          checked={true}
                          className="sr-only"
                        />
                        <label
                          htmlFor="stock-notif"
                          className="block w-14 h-7 rounded-full bg-saffron-500"
                        >
                          <span className="block w-5 h-5 mt-1 ml-1 rounded-full transform translate-x-7 bg-white shadow-md" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Public Profile Preview */}
        <div className="p-6 border border-warm-gray-200 rounded-xl bg-gradient-to-br from-saffron-50 to-terracotta-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-warm-gray-900 flex items-center">
              <Eye className="w-5 h-5 mr-2 text-saffron-600" />
              Public Profile Preview
            </h3>
            
            <div className="flex items-center space-x-3">
              <a href={`/artisan/${profile.name.toLowerCase().replace(' ', '-')}`} className="text-saffron-600 hover:text-saffron-700 text-sm flex items-center">
                View Public Profile
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <button className="btn-primary text-sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>
          </div>
          
          <p className="text-warm-gray-600 text-sm">
            This is how customers see your profile in the marketplace. Keep it updated with your latest work and achievements.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ArtisanProfilePage;