import React from 'react';
import { useEffect, useRef, useState } from 'react';

import { ExternalLink, Calendar, Code2, CaravanIcon } from 'lucide-react';

import { Card, CardContent, CardHeader } from './ui/card';
import P1 from '../assets/movie.webp';
import P2 from '../assets/Picture1.png';
import P3 from '../assets/lifeline.png';



const Projects = () => {

  const [activeNode, setActiveNode] = useState(null);

  const sectionRef = useRef(null);

  const nodeRefs = useRef([]);



  const projects = [

    {

      title: 'CineScore – Movie Review Platform',

      year: '2025',
       image: P1, 

      tech: ['React', 'Tailwind CSS' , 'Spring Boot', 'MongoDB'],

      description:

        'A modern movie review platform with a clean separation between frontend and backend enabling scalable architecture',

      type: 'Full-Stack Development',

    },

    {

      title: 'Wave Mirissa – Handmade Jewelry Platform',

      year: '2025',
       image: P2, 

      tech: ['React', 'Tailwind CSS' ,'Spring Boot', 'PostgreSQL', 'Python'],

      description:

        'AI-powered jewelry platform offering personality-based product recommendations and virtual try-on features for a real client.',

      type: 'AI Integration',

    },

    {

      title: 'Inventory Mate',

      year: '2024',
       image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80', 

      tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],

      description:

        'A comprehensive management system for tracking and organizing products in grocery shops with inventory analytics.',

      type: 'Web Application',

    },

    {

      title: 'Life-Line Donation System',

      year: '2024',
       image: P3, 

      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],

      description:

        'A platform supporting individuals seeking financial aid for medical operations with secure donation processing.',

      type: 'Social Impact',

    },

  ];



  useEffect(() => {

    const observer = new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            const index = nodeRefs.current.findIndex(ref => ref === entry.target);

            if (index !== -1) setActiveNode(index);

          }

        });

      },

      { threshold: 0.5, rootMargin: '-100px' }

    );



    nodeRefs.current.forEach(ref => {

      if (ref) observer.observe(ref);

    });



    return () => observer.disconnect();

  }, []);



  return (

    <section

      id="projects"

      ref={sectionRef}

      className="relative py-24 overflow-hidden bg-background"

    >

      <div className="container px-6 mx-auto">

        <div className="mb-20 text-center animate-fade-in">

          <p className="mb-4 text-muted-foreground">Recent Works</p>

          <h2 className="mb-4 font-serif text-4xl font-bold md:text-6xl">Projects</h2>

        </div>



        <div className="relative max-w-5xl mx-auto">

          {/* Timeline line */}

          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-purple-500 to-transparent -translate-x-1/2 hidden md:block"></div>



          <div className="space-y-24">

            {projects.map((project, index) => {

              const isLeft = index % 2 === 0;

              const isActive = activeNode === index;



              return (

                <div

                  key={project.title}

                  ref={el => (nodeRefs.current[index] = el)}

                  className="relative"

                >

                  {/* Node circle */}

                  <div className="absolute z-10 hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:block">

                    <div

                      className={`w-6 h-6 rounded-full border-4 border-purple-300 transition-all duration-500 ${

                        isActive

                          ? 'bg-primary scale-125 shadow-lg shadow-purple-400/50'

                          : 'bg-muted scale-100'

                      }`}

                    >

                      <div className="absolute inset-0 rounded-full bg-purple-400/20 animate-ping opacity-20"></div>

                    </div>

                  </div>



                  {/* Branch line */}

                  <div

                    className="hidden md:block absolute top-1/2 w-12 h-0.5 bg-gradient-to-r from-purple-300 to-transparent z-0"

                    style={{

                      [isLeft ? 'right' : 'left']: '50%',

                      transform: 'translateY(-50%)',

                      opacity: isActive ? 1 : 0.3,

                      transition: 'opacity 0.5s ease',

                    }}

                  ></div>



                  {/* Project card */}

                  <div

                    className={`md:w-[calc(50%-3rem)] ${

                      isLeft ? 'md:mr-auto' : 'md:ml-auto'

                    } transition-all duration-700 ${

                      isActive ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-4'

                    }`}

                  >

                    <Card

                      className={`bg-card border-purple-300/50 overflow-hidden group hover:border-purple-300 transition-all duration-500 ${

                        isActive ? 'scale-100 shadow-xl shadow-purple-600' : 'scale-95'

                      }`}

                    >

                      <div className="p-6">
                        <CardHeader 
                      backgroundImage={project.image} 
                         className="min-h-[180px] flex flex-col justify-between"
                       >

                        {/* Header row */}

                        <div className="flex items-start justify-between mb-4">

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full text-muted-foreground bg-muted">

                            <Code2 className="w-3 h-3" />

                            {project.type}

                          </span>



                          <div className="flex items-center gap-2 text-muted-foreground">

                            <Calendar className="w-3 h-3" />

                            <span className="text-xs">{project.year}</span>

                          </div>

                        </div>



                        {/* Title */}

                        <h3 className="mb-3 font-serif text-xl font-bold transition-all group-hover:text-gradient">

                          {project.title}

                        </h3>
                        </CardHeader>

                        <CardContent>

                        {/* Description */}

                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">

                          {project.description}

                        </p>



                        {/* Tech badges */}

                        <div className="flex flex-wrap gap-2 mb-4">

                          {project.tech.map(tech => (

                            <span

                              key={tech}

                              className="px-2 py-1 text-xs text-purple-300 border rounded-full bg-purple-600/60 border-purple-300/40"

                            >

                              {tech}

                            </span>

                          ))}

                        </div>



                        {/* Button */}

                        <button className="inline-flex items-center gap-2 text-xs transition-colors text-muted-foreground hover:text-primary group/btn">

                          View Details

                          <ExternalLink className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />

                        </button>
                        </CardContent>

                      </div>



                      <div

                        className={`h-1 bg-gradient-purple transition-all duration-500 ${

                          isActive ? 'scale-x-100' : 'scale-x-0'

                        } origin-left`}

                      ></div>

                    </Card>



                    {isActive && (

                      <div

                        className={`absolute top-0 ${

                          isLeft ? '-right-20' : '-left-20'

                        } w-16 h-16 bg-primary/10 rounded-full blur-2xl animate-pulse hidden md:block`}

                      ></div>

                    )}

                  </div>

                </div>

              );

            })}

          </div>

        </div>



        {/* Footer */}

        <div className="mt-16 text-center animate-fade-in">

          <p className="text-sm text-muted-foreground">

            More projects available on{' '}

            <a href="https://github.com" className="text-primary hover:underline">

              GitHub

            </a>

          </p>

        </div>

      </div>

    </section>

  );

};



export default Projects;