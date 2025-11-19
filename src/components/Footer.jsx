import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative px-6 py-12 bg-gray-900 border-t border-purple-500/20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-6">
          <button
            onClick={scrollToTop}
            className="p-3 transition-all duration-300 bg-purple-600 rounded-full hover:bg-purple-700 hover:purple-glow group"
          >
            <ArrowUp className="text-white transition-transform group-hover:-translate-y-1" size={24} />
          </button>

          <div className="text-center">
            <h3 className="mb-2 text-2xl font-bold text-gradient">Hansamali Ranasinghe</h3>
            <p className="text-gray-400">AI & QA Engineering Enthusiast</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#about"
              className="text-gray-400 transition-colors hover:text-purple-400"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-400 transition-colors hover:text-purple-400"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-400 transition-colors hover:text-purple-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 transition-colors hover:text-purple-400"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="text-purple-400" size={16} fill="currentColor" />
            <span>by Hansamali Ranasinghe</span>
          </div>

          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
