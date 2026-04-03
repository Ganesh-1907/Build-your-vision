import React from 'react';
import { Code2, Smartphone, Database, MessageSquare, Cloud, Shield, Globe, Layers, CheckCircle, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-white pt-20 text-slate-900 dark:bg-[#0b0f0f] dark:text-white">
      {/* Hero Section */}
      <section className="bg-transparent py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 uppercase tracking-tighter">
              Services We <span className="text-emerald-500">Offer</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-bold leading-relaxed max-w-2xl mx-auto italic">
              From mobile apps to enterprise solutions, we build software that solves real business problems.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="bg-transparent pb-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-16 items-center`}
              >
                {/* Icon & Title Section */}
                <div className="flex-1 space-y-8">
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-[2rem] flex items-center justify-center shadow-lg shadow-emerald-500/10 scale-110">
                    <service.icon className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-700 dark:text-gray-400 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-5 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 text-xs font-black uppercase tracking-widest rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features Section */}
                <div className="flex-1 w-full">
                  <div className="p-12 bg-white dark:bg-gray-900/40 rounded-[3rem] border border-gray-200 dark:border-gray-800/50 shadow-2xl shadow-gray-200/60 dark:shadow-none hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 uppercase tracking-widest flex items-center gap-3">
                      <Layers className="w-6 h-6 text-emerald-500" />
                      What's Included
                    </h3>
                    <ul className="space-y-5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start group">
                          <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-gray-800 dark:text-gray-300 font-bold tracking-tight text-lg">{feature}</span>
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
      <section className="bg-slate-50/50 dark:bg-transparent py-32 border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white dark:bg-emerald-500/5 rounded-[4rem] p-20 border border-gray-200 dark:border-emerald-500/20 shadow-2xl shadow-gray-200/50 dark:shadow-none">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 uppercase tracking-tighter">
            Ready to Build Your <span className="text-emerald-500 italic">Vision?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-black uppercase tracking-[0.2em]">
            Get a free fixed-price quote and project roadmap today.
          </p>
          <a
            href="https://wa.me/917816087488"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-12 py-6 bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-widest rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.5)] group"
          >
            Start Your Journey
            <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
