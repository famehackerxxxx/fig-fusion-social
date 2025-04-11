
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ 
  href, 
  children, 
  active = false,
  className
}) => {
  return (
    <Link
      to={href}
      className={cn(
        'px-4 py-2 rounded-full transition-colors duration-200',
        active 
          ? 'bg-hivewire-blue text-hivewire-dark font-medium' 
          : 'hover:bg-hivewire-blue/20 text-gray-700',
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavItem;
