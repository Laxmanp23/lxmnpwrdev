'use client';

import Link from 'next/link';

import { Mail} from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-cyan-500/20 transition-colors duration-300">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">LP</span>
              </div>
              <span className="text-gray-900 dark:text-white font-bold">Laxman Pawar</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building scalable web and software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-white transition text-sm">
                Home
              </Link>
              <Link href="/portfolio" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-white transition text-sm">
                Portfolio
              </Link>
              <Link href="/blog" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-white transition text-sm">
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-white transition text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400 text-sm">Website Development</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Web Applications</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Backend APIs</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Full-stack Solutions</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Follow</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-white transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-white transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-white transition"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="mailto:contact@laxmanpawar.dev"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-white transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 dark:border-cyan-500/20 pt-2 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">hello Buddy</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} Laxman Pawar. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-white transition text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-white transition text-sm">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
