export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  artisan: {
    id: string;
    name: string;
    location: string;
    rating: number;
  };
  category: string;
  rating: number;
  reviewCount: number;
  isHandmade: boolean;
  isFeatured: boolean;
  originalPrice?: number;
}

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  options?: Record<string, string>;
  price: number;
  originalPrice?: number;
}

export interface OrderSummary {
  subtotal: number;
  shipping: number;
  taxes: number;
  discount: number;
  total: number;
}

export interface Address {
  id: string;
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  type: 'Home' | 'Office' | 'Other';
  isDefault: boolean;
}

export interface PaymentMethod {
  id: string;
  type: string;
  name: string;
  details: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: string;
  items: Array<{
    productId: string;
    name: string;
    image: string;
    quantity: number;
    price: number;
  }>;
  shipping: {
    address: Address;
    method: string;
    trackingNumber?: string;
  };
  payment: {
    method: string;
    status: string;
    transactionId: string;
  };
  summary: OrderSummary;
  placedAt: string;
  estimatedDelivery: string;
}

export interface ProductFilters {
  category?: string[];
  priceRange?: [number, number];
  rating?: number;
  location?: string[];
  handmade?: boolean;
  ecoFriendly?: boolean;
  fairTrade?: boolean;
}

export interface Artisan {
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
  specialties?: string[];
  achievements?: string[];
  portfolio?: {
    images: string[];
    videos?: string[];
  };
  workshops?: {
    id: string;
    title: string;
    description: string;
    duration: string;
    price: number;
    thumbnail: string;
    rating: number;
  }[];
  products?: Array<{
    id: string;
    name: string;
    price: number;
    image: string;
    rating: number;
  }>;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  featured: boolean;
  regions?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
  product?: {
    name: string;
    image: string;
  };
  date: string;
}

export interface TrustMetric {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: string;
}