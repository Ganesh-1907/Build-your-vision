import React from 'react';
import { Code2, Smartphone, Database, MessageSquare, Cloud, Shield, Globe, Layers, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Build scalable, high-performance mobile and web applications that your users will love. We create native iOS, Android, and cross-platform solutions using Flutter and React Native.',
      features: [
        'Native iOS & Android Development',
        'Cross-platform Flutter Apps',
        'Progressive Web Applications (PWA)',
        'App Store Submission & Optimization',
        'Performance Optimization',
        'Offline-First Architecture'
      ],
      technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase']
    },
    {
      icon: Database,
      title: 'CRM Applications',
      description: 'Custom CRM solutions built specifically for your business processes. Manage leads, track sales, automate workflows, and get actionable insights.',
      features: [
        'Lead & Contact Management',
        'Sales Pipeline Tracking',
        'Custom Workflow Automation',
        'Analytics & Reporting Dashboard',
        'Email & SMS Integration',
        'Role-Based Access Control'
      ],
      technologies: ['Laravel', 'React', 'PostgreSQL', 'Redis', 'API Integration']
    },
    {
      icon: Code2,
      title: 'Product Development',
      description: 'From concept to launch, we build complete digital products. MVP development, full-featured platforms, and everything in between.',
      features: [
        'MVP Development & Validation',
        'Full Product Lifecycle Management',
        'Scalable Architecture Design',
        'User Research & Testing',
        'Iterative Development Process',
        'Launch & Growth Strategy'
      ],
      technologies: ['React', 'Vue.js', 'Laravel', 'Node.js', 'AWS', 'Docker']
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbots & Solutions',
      description: 'Intelligent chatbots and AI-powered solutions that understand natural language and automate customer interactions 24/7.',
      features: [
        'Natural Language Processing (NLP)',
        'Multi-Channel Support (Web, WhatsApp, Telegram)',
        'Intent Recognition & Learning',
        'Integration with Existing Systems',
        'Analytics & Conversation Insights',
        'Custom Training & Fine-Tuning'
      ],
      technologies: ['OpenAI', 'Dialogflow', 'Python', 'FastAPI', 'WebSocket']
    },
    {
      icon: Cloud,
      title: 'Custom Web Applications',
      description: 'Bespoke web applications with third-party integrations, custom features, and cloud-based infrastructure. Built for scale.',
      features: [
        'Custom Business Logic & Workflows',
        'Third-Party API Integrations',
        'Payment Gateway Integration',
        'Cloud Infrastructure Setup',
        'Real-Time Features (WebSocket)',
        'Microservices Architecture'
      ],
      technologies: ['Laravel', 'React', 'PostgreSQL', 'Redis', 'AWS', 'Stripe']
    },
    {
      icon: Shield,
      title: 'Website & App Maintenance',
      description: 'Ongoing support, updates, bug fixes, and performance optimization. We keep your software running smoothly so you can focus on business.',
      features: [
        'Regular Security Updates',
        'Bug Fixes & Issue Resolution',
        'Performance Monitoring & Optimization',
        'Feature Enhancements',
        'Database Optimization',
        'Server Management & Scaling'
      ],
      technologies: ['Monitoring Tools', 'CI/CD', 'Docker', 'GitHub Actions', 'CloudFlare']
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Services We Offer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              From mobile apps to enterprise solutions, we build software that solves real business problems. Every service comes with proper scoping, fixed pricing, and on-time delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Icon & Title Section */}
                <div className="flex-1 space-y-6">
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features Section */}
                <div className="flex-1">
                  <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                      What's Included
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Let's discuss what you need and how we can help.
          </p>
          <a
            href="https://wa.me/917816087488"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
