import { Code2, Database, TestTube, Wrench, Brain, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import javaLogo from '../assets/java.png';
import reactLogo from '../assets/react.png';
import springLogo from '../assets/spring.png';
import pythonLogo from '../assets/Python.png';
import mysqlLogo from '../assets/mysql.png';
import seleniumLogo from '../assets/selenium.png';
import dockerLogo from '../assets/docker.png';
import jiraLogo from '../assets/Jira.png';
import postmanLogo from '../assets/postman.png';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % techLogos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const technicalSkills = [
    {
      category: 'Programming',
      icon: Code2,
      skills: ['Java', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
      color: 'from-purple-600 to-purple-400',
    },
    {
      category: 'Frameworks & Libraries',
      icon: Database,
      skills: ['Spring Boot', 'React', 'Bootstrap','Tailwind CSS'],
      color: 'from-purple-500 to-purple-300',
    },
    {
      category: 'Testing & QA',
      icon: TestTube,
      skills: ['Selenium', 'Software Testing', 'QA Methodologies', 'Test Automation','Agile Testing'],
      color: 'from-purple-700 to-purple-500',
    },
    {
      category: 'Tools & Platforms',
      icon: Wrench,
      skills: ['IntelliJ IDEA', 'VS Code', 'Eclipse', 'MySQL', 'PostgreSQL','Jira', 'Docker', 'Postman'],
      color: 'from-purple-800 to-purple-600',
    },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: Brain, percentage: 95 },
    { name: 'Analytical Thinking', icon: Brain, percentage: 90 },
    { name: 'Team Collaboration', icon: Users, percentage: 88 },
    { name: 'Attention to Detail', icon: TestTube, percentage: 92 },
    { name: 'Communication', icon: Users, percentage: 85 },
    { name: 'Time Management', icon: Wrench, percentage: 90 },
  ];

  const techLogos = [
    { name: 'Java', icon: javaLogo, delay: 0 },
    { name: 'React', icon: reactLogo, delay: 100 },
    { name: 'Spring', icon: springLogo, delay: 200 },
    { name: 'Python', icon:pythonLogo, delay: 300 },
    { name: 'MySQL', icon: mysqlLogo, delay: 400 },
    { name: 'Selenium', icon: seleniumLogo, delay: 500 },
    { name: 'Docker', icon: dockerLogo, delay: 600 },
    { name: 'Jira', icon: jiraLogo, delay: 700 },
    { name: 'Postman', icon: postmanLogo, delay: 800 },
  ];

  return (
    <section id="skills" className="relative min-h-screen px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold md:text-6xl">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-600 to-purple-400"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-400">
            A comprehensive toolkit combining technical expertise with essential soft skills
          </p>
        </div>

        <div className="mb-20">
          <h3 className="mb-12 text-3xl font-bold text-center text-white">
            Technologies & <span className="text-gradient">Tools</span>
          </h3>
          <div className="relative px-20 ">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {[...techLogos, ...techLogos].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 w-[calc(33.333%-16px)] md:w-[calc(20%-16px)]">
                  <div
                    className={`bg-gradient-to-br from-purple-900/20 to-transparent p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:purple-glow-strong transform hover:scale-125 hover:-translate-y-4 hover:z-10 relative cursor-pointer ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${tech.delay}ms` }}
                  >
                    <div className="flex items-center justify-center mx-auto mb-3 rounded-lg w-13 h-13 ">
                      {/* <Code2 className="text-purple-400" size={32} /> */}
                      <img size={32} src={tech.icon} />

                    </div>
                    {/* <p className="font-medium text-center text-white">{tech.name}</p> */}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + techLogos.length) % techLogos.length)}
              className="absolute left-0 p-3 transition-all -translate-y-1/2 rounded-full top-1/2 bg-purple-600/80 hover:bg-purple-700 hover:scale-110"
              aria-label="Previous"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % techLogos.length)}
              className="absolute right-0 p-3 transition-all -translate-y-1/2 rounded-full top-1/2 bg-purple-600/80 hover:bg-purple-700 hover:scale-110"
              aria-label="Next"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {techLogos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-purple-500 w-8' : 'bg-gray-600 hover:bg-purple-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-6 mb-16 md:grid-cols-2 lg:grid-cols-4">
          {technicalSkills.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.category}
                className={`bg-gradient-to-br from-purple-900/20 to-transparent p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:purple-glow hover:scale-110 hover:-translate-y-3 group ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4 space-x-3">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="text-white group-hover:animate-float-y" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-purple-300">{category.category}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="px-3 py-2 text-sm text-gray-300 transition-all duration-200 rounded-lg cursor-pointer bg-black/30 hover:bg-purple-500/10 hover:scale-105 hover:translate-x-2"
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-8 border bg-gradient-to-br from-purple-900/20 to-transparent rounded-2xl border-purple-500/20">
          <h3 className="mb-12 text-3xl font-bold text-center text-white">
            Soft <span className="text-gradient">Skills</span>
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon className="text-purple-400" size={20} />
                      <span className="font-medium text-white">{skill.name}</span>
                    </div>
                    <span className="font-semibold text-purple-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-3 overflow-hidden bg-gray-800 rounded-full">
                    <div
                      className={`h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-1000 ease-out ${
                        isVisible ? '' : 'w-0'
                      }`}
                      style={{
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${index * 100}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
