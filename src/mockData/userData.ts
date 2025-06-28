// Customer profile data
export const customerProfile = {
  id: 'cust-123',
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+91 98765 43210',
  dateOfBirth: '1990-05-15',
  gender: 'Male',
  location: 'Mumbai, India',
  joinedDate: 'January 2024',
  avatar: '/images/profile/customers/john-doe.png',
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
};

// Artisan profile data
export const artisanProfile = {
  id: 'art-123',
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
  avatar: '/images/profile/artisans/priya-sharma.png',
  coverImage: '/images/profile/artisans/priya-sharma_cover.png',
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
      '/images/products/Whisk_storyboard3b3d67f7b6a448328ea85f9c.png',
      '/images/products/Whisk_storyboard22d127129b164e319ca7dd50.png',
      '/images/products/Whisk_storyboarde3d063b7068249a38d4a80ec.png',
      '/images/products/Whisk_storyboard861b54c63f8f432ca5c9113a.png',
      '/images/products/Whisk_storyboardcf823d9988de48188b9197a0.png',
      '/images/products/Whisk_storyboard6ed87fdba0b64823adeee3f1.png'
    ]
  }
};