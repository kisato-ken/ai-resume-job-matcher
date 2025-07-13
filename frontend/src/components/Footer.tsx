"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI Resume Matcher</h3>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering careers with AI-powered job matching. Find your perfect opportunity with precision and speed.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: "twitter", href: "#" },
                { icon: "linkedin", href: "#" },
                { icon: "github", href: "#" },
                { icon: "facebook", href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <span className="text-sm font-bold">{social.icon[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors duration-200">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-400 hover:text-white transition-colors duration-200">
                  API
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Status
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Get the latest updates on new features and job market insights.</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 AI Resume Matcher. All rights reserved.
          </div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
