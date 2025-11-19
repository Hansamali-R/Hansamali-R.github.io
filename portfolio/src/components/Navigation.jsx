import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/W. K. H. Ranasinghe UWU_CST_21_029.pdf';
    link.download = 'W. K. H. Ranasinghe UWU_CST_21_029.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-purple-500/10' : 'bg-transparent'
      }`}
    >
      <div className="px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gradient">
            HR
          </a>

          <div className="items-center hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative transition-colors duration-300 text-white/80 hover:text-purple-400 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center px-4 py-2 space-x-2 text-white transition-all duration-300 bg-purple-600 rounded-lg hover:bg-purple-700 hover:purple-glow group"
            >
              <Download size={18} className="transition-transform group-hover:-translate-y-1" />
              <span>CV</span>
            </button>
          </div>

          <button
            className="text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="pb-4 mt-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 transition-colors text-white/80 hover:text-purple-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center justify-center w-full px-4 py-2 mt-4 space-x-2 text-white transition-all bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              <Download size={18} />
              <span>Download CV</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
