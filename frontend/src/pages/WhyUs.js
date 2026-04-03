import React from 'react';
import { CheckCircle, Users, Zap, TrendingUp, Award, Clock, DollarSign, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  const mainReasons = [
    {
      icon: CheckCircle,
      title: 'Proper Expertise',
      description: "We've shipped projects for startups, scale-ups, and enterprises across 10+ industries. We know what works and what doesn't.",
      details: [
        '70+ projects delivered successfully',
        '5+ years of combined team experience',
        'Expertise in modern tech stacks',
        'Industry-specific knowledge'
      ]
    },
    {
      icon: Users,
      title: 'We Actually Listen',
      description: 'We take time to understand your business before writing a single line of code. Your goals become our goals.',
      details: [
        'In-depth discovery sessions',
        'Business-first approach',
        'Regular feedback loops',
        'Clear communication channels'
      ]
    },
    {
      icon: Zap,
      title: 'We Hit Deadlines',
      description: "When we say 4 weeks, we mean 4 weeks. Not '4 weeks plus a bit'. Reliable delivery, every single time.",
      details: [
        'Fixed timelines from day one',
        'Weekly progress updates',
        'No surprise delays',
        'Consistent track record'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Fair Pricing',
      description: 'Quality work at honest prices. No surprise invoices, no scope creep charges. Just transparency from start to finish.',
      details: [
        'Fixed-price proposals',
        'No hidden costs',
        'Clear payment milestones',
        'Value for money'
      ]
    }
  ];

  const additionalBenefits = [
    {
      icon: Award,
      title: 'Quality Code',
      description: 'Clean, maintainable code that other developers can actually work with.'
    },
    {
      icon: Clock,
      title: 'Real-Time Updates',
      description: 'Staging site access from week one. See progress as it happens.'
    },
    {
      icon: DollarSign,
      title: 'No Lock-In',
      description: 'You own everything. Code, designs, documentation. Zero proprietary lock-in.'
    },
    {
      icon: Heart,
      title: 'We Care',
      description: "We don't just deliver features. We deliver solutions that move your metrics."
    }
  ];

  const comparisonPoints = [
    {
      us: 'Fixed price before we start',
      them: 'Hourly billing that spirals'
    },
    {
      us: 'Designs approved before coding',
      them: 'Build first, hope you like it'
    },
    {
      us: 'Weekly progress updates',
      them: 'Radio silence for weeks'
    },
    {
      us: 'Real device testing',
      them: 'Works on my laptop™'
    },
    {
      us: 'Launch monitoring included',
      them: 'Deploy and disappear'
    },
    {
      us: 'No lock-in, you own everything',
      them: 'Proprietary systems you can\'t escape'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20 text-slate-900 dark:bg-[#0b0f0f] dark:text-white">
      {/* Hero Section */}
      <section className="bg-transparent py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 uppercase tracking-tighter">
              Why <span className="text-emerald-500">Pick Us?</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-bold max-w-2xl mx-auto leading-relaxed italic">
              We're not your typical agency. And that's the point. No fluff, no buzzwords. Just results.
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons Grid */}
      <section className="bg-slate-50/50 dark:bg-transparent py-8 border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {mainReasons.map((reason, index) => (
              <div
                key={index}
                className="p-12 bg-white dark:bg-gray-900/40 rounded-[3rem] border border-gray-200 dark:border-gray-800/50 shadow-xl shadow-gray-200/60 dark:shadow-none hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  <reason.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 font-medium leading-relaxed">
                  {reason.description}
                </p>
                <ul className="space-y-4 pt-8 border-t border-gray-100 dark:border-gray-800/50">
                  {reason.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-800 dark:text-gray-300 font-bold tracking-tight">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-white dark:bg-transparent py-16 border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-16 text-center uppercase tracking-tighter">
            Us vs. <span className="text-emerald-500 italic">Them</span>
          </h2>

          <div className="space-y-4">
            {comparisonPoints.map((point, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800/50 rounded-[2rem] shadow-lg shadow-gray-200/50 dark:shadow-none hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight">
                    {point.us}
                  </span>
                </div>
                <div className="flex items-center space-x-4 opacity-50 grayscale">
                  <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-gray-400" />
                  </div>
                  <span className="text-lg font-bold text-gray-500 dark:text-gray-400 line-through decoration-emerald-500/50">
                    {point.them}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Boxes */}
      <section className="bg-slate-50/50 dark:bg-transparent py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="p-10 bg-white dark:bg-gray-900/40 rounded-[2.5rem] border border-gray-200 dark:border-gray-800/50 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <benefit.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 uppercase tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-400 font-bold leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white dark:bg-transparent py-16 border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-50/50 dark:bg-emerald-500/5 rounded-[4rem] p-20 border border-gray-200 dark:border-emerald-500/20 shadow-2xl shadow-gray-200/50 dark:shadow-none">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 uppercase tracking-tighter">
            Choose <span className="text-emerald-500 italic">Vision.</span> Choose Growth.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-black uppercase tracking-[0.2em]">
            Ready for a development partner that actually delivers?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-6 bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-widest rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.5)] group"
          >
            Start Your Partnership
            <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
