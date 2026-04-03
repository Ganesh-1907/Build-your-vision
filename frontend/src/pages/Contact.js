import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Build Something Great Together
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Got a project in mind? Let's have a proper chat. No sales pitch, no pressure — just an honest conversation about what you need and how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none text-gray-900 dark:text-white transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none text-gray-900 dark:text-white transition-colors duration-300"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none text-gray-900 dark:text-white transition-colors duration-300"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none text-gray-900 dark:text-white transition-colors duration-300"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none text-gray-900 dark:text-white transition-colors duration-300"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none text-gray-900 dark:text-white transition-colors duration-300"
                    >
                      <option value="">Select a budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none text-gray-900 dark:text-white transition-colors duration-300"
                      placeholder="What problem are you trying to solve? What are your goals?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message via WhatsApp
                  </button>

                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    By submitting, you'll be redirected to WhatsApp to complete your inquiry.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  Prefer a direct chat? Reach out to us via WhatsApp, email, or phone. We typically respond within a few hours during business days.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/917816087488"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      +91 78160 87488
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Fastest way to reach us
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:info@buildyourvision.com"
                      className="text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      info@buildyourvision.com
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      For detailed inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+917816087488"
                      className="text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      +91 78160 87488
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Mon-Fri, 10 AM - 6 PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      India
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Remote-first team
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Response Info */}
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  🚀 Quick Response Guarantee
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  We typically respond to all inquiries within 2-4 hours during business days. For urgent projects, WhatsApp is your best bet!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Before You Reach Out
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What happens after I contact you?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We'll schedule a 30-minute discovery call to understand your needs. No sales pitch — just questions about your business, goals, and budget. If we're a good fit, we'll send a detailed proposal within 48 hours.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Do you work with startups?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Absolutely. We've helped dozens of startups build their MVP and scale. We understand budget constraints and can suggest phased approaches to get you launched faster.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What if I don't have a detailed spec?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                That's fine. Most clients don't. We'll help you figure out exactly what you need through our discovery process. Come with the problem, we'll help define the solution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
