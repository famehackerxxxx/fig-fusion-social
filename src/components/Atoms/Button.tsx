
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'yellow' | 'blue' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = ({ 
  variant = 'yellow', 
  size = 'md', 
  children, 
  className, 
  ...props 
}: ButtonProps) => {
  const variantClasses = {
    yellow: 'bg-hivewire-yellow text-hivewire-dark hover:brightness-95',
    blue: 'bg-hivewire-blue text-hivewire-dark hover:brightness-95',
    outline: 'border-2 border-hivewire-yellow text-hivewire-dark hover:bg-hivewire-yellow/10'
  };

  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-6',
    lg: 'py-3 px-8 text-lg'
  };

  return (
    <button
      className={cn(
        'font-medium rounded-full transition-all duration-200',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
