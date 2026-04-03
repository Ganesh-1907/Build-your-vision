import React from 'react';
import { 
  ShoppingCart, Heart, Stethoscope, GraduationCap, 
  Plane, Building, Film, Dumbbell, Smartphone, Briefcase, Globe, ArrowRight, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Industries = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: 'E-Commerce & Retail',
      description: 'Multi-vendor marketplaces, inventory management, payment gateways, and order tracking. We\'ve built platforms handling thousands of daily transactions.',
      projects: ['Online stores', 'B2B marketplaces', 'Inventory systems']
    },
    {
      icon: Stethoscope,
      title: 'Healthcare & Medical',
      description: 'Patient management systems, telemedicine platforms, appointment booking, and HIPAA-compliant solutions. Privacy and security built-in.',
      projects: ['Clinic management', 'Telemedicine apps', 'Health tracking']
    },
    {
      icon: Plane,
      title: 'Hospitality & Travel',
      description: 'Booking systems, property management, travel itinerary planning, and customer review platforms. Built for high-volume seasonal traffic.',
      projects: ['Hotel booking', 'Tour management', 'Travel planners']
    },
    {
      icon: GraduationCap,
      title: 'Education & E-Learning',
      description: 'Learning management systems, course platforms, student portals, and interactive content delivery. Designed for engagement and retention.',
      projects: ['LMS platforms', 'Course marketplaces', 'Student portals']
    },
    {
      icon: Building,
      title: 'Real Estate & Property',
      description: 'Property listings, CRM for agents, virtual tours, and lead management. Tools that help close deals faster.',
      projects: ['Property portals', 'Agent CRMs', 'Virtual tours']
    },
    {
      icon: Film,
      title: 'Entertainment & Media',
      description: 'Content management, streaming platforms, ticketing systems, and audience engagement tools. Built for scale and performance.',
      projects: ['Streaming apps', 'Ticketing systems', 'Content platforms']
    },
    {
      icon: Dumbbell,
      title: 'Fitness & Wellness',
      description: 'Workout tracking, membership management, class booking, and personalized training plans. Apps that keep users motivated.',
      projects: ['Fitness apps', 'Gym management', 'Wellness tracking']
    },
    {
      icon: Smartphone,
      title: 'Technology & SaaS',
      description: 'B2B platforms, subscription management, analytics dashboards, and API integrations. Scalable architecture from day one.',
      projects: ['SaaS platforms', 'API services', 'B2B tools']
    },
    {
      icon: Heart,
      title: 'Adult Entertainment',
      description: 'Secure payment processing, age verification, content delivery, and user privacy. Discreet, professional, judgment-free development.',
      projects: ['Content platforms', 'Subscription services', 'Privacy-focused apps']
    },
    {
      icon: Briefcase,
      title: 'Business Services',
      description: 'CRM systems, project management tools, invoicing platforms, and workflow automation. Software that saves time and money.',
      projects: ['CRM solutions', 'Project tools', 'Automation systems']
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20 text-slate-900 dark:bg-[#0b0f0f] dark:text-white">
      {/* Hero Section */}
      <section className="bg-transparent py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 uppercase tracking-tighter">
              Industry <span className="text-emerald-500">Expertise</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-bold max-w-2xl mx-auto italic leading-relaxed">
              Every sector has its quirks. We've learned them the hard way so you don't have to.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-slate-50/50 dark:bg-transparent py-8 border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group p-10 bg-white dark:bg-gray-900/40 rounded-[2.5rem] border border-gray-200 dark:border-gray-800/50 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <industry.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 group-hover:text-white" />
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">
                  {industry.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-400 mb-8 font-medium leading-relaxed">
                  {industry.description}
                </p>

                <div className="pt-6 border-t border-gray-100 dark:border-gray-800/50">
                  <p className="text-xs font-black text-gray-400 dark:text-gray-500 mb-4 uppercase tracking-widest">
                    Common Projects
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.projects.map((project, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-gray-100 dark:border-gray-700"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="bg-white dark:bg-transparent py-16 border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
             <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-8">
                <Shield className="w-5 h-5 text-emerald-500" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-600 dark:text-gray-300">Why Experience Matters</span>
              </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-16 uppercase tracking-tighter">
              Domain <span className="text-emerald-500">Knowledge</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                { title: 'Compliance & Regulations', text: 'HIPAA for healthcare. PCI-DSS for payments. age verification. We build compliance in from day one.', icon: Shield },
                { title: 'Workflow Understanding', text: 'Patient check-ins. Property viewings. Course enrollments. We\'ve seen how these work in the real world.', icon: Globe },
                { title: 'Proven Methodology', text: 'We know which features users actually use and which ones just clutter the interface. Less noise, more growth.', icon: Smartphone },
                { title: 'Faster Discovery', text: 'When we\'ve built multiple systems in your sector, we know exactly what to ask. Faster delivery for you.', icon: Briefcase }
              ].map((item, idx) => (
                <div key={idx} className="p-10 bg-white dark:bg-gray-900/40 rounded-[2.5rem] border border-gray-200 dark:border-gray-800/50 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 uppercase flex items-center gap-3">
                    <item.icon className="w-6 h-6 text-emerald-500" />
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 font-bold tracking-tight">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50/50 dark:bg-transparent py-16 border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white dark:bg-emerald-500/5 rounded-[4rem] p-20 border border-gray-200 dark:border-emerald-500/20 shadow-2xl shadow-gray-200/50 dark:shadow-none">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 uppercase tracking-tighter">
            Don't See Your <span className="text-emerald-500 italic">Sector?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-black uppercase tracking-[0.2em]">
            We're always ready to learn. Let's discuss your unique requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-6 bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-widest rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.5)] group"
          >
            Discuss Your Project
            <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries;
