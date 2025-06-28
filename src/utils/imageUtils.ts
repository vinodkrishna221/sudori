/**
 * Utility functions for handling image paths and optimization
 */

/**
 * Get an optimized image path, either from local assets or external sources
 * 
 * @param path - Image path or URL
 * @param options - Optimization options
 * @returns Optimized image URL
 */
export const getOptimizedImageUrl = (path: string, options: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
} = {}): string => {
  // Default options
  const { width = 800, quality = 80, format = 'webp' } = options;
  
  // Check if it's an external URL (http/https)
  if (path.startsWith('http')) {
    // For external images, we'll use them directly as is
    return path;
  }
  
  // For local images, return the path as is
  return path;
};

/**
 * Get artisan profile image path
 */
export const getArtisanProfileImage = (artisanId: string, artisanName: string): string => {
  // Convert artisan name to kebab case for filename
  const filename = artisanName.toLowerCase().replace(/\s+/g, '-');
  return `/images/profile/artisans/${filename}.png`;
};

/**
 * Get artisan cover image path
 */
export const getArtisanCoverImage = (artisanId: string, artisanName: string): string => {
  // Convert artisan name to kebab case for filename
  const filename = artisanName.toLowerCase().replace(/\s+/g, '-');
  return `/images/profile/artisans/${filename}_cover.png`;
};

/**
 * Get product image path
 */
export const getProductImage = (productId: string, index: number = 0): string => {
  return `/images/products/Whisk_storyboard${index === 0 ? productId : productId + '_' + index}.png`;
};

/**
 * Get category image path
 */
export const getCategoryImage = (categoryId: string): string => {
  return `/images/categories/category_${categoryId}.png`;
};