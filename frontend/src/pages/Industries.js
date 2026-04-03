import React from 'react';
import { 
  ShoppingCart, Heart, Stethoscope, GraduationCap, 
  Plane, Building, Film, Dumbbell, Smartphone, Briefcase 
} from 'lucide-react';

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
      <section className="bg-transparent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              We've Probably Worked in Your Industry
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Every sector has its quirks. We've learned them the hard way so you don't have to. From healthcare to e-commerce, education to entertainment — we've built software that works.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-transparent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {industry.description}
                </p>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Common Projects:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.projects.map((project, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full"
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
      <section className="bg-transparent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Why Industry Experience Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  We Know the Regulations
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  HIPAA for healthcare. PCI-DSS for payments. GDPR for data. Age verification for adult content. We build compliance in from day one, not as an afterthought.
                </p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  We Understand the Workflows
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Patient check-ins. Property viewings. Course enrollments. We've seen how these processes work in the real world, not just in theory.
                </p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  We've Made the Mistakes
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  And learned from them. We know which features users actually use and which ones just clutter the interface. Experience counts.
                </p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  We Ask Better Questions
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  When we've built five booking systems, we know what to ask about your sixth. Less discovery time means faster delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-transparent py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            We're always ready to learn. If we haven't worked in your specific sector, we'll do the research and ask the right questions. Let's chat.
          </p>
          <a
            href="https://wa.me/917816087488"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Discuss Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Industries;
