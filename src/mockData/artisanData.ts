import { Artisan } from '../types';

// Mock artisans data
export const artisans: Artisan[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    specialty: 'Traditional Textile Weaving',
    location: 'Rajasthan, India',
    experience: 25,
    rating: 4.9,
    totalProducts: 127,
    totalSales: 2543,
    profileImage: '/images/profile/artisans/priya sharma.png',
    coverImage: '/images/profile/artisans/priya sharma_cover.png',
    isVerified: true,
    story: 'Priya has been weaving traditional Rajasthani textiles for over two decades, learning the craft from her grandmother. Her vibrant silk scarves and tapestries showcase the rich heritage of Indian textile art.',
    specialties: ['Silk Weaving', 'Traditional Patterns', 'Natural Dyeing', 'Handloom Techniques'],
    achievements: [
      'National Craft Award 2019',
      'Featured in Vogue India 2020',
      'UNESCO Heritage Craft Recognition',
      'Rajasthan State Excellence Award'
    ],
    portfolio: {
      images: [
        '/images/products/Whisk_storyboard3b3d67f7b6a448328ea85f9c.png',
        '/images/products/Whisk_storyboard22d127129b164e319ca7dd50.png',
        '/images/products/Whisk_storyboarde3d063b7068249a38d4a80ec.png',
        '/images/products/Whisk_storyboardcf823d9988de48188b9197a0.png',
        '/images/products/Whisk_storyboard861b54c63f8f432ca5c9113a.png',
        '/images/products/Whisk_storyboard6ed87fdba0b64823adeee3f1.png'
      ]
    },
    workshops: [
      {
        id: 'workshop-1',
        title: 'Traditional Silk Weaving Masterclass',
        description: 'Learn the ancient art of silk weaving with traditional techniques',
        duration: '3 hours',
        price: 2500,
        thumbnail: '/images/products/Whisk_storyboarde3d063b7068249a38d4a80ec.png',
        rating: 4.9
      },
      {
        id: 'workshop-2',
        title: 'Natural Dyeing Workshop',
        description: 'Discover the secrets of natural dyeing using traditional materials',
        duration: '2 hours',
        price: 1800,
        thumbnail: '/images/products/Whisk_storyboardeb7b550068594c50b54bdbf4.png',
        rating: 4.8
      }
    ],
    products: [
      {
        id: 'product-1',
        name: 'Handwoven Silk Tassel',
        price: 2499,
        image: '/images/products/Whisk_storyboard3b3d67f7b6a448328ea85f9c.png',
        rating: 4.8
      },
      {
        id: 'product-2',
        name: 'Traditional Silk Scarf',
        price: 3999,
        image: '/images/products/Whisk_storyboard22d127129b164e319ca7dd50.png',
        rating: 4.9
      },
      {
        id: 'product-3',
        name: 'Heritage Pattern Tapestry',
        price: 8999,
        image: '/images/products/Whisk_storyboarde3d063b7068249a38d4a80ec.png',
        rating: 4.7
      }
    ]
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    specialty: 'Blue Pottery & Ceramics',
    location: 'Jaipur, Rajasthan',
    experience: 18,
    rating: 4.8,
    totalProducts: 89,
    totalSales: 1876,
    profileImage: '/images/profile/artisans/rajesh kumar.png',
    coverImage: '/images/profile/artisans/rajesh kumar_cover.png',
    isVerified: true,
    story: 'Rajesh is a master of Jaipur\'s famous blue pottery, a craft that dates back to the Mughal era. His contemporary interpretations of traditional patterns have earned international recognition.',
    specialties: ['Blue Pottery', 'Ceramic Art', 'Glazing Techniques', 'Traditional Motifs'],
    achievements: [
      'Craft Excellence Award 2018',
      'International Pottery Exhibition Gold Medal',
      'Heritage Preservation Honor'
    ],
    portfolio: {
      images: [
        '/images/products/Whisk_storyboardcf823d9988de48188b9197a0.png',
        '/images/products/Whisk_storyboardce2aaa6a2bc34c0aa0325b52.png',
        '/images/products/Whisk_storyboardc688b4b0a8ff415184f10726.png'
      ]
    },
    products: [
      {
        id: 'product-4',
        name: 'Blue Pottery Vase',
        price: 2899,
        image: '/images/products/Whisk_storyboardcf823d9988de48188b9197a0.png',
        rating: 4.6
      }
    ]
  },
  {
    id: '3',
    name: 'Meera Devi',
    specialty: 'Kundan Jewelry Making',
    location: 'Delhi, India',
    experience: 30,
    rating: 4.9,
    totalProducts: 156,
    totalSales: 3421,
    profileImage: '/images/profile/artisans/meera devi.png',
    coverImage: '/images/profile/artisans/meera devi_cover.png',
    isVerified: true,
    story: 'Meera is a third-generation Kundan jewelry artisan whose family has been crafting exquisite pieces for three decades. Her intricate designs blend traditional techniques with contemporary aesthetics.',
    specialties: ['Kundan Setting', 'Meenakari Work', 'Jadau Jewelry', 'Bridal Jewelry'],
    portfolio: {
      images: [
        '/images/products/Whisk_storyboard861b54c63f8f432ca5c9113a.png',
        '/images/products/Whisk_storyboarda8bddf974e2447e9872bab59.png'
      ]
    },
    products: [
      {
        id: 'product-5',
        name: 'Kundan Polki Earrings',
        price: 8499,
        image: '/images/products/Whisk_storyboard861b54c63f8f432ca5c9113a.png',
        rating: 4.8
      }
    ]
  },
  {
    id: '4',
    name: 'Arjun Singh',
    specialty: 'Wood Carving',
    location: 'Jodhpur, Rajasthan',
    experience: 22,
    rating: 4.7,
    totalProducts: 78,
    totalSales: 1250,
    profileImage: '/images/profile/artisans/arjun singh.png',
    coverImage: '/images/profile/artisans/arjun singh_cover.png',
    isVerified: true,
    story: 'Arjun learned the art of wood carving from his father and has been creating intricate wooden sculptures and furniture for over two decades. He specializes in Sheesham wood crafts.',
    specialties: ['Wood Carving', 'Sheesham Wood', 'Inlay Work', 'Furniture Crafting'],
    portfolio: {
      images: [
        '/images/products/Whisk_storyboard6ed87fdba0b64823adeee3f1.png',
        '/images/products/Whisk_storyboardf4d98aa2593c430da081f1f6.png'
      ]
    }
  },
  {
    id: '5',
    name: 'Lakshmi Patel',
    specialty: 'Block Printing',
    location: 'Gujarat, India',
    experience: 15,
    rating: 4.6,
    totalProducts: 112,
    totalSales: 1897,
    profileImage: '/images/profile/artisans/lakshmi patel.png',
    coverImage: '/images/profile/artisans/lakshmi patel cover.png',
    isVerified: true,
    story: 'Lakshmi comes from a family with a 150-year legacy in block printing. She uses traditional wooden blocks to create contemporary textile designs, blending heritage with modern aesthetics.',
    specialties: ['Block Printing', 'Natural Dyes', 'Textile Design', 'Sustainable Fashion']
  },
  {
    id: '6',
    name: 'Vikram Mehta',
    specialty: 'Metal Craft & Sculpture',
    location: 'Moradabad, Uttar Pradesh',
    experience: 28,
    rating: 4.8,
    totalProducts: 68,
    totalSales: 1423,
    profileImage: '/images/profile/artisans/vikram mehta.png',
    coverImage: '/images/profile/artisans/vikram mehta cover.png',
    isVerified: true,
    story: 'Vikram is a master brass worker from Moradabad, India\'s brass city. His family has been in the craft for generations, creating everything from decorative pieces to functional home items.',
    specialties: ['Brass Work', 'Metal Engraving', 'Sculpture', 'Traditional Designs']
  },
  {
    id: '7',
    name: 'Sarita Kumari',
    specialty: 'Embroidery & Needlework',
    location: 'Kutch, Gujarat',
    experience: 20,
    rating: 4.9,
    totalProducts: 145,
    totalSales: 2876,
    profileImage: '/images/profile/artisans/sarita kumari.png',
    coverImage: '/images/profile/artisans/sarita kumari cover.png',
    isVerified: true,
    story: 'Sarita specializes in traditional Kutch embroidery, a craft she learned from her mother at the age of seven. Her intricate mirror work and colorful thread designs have won national recognition.',
    specialties: ['Kutch Embroidery', 'Mirror Work', 'Traditional Textiles', 'Contemporary Fashion']
  },
  {
    id: '8',
    name: 'Mohammad Farooq',
    specialty: 'Zardozi Embroidery',
    location: 'Lucknow, Uttar Pradesh',
    experience: 35,
    rating: 4.8,
    totalProducts: 92,
    totalSales: 1765,
    profileImage: '/images/profile/artisans/mahammad farooq.png',
    coverImage: '/images/profile/artisans/mahammad farooq cover.png',
    isVerified: true,
    story: 'Mohammad comes from a family that has practiced Zardozi, the art of gold thread embroidery, since the Mughal era. His detailed work adorns everything from bridal wear to luxury home textiles.',
    specialties: ['Zardozi Embroidery', 'Gold Thread Work', 'Royal Court Designs', 'Couture Creations']
  }
];

// Find artisan by ID helper function
export const findArtisanById = (id: string): Artisan | undefined => {
  return artisans.find(artisan => artisan.id === id);
};

// Craft categories for filtering
export const craftCategories = [
  { value: 'all', label: 'All Categories' },
  { value: 'textile weaving', label: 'Textile Weaving' },
  { value: 'pottery', label: 'Pottery & Ceramics' },
  { value: 'jewelry', label: 'Jewelry Making' },
  { value: 'wood carving', label: 'Wood Carving' },
  { value: 'block printing', label: 'Block Printing' },
  { value: 'metal craft', label: 'Metal Craft' },
  { value: 'embroidery', label: 'Embroidery' }
];

// Regions for filtering
export const artisanRegions = [
  { value: 'all', label: 'All Regions' },
  { value: 'rajasthan', label: 'Rajasthan' },
  { value: 'gujarat', label: 'Gujarat' },
  { value: 'delhi', label: 'Delhi' },
  { value: 'uttar pradesh', label: 'Uttar Pradesh' },
  { value: 'west bengal', label: 'West Bengal' },
  { value: 'kashmir', label: 'Kashmir' },
  { value: 'tamil nadu', label: 'Tamil Nadu' }
];

// Sort options
export const artisanSortOptions = [
  { value: 'popularity', label: 'Most Popular' },
  { value: 'experience', label: 'Years of Experience' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'products', label: 'Most Products' }
];