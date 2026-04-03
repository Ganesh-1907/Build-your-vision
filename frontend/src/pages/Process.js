import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Palette, Code, Rocket, CheckCircle, ArrowRight, Server, Globe, Shield } from 'lucide-react';

const AnimatedStep = ({ step, index, isLast }) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={stepRef}
      className={`relative flex flex-col lg:flex-row gap-8 transition-all duration-1000 ease-out ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Content */}
      <div className="flex-1">
        <div className="py-6 px-10 group">
          <div className="flex items-start gap-5 mb-5">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
              <step.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1 block">
                {step.duration}
              </span>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
                {step.title}
              </h3>
            </div>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-400 mb-6 leading-relaxed font-medium">
            {step.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {step.details.map((detail, idx) => (
              <div key={idx} className="flex items-center group/item p-2 rounded-xl hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                <span className="text-gray-800 dark:text-gray-300 text-sm font-bold tracking-tight">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step Number (Center) */}
      <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-24 relative">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/30 relative z-10 transition-transform hover:scale-110">
          <span className="text-2xl font-black text-white">
            {step.number}
          </span>
        </div>
        {!isLast && (
           <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 w-1 h-[140%] bg-gradient-to-b from-emerald-500/20 to-transparent opacity-20"></div>
        )}
      </div>

      {/* Mobile Step Number */}
      <div className="lg:hidden flex items-center mb-6 pl-10">
        <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30">
          <span className="text-xl font-black text-white">
            {step.number}
          </span>
        </div>
      </div>

      <div className="hidden lg:block flex-1"></div>
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Discovery & Scoping',
      description: 'We start every project with a proper conversation. What does your business actually need? What\'s your budget? What\'s the deadline?',
      details: [
        'Business Requirements',
        'Budget & Timeline',
        'Technical Feasibility',
        'Detailed Proposal',
        'Project Roadmap'
      ],
      duration: '1-2 weeks'
    },
    {
      number: '02',
      icon: Palette,
      title: 'Design & Prototype',
      description: 'You\'ll see Figma designs before development starts. Every page, every flow, every interaction gets your sign-off first.',
      details: [
        'UX Research',
        'Wireframes & flows',
        'Figma Designs',
        'Interactive Prototypes',
        'Design revisions',
        'Final Approval'
      ],
      duration: '2-3 weeks'
    },
    {
      number: '03',
      icon: Code,
      title: 'Build & Test',
      description: 'We build in Laravel, React, Flutter — whatever the project needs. You get access to a staging site from week one.',
      details: [
        'Agile Sprints',
        'Weekly Updates',
        'Staging Site Access',
        'Device Testing',
        'Manual QA',
        'Bug Refinement'
      ],
      duration: '4-12 weeks'
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We handle deployment, DNS, SSL, and all the server-side details. Then we monitor for the first 48 hours.',
      details: [
        'Production Deployment',
        'DNS & SSL Setup',
        '48-hour Monitoring',
        'Speed Optimization',
        'Documentation',
        'Support Maintenance'
      ],
      duration: '1 week + ongoing'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20 text-slate-900 dark:bg-[#0b0f0f] dark:text-white">
      {/* Hero Section */}
      <section className="bg-transparent pt-16 pb-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter uppercase">
              About <span className="text-emerald-500">Us</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl font-bold text-gray-400 leading-relaxed italic">
              Passionate creators, dedicated developers. We build your vision into reality with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 bg-slate-50/50 dark:bg-transparent border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Our Team"
                className="rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] dark:shadow-none relative z-10 border-4 border-white dark:border-gray-800/50 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight uppercase">
                Visionary Technology for <span className="text-emerald-500 underline decoration-4 decoration-emerald-500/30 underline-offset-8">Global Scale</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-400 leading-relaxed font-medium">
                <p>
                  At <span className="font-black text-gray-900 dark:text-white">BYV – Build Your Vision</span>, we specialize in crafting exceptional digital experiences that empower businesses to thrive online. As a premium website solutions provider, we go beyond just design — we deliver strategically built, high-performance websites tailored to your unique goals.
                </p>
                <p>
                  With a team of passionate developers, creative designers, and strategic thinkers, BYV helps businesses build a strong online presence that reflects their brand, engages their audience, and drives real results. Whether you're launching your first website or scaling your digital footprint, we're here to bring your vision to life with precision, creativity, and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-white dark:bg-transparent py-20 border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-8">
            <Shield className="w-5 h-5 text-emerald-500" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-600 dark:text-gray-300">Our Workflow</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter">The BYV Process</h2>
          <p className="mx-auto max-w-2xl text-xl font-bold text-gray-500 dark:text-gray-400 leading-relaxed">
            Four proven steps. No surprises. Just clear, honest communication from start to scale.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white dark:bg-transparent py-16 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500/10 via-emerald-500/20 to-transparent opacity-30"></div>
            <div className="space-y-16">
              {steps.map((step, index) => (
                <AnimatedStep 
                  key={index} 
                  step={step} 
                  index={index} 
                  isLast={index === steps.length - 1} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="bg-slate-50/50 dark:bg-transparent py-24 border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-16 text-center uppercase tracking-tight">
              Why Our Method <span className="text-emerald-500">Wins</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Fixed Scoping', text: 'No hidden costs or surprise delays. Documentation first.', icon: Globe },
                { title: 'Design Integrity', text: 'What you see in Figma is exactly what we build.', icon: Palette },
                { title: 'Staging Access', text: 'Live progress tracking from week one.', icon: Code },
                { title: 'Post-Launch Care', text: '48-hour monitoring and ongoing VPS support.', icon: Server }
              ].map((item, idx) => (
                <div key={idx} className="p-10 bg-white dark:bg-gray-900/40 rounded-[2.5rem] border border-gray-200 dark:border-gray-800/50 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 uppercase flex items-center gap-3">
                    <item.icon className="w-6 h-6 text-emerald-500" />
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 leading-relaxed font-bold tracking-tight">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white dark:bg-transparent py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-50/50 dark:bg-emerald-500/5 rounded-[4rem] p-16 border border-gray-200 dark:border-emerald-500/20 shadow-2xl shadow-gray-200/50 dark:shadow-none">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter uppercase">
            Ready to Build Your <span className="text-emerald-500 italic">Vision?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto font-black uppercase tracking-widest leading-relaxed">
            Discuss your project and scale with our proven methodology.
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

export default Process;
