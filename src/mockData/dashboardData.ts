// Customer dashboard data
export const customerDashboardData = {
  stats: {
    totalOrders: 7,
    activeOrders: 3,
    totalSpent: 24500,
    loyaltyPoints: 450,
    wishlistItems: 12,
    completedReviews: 5
  },
  
  recentOrders: [
    {
      id: 'order1',
      orderNumber: 'ORD-1234567',
      status: 'shipped',
      date: 'Dec 15, 2024',
      total: 15009,
      items: [
        {
          id: 'item1',
          name: 'Handwoven Silk Tassel',
          image: '/images/products/Whisk_storyboard3b3d67f7b6a448328ea85f9c.png',
          quantity: 2
        },
        {
          id: 'item2',
          name: 'Blue Pottery Vase',
          image: '/images/products/Whisk_storyboardcf823d9988de48188b9197a0.png',
          quantity: 1
        }
      ],
      estimatedDelivery: 'Dec 20, 2024'
    },
    {
      id: 'order2',
      orderNumber: 'ORD-1234566',
      status: 'delivered',
      date: 'Dec 5, 2024',
      total: 12999,
      items: [
        {
          id: 'item3',
          name: 'Kundan Polki Earrings',
          image: '/images/products/Whisk_storyboard861b54c63f8f432ca5c9113a.png',
          quantity: 1
        }
      ]
    }
  ],
  
  recentActivities: [
    {
      id: 'activity1',
      type: 'order',
      title: 'Order Shipped',
      description: 'Your order #ORD-1234567 has been shipped',
      time: '2 hours ago'
    },
    {
      id: 'activity2',
      type: 'wishlist',
      title: 'Item Back in Stock',
      description: 'Handwoven Pashmina Shawl is now available',
      time: '5 hours ago'
    },
    {
      id: 'activity3',
      type: 'review',
      title: 'Review Reminder',
      description: 'Please review your recent purchases',
      time: '1 day ago'
    },
    {
      id: 'activity4',
      type: 'cart',
      title: 'Items in Cart',
      description: 'You have items waiting in your cart',
      time: '2 days ago'
    }
  ],
  
  featuredProducts: [
    {
      id: 'prod1',
      name: 'Traditional Wooden Elephant',
      price: 1499,
      image: '/images/products/Whisk_storyboard6ed87fdba0b64823adeee3f1.png',
      artisan: 'Arjun Singh'
    },
    {
      id: 'prod2',
      name: 'Hand-painted Terracotta Vase',
      price: 2199,
      originalPrice: 2699,
      image: '/images/products/Whisk_storyboardcf823d9988de48188b9197a0.png',
      artisan: 'Rajesh Kumar'
    },
    {
      id: 'prod3',
      name: 'Silver Filigree Pendant',
      price: 3499,
      image: '/images/products/Whisk_storyboard861b54c63f8f432ca5c9113a.png',
      artisan: 'Meera Devi'
    }
  ]
};

// Artisan dashboard data
export const artisanDashboardData = {
  stats: { 
    todayRevenue: '₹12,450', 
    activeOrders: '23', 
    productsListed: '156', 
    conversionRate: '3.2%'
  },
  
  pendingOrders: [
    {
      id: 'order1',
      orderNumber: 'ORD-7654321',
      status: 'processing',
      date: 'Dec 18, 2024',
      total: 18499,
      items: [
        {
          id: 'item1',
          name: 'Handwoven Silk Tassel',
          image: '/images/products/Whisk_storyboard3b3d67f7b6a448328ea85f9c.png',
          quantity: 3
        }
      ],
      estimatedDelivery: 'Dec 23, 2024'
    },
    {
      id: 'order2',
      orderNumber: 'ORD-7654320',
      status: 'confirmed',
      date: 'Dec 17, 2024',
      total: 12999,
      items: [
        {
          id: 'item2',
          name: 'Traditional Silk Scarf',
          image: '/images/products/Whisk_storyboard22d127129b164e319ca7dd50.png',
          quantity: 1
        }
      ],
      estimatedDelivery: 'Dec 22, 2024'
    }
  ],
  
  topProducts: [
    {
      id: 'prod1',
      name: 'Handwoven Silk Tassel',
      price: 2499,
      originalPrice: 3199,
      image: '/images/products/Whisk_storyboard3b3d67f7b6a448328ea85f9c.png',
      status: 'active',
      inventory: 32,
      sales: 58,
      views: 1245,
      rating: 4.8,
      reviewCount: 156
    },
    {
      id: 'prod2',
      name: 'Traditional Silk Scarf',
      price: 3999,
      image: '/images/products/Whisk_storyboard22d127129b164e319ca7dd50.png',
      status: 'active',
      inventory: 15,
      sales: 42,
      views: 980,
      rating: 4.9,
      reviewCount: 87
    },
    {
      id: 'prod3',
      name: 'Heritage Pattern Tapestry',
      price: 8999,
      originalPrice: 12999,
      image: '/images/products/Whisk_storyboarde3d063b7068249a38d4a80ec.png',
      status: 'active',
      inventory: 8,
      sales: 27,
      views: 745,
      rating: 4.7,
      reviewCount: 36
    }
  ],
  
  recentActivities: [
    {
      id: 'activity1',
      type: 'order',
      title: 'New Order Received',
      description: 'Order #ORD-7654321 for 3 Handwoven Silk Tassels',
      time: '2 hours ago'
    },
    {
      id: 'activity2',
      type: 'message',
      title: 'New Customer Message',
      description: 'John D. asked about customizing a product',
      time: '5 hours ago'
    },
    {
      id: 'activity3',
      type: 'sale',
      title: 'Payment Received',
      description: '₹12,999 for Order #ORD-7654320',
      time: '1 day ago'
    },
    {
      id: 'activity4',
      type: 'review',
      title: 'New 5-Star Review',
      description: 'Sarah J. left a 5-star review on your Traditional Silk Scarf',
      time: '2 days ago'
    }
  ]
};