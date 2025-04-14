
import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import Logo from '../Atoms/Logo';
import NavItem from '../Molecule/NavItem';
import Button from '../Atoms/Button';
import { useLocation, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full hivewire-gradient py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo size="md" showBee={true} />
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-white rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-hivewire-yellow"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            <NavItem href="/" active={pathname === '/'}>
              Home
            </NavItem>
            <NavItem href="/about" active={pathname === '/about'}>
              About
            </NavItem>
            <NavItem href="/founders" active={pathname === '/founders'}>
              Founders
            </NavItem>
            <Link to="/login">
              <Button variant="yellow">Sign In</Button>
            </Link>
          </nav>

          <button
            className="md:hidden flex items-center"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-hivewire-dark" />
            ) : (
              <Menu className="h-6 w-6 text-hivewire-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="px-4 pb-4 mb-4 border-b">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div className="flex flex-col space-y-2 px-4">
              <NavItem href="/" active={pathname === '/'}>
                Home
              </NavItem>
              <NavItem href="/about" active={pathname === '/about'}>
                About
              </NavItem>
              <NavItem href="/founders" active={pathname === '/founders'}>
                Founders
              </NavItem>
              <Link to="/login">
                <Button variant="yellow" className="mt-2 w-full">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
