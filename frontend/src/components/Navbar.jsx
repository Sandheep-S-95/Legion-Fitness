import React from 'react';
import { Dumbbell, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-black relative">
      {/* Glowing border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 shadow-[0_0_10px_3px_rgba(59,130,246,0.5),0_0_20px_6px_rgba(59,130,246,0.3),0_0_30px_12px_rgba(59,130,246,0.2)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2 group">
            <Dumbbell className="w-8 h-8 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent 
                          hover:from-blue-400 hover:to-blue-200 transition-all duration-300
                          transform group-hover:scale-105">
              LEGION FITNESS
            </h2>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Workouts', 'Nutrition', 'Programs', 'Community'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-400 font-semibold 
                         transition-all duration-300 hover:scale-105
                         relative after:content-[''] after:absolute after:w-full after:h-0.5 
                         after:bg-blue-500 after:left-0 after:-bottom-1 after:scale-x-0 
                         hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;