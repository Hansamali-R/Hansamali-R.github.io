import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import heroImg from '../assets/img3-1.png';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const fullName = 'Hansamali Ranasinghe';

  useEffect(() => {
    setIsVisible(true);
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden">
     
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
      <div className="absolute rounded-full bottom-20 left-20 w-96 h-96 bg-purple-300/10 blur-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-purple-800/10"></div>

      <div className="absolute rounded-full top-20 right-20 w-96 h-96 bg-purple-600/10 blur-3xl"></div>
      <div className="absolute rounded-full bottom-20 left-20 w-96 h-96 bg-purple-400/10 blur-3xl"></div>

      <div className="relative z-10 grid items-center gap-12 px-6 py-20 mx-auto max-w-7xl md:grid-cols-2">
        <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 mb-4 border rounded-full bg-purple-500/10 border-purple-500/30 animate-bounce">
            <span className="text-sm text-purple-400 animate-pulse">Welcome to my portfolio</span>
          </div>

          <h1 className="text-5xl text-purple-400 md:text-7xl font-bold leading-tight min-h-40 md:min-h-[200px]">
            {displayedText}
            
            
            {/* <span className="animate-pulse">|</span> */}
          </h1>

          <div className="space-y-2">
            <p className="text-xl text-gray-300 md:text-2xl">
              AI & QA Engineering Enthusiast
            </p>
            <p className="text-lg text-gray-400">
              Building Reliable, Intelligent Software Solutions
            </p>
          </div>

          <p className="max-w-xl leading-relaxed text-gray-400">
            Final-year Computer Science undergraduate at Uva Wellassa University,
            specializing in Artificial Intelligence and Quality Assurance Engineering.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 text-white transition-all duration-300 bg-purple-600 rounded-lg hover:bg-purple-700 hover:purple-glow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-purple-400 transition-all duration-300 border border-purple-500 rounded-lg hover:bg-purple-500/10"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className={`relative flex justify-center items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'} delay-300`}>
  
  {/* Container acts as the anchor */}
  <div className="relative flex items-center w-90 h-90">
    
    {/* 1. The SVG (Background) */}
    {/* Removed -top/-right. Added 'absolute' and 'inset-0' to center it. */}
    <svg 
      viewBox="0 0 130 130" 
      className="absolute inset-0 text-[#983edc] -top-1 w-120 h-120 animate-pulse" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern 
          id="purple-lines-transparent" 
          x="0" 
          y="0" 
          width="100" 
          height="5" 
          patternUnits="userSpaceOnUse"
        >
          <line 
            x1="0" 
            y1="5" 
            x2="100" 
            y2="5" 
            stroke="currentColor" 
            strokeWidth="1" 
          />
        </pattern>
      </defs>
      {/* The circle masks the lines */}
      <circle cx="60" cy="60" r="60" fill="url(#purple-lines-transparent)" />
    </svg>

    {/* 2. The Image (Foreground) */}
    {/* z-10 puts it on top. w-72/h-72 makes it slightly smaller than the SVG so lines show. */}
    <img 
      src={heroImg} 
      alt="Hansamali Ranasinghe"
      className="relative z-10 object-cover h-130 w-120"
    />
    <div className="absolute rounded-full bottom-20 left-20 w-96 h-96 bg-purple-400/10 blur-3xl"></div>
  </div>
</div>
      </div>

      <a
        href="#about"
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce"
      >
        <ChevronDown className="text-purple-400" size={32} />
      </a>
    </section>
  );
};

export default Hero;
