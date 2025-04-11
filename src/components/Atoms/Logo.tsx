
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  return (
    <Link to="/" className="flex items-center">
      <div className={`${sizeClasses[size]} relative`}>
        <img 
          src="/lovable-uploads/320bf789-30c8-4631-9fd2-0e7fdde0d7e4.png" 
          alt="HiveWire Logo" 
          className="rounded-full object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
