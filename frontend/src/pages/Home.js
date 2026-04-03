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
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-black">
        <div className="w-full px-8 md:px-16 lg:px-24 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3" 
                  alt="Digital Solutions"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-8 right-8 bg-gray-900 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-400 font-semibold text-lg">Available for Projects</p>
                    <p className="text-gray-400 text-sm">Let's build something amazing</p>
                  </div>
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                We Build Digital{' '}
                <span className="text-emerald-400">Solutions</span>{' '}
                That Drive Business Growth
              </h1>
              
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Transform your vision into reality with custom software development. We specialize in building scalable web applications, mobile apps, and enterprise solutions that deliver measurable results. From MVP to market leader, we're your technology partner at every stage of growth.
              </p>

              <p className="text-base text-gray-500 mb-10 leading-relaxed">
                Our team combines technical expertise with business acumen to create solutions that don't just work—they excel. We handle everything from architecture design to deployment, ensuring your product is built right the first time.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-400 hover:bg-emerald-500 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Row Below Hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-800">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black dark:bg-gray-950">
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
      <section className="py-24 bg-black dark:bg-gray-950">
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
      <section className="py-24 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 dark:from-emerald-600/10 dark:to-emerald-900/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Got a Project in Mind?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's have a proper chat about what you need. No sales pitch, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-400 hover:bg-emerald-500 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/917816087488"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300"
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
