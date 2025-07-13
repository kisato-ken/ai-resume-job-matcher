"use client";

import Link from "next/link";
import Header from "@/components/Header";
import StatsSection from "@/components/StatsSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              AI-Powered Career Matching
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your Perfect Job with{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI Precision
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Upload your resume and let our advanced AI analyze your skills, experience, and potential. 
              Get matched with opportunities that truly fit your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/analyzer" className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-large hover:shadow-glow hover:-translate-y-1 hover:scale-105 transform">
                <span className="flex items-center gap-2">
                  Analyze My Resume
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link href="/demo" className="group bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View Demo
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Feature Preview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Experience the Future of Job Matching
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI analyzes thousands of data points to find opportunities that match your unique profile
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "📄",
                title: "Resume Analysis",
                description: "Upload your resume and get instant AI-powered analysis of your skills, experience, and career potential."
              },
              {
                icon: "🎯",
                title: "Smart Matching", 
                description: "Our algorithm matches you with relevant job opportunities based on your unique profile and preferences."
              },
              {
                icon: "📊",
                title: "Skill Insights",
                description: "Discover skill gaps and get personalized recommendations to advance your career."
              },
              {
                icon: "💰",
                title: "Salary Intelligence",
                description: "Get real-time salary insights and market data for your role and location."
              },
              {
                icon: "⚡",
                title: "Instant Results",
                description: "Get analysis and job matches in seconds, not days. Our AI works at lightning speed."
              },
              {
                icon: "🔒",
                title: "Privacy First",
                description: "Your data is encrypted and secure. You control what information is shared and with whom."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/analyzer" className="btn-primary">
              Try It Now
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <FeatureHighlights />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals who have found their perfect job match with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/analyzer" className="group bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform">
                <span className="flex items-center gap-2">
                  Analyze My Resume
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link href="/contact" className="group text-white border-2 border-white/30 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Talk to Expert
                </span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full float"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-white/10 rounded-full float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-20 w-8 h-8 bg-white/10 rounded-full float" style={{ animationDelay: '2s' }}></div>
      </section>

      <Footer />
    </div>
  );
}
