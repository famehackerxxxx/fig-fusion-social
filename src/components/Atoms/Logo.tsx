
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showBee?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showBee = false }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  };

  return (
    <Link to="/" className="flex items-center">
      <div className="relative">
        <img 
          src="/lovable-uploads/320bf789-30c8-4631-9fd2-0e7fdde0d7e4.png" 
          alt="HiveWire Logo" 
          className={`${sizeClasses[size]} rounded-full object-contain`}
        />
        
        {showBee && (
          <img 
            src="/lovable-uploads/5ca6d17f-4f8f-4d6d-8158-3955f101842c.png" 
            alt="Bee" 
            className="absolute -right-6 -top-2 h-8 w-8 object-contain"
          />
        )}
      </div>
    </Link>
  );
};

export default Logo;
