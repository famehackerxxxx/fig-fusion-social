
import React from 'react';
import { cn } from '@/lib/utils';

interface PersonCardProps {
  image: string;
  name: string;
  title?: string;
  description?: string;
  className?: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  image,
  name,
  title,
  description,
  className
}) => {
  return (
    <div className={cn(
      'flex flex-col items-center md:items-start md:flex-row gap-4',
      className
    )}>
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover"
        />
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-semibold text-xl text-hivewire-dark">{name}</h3>
        {title && <p className="text-hivewire-darkblue mb-2">{title}</p>}
        {description && <p className="text-gray-600 text-sm">{description}</p>}
      </div>
    </div>
  );
};

export default PersonCard;
