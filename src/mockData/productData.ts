import { Product } from '../types';

// Mock products data
export const products: Product[] = [
  {
    id: '1',
    name: 'Handwoven Banarasi Silk Saree',
    description: 'Exquisite Banarasi silk saree with intricate gold zari work',
    price: 12499,
    originalPrice: 15999,
    image: '/images/products/Whisk_storyboard3b3d67f7b6a448328ea85f9c.png',
    artisan: { id: '1', name: 'Kamala Devi', location: 'Varanasi, Uttar Pradesh', rating: 4.9 },
    category: 'Textiles',
    rating: 4.8,
    reviewCount: 156,
    isHandmade: true,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Blue Pottery Decorative Vase',
    description: 'Traditional Jaipur blue pottery with Persian-inspired motifs',
    price: 2899,
    image: '/images/products/Whisk_storyboardcf823d9988de48188b9197a0.png',
    artisan: { id: '2', name: 'Rajesh Kumar', location: 'Jaipur, Rajasthan', rating: 4.7 },
    category: 'Pottery',
    rating: 4.6,
    reviewCount: 89,
    isHandmade: true,
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Kundan Polki Earrings',
    description: 'Exquisite Kundan earrings with uncut diamonds and pearls',
    price: 8499,
    originalPrice: 10999,
    image: '/images/products/Whisk_storyboard861b54c63f8f432ca5c9113a.png',
    artisan: { id: '3', name: 'Meera Sharma', location: 'Jaipur, Rajasthan', rating: 4.9 },
    category: 'Jewelry',
    rating: 4.9,
    reviewCount: 203,
    isHandmade: true,
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Kashmiri Walnut Wood Jewelry Box',
    description: 'Intricately carved walnut wood jewelry box with traditional patterns',
    price: 4299,
    image: '/images/products/Whisk_storyboard6ed87fdba0b64823adeee3f1.png',
    artisan: { id: '4', name: 'Arjun Singh', location: 'Srinagar, Kashmir', rating: 4.6 },
    category: 'Woodwork',
    rating: 4.7,
    reviewCount: 156,
    isHandmade: true,
    isFeatured: false,
  },
  {
    id: '5',
    name: 'Brass Diya Set with Engraving',
    description: 'Set of 5 brass diyas with traditional engravings for festivals',
    price: 1699,
    image: '/images/products/Whisk_storyboardf4d98aa2593c430da081f1f6.png',
    artisan: { id: '5', name: 'Vikram Patel', location: 'Moradabad, Uttar Pradesh', rating: 4.5 },
    category: 'Metalwork',
    rating: 4.5,
    reviewCount: 78,
    isHandmade: true,
    isFeatured: false,
  },
  {
    id: '6',
    name: 'Handbound Leather Journal',
    description: 'Genuine leather journal with handmade paper and block print cover',
    price: 1299,
    image: '/images/products/Whisk_storyboarda0fcf97e56b44232aafa952a.png',
    artisan: { id: '6', name: 'Sita Kumari', location: 'Jodhpur, Rajasthan', rating: 4.4 },
    category: 'Leather',
    rating: 4.4,
    reviewCount: 92,
    isHandmade: true,
    isFeatured: false,
  },
  {
    id: '7',
    name: 'Madhubani Painting on Canvas',
    description: 'Traditional Madhubani art depicting nature and mythology',
    price: 3499,
    image: '/images/products/Whisk_storyboardc688b4b0a8ff415184f10726.png',
    artisan: { id: '7', name: 'Ganga Devi', location: 'Madhubani, Bihar', rating: 4.8 },
    category: 'Art',
    rating: 4.7,
    reviewCount: 124,
    isHandmade: true,
    isFeatured: true,
  },
  {
    id: '8',
    name: 'Pashmina Shawl with Sozni Embroidery',
    description: 'Pure Pashmina shawl with delicate Sozni hand embroidery',
    price: 15999,
    originalPrice: 19999,
    image: '/images/products/Whisk_storyboard22d127129b164e319ca7dd50.png',
    artisan: { id: '8', name: 'Abdul Rahman', location: 'Srinagar, Kashmir', rating: 4.9 },
    category: 'Textiles',
    rating: 4.9,
    reviewCount: 87,
    isHandmade: true,
    isFeatured: true,
  }
];

// Find product by ID helper function
export const findProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Product filters
export const productFilters = {
  categories: [
    { id: 'textiles', label: 'Textiles & Fabrics', count: 1245 },
    { id: 'jewelry', label: 'Jewelry & Accessories', count: 856 },
    { id: 'pottery', label: 'Pottery & Ceramics', count: 623 },
    { id: 'woodwork', label: 'Wooden Crafts', count: 482 },
    { id: 'metalwork', label: 'Metal Crafts', count: 356 },
    { id: 'leather', label: 'Leather Goods', count: 284 },
    { id: 'art', label: 'Paintings & Art', count: 428 },
  ],
  
  regions: [
    { id: 'rajasthan', label: 'Rajasthan', count: 1543 },
    { id: 'uttar-pradesh', label: 'Uttar Pradesh', count: 1234 },
    { id: 'gujarat', label: 'Gujarat', count: 987 },
    { id: 'west-bengal', label: 'West Bengal', count: 765 },
    { id: 'kashmir', label: 'Kashmir', count: 543 },
    { id: 'bihar', label: 'Bihar', count: 432 },
    { id: 'punjab', label: 'Punjab', count: 321 },
  ],
  
  priceRanges: [
    { id: 'under-1000', label: 'Under ₹1,000', min: 0, max: 1000 },
    { id: '1000-5000', label: '₹1,000 - ₹5,000', min: 1000, max: 5000 },
    { id: '5000-10000', label: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
    { id: '10000-25000', label: '₹10,000 - ₹25,000', min: 10000, max: 25000 },
    { id: 'above-25000', label: 'Above ₹25,000', min: 25000, max: 999999 },
  ]
};