'use client'

import Image from 'next/image';
import { useState } from 'react';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="20%" />
      <stop stop-color="#edeef1" offset="50%" />
      <stop stop-color="#f6f7f8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '100vw',
}) {
  const [isLoading, setIsLoading] = useState(true);
  
  // Handle both local and remote images
  const imageSrc = src.startsWith('http') ? src : `/${src}`;

  return (
    <div 
      className={`image-wrapper ${isLoading ? 'loading' : 'loaded'} ${className || ''}`}
      style={{ 
        position: 'relative',
        overflow: 'hidden',
        background: '#f6f7f8',
        aspectRatio: `${width}/${height}`
      }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill={true}
        style={{
          objectFit: 'cover',
          transition: 'opacity 0.3s ease-in-out',
          opacity: isLoading ? 0 : 1,
        }}
        sizes={sizes}
        priority={priority}
        quality={90}
        onLoadingComplete={() => setIsLoading(false)}
      />
      <style jsx>{`
        .image-wrapper {
          width: 100%;
        }
        .image-wrapper.loading::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            #f6f7f8 0%,
            #edeef1 50%,
            #f6f7f8 100%
          );
          animation: shimmer 1.5s infinite;
          transform: translateX(-100%);
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
} 