"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, isAuthenticated } = useAuth();

  return (
    <header className="bg-white shadow-soft border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-glow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  AI Resume Matcher
                </h1>
                <p className="text-sm text-gray-500 font-medium">Powered by Advanced AI</p>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/analyzer" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Analyzer
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Features
            </Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              How it Works
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Pricing
            </Link>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  {user?.avatar && (
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <span className="text-gray-700 font-medium">
                    {user?.name || user?.email}
                  </span>
                </div>
                <button 
                  onClick={signOut}
                  className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link href="/signin" className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg font-semibold transition-colors">
                  Sign In
                </Link>
                <Link href="/signup" className="btn-primary">
                  Get Started Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 fade-in">
            <nav className="flex flex-col space-y-3">
              <Link href="/analyzer" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
                Analyzer
              </Link>
              <Link href="/features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
                Features
              </Link>
              <Link href="/how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
                How it Works
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
                About
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
                Pricing
              </Link>
            </nav>
            <div className="flex flex-col space-y-3 mt-4">
              {isAuthenticated ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 px-4 py-2">
                    {user?.avatar && (
                      <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <span className="text-gray-700 font-medium">
                      {user?.name || user?.email}
                    </span>
                  </div>
                  <button 
                    onClick={signOut}
                    className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg font-semibold transition-colors text-left"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <Link href="/signin" className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg font-semibold transition-colors text-left">
                    Sign In
                  </Link>
                  <Link href="/signup" className="btn-primary text-center">
                    Get Started Free
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
