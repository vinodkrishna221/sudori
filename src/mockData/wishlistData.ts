// Customer wishlist data
export const wishlistItems = [
  {
    id: 'wish1',
    product: {
      id: 'prod1',
      name: 'Handwoven Pashmina Shawl',
      image: '/images/products/Whisk_storyboard22d127129b164e319ca7dd50.png',
      price: 15999,
      originalPrice: 19999,
      artisan: {
        name: 'Abdul Rahman',
        location: 'Kashmir'
      },
      rating: 4.9,
      reviewCount: 87,
      inStock: true
    },
    addedOn: '3 days ago'
  },
  {
    id: 'wish2',
    product: {
      id: 'prod2',
      name: 'Wooden Dhokra Art Elephant',
      image: '/images/products/Whisk_storyboard6ed87fdba0b64823adeee3f1.png',
      price: 4299,
      artisan: {
        name: 'Arjun Singh',
        location: 'Rajasthan'
      },
      rating: 4.7,
      reviewCount: 156,
      inStock: true
    },
    addedOn: '1 week ago',
    notes: 'Beautiful centerpiece for the living room'
  },
  {
    id: 'wish3',
    product: {
      id: 'prod3',
      name: 'Traditional Meenakari Earrings',
      image: '/images/products/Whisk_storyboard861b54c63f8f432ca5c9113a.png',
      price: 3499,
      originalPrice: 4299,
      artisan: {
        name: 'Meera Devi',
        location: 'Jaipur'
      },
      rating: 4.8,
      reviewCount: 124,
      inStock: false
    },
    addedOn: '2 weeks ago'
  }
];

// Wishlist collections
export const collections = [
  {
    id: 'default',
    name: 'Favorites',
    itemCount: 2,
    isPublic: false,
    isDefault: true
  },
  {
    id: 'home-decor',
    name: 'Home Decor',
    itemCount: 1,
    isPublic: true,
    isDefault: false
  }
];