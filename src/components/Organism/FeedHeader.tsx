
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowLeft, Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Logo from '../Atoms/Logo';

interface FeedHeaderProps {
  pageTitle?: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

const FeedHeader: React.FC<FeedHeaderProps> = ({
  pageTitle,
  showBackButton = false,
  onBackClick,
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="w-full bg-gray-100 border-b border-gray-200">
      {/* Top Navigation */}
      <div className="hivewire-gradient py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Logo size="sm" />
              
              <nav className="hidden md:flex space-x-1">
                <Link 
                  to="/" 
                  className="bg-hivewire-yellow text-hivewire-dark font-medium px-4 py-2 rounded-full"
                >
                  The Buzz
                </Link>
                <Link 
                  to="/feed" 
                  className="text-hivewire-dark hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
                >
                  My Buzz
                </Link>
                <Link 
                  to="/resources" 
                  className="text-hivewire-dark hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
                >
                  Resources
                </Link>
                <Link 
                  to="/events" 
                  className="text-hivewire-dark hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
                >
                  Events
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-white rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-hivewire-yellow w-64"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>

              <button className="p-2 rounded-full hover:bg-white/20 transition-colors">
                <Bell className="h-5 w-5 text-hivewire-dark" />
              </button>

              <div className="flex items-center">
                <Avatar className="h-8 w-8 border-2 border-white">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Title Bar (optional) */}
      {pageTitle && (
        <div className="bg-white py-3 px-4 shadow-sm">
          <div className="container mx-auto flex items-center">
            {showBackButton && (
              <button 
                onClick={handleBackClick} 
                className="mr-3 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <h1 className="text-lg font-semibold">{pageTitle}</h1>
            <div className="ml-auto">
              {/* Right side content if needed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedHeader;
