import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../../../assets/logo/ab-point-logo.png'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+880 1XXX-XXXXXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@abpoint.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
          <div className="text-sm opacity-90">
            Your Gateway to International Opportunities
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-white'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                {/* <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Globe className="text-white" size={24} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div> */}

                <div className="w-14 h-14 bg-gradient-to-br from-yellow-600 to-white-800 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <img src={logo} alt="" className='text-white'/>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  AB Point
                </h1>
                <p className="text-xs text-gray-600 -mt-1">Amadora Business Point</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => handleDropdownToggle('services')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  <span>Services</span>
                  <ChevronDown size={16} className={`transform transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''
                    }`} />
                </button>

                <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${activeDropdown === 'services'
                  ? 'opacity-100 visible transform translate-y-0'
                  : 'opacity-0 invisible transform -translate-y-2'
                  }`}>
                  <div className="p-2">
                    <a href="#asia-services" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">AS</span>
                        </div>
                        <div>
                          <div className="font-medium">Asia Based Services</div>
                          <div className="text-xs text-gray-500">Malaysia, Singapore, Thailand</div>
                        </div>
                      </div>
                    </a>
                    <a href="#qatar-services" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">QS</span>
                        </div>
                        <div>
                          <div className="font-medium">Qatar Based Services</div>
                          <div className="text-xs text-gray-500">Work Visa, Business Setup</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a href="#process" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
                Process
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a href="#success-stories" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
                Success Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* CTA Button */}
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="py-4 space-y-2 border-t border-gray-100">
              <a href="#home" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-all duration-200">
                Home
              </a>

              <div className="px-4 py-2">
                <div className="text-gray-500 text-sm font-medium mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  <a href="#asia-services" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Asia Based Services
                  </a>
                  <a href="#qatar-services" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Qatar Based Services
                  </a>
                </div>
              </div>

              <a href="#about" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-all duration-200">
                About Us
              </a>
              <a href="#process" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-all duration-200">
                Process
              </a>
              <a href="#success-stories" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-all duration-200">
                Success Stories
              </a>
              <a href="#contact" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-all duration-200">
                Contact
              </a>

              <div className="px-4 pt-2">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;