import { Testimonial } from '../types';

// Mock testimonials data
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'New York, USA',
    avatar: '/home/project/public/images/profile/customers/sarah-johnson.jpg',
    rating: 5,
    comment: 'The handwoven silk scarf I ordered is absolutely stunning! The quality is exceptional and knowing that it directly supports the artisan makes it even more special.',
    product: {
      name: 'Handwoven Silk Scarf',
      image: '/images/products/Whisk_storyboard3b3d67f7b6a448328ea85f9c.png',
    },
    date: '2024-01-15',
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'London, UK',
    avatar: '/home/project/public/images/profile/customers/michael-chen.jpg',
    rating: 5,
    comment: 'Sudori has transformed my home with authentic Indian art pieces. Each item tells a story and the connection with artisans makes every purchase meaningful.',
    product: {
      name: 'Blue Pottery Vase',
      image: '/images/products/Whisk_storyboardcf823d9988de48188b9197a0.png',
    },
    date: '2024-01-10',
  },
  {
    id: '3',
    name: 'Priyanka Mehta',
    location: 'Mumbai, India',
    avatar: '/home/project/public/images/profile/customers/priyanka-mehta.jpg',
    rating: 5,
    comment: 'As an Indian living abroad, Sudori helps me stay connected to my roots. The craftsmanship is unparalleled and delivery to Canada was seamless.',
    product: {
      name: 'Kundan Earrings',
      image: '/images/products/Whisk_storyboard861b54c63f8f432ca5c9113a.png',
    },
    date: '2024-01-08',
  },
  {
    id: '4',
    name: 'James Rodriguez',
    location: 'São Paulo, Brazil',
    avatar: '/home/project/public/images/profile/customers/james-rodriguez.jpg',
    rating: 5,
    comment: 'The wooden sculpture I purchased is a masterpiece. The attention to detail is incredible and it has become the centerpiece of our living room.',
    product: {
      name: 'Carved Wooden Box',
      image: '/images/products/Whisk_storyboard6ed87fdba0b64823adeee3f1.png',
    },
    date: '2024-01-05',
  },
];