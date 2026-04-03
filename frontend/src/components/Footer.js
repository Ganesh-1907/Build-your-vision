import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/process' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Our Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'App Development',
    'CRM Applications',
    'Product Development',
    'AI Solutions',
    'Web Applications',
    'Maintenance',
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/buildyourvision_', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/people/Build-YourVision-Byv/pfbid0xukntSAPARLEDxfrgbLEbD87e53LzpyEn8cK6erntmGJ2GGAHFSgFnjUTTNRDb79l/', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/BuildUrVision_', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/byv-build-your-vision-28bb39356', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/@buildyour_vision', label: 'YouTube' },
  ];

  return (
    <footer className="border-t border-gray-200 bg-transparent dark:border-gray-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BYV</span>
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">Build Your Vision</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We specialize in building scalable web applications, mobile apps, and enterprise solutions. From MVP to market leader, we're your technology partner.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition-colors duration-300 hover:bg-emerald-500 dark:bg-[#121816] dark:hover:bg-emerald-500 group"
                >
                  <social.icon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:Builyourvision@gmail.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-500 transition-colors duration-300">
                  Builyourvision@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+919398776311" className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-500 transition-colors duration-300">
                  +91 93987 76311
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  171 Mahindra Luxuria, Pocharam,
                   Sagareddy, Telangana, India -  502293
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 dark:border-gray-800 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Build Your Vision. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
