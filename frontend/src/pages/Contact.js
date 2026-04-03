import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
New Project Inquiry from Website:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Project Type: ${formData.projectType}
Budget: ${formData.budget}

Message:
${formData.message}
    `.trim();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/917816087488?text=${encodedMessage}`, '_blank');
  };

  const projectTypes = [
    'Mobile App Development',
    'Web Application',
    'CRM System',
    'E-Commerce Platform',
    'AI/Chatbot Solution',
    'Website Maintenance',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹3,00,000',
    '₹3,00,000 - ₹5,00,000',
    '₹5,00,000+',
    'Not Sure Yet'
  ];

  return (
    <div className="min-h-screen bg-white pt-20 text-slate-900 dark:bg-[#0b0f0f] dark:text-white">
      {/* Hero Section */}
      <section className="border-b border-gray-200 py-16 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Let's Start Your <span className="text-emerald-400">Digital Journey</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Ready to build your vision? Reach out for a free consultation and let's craft something extraordinary together.
            </p>
            <div className="inline-flex items-center mt-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="text-emerald-400 text-sm font-medium">INQUIRY PHASE 01</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-[#121816]">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Project Details
                  </h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors duration-300 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-[#0f1413] dark:text-white dark:placeholder-gray-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors duration-300 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-[#0f1413] dark:text-white dark:placeholder-gray-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors duration-300 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-[#0f1413] dark:text-white"
                      >
                        <option value="">Select Type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors duration-300 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-[#0f1413] dark:text-white"
                      >
                        <option value="">Select Range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors duration-300 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-[#0f1413] dark:text-white dark:placeholder-gray-500"
                      placeholder="Tell us about your project vision..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 bg-emerald-400 hover:bg-emerald-500 text-black font-semibold rounded-lg transition-all duration-300"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info & WhatsApp */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-[#121816]">
                <h3 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">Contact Information</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">OUR STUDIO</p>
                      <p className="text-sm text-gray-900 dark:text-white">123 Innovation Drive, Tech District</p>
                      <p className="text-sm text-gray-900 dark:text-white">San Francisco, CA 94103</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">EMAIL US</p>
                      <a href="mailto:hello@buildyourvision.com" className="text-gray-900 transition-colors hover:text-emerald-400 dark:text-white">
                        hello@buildyourvision.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">CALL US</p>
                      <a href="tel:+15555551234" className="text-gray-900 transition-colors hover:text-emerald-400 dark:text-white">
                        +1 (555) 012-3456
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-800">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">FOLLOW OUR JOURNEY</p>
                  <div className="flex gap-3">
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <span className="text-sm text-gray-900 dark:text-white">in</span>
                    </a>
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <span className="text-sm text-gray-900 dark:text-white">𝕏</span>
                    </a>
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <span className="text-sm text-gray-900 dark:text-white">ig</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Section */}
              <div className="rounded-lg border border-emerald-200 bg-white p-6 dark:border-emerald-900/40 dark:bg-[#121816]">
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Need Instant Answers?</h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  Chat directly with our design consultants on WhatsApp for immediate assistance
                </p>
                <a
                  href="https://wa.me/917816087488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-emerald-400 hover:bg-emerald-500 text-black font-semibold rounded-lg transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="flex h-48 items-center justify-center rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-[#121816]">
                <MapPin className="h-12 w-12 text-gray-400 dark:text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-gray-200 py-16 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Common Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-[#121816]">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  How long does a typical project take?
                </h3>
                <span className="text-emerald-400 transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="border-t border-gray-200 px-6 pb-6 pt-4 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
                Most core projects range from 8 to 16 weeks depending on complexity. We provide a detailed roadmap during our initial discovery phase to ensure transparency and timely delivery.
              </div>
            </details>

            <details className="group overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-[#121816]">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  What is your design-led approach?
                </h3>
                <span className="text-emerald-400 transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="border-t border-gray-200 px-6 pb-6 pt-4 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
                We start every project with comprehensive research and wireframing. You'll see Figma designs before we write a single line of code. This ensures alignment and saves time during development.
              </div>
            </details>

            <details className="group overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-[#121816]">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Do you offer post-launch support?
                </h3>
                <span className="text-emerald-400 transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="border-t border-gray-200 px-6 pb-6 pt-4 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
                Yes. We offer 30 days of complimentary post-launch support, followed by flexible maintenance packages. We'll monitor performance, fix bugs, and provide ongoing updates as needed.
              </div>
            </details>

            <details className="group overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-[#121816]">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  How does the consultation process work?
                </h3>
                <span className="text-emerald-400 transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="border-t border-gray-200 px-6 pb-6 pt-4 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
                After you reach out, we'll schedule a 30-minute discovery call to understand your vision, goals, and budget. Then we'll create a detailed proposal with timeline and pricing. No obligation, no pressure.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
