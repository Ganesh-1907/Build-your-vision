import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, CheckCircle, Globe, Shield, Clock } from 'lucide-react';

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
    window.open(`https://wa.me/919398776311?text=${encodedMessage}`, '_blank');
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
      <section className="bg-transparent py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 uppercase tracking-tighter">
              Let's Build Your <span className="text-emerald-500">Vision</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-bold leading-relaxed max-w-2xl mx-auto italic">
              Ready to take the next step? Reach out for a free consultation and let's craft something scale-ready together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-50/50 dark:bg-transparent py-8 border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-[3rem] border border-gray-200 dark:border-gray-800/50 bg-white dark:bg-gray-900/40 p-12 shadow-2xl shadow-gray-200/60 dark:shadow-none">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/20 text-white">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
                    Project Details
                  </h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="mb-2 block text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-6 py-4 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all dark:border-gray-700 dark:bg-[#0f1413] dark:text-white"
                        placeholder="Enter Name"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-6 py-4 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all dark:border-gray-700 dark:bg-[#0f1413] dark:text-white"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="mb-2 block text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-6 py-5 text-gray-900 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all dark:border-gray-700 dark:bg-[#0f1413] dark:text-white appearance-none cursor-pointer"
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
                      <label className="mb-2 block text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-6 py-4 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all dark:border-gray-700 dark:bg-[#0f1413] dark:text-white"
                        placeholder="Enter Mobile"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-6 py-4 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all dark:border-gray-700 dark:bg-[#0f1413] dark:text-white"
                      placeholder="Enter Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-95 transition-all group"
                  >
                    Send to WhatsApp
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info & WhatsApp */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <div className="rounded-[2.5rem] border border-gray-200 dark:border-gray-800/50 bg-white dark:bg-gray-900/40 p-10 shadow-xl shadow-gray-200/50 dark:shadow-none">
                <h3 className="mb-8 text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight">Direct Contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="mb-1 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">EMAIL US</p>
                      <a href="mailto:Builyourvision@gmail.com" className="text-lg font-bold text-gray-900 dark:text-white hover:text-emerald-500 transition-colors">
                        Builyourvision@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      <Phone className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="mb-1 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">WHATSAPP / CALL</p>
                      <a href="tel:+919398776311" className="text-lg font-bold text-gray-900 dark:text-white hover:text-emerald-500 transition-colors">
                        +91 93987 76311
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="mb-1 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">OFFICE ADDRESS</p>
                      <address className="not-italic text-sm font-bold text-gray-900 dark:text-white">
                        171 Mahindra Luxuria, Pocharam, Sagareddy, Telangana - 502293
                      </address>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-gray-100 dark:border-gray-800/50">
                  <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 tracking-widest mb-4 uppercase">Operational Excellence</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-400">
                      <Shield className="w-4 h-4 text-emerald-500" /> Fixed Price Guarantee
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4 text-emerald-500" /> On-Time Delivery
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-400">
                      <Globe className="w-4 h-4 text-emerald-500" /> Global Scale Readiness
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Section */}
              <div className="rounded-[2.5rem] border border-emerald-200 dark:border-emerald-900/40 bg-white dark:bg-emerald-500/5 p-10 shadow-xl shadow-emerald-500/5 dark:shadow-none hover:border-emerald-500 transition-all">
                <h3 className="mb-2 text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight">Need Instant Answers?</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400 font-medium">
                  Chat directly with our founder **Harsha Reddy** on WhatsApp for immediate project scoping.
                </p>
                <a
                  href="https://wa.me/919398776311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white dark:bg-transparent py-32 border-t border-gray-100 dark:border-gray-800/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
                  Common <span className="text-emerald-500 italic">Questions</span>
                </h2>
             </div>
            <div className="space-y-6">
              {[
                { 
                  q: 'How long does a typical project take?', 
                  a: 'Most core projects range from 8 to 16 weeks depending on complexity. We provide a detailed roadmap during our initial discovery phase to ensure transparency.' 
                },
                { 
                  q: 'What is your design-led approach?', 
                  a: 'We start every project with comprehensive research and wireframing. You\'ll see Figma designs before we write a single line of code.' 
                },
                { 
                  q: 'Do you offer post-launch support?', 
                  a: 'Yes. Every project includes a maintenance phase. We monitor performance, fix bugs, and provide ongoing updates to ensure your scale-ready app stays that way.' 
                },
                { 
                  q: 'How does the consultation work?', 
                  a: 'We start with a 30-minute discovery call to understand your vision. Then we create a fixed-price proposal with timeline and scope. No hidden costs.' 
                }
              ].map((faq, i) => (
                <details key={i} className="group overflow-hidden rounded-[2rem] border border-gray-200 dark:border-gray-800/50 bg-white dark:bg-gray-900/40 shadow-lg shadow-gray-200/50 dark:shadow-none">
                  <summary className="flex items-center justify-between p-8 cursor-pointer select-none">
                    <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight">
                      {faq.q}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center group-open:rotate-180 transition-transform">
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  </summary>
                  <div className="border-t border-gray-100 dark:border-gray-800/50 px-8 pb-8 pt-6 text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
