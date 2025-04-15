
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
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
            background: 'url(/lovable-uploads/a74a80df-f09f-46ad-a55c-0c1f61f5e43b.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
      </div>
    </Link>
  );
};

export default Logo;

