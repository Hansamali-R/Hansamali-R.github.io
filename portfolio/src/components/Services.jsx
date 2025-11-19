import { Bot, FlaskConical, Zap, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  const services = [
    {
      icon: Zap,
      title: 'QA Testing & Automation Services',
      description:
        'Designing and executing comprehensive manual and automated testing solutions using Selenium and structured QA methodologies.',
      gradient: 'from-purple-600 to-purple-400',
    },
    {
      icon: FlaskConical,
      title: 'Business Analysis & Requirements Engineering',
      description:
        'Translating business needs into clear user stories, functional specifications, and workflow models that guide effective solution development.',
      gradient: 'from-purple-500 to-purple-300',
    },
    {
      icon: Bot,
      title: 'AI-Enhanced Feature Development',
      description:
        'Creating AI-driven application features such as NLP-based recommendations, intelligent pipelines, and lightweight ML integrations.',
      gradient: 'from-purple-700 to-purple-500',
    },
    {
      icon: TrendingUp,
      title: 'Full-Stack Web Application Development',
      description:
'Building modern, scalable full-stack applications using React, Spring Boot, Python, and cloud-ready architectures.',      gradient: 'from-purple-800 to-purple-600',
    },
  ];

  return (
    <section id="services" className="relative min-h-screen px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"></div>

      <div className="absolute rounded-full top-1/4 left-10 w-72 h-72 bg-purple-600/10 blur-3xl"></div>
      <div className="absolute rounded-full bottom-1/4 right-10 w-72 h-72 bg-purple-400/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold md:text-6xl">
            Future <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-600 to-purple-400"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-400">
            Aspiring to offer advanced QA automation and AI-based testing solutions
          </p>
        </div>

        <div className="grid gap-8 mb-16 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br from-purple-900/20 to-transparent p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:purple-glow hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">{service.title}</h3>
                <p className="mb-6 leading-relaxed text-gray-400">{service.description}</p>

                <div className="w-0 h-1 transition-all duration-500 rounded-full opacity-0 bg-gradient-to-r from-purple-600 to-purple-400 group-hover:w-full animate-shimmer group-hover:opacity-100"></div>
              </div>
            );
          })}
        </div>

        <div className="p-12 border bg-gradient-to-br from-purple-900/30 to-transparent rounded-2xl border-purple-500/30">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <div className="inline-block p-4 mb-4 rounded-full bg-purple-500/10">
              <Bot className="text-purple-400" size={48} />
            </div>

            <h3 className="text-3xl font-bold text-white md:text-4xl">
              Combining <span className="text-gradient">AI & QA</span> Excellence
            </h3>

            <p className="text-lg leading-relaxed text-gray-400">
              With a strong foundation in both Artificial Intelligence and Quality Assurance
              Engineering, I aim to bridge the gap between intelligent software development and
              rigorous testing methodologies. My goal is to create solutions that not only meet
              functional requirements but exceed quality standards through innovative approaches.
            </p>

            <div className="grid gap-6 mt-8 md:grid-cols-3">
              <div className="p-6 transition-all duration-300 border cursor-pointer bg-black/30 rounded-xl border-purple-500/20 hover:bg-purple-500/10 hover:scale-110 group">
                <div className="mb-2 text-3xl font-bold text-gradient group-hover:animate-float-y">Innovation</div>
                <div className="text-sm text-gray-400">Cutting-edge AI solutions</div>
              </div>
              <div className="p-6 transition-all duration-300 border cursor-pointer bg-black/30 rounded-xl border-purple-500/20 hover:bg-purple-500/10 hover:scale-110 group">
                <div className="mb-2 text-3xl font-bold text-gradient group-hover:animate-float-y">Quality</div>
                <div className="text-sm text-gray-400">Rigorous testing standards</div>
              </div>
              <div className="p-6 transition-all duration-300 border cursor-pointer bg-black/30 rounded-xl border-purple-500/20 hover:bg-purple-500/10 hover:scale-110 group">
                <div className="mb-2 text-3xl font-bold text-gradient group-hover:animate-float-y">Reliability</div>
                <div className="text-sm text-gray-400">Dependable software delivery</div>
              </div>
            </div>

            <div className="flex flex-col items-center mt-8 space-y-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse"></div>
                <div
                  className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"
                  style={{ animationDelay: '0.2s' }}
                ></div>
                <div
                  className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"
                  style={{ animationDelay: '0.4s' }}
                ></div>
              </div>
              <p className="text-sm italic text-purple-300">Currently building expertise...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
