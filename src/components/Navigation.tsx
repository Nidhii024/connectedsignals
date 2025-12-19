import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Technology', path: '/technology' },
    { name: 'Who We Serve', path: '/who-we-serve' },
    { name: 'Platform', path: '/platform' },
    { name: 'Company', path: '/company' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg py-3 shadow-lg border-b border-slate-200' 
          : 'bg-white py-4 border-b border-slate-100'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex gap-1">
            <div className="w-2 h-9 bg-red-500 rounded-sm transition-transform group-hover:scale-110"></div>
            <div className="w-2 h-9 bg-amber-500 rounded-sm transition-transform group-hover:scale-110" style={{ transitionDelay: '50ms' }}></div>
            <div className="w-2 h-9 bg-emerald-500 rounded-sm transition-transform group-hover:scale-110" style={{ transitionDelay: '100ms' }}></div>
          </div>
          <span className="text-2xl font-bold text-slate-900">Connected Signals</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-base font-medium transition-colors ${
                location.pathname === item.path 
                  ? 'text-emerald-600' 
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-emerald-700 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
          >
            Request a Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden bg-white border-t border-slate-200 shadow-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-base font-medium py-2 transition-colors ${
                  location.pathname === item.path 
                    ? 'text-emerald-600' 
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg text-center hover:from-emerald-600 hover:to-emerald-700"
            >
              Request a Demo
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
