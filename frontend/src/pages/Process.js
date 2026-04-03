import React from 'react';
import { MessageSquare, Palette, Code, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Discovery & Scoping',
      description: 'We start every project with a proper conversation. What does your business actually need? What\'s your budget? What\'s the deadline? We\'ll be honest about what\'s realistic and what isn\'t.',
      details: [
        'In-depth business requirements gathering',
        'Budget and timeline discussion',
        'Technical feasibility analysis',
        'Detailed proposal with fixed pricing',
        'Project roadmap and milestones'
      ],
      duration: '1-2 weeks'
    },
    {
      number: '02',
      icon: Palette,
      title: 'Design & Prototype',
      description: 'You\'ll see Figma designs before development starts. We don\'t build something and hope you like it. Every page, every flow, every interaction gets your sign-off first.',
      details: [
        'User experience (UX) research',
        'Wireframes and user flows',
        'High-fidelity Figma designs',
        'Interactive prototypes',
        'Design revisions included',
        'Final design approval'
      ],
      duration: '2-3 weeks'
    },
    {
      number: '03',
      icon: Code,
      title: 'Build & Test',
      description: 'We build in Laravel, React, Flutter — whatever the project needs. You get access to a staging site from week one so you can see progress in real time.',
      details: [
        'Agile development sprints',
        'Weekly progress updates',
        'Staging environment access',
        'Real device testing',
        'Manual QA for every feature',
        'Bug fixes and refinements'
      ],
      duration: '4-12 weeks'
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Launch & Support',
      description: 'Launch day isn\'t the end — it\'s the start. We handle deployment, DNS, SSL, and all the server-side details. Then we monitor for the first 48 hours to catch anything we missed.',
      details: [
        'Production deployment',
        'DNS, SSL, and server setup',
        '48-hour launch monitoring',
        'Performance optimization',
        'User training and documentation',
        'Optional ongoing maintenance'
      ],
      duration: '1 week + ongoing'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our Process: How We Work
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Every project follows the same proven four-step process. No surprises. No hidden steps. Just clear, honest communication from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-500"></div>

            {/* Steps */}
            <div className="space-y-24">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1">
                    <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2 block">
                            {step.duration}
                          </span>
                          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        {step.description}
                      </p>

                      <div className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Step Number (Center) */}
                  <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-24">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg relative z-10">
                      <span className="text-3xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Step Number */}
                  <div className="lg:hidden flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Empty Space (for alignment) */}
                  <div className="hidden lg:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Process Works */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Why This Process Works
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400">
              <p>
                <strong className="text-gray-900 dark:text-white">No Surprises:</strong> You know exactly what you're getting and when you're getting it. Fixed price, fixed timeline, fixed scope.
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Design First:</strong> Changes are cheap when they're made in Figma. Changes after development are not. We get your approval before writing code.
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Real-Time Visibility:</strong> You see progress every week. Staging site access from day one means no big reveal moments that fall flat.
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Proper Testing:</strong> Manual QA on real devices. Not just "it works on my laptop." If users can't use it smoothly, we didn't finish.
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Launch Support:</strong> We monitor for 48 hours post-launch. If something breaks, we're already on it before you even notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Let's discuss your project and see if we're a good fit.
          </p>
          <a
            href="https://wa.me/917816087488"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Process;
