import React, { useState } from 'react';
import { ExternalLink, Smartphone, Globe, Layers, Server, Shield, CheckCircle2, ArrowRight, AppWindow } from 'lucide-react';

const Work = () => {
  const [activeTab, setActiveTab] = useState('websites');

  const stats = [
    { label: 'Frontend Websites', value: '20+', icon: Globe },
    { label: 'Admin Dashboards', value: '15+', icon: Layers },
    { label: 'Backend APIs', value: '30+', icon: Server },
    { label: 'Mobile Apps', value: '15+', icon: Smartphone },
  ];

  const projects = {
    websites: [
      { name: 'parve.in', url: 'https://parve.in', category: 'Portfolio' },
      { name: 'maammruchulu.com', url: 'https://maammruchulu.com', category: 'Food & Beverage' },
      { name: 'colivingpg.in', url: 'https://colivingpg.in', category: 'Real Estate' },
      { name: 'amanspicess.com', url: 'https://amanspicess.com', category: 'E-commerce' },
      { name: 'brelis.in', url: 'https://brelis.in', category: 'Business' },
      { name: 'cbm360tiv.com', url: 'https://cbm360tiv.com', category: 'Business' },
      { name: 'customgraphics4u.com', url: 'https://customgraphics4u.com', category: 'Services' },
      { name: 'filmyconnect24.com', url: 'https://filmyconnect24.com', category: 'Entertainment' },
      { name: 'inspectors360.com', url: 'https://inspectors360.com', category: 'Services' },
      { name: 'sirikbeverages.com', url: 'https://sirikbeverages.com', category: 'Food & Beverage' },
      { name: 'monvistyles.com', url: 'https://monvistyles.com', category: 'E-commerce' },
    ],
    apps: [
      { name: 'filmyconnect24', category: 'Entertainment', platforms: ['iOS', 'Android'] },
      { name: 'motonode', category: 'Automotive', platforms: ['iOS', 'Android'] },
    ]
  };

  return (
    <div className="min-h-screen bg-white pt-20 text-slate-900 dark:bg-[#0b0f0f] dark:text-white">
      {/* Hero Section */}
      <section className="bg-transparent py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Our <span className="text-emerald-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Explore our diverse range of successful projects. From high-performance web platforms to intuitive mobile applications, we build solutions that drive growth.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 rounded-3xl border border-gray-200 dark:border-gray-800/50 bg-white dark:bg-gray-900/40 shadow-xl shadow-gray-200/50 dark:shadow-none backdrop-blur-sm group hover:border-emerald-500/50 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-emerald-500 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Highlight */}
      <section className="bg-emerald-500/5 dark:bg-emerald-500/5 py-12 border-y border-emerald-500/10 mb-12 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 shadow-2xl shadow-emerald-500/40">
              <Server className="text-white w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-tight">VPS Hosting & Maintenance</h2>
              <p className="text-lg text-gray-700 dark:text-gray-400 max-w-3xl font-medium italic">
                Managed & Maintained 24/7 on our dedicated high-speed infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 bg-transparent">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1.5 bg-gray-100 dark:bg-gray-900/80 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-inner">
              <button
                onClick={() => setActiveTab('websites')}
                className={`flex items-center gap-2 px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all duration-300 ${
                  activeTab === 'websites'
                    ? 'bg-emerald-500 text-white shadow-xl translate-y-[-2px]'
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                <Globe className="w-5 h-5" />
                Websites
              </button>
              <button
                onClick={() => setActiveTab('apps')}
                className={`flex items-center gap-2 px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all duration-300 ${
                  activeTab === 'apps'
                    ? 'bg-emerald-500 text-white shadow-xl translate-y-[-2px]'
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                <Smartphone className="w-5 h-5" />
                Mobile Apps
              </button>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects[activeTab].map((project, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-900/40 rounded-[2.5rem] border border-gray-200 dark:border-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-none transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
              >
                <div className="p-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm`}>
                      {activeTab === 'websites' ? <Globe className="w-7 h-7" /> : <Smartphone className="w-7 h-7" />}
                    </div>
                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-emerald-500 transition-colors p-2 hover:bg-gray-50 rounded-lg"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-emerald-600/80 dark:text-gray-400 font-black mb-8 uppercase tracking-widest text-[10px]">
                    {project.category}
                  </p>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-gray-100 dark:border-gray-800/50">
                    <div className="flex gap-2">
                      {activeTab === 'apps' && project.platforms?.map((p, i) => (
                        <span key={i} className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-[10px] font-black uppercase tracking-tighter text-gray-600 dark:text-gray-300">
                          {p}
                        </span>
                      ))}
                      {activeTab === 'websites' && (
                        <span className="flex items-center gap-1.5 text-emerald-500 text-xs font-black uppercase tracking-wide">
                          <CheckCircle2 className="w-4 h-4" />
                          VPS LIVE
                        </span>
                      )}
                    </div>
                    {project.url ? (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-900 dark:text-emerald-500 font-black text-xs uppercase tracking-widest flex items-center gap-2 group/link border-b-2 border-emerald-500/20 hover:border-emerald-500 transition-all pb-1"
                      >
                        Launch
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <span className="text-gray-400 text-xs font-black uppercase tracking-widest italic">In Store</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-slate-50/30 dark:bg-transparent border-t border-gray-100 dark:border-gray-800/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-10 flex justify-center">
             <div className="flex -space-x-5">
               {[1,2,3,4,5].map(i => (
                 <div key={i} className="w-14 h-14 rounded-full border-4 border-white dark:border-[#0b0f0f] bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-xl">
                   <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Client" />
                 </div>
               ))}
             </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">
            Built for <span className="text-emerald-500">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400 mb-12 font-medium leading-relaxed">
            Join 100+ businesses growing with Build Your Vision. We don't just deliver projects; we build long-term partnerships.
          </p>
          <a
            href="https://wa.me/917816087488"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-12 py-6 bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-widest rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.5)]"
          >
            Start Your Partnership
            <ArrowRight className="ml-3 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Work;
