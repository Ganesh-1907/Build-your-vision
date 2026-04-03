import React from 'react';
import { CheckCircle, Users, Zap, TrendingUp, Award, Clock, DollarSign, Heart } from 'lucide-react';

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
      description: 'Clean, maintainable code that other developers can actually work with. Not spaghetti that only we understand.'
    },
    {
      icon: Clock,
      title: 'Real-Time Updates',
      description: 'Staging site access from week one. See progress as it happens, not in a big reveal that falls flat.'
    },
    {
      icon: DollarSign,
      title: 'No Lock-In',
      description: 'You own everything. Code, designs, documentation. If you want to take it elsewhere later, you can.'
    },
    {
      icon: Heart,
      title: 'We Care About Results',
      description: "We don't just deliver features. We deliver solutions that move your business metrics in the right direction."
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
      <section className="bg-transparent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Why Partner with Build Your Vision
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We're not your typical agency. And that's the point. No fluff, no buzzwords, no over-promising. Just honest work, honest communication, and honest results.
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="bg-transparent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainReasons.map((reason, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6">
                  <reason.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {reason.description}
                </p>
                <ul className="space-y-2">
                  {reason.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="bg-transparent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            More Reasons to Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Us vs Them Comparison */}
      <section className="bg-transparent py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Us vs. The Rest
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
            Not all development agencies are created equal. Here's how we're different.
          </p>

          <div className="space-y-4">
            {comparisonPoints.map((point, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {point.us}
                  </span>
                </div>
                <div className="flex items-center space-x-3 opacity-50">
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 dark:text-gray-400">✗</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">
                    {point.them}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="bg-transparent py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-6">
            "Finally, a development team that says what they'll do and actually does it. No drama, no excuses, just results."
          </blockquote>
          <cite className="text-lg text-gray-600 dark:text-gray-400">
            — Rajesh Kumar, CEO at TechStart Solutions
          </cite>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-transparent py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Work With a Team That Gets It?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Let's have a no-pressure conversation about your project.
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

export default WhyUs;
