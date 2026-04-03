import React from 'react';
import { ExternalLink, Code, Smartphone, Globe } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: 'FitLife - Fitness Tracking App',
      category: 'Mobile App Development',
      description: 'A comprehensive fitness tracking application with personalized workout plans, nutrition tracking, and progress analytics. Built for iOS and Android using Flutter.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
      challenge: 'Create an engaging fitness app that keeps users motivated and provides real-time workout tracking with offline capability.',
      solution: 'Developed a cross-platform mobile app with real-time sync, offline-first architecture, and gamification features to boost user engagement.',
      results: [
        '50,000+ downloads in first 6 months',
        '4.8 star rating on both app stores',
        '73% user retention after 30 days',
        'Featured in "Best New Apps" on Play Store'
      ],
      technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'AWS'],
      link: '#'
    },
    {
      title: 'E-Commerce Pro - Multi-Vendor Platform',
      category: 'Web Application',
      description: 'A scalable multi-vendor e-commerce platform with advanced inventory management, payment processing, and seller analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      challenge: 'Build a platform that could handle thousands of concurrent users during flash sales while managing complex vendor relationships and inventory.',
      solution: 'Architected a microservices-based solution with Redis caching, queue management, and real-time inventory updates.',
      results: [
        '1,000+ active vendors',
        '10,000+ daily transactions',
        '99.9% uptime during peak sales',
        '2.5x faster than previous system'
      ],
      technologies: ['Laravel', 'React', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
      link: '#'
    },
    {
      title: 'HealthConnect - Telemedicine Platform',
      category: 'Healthcare Solution',
      description: 'HIPAA-compliant telemedicine platform connecting patients with healthcare providers through video consultations, prescription management, and health records.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      challenge: 'Develop a secure, HIPAA-compliant platform with real-time video consultations and seamless integration with existing EMR systems.',
      solution: 'Built an end-to-end encrypted platform with WebRTC video streaming, secure document storage, and HL7-compliant data exchange.',
      results: [
        '5,000+ patient consultations per month',
        '150+ healthcare providers onboarded',
        'HIPAA compliance certified',
        '95% patient satisfaction score'
      ],
      technologies: ['React', 'Node.js', 'WebRTC', 'PostgreSQL', 'AWS', 'Twilio'],
      link: '#'
    },
    {
      title: 'LearnHub - E-Learning Platform',
      category: 'Education Technology',
      description: 'Modern learning management system with interactive courses, live classes, assignment tracking, and progress analytics for students and instructors.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      challenge: 'Create an engaging learning platform that supports multiple content types, live streaming, and provides detailed progress tracking.',
      solution: 'Developed a comprehensive LMS with video streaming, interactive quizzes, real-time collaboration tools, and AI-powered recommendations.',
      results: [
        '20,000+ enrolled students',
        '500+ courses available',
        '85% course completion rate',
        '4.7 average instructor rating'
      ],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'FFmpeg', 'AWS S3'],
      link: '#'
    }
  ];

  const projectTypes = [
    { icon: Smartphone, label: 'Mobile Apps', count: '25+' },
    { icon: Globe, label: 'Web Platforms', count: '30+' },
    { icon: Code, label: 'Custom Solutions', count: '15+' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Recent Work We're Proud Of
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              We don't just talk about results — we show them. Here are some projects we've delivered that actually moved the needle for our clients.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700"
                >
                  <type.icon className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {type.count}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {type.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Project Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-4 py-2 bg-emerald-500 text-white text-sm font-semibold rounded-full mb-3">
                      {project.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white">
                      {project.title}
                    </h2>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12">
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Challenge */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        The Challenge
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        Our Solution
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Results That Matter
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {project.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
                        >
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {result}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <a
                    href={project.link}
                    className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold hover:gap-2 transition-all duration-300"
                  >
                    View Case Study
                    <ExternalLink className="w-5 h-5 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Want Results Like These?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Let's discuss your project and see what we can build together.
          </p>
          <a
            href="https://wa.me/917816087488"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Work;
