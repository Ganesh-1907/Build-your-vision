import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code2, Smartphone, Database, Cloud, Zap, Shield, Users, TrendingUp, MessageSquare } from 'lucide-react';

const Home = () => {
  const stats = [
    { label: 'Projects Completed', value: '70+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Team Members', value: '15+' },
  ];

  const techStack = [
    'Laravel 12', 'React', 'Vue.js', 'Flutter', 'PHP 8.3', 
    'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Tailwind CSS'
  ];

  const services = [
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Build scalable, high-performance mobile and web applications that users love.',
      features: ['Native & Cross-platform', 'iOS & Android', 'Progressive Web Apps']
    },
    {
      icon: Database,
      title: 'CRM Applications',
      description: 'Custom CRM solutions tailored to manage your customer relationships effectively.',
      features: ['Lead Management', 'Sales Pipeline', 'Analytics Dashboard']
    },
    {
      icon: Code2,
      title: 'Product Development',
      description: 'From concept to launch, we build complete products that drive business growth.',
      features: ['MVP Development', 'Full Product Lifecycle', 'Scalable Architecture']
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbots & Solutions',
      description: 'AI-powered chatbots and intelligent solutions for modern businesses.',
      features: ['Natural Language Processing', 'Smart Automation', '24/7 Support']
    },
    {
      icon: Cloud,
      title: 'Custom Web Applications',
      description: 'Third-party integrations and custom functionality for your unique needs.',
      features: ['API Integrations', 'Custom Features', 'Cloud Solutions']
    },
    {
      icon: Shield,
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and revisions to keep your software running smoothly.',
      features: ['Regular Updates', 'Bug Fixes', 'Performance Optimization']
    },
  ];

  const testimonials = [
    {
      quote: "BYV transformed our business with a custom CRM that actually works. The team understood our needs and delivered beyond expectations.",
      author: "Rajesh Kumar",
      position: "CEO, TechStart Solutions",
      rating: 5
    },
    {
      quote: "Professional, responsive, and delivered on time. Our mobile app has over 50,000 downloads thanks to their excellent work.",
      author: "Priya Sharma",
      position: "Founder, FitLife App",
      rating: 5
    },
    {
      quote: "The best development partner we've worked with. They don't just code – they solve business problems.",
      author: "Amit Patel",
      position: "CTO, E-Commerce Pro",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: 'Proper Expertise',
      description: "We've shipped projects for startups, scale-ups, and enterprises. We know what works and what doesn't."
    },
    {
      icon: Users,
      title: 'Actually Listen',
      description: 'We take time to understand your business before writing a single line of code.'
    },
    {
      icon: Zap,
      title: 'Hit Deadlines',
      description: "When we say 4 weeks, we mean 4 weeks. Not '4 weeks plus a bit'. Reliable delivery, every time."
    },
    {
      icon: TrendingUp,
      title: 'Fair Pricing',
      description: 'Quality work at honest prices. No surprise invoices, no scope creep charges. Just transparency.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwwfHx8fDE3NzUyMjcyMTN8MA&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-emerald-900/60 dark:from-black/95 dark:via-black/90 dark:to-emerald-950/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              We Build Digital Solutions That Drive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                Business Growth
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
              Custom software, mobile apps, and web solutions built with expertise and delivered on time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-12 flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-emerald-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Services We Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From mobile apps to enterprise solutions, we build software that solves real business problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold group-hover:gap-2 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Partner with Build Your Vision
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're not your typical agency. And that's the point.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Don't Take Our Word For It
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here's what actual clients say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-emerald-700 dark:from-emerald-600 dark:to-emerald-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Got a Project in Mind?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let's have a proper chat about what you need. No sales pitch, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/917816087488"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
