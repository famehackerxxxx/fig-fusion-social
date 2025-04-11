
import React from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
    aspectRatio?: number;
  }[];
  className?: string;
}

const ImageGrid: React.FC<ImageGridProps> = ({ 
  images,
  className 
}) => {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4', className)}>
      {/* First row */}
      <div className="space-y-4">
        <div className="overflow-hidden rounded-lg">
          <AspectRatio ratio={1} className="bg-muted">
            <img src={images[0]?.src} alt={images[0]?.alt} className="h-full w-full object-cover transition-all hover:scale-105 duration-500" />
          </AspectRatio>
        </div>
        <div className="overflow-hidden rounded-lg">
          <AspectRatio ratio={1.5} className="bg-muted">
            <img src={images[5]?.src} alt={images[5]?.alt} className="h-full w-full object-cover transition-all hover:scale-105 duration-500" />
          </AspectRatio>
        </div>
      </div>

      {/* Second row */}
      <div className="space-y-4">
        <div className="overflow-hidden rounded-lg">
          <AspectRatio ratio={1.75} className="bg-muted">
            <img src={images[1]?.src} alt={images[1]?.alt} className="h-full w-full object-cover transition-all hover:scale-105 duration-500" />
          </AspectRatio>
        </div>
        <div className="overflow-hidden rounded-lg">
          <AspectRatio ratio={0.75} className="bg-muted">
            <img src={images[6]?.src} alt={images[6]?.alt} className="h-full w-full object-cover transition-all hover:scale-105 duration-500" />
          </AspectRatio>
        </div>
      </div>

      {/* Third row */}
      <div className="space-y-4">
        <div className="overflow-hidden rounded-lg">
          <AspectRatio ratio={1} className="bg-muted">
            <img src={images[2]?.src} alt={images[2]?.alt} className="h-full w-full object-cover transition-all hover:scale-105 duration-500" />
          </AspectRatio>
        </div>
        <div className="overflow-hidden rounded-lg">
          <AspectRatio ratio={1.25} className="bg-muted">
            <img src={images[7]?.src} alt={images[7]?.alt} className="h-full w-full object-cover transition-all hover:scale-105 duration-500" />
          </AspectRatio>
        </div>
      </div>

      {/* Fourth row (shown on larger screens or after the first three columns) */}
      <div className="space-y-4 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="overflow-hidden rounded-lg">
          <AspectRatio ratio={1.5} className="bg-muted">
            <img src={images[3]?.src} alt={images[3]?.alt} className="h-full w-full object-cover transition-all hover:scale-105 duration-500" />
          </AspectRatio>
        </div>
        <div className="overflow-hidden rounded-lg">
          <AspectRatio ratio={1.5} className="bg-muted">
            <img src={images[4]?.src} alt={images[4]?.alt} className="h-full w-full object-cover transition-all hover:scale-105 duration-500" />
          </AspectRatio>
        </div>
        <div className="overflow-hidden rounded-lg">
          <AspectRatio ratio={1.5} className="bg-muted">
            <img src={images[8]?.src || images[0]?.src} alt={images[8]?.alt || 'Cultural event'} className="h-full w-full object-cover transition-all hover:scale-105 duration-500" />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
