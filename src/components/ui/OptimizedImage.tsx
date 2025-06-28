import React from 'react';
import { getOptimizedImageUrl } from '../../utils/imageUtils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
  onClick?: () => void;
}

/**
 * OptimizedImage component that handles local and remote images with optimization
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  fallbackSrc = '/images/placeholder.png',
  quality = 80,
  format = 'webp',
  onClick
}) => {
  const [error, setError] = React.useState(false);
  
  // Use external URLs directly, or use local path with correct public folder path
  const imageSrc = src.startsWith('http') 
    ? src 
    : src.startsWith('/') 
      ? src 
      : `/images/${src}`;
  
  const handleImageError = () => {
    if (!error) {
      console.warn(`Failed to load image: ${src}`);
      setError(true);
    }
  };

  return (
    <img
      src={error ? fallbackSrc : imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleImageError}
      loading="lazy"
      onClick={onClick}
      style={{ objectFit: 'cover' }}
    />
  );
};

export default OptimizedImage;