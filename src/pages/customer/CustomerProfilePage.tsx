import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { 
  User, Mail, Phone, Calendar, MapPin, Camera, Check,
  Lock, Bell, Globe, Award, Star, ExternalLink, Edit3
} from 'lucide-react';

interface CustomerProfile {
  name: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  gender?: string;
  location: string;
  joinedDate: string;
  avatar: string;
  preferences: {
    language: string;
    notifications: {
      email: boolean;
      sms: boolean;
      app: boolean;
      marketing: boolean;
      orderUpdates: boolean;
    };
    privacy: {
      profileVisibility: 'public' | 'private';
      activityHistory: boolean;
    };
  };
  interests: string[];
}

const CustomerProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<CustomerProfile>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    dateOfBirth: '1990-05-15',
    gender: 'Male',
    location: 'Mumbai, India',
    joinedDate: 'January 2024',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    preferences: {
      language: 'English',
      notifications: {
        email: true,
        sms: true,
        app: true,
        marketing: false,
        orderUpdates: true
      },
      privacy: {
        profileVisibility: 'public',
        activityHistory: true
      }
    },
    interests: ['Textiles', 'Jewelry', 'Pottery', 'Woodwork']
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Update profile logic here
    setIsEditing(false);
  };

  const toggleNotificationPreference = (key: string) => {
    setProfile({
      ...profile,
      preferences: {
        ...profile.preferences,
        notifications: {
          ...profile.preferences.notifications,
          [key]: !profile.preferences.notifications[key as keyof typeof profile.preferences.notifications]
        }
      }
    });
  };

  return (
    <DashboardLayout
      title="My Profile"
      subtitle="Manage your account settings and preferences"
      userType="customer"
    >
      <div className="space-y-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-saffron-600 to-terracotta-600 text-white rounded-xl p-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 paisley-pattern opacity-10"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30">
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
            
            {/* User Info */}
            <div className="text-center md:text-left md:flex-1">
              <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-6 text-white/90">
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
                  <span>{profile.location}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  Customer since {profile.joinedDate}
                </span>
                <span className="px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full text-sm flex items-center">
                  <Check className="w-3 h-3 mr-1" />
                  Verified Account
                </span>
              </div>
            </div>
            
            {/* Edit Button */}
            <div className="md:self-start">
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg transition-colors"
              >
                <Edit3 className="w-4 h-4 mr-2 inline" />
                {isEditing ? 'Cancel' : 'Edit Profile'}
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
                onClick={() => setActiveTab('personal')}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === 'personal'
                    ? 'border-saffron-500 text-saffron-600'
                    : 'border-transparent text-warm-gray-600 hover:text-warm-gray-900 hover:border-warm-gray-300'
                }`}
              >
                Personal Information
              </button>
              
              <button
                onClick={() => setActiveTab('preferences')}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === 'preferences'
                    ? 'border-saffron-500 text-saffron-600'
                    : 'border-transparent text-warm-gray-600 hover:text-warm-gray-900 hover:border-warm-gray-300'
                }`}
              >
                Preferences
              </button>
              
              <button
                onClick={() => setActiveTab('privacy')}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === 'privacy'
                    ? 'border-saffron-500 text-saffron-600'
                    : 'border-transparent text-warm-gray-600 hover:text-warm-gray-900 hover:border-warm-gray-300'
                }`}
              >
                Privacy & Security
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl border border-warm-gray-200 p-6">
            {activeTab === 'personal' && (
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
                  
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={profile.dateOfBirth}
                      onChange={e => setProfile({...profile, dateOfBirth: e.target.value})}
                      disabled={!isEditing}
                      className={`w-full px-4 py-2 border border-warm-gray-300 rounded-lg ${!isEditing && 'bg-warm-gray-50'} focus:ring-2 focus:ring-saffron-500 focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                      Gender
                    </label>
                    <select
                      value={profile.gender}
                      onChange={e => setProfile({...profile, gender: e.target.value})}
                      disabled={!isEditing}
                      className={`w-full px-4 py-2 border border-warm-gray-300 rounded-lg ${!isEditing && 'bg-warm-gray-50'} focus:ring-2 focus:ring-saffron-500 focus:border-transparent`}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={profile.location}
                      onChange={e => setProfile({...profile, location: e.target.value})}
                      disabled={!isEditing}
                      className={`w-full px-4 py-2 border border-warm-gray-300 rounded-lg ${!isEditing && 'bg-warm-gray-50'} focus:ring-2 focus:ring-saffron-500 focus:border-transparent`}
                    />
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
                      Save Changes
                    </button>
                  </div>
                )}
                
                {/* Interests */}
                <div className="pt-6 border-t border-warm-gray-200">
                  <h3 className="text-lg font-semibold text-warm-gray-900 mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-amber-500" />
                    Shopping Interests
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map(interest => (
                      <span key={interest} className="px-3 py-1 bg-saffron-100 text-saffron-700 rounded-full text-sm">
                        {interest}
                      </span>
                    ))}
                    
                    {isEditing && (
                      <button className="px-3 py-1 bg-warm-gray-100 text-warm-gray-700 rounded-full text-sm">
                        <Plus className="w-3 h-3 inline mr-1" />
                        Add Interest
                      </button>
                    )}
                  </div>
                </div>
              </form>
            )}
            
            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-warm-gray-900 mb-4 flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-blue-500" />
                  Notification Preferences
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-warm-gray-900">Email Notifications</p>
                      <p className="text-sm text-warm-gray-500">Receive order updates and promotions via email</p>
                    </div>
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        id="email-notif"
                        checked={profile.preferences.notifications.email}
                        onChange={() => toggleNotificationPreference('email')}
                        className="sr-only"
                      />
                      <label
                        htmlFor="email-notif"
                        className={`block w-14 h-7 rounded-full transition-colors ${
                          profile.preferences.notifications.email ? 'bg-saffron-500' : 'bg-warm-gray-300'
                        }`}
                      >
                        <span 
                          className={`block w-5 h-5 mt-1 ml-1 rounded-full transition-transform bg-white shadow-md ${
                            profile.preferences.notifications.email ? 'transform translate-x-7' : ''
                          }`} 
                        />
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-warm-gray-900">SMS Notifications</p>
                      <p className="text-sm text-warm-gray-500">Receive order updates via text message</p>
                    </div>
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        id="sms-notif"
                        checked={profile.preferences.notifications.sms}
                        onChange={() => toggleNotificationPreference('sms')}
                        className="sr-only"
                      />
                      <label
                        htmlFor="sms-notif"
                        className={`block w-14 h-7 rounded-full transition-colors ${
                          profile.preferences.notifications.sms ? 'bg-saffron-500' : 'bg-warm-gray-300'
                        }`}
                      >
                        <span 
                          className={`block w-5 h-5 mt-1 ml-1 rounded-full transition-transform bg-white shadow-md ${
                            profile.preferences.notifications.sms ? 'transform translate-x-7' : ''
                          }`} 
                        />
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-warm-gray-900">App Notifications</p>
                      <p className="text-sm text-warm-gray-500">Receive notifications when using the app</p>
                    </div>
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        id="app-notif"
                        checked={profile.preferences.notifications.app}
                        onChange={() => toggleNotificationPreference('app')}
                        className="sr-only"
                      />
                      <label
                        htmlFor="app-notif"
                        className={`block w-14 h-7 rounded-full transition-colors ${
                          profile.preferences.notifications.app ? 'bg-saffron-500' : 'bg-warm-gray-300'
                        }`}
                      >
                        <span 
                          className={`block w-5 h-5 mt-1 ml-1 rounded-full transition-transform bg-white shadow-md ${
                            profile.preferences.notifications.app ? 'transform translate-x-7' : ''
                          }`} 
                        />
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-warm-gray-900">Marketing Communications</p>
                      <p className="text-sm text-warm-gray-500">Receive promotional emails and offers</p>
                    </div>
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        id="marketing-notif"
                        checked={profile.preferences.notifications.marketing}
                        onChange={() => toggleNotificationPreference('marketing')}
                        className="sr-only"
                      />
                      <label
                        htmlFor="marketing-notif"
                        className={`block w-14 h-7 rounded-full transition-colors ${
                          profile.preferences.notifications.marketing ? 'bg-saffron-500' : 'bg-warm-gray-300'
                        }`}
                      >
                        <span 
                          className={`block w-5 h-5 mt-1 ml-1 rounded-full transition-transform bg-white shadow-md ${
                            profile.preferences.notifications.marketing ? 'transform translate-x-7' : ''
                          }`} 
                        />
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-warm-gray-200">
                  <h3 className="text-lg font-semibold text-warm-gray-900 mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-green-500" />
                    Language & Regional Settings
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                        Language
                      </label>
                      <select
                        value={profile.preferences.language}
                        onChange={e => setProfile({
                          ...profile, 
                          preferences: { 
                            ...profile.preferences,
                            language: e.target.value 
                          }
                        })}
                        className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                      >
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Telugu">Telugu</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-warm-gray-900 mb-4 flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-red-500" />
                  Account Security
                </h3>
                
                <div className="bg-warm-gray-50 rounded-lg p-4 border border-warm-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-warm-gray-900">Password</h4>
                      <p className="text-sm text-warm-gray-500">Last changed 2 months ago</p>
                    </div>
                    <button className="btn-secondary text-sm">
                      Change Password
                    </button>
                  </div>
                </div>
                
                <div className="bg-warm-gray-50 rounded-lg p-4 border border-warm-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-warm-gray-900">Two-Factor Authentication</h4>
                      <p className="text-sm text-warm-gray-500">Add an extra layer of security</p>
                    </div>
                    <button className="btn-secondary text-sm">
                      Enable
                    </button>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-warm-gray-200">
                  <h3 className="text-lg font-semibold text-warm-gray-900 mb-4">Privacy Settings</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <p className="font-medium text-warm-gray-900">Profile Visibility</p>
                        <p className="text-sm text-warm-gray-500">Control who can see your profile</p>
                      </div>
                      <select
                        value={profile.preferences.privacy.profileVisibility}
                        onChange={e => setProfile({
                          ...profile,
                          preferences: {
                            ...profile.preferences,
                            privacy: {
                              ...profile.preferences.privacy,
                              profileVisibility: e.target.value as 'public' | 'private'
                            }
                          }
                        })}
                        className="px-3 py-1.5 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                      >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <p className="font-medium text-warm-gray-900">Activity History</p>
                        <p className="text-sm text-warm-gray-500">Allow us to personalize your experience based on browsing</p>
                      </div>
                      <div className="relative">
                        <input 
                          type="checkbox" 
                          id="activity-history"
                          checked={profile.preferences.privacy.activityHistory}
                          onChange={() => setProfile({
                            ...profile,
                            preferences: {
                              ...profile.preferences,
                              privacy: {
                                ...profile.preferences.privacy,
                                activityHistory: !profile.preferences.privacy.activityHistory
                              }
                            }
                          })}
                          className="sr-only"
                        />
                        <label
                          htmlFor="activity-history"
                          className={`block w-14 h-7 rounded-full transition-colors ${
                            profile.preferences.privacy.activityHistory ? 'bg-saffron-500' : 'bg-warm-gray-300'
                          }`}
                        >
                          <span 
                            className={`block w-5 h-5 mt-1 ml-1 rounded-full transition-transform bg-white shadow-md ${
                              profile.preferences.privacy.activityHistory ? 'transform translate-x-7' : ''
                            }`} 
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-warm-gray-200">
                  <h3 className="text-lg font-semibold text-warm-gray-900 mb-4">Connected Accounts</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-warm-gray-900">Facebook</h4>
                          <p className="text-xs text-warm-gray-500">Not connected</p>
                        </div>
                      </div>
                      <button className="btn-secondary text-xs px-3 py-1.5">
                        Connect
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center py-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-warm-gray-900">Instagram</h4>
                          <p className="text-xs text-green-600 flex items-center">
                            <Check className="w-3 h-3 mr-1" />
                            Connected
                          </p>
                        </div>
                      </div>
                      <button className="btn-ghost text-xs px-3 py-1.5 text-red-600 hover:text-red-700">
                        Disconnect
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-warm-gray-200">
                  <h3 className="text-lg font-semibold text-warm-gray-900 mb-4 text-red-600">Danger Zone</h3>
                  
                  <button className="btn-ghost text-red-600 border border-red-200 hover:bg-red-50">
                    Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerProfilePage;