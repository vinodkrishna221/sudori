// Mock orders data
// Artisan Orders
export const artisanOrders = [
  {
    id: 'order1',
    orderNumber: 'ORD-7654321',
    status: 'processing',
    date: 'Dec 18, 2024',
    total: 18499,
    customer: {
      name: 'John Doe',
      location: 'Mumbai, India',
      avatar: '/images/profile/customers/john-doe.png'
    },
    items: [
      {
        id: 'item1',
        name: 'Handwoven Silk Tassel',
        image: '/images/products/Whisk_storyboard3b3d67f7b6a448328ea85f9c.png',
        quantity: 3
      }
    ],
    estimatedDelivery: 'Dec 23, 2024',
    priority: 'high'
  },
  {
    id: 'order2',
    orderNumber: 'ORD-7654320',
    status: 'confirmed',
    date: 'Dec 17, 2024',
    total: 12999,
    customer: {
      name: 'Sarah Johnson',
      location: 'Delhi, India',
      avatar: '/images/profile/customers/sarah-johnson.jpg'
    },
    items: [
      {
        id: 'item2',
        name: 'Traditional Silk Scarf',
        image: '/images/products/Whisk_storyboard22d127129b164e319ca7dd50.png',
        quantity: 1
      }
    ],
    estimatedDelivery: 'Dec 22, 2024',
    priority: 'medium'
  },
  {
    id: 'order3',
    orderNumber: 'ORD-7654319',
    status: 'shipped',
    date: 'Dec 15, 2024',
    total: 8999,
    customer: {
      name: 'Michael Chen',
      location: 'Bangalore, India',
      avatar: '/images/profile/customers/michael-chen.jpg'
    },
    items: [
      {
        id: 'item3',
        name: 'Heritage Pattern Tapestry',
        image: '/images/products/Whisk_storyboarde3d063b7068249a38d4a80ec.png',
        quantity: 1
      }
    ],
    estimatedDelivery: 'Dec 18, 2024',
    priority: 'low'
  },
  {
    id: 'order4',
    orderNumber: 'ORD-7654318',
    status: 'delivered',
    date: 'Dec 10, 2024',
    total: 4499,
    customer: {
      name: 'Priyanka Mehta',
      location: 'Mumbai, India',
      avatar: '/images/profile/customers/priyanka-mehta.jpg'
    },
    items: [
      {
        id: 'item4',
        name: 'Embroidered Cushion Cover',
        image: '/images/products/Whisk_storyboardeb7b550068594c50b54bdbf4.png',
        quantity: 1
      },
      {
        id: 'item5',
        name: 'Table Runner',
        image: '/images/products/Whisk_storyboard982ba016d8fc4a4aa7c00532.png',
        quantity: 2
      }
    ],
    priority: 'low'
  },
  {
    id: 'order5',
    orderNumber: 'ORD-7654317',
    status: 'pending',
    date: 'Dec 19, 2024',
    total: 6999,
    customer: {
      name: 'James Rodriguez',
      location: 'Chennai, India',
      avatar: '/images/profile/customers/james-rodriguez.jpg'
    },
    items: [
      {
        id: 'item6',
        name: 'Zari Embroidered Potli Bag',
        image: '/images/products/Whisk_storyboarda8bddf974e2447e9872bab59.png',
        quantity: 1
      }
    ],
    estimatedDelivery: 'Dec 24, 2024',
    priority: 'urgent'
  }
];

export const orders = [
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
  },
  {
    id: 'order3',
    orderNumber: 'ORD-1234565',
    status: 'confirmed',
    date: 'Dec 17, 2024',
    total: 8499,
    items: [
      {
        id: 'item4',
        name: 'Carved Wooden Box',
        image: '/images/products/Whisk_storyboard6ed87fdba0b64823adeee3f1.png',
        quantity: 1
      }
    ],
    estimatedDelivery: 'Dec 22, 2024'
  },
  {
    id: 'order4',
    orderNumber: 'ORD-1234564',
    status: 'pending',
    date: 'Dec 18, 2024',
    total: 6499,
    items: [
      {
        id: 'item5',
        name: 'Brass Candle Stand',
        image: '/images/products/Whisk_storyboardf4d98aa2593c430da081f1f6.png',
        quantity: 2
      }
    ],
    estimatedDelivery: 'Dec 23, 2024'
  },
  {
    id: 'order5',
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
    id: 'order6',
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
];

// Order tracking data
export const orderTracking = {
  orderId: 'ORD-1234567890',
  orderNumber: 'ORD-1234567890',
  status: 'shipped',
  currentStatus: {
    title: 'Package Shipped',
    description: 'Your order is on its way! The package has been handed over to our delivery partner.',
    estimatedDate: 'December 20, 2024'
  },
  items: [
    {
      id: '1',
      name: 'Handwoven Silk Tassel',
      image: '/images/products/Whisk_storyboard3b3d67f7b6a448328ea85f9c.png',
      artisan: 'Priya Sharma',
      quantity: 2
    },
    {
      id: '2',
      name: 'Blue Pottery Vase',
      image: '/images/products/Whisk_storyboardcf823d9988de48188b9197a0.png',
      artisan: 'Rajesh Kumar',
      quantity: 1
    }
  ],
  shipping: {
    address: {
      name: 'John Doe',
      line1: '123 Heritage Street',
      line2: 'Near Cultural Center',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001'
    },
    carrier: {
      name: 'BlueDart',
      trackingNumber: 'BD123456789IN',
      contact: '1800-123-4567'
    }
  },
  timeline: [
    {
      id: '1',
      title: 'Order Confirmed',
      description: 'Your order has been confirmed and payment received',
      timestamp: 'Dec 15, 2024 at 2:30 PM',
      completed: true,
      current: false
    },
    {
      id: '2',
      title: 'Artisan Crafting',
      description: 'Your items are being handcrafted by our skilled artisans',
      timestamp: 'Dec 16, 2024 at 10:15 AM',
      location: 'Jaipur, Rajasthan',
      completed: true,
      current: false,
      image: '/images/products/Whisk_storyboarde3d063b7068249a38d4a80ec.png'
    },
    {
      id: '3',
      title: 'Quality Check',
      description: 'Your items have passed our rigorous quality inspection',
      timestamp: 'Dec 17, 2024 at 3:45 PM',
      completed: true,
      current: false
    },
    {
      id: '4',
      title: 'Package Shipped',
      description: 'Your order has been picked up by BlueDart',
      timestamp: 'Dec 18, 2024 at 11:20 AM',
      location: 'Mumbai, Maharashtra',
      completed: true,
      current: true
    },
    {
      id: '5',
      title: 'Out for Delivery',
      description: 'Your package is out for delivery',
      timestamp: 'Expected Dec 20, 2024',
      completed: false,
      current: false
    },
    {
      id: '6',
      title: 'Delivered',
      description: 'Your package has been delivered',
      timestamp: 'Expected Dec 20, 2024',
      completed: false,
      current: false
    }
  ],
  estimatedDelivery: 'December 20, 2024',
  lastUpdate: '2 hours ago'
};