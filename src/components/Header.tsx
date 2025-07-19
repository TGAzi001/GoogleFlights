import React, { useState } from 'react';
import { Menu, Grid3X3, User, Luggage, Compass, Plane, Bed, Home } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Travel', icon: <Luggage className="w-4 h-4 text-blue-600" />, active: false },
    { name: 'Explore', icon: <Compass className="w-4 h-4 text-blue-600" />, active: false },
    { name: 'Flights', icon: <Plane className="w-4 h-4 text-blue-600" />, active: true },
    { name: 'Hotels', icon: <Bed className="w-4 h-4 text-blue-600" />, active: false },
    { name: 'Vacation rentals', icon: <Home className="w-4 h-4 text-blue-600" />, active: false },
  ];

  return (
    <header className={`w-full bg-white border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Menu + Logo + Nav */}
          <div className="flex items-center gap-4 flex-1">
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>

            {/* Google Logo */}
            <div className="flex items-center">
              <span className="text-3xl font-semibold leading-none">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </span>
            </div>

            {/* Navigation (desktop only) */}
            <nav className="hidden lg:flex items-center gap-2 ml-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                    item.active
                      ? 'text-blue-600 bg-blue-50 border-blue-200'
                      : 'text-gray-700 hover:bg-gray-100 border'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Apps + Profile */}
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Google apps"
            >
              <Grid3X3 className="w-6 h-6 text-gray-600" />
            </button>
            <button
              className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm hover:bg-blue-700 transition-colors"
              aria-label="Account menu"
            >
              A
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left ${
                    item.active
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
