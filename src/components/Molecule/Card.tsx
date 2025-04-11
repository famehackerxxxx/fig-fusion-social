
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  color?: 'white' | 'blue' | 'yellow';
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className,
  color = 'white'
}) => {
  const colorClasses = {
    white: 'bg-white',
    blue: 'bg-hivewire-blue bg-opacity-20',
    yellow: 'bg-hivewire-yellow bg-opacity-20'
  };

  return (
    <div className={cn(
      'rounded-lg shadow-md p-6',
      colorClasses[color],
      className
    )}>
      {children}
    </div>
  );
};

export default Card;
