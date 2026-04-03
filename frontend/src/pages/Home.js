import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code2, Smartphone, Database, Cloud, Zap, Shield, Users, TrendingUp, MessageSquare, Server, Globe } from 'lucide-react';

const Home = () => {
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
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0b0f0f] dark:text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="relative min-h-screen">
          <div className="relative z-10 flex min-h-screen items-center">
            <div className="diagonal-split flex w-full items-center bg-emerald-500 px-6 pb-20 pt-32 md:min-h-screen md:w-[65%] md:px-16 lg:px-20 md:pb-24 md:pt-36">
              <div className="max-w-3xl md:ml-12 lg:ml-20">
                <h1 className="font-headline mb-6 text-5xl font-extrabold leading-[1.02] tracking-tight text-white md:text-7xl uppercase">
                  Transform Your <span className="text-emerald-950">Vision</span> Into Reality
                </h1>
                <p className="mb-10 max-w-2xl text-lg font-medium leading-relaxed text-emerald-100 md:text-xl">
                  We specialize in building scalable web applications, mobile apps, and enterprise solutions that deliver measurable results. From MVP to market leader, we're your technology partner at every stage of growth.
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <Link
                    to="/contact"
                    className="font-headline rounded-xl bg-black px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-black/20"
                  >
                    GET STARTED
                  </Link>
                  <Link
                    to="/portfolio"
                    className="group font-headline inline-flex items-center gap-2 text-lg font-bold text-white"
                  >
                    View Our Portfolio
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Hero Statistics */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-12">
                  <div className="group">
                    <div className="text-4xl font-black text-white group-hover:scale-110 transition-transform origin-left">20+</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-100 mt-2">Frontend Apps</div>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-black text-white group-hover:scale-110 transition-transform origin-left">15+</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-100 mt-2">Admin Dashboards</div>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-black text-white group-hover:scale-110 transition-transform origin-left">30+</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-100 mt-2">Backend Servers</div>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-black text-white group-hover:scale-110 transition-transform origin-left">15+</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-100 mt-2">Mobile Apps</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[320px] w-full overflow-hidden md:absolute md:inset-y-0 md:left-[47%] md:h-full md:w-auto md:right-0">
            <img
              className="h-full w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80"
              alt="Team Meeting"
            />
          </div>
        </div>
      </header>


      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50/50 dark:bg-transparent border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
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
                className="group p-8 bg-white dark:bg-gray-900/40 rounded-3xl border border-gray-200 dark:border-gray-800/50 shadow-lg shadow-gray-200/50 dark:shadow-none transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-400 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-bold group-hover:gap-2 transition-all duration-300"
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
      <section className="py-24 bg-white dark:bg-transparent border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
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
                className="p-8 bg-white dark:bg-gray-900/40 rounded-3xl border border-gray-200 dark:border-gray-800/50 shadow-lg shadow-gray-200/50 dark:shadow-none transition-all duration-300 hover:shadow-2xl hover:border-emerald-500/30"
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlight Section */}
      <section className="py-24 bg-slate-50/50 dark:bg-transparent border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 font-bold text-sm mb-6 uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                Portfolio Scale
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                Real Projects, <span className="text-emerald-500">Real Scale</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">
                We develop and maintain a massive infrastructure of enterprise-ready applications, admin dashboards, and mobile apps. All managed on our dedicated VPS servers.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { label: 'Frontend Websites', value: '~20+', color: 'emerald' },
                  { label: 'Admin Dashboards', value: '~15+', color: 'blue' },
                  { label: 'Backend APIs', value: '~30+', color: 'purple' },
                  { label: 'Mobile Applications', value: '15+', color: 'orange' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 group p-4 bg-white dark:bg-transparent rounded-2xl border border-gray-200 dark:border-gray-800/50 shadow-sm dark:shadow-none hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center font-black text-xl text-emerald-500 border border-gray-200 dark:border-gray-800 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      {stat.value}
                    </div>
                    <span className="font-bold text-gray-800 dark:text-gray-300">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/20 mb-10 backdrop-blur-sm">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/20">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-400 font-bold italic">
                    <strong className="text-gray-900 dark:text-white font-black">Active Management:</strong> All our projects are hosted and maintained on our dedicated high-performance VPS servers.
                  </p>
                </div>
              </div>

              <Link
                to="/portfolio"
                className="inline-flex items-center px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-emerald-500/30"
              >
                Explore Portfolio
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full shadow-emerald-500/20"></div>
              <div className="relative grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Work 1" className="rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xl" />
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Work 2" className="rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xl" />
                </div>
                <div className="space-y-6 pt-12">
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" alt="Work 3" className="rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xl" />
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" alt="Work 4" className="rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-transparent border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Clients' Success
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
              Real results for real businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-white dark:bg-gray-900/40 rounded-3xl border border-gray-200 dark:border-gray-800/50 shadow-lg shadow-gray-200/50 dark:shadow-none hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-800 dark:text-gray-300 mb-6 italic font-medium">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-bold">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-transparent border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-50/50 dark:bg-emerald-500/5 rounded-[4rem] p-16 border border-gray-200 dark:border-emerald-500/20 backdrop-blur-sm shadow-2xl shadow-gray-200/50 dark:shadow-none">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Ready to Build Your <span className="text-emerald-500">Vision?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-bold uppercase tracking-wide">
            Let's discuss how we can help you scale with our unique development and maintenance approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-emerald-500/30 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
