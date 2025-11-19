import { GraduationCap, Target, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    technologies: 0,
    years: 0,
    dedication: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCount = (target, key) => {
      let current = 0;
      const increment = target / 50;

      const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
          setCounts((prev) => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 30);
    };

    animateCount(4, 'projects');
    animateCount(10, 'technologies');
    animateCount(3, 'years');
    animateCount(100, 'dedication');
  }, [isVisible]);

  return (
    <section id="about" className="relative min-h-screen px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            About <span className="text-purple-300 text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-600 to-purple-400"></div>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start space-x-4 group">
              <div className="p-3 transition-colors rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20">
                <Sparkles className="text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold text-white">Who I Am</h3>
                <p className="leading-relaxed text-gray-400">
                  Final-year Computer Science undergraduate specializing in Artificial Intelligence
                  and Quality Assurance Engineering. Skilled in Java, Spring Boot, React, MySQL,
                  Selenium, and software testing methodologies. Passionate about applying AI concepts
                  and QA practices to build reliable, high-quality software solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="p-3 transition-colors rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20">
                <GraduationCap className="text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold text-white">Education</h3>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-purple-300">
                    Bachelor of Science (Hons) in Computer Science and Technology
                  </p>
                  <p className="text-gray-400">Uva Wellassa University of Sri Lanka</p>
                  <p className="text-gray-500">2023 - 2026</p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="p-3 transition-colors rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20">
                <Target className="text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold text-white">Career Aspirations</h3>
                <p className="leading-relaxed text-gray-400">
                  Aiming to build a career in QA and AI-driven software development, creating innovative
                  solutions that ensure software reliability while leveraging artificial intelligence
                  for enhanced testing and quality assurance processes.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative p-1 bg-gradient-to-br from-purple-900/20 to-transparent rounded-2xl">
              <div className="p-8 bg-gray-800/40 backdrop-blur-sm rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 transition-all duration-300 border cursor-pointer bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl border-purple-500/20 hover:border-purple-500/40 hover:scale-110 hover:-rotate-2 group">
                    <div className="mb-2 text-4xl font-bold text-purple-300 transition-transform text-gradient group-hover:scale-125">{counts.projects}+</div>
                    <div className="text-gray-400">Projects Completed</div>
                  </div>

                  <div className="p-6 transition-all duration-300 border cursor-pointer bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl border-purple-500/20 hover:border-purple-500/40 hover:scale-110 hover:rotate-2 group">
                    <div className="mb-2 text-4xl font-bold text-purple-300 text-gradient group-hover:scale-125">{counts.technologies}+</div>
                    <div className="text-gray-400">Technologies</div>
                  </div>

                  <div className="p-6 transition-all duration-300 border cursor-pointer bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl border-purple-500/20 hover:border-purple-500/40 hover:scale-110 hover:-rotate-2 group">
                    <div className="mb-2 text-4xl font-bold text-purple-300 text-gradient group-hover:scale-125">{counts.years}+</div>
                    <div className="text-gray-400">Years Learning</div>
                  </div>

                  <div className="p-6 transition-all duration-300 border cursor-pointer bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl border-purple-500/20 hover:border-purple-500/40 hover:scale-110 hover:rotate-2 group">
                    <div className="mb-2 text-4xl font-bold text-purple-300 text-gradient group-hover:scale-125">{counts.dedication}%</div>
                    <div className="text-gray-400">Dedication</div>
                  </div>
                </div>

                <div className="p-6 mt-8 border bg-gradient-to-r from-purple-900/30 to-purple-800/20 rounded-xl border-purple-500/20">
                  <p className="italic text-center text-gray-300">
                    "Quality is never an accident; it is always the result of intelligent effort."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
