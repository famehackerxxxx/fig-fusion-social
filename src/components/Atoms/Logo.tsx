
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showBee?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showBee = false, className = '' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  };

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <div className="relative">
        <div 
          className="absolute" 
          style={{
            width: '111px',
            height: '122px',
            left: 'calc(50% - 111px/2 + 0.5px)',
            top: 'calc(50% - 122px/2 - 0.5px)',
            background: 'url(/lovable-uploads/320bf789-30c8-4631-9fd2-0e7fdde0d7e4.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
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
