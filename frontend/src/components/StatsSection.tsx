"use client";

import { useEffect, useState } from "react";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      value: "50,000+",
      label: "Job Matches Made",
      description: "Successful matches between candidates and employers",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      value: "98%",
      label: "Match Accuracy",
      description: "AI-powered precision in skill and job matching",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      value: "1,200+",
      label: "Partner Companies",
      description: "Leading companies across diverse industries",
      color: "from-purple-500 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      value: "3.2x",
      label: "Faster Hiring",
      description: "Reduced time-to-hire with smart matching",
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Professionals Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform delivers exceptional results for both job seekers and employers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`group card-hover p-8 text-center bg-gradient-to-br ${stat.bgColor} border border-white/50 hover:shadow-glow transition-all duration-500 ${
                isVisible ? 'slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto shadow-large group-hover:scale-110 transition-all duration-300 float`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className={`absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br ${stat.color} rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>
              
              <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <AnimatedCounter target={stat.value} isVisible={isVisible} delay={index * 200} />
              </div>
              
              <div className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {stat.label}
              </div>
              
              <div className="text-sm text-gray-600 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 mb-8">Trusted by professionals from leading companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[
                "Google", "Microsoft", "Apple", "Meta", "Amazon", "Netflix", "Tesla", "Spotify"
              ].map((company, index) => (
                <div 
                  key={index} 
                  className="text-lg font-bold text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-default"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Animated Counter Component
function AnimatedCounter({ target, isVisible, delay }: { target: string; isVisible: boolean; delay: number }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(target.replace(/[^\d]/g, ''));
  const suffix = target.replace(/[\d,]/g, '');

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, numericValue, delay]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + 'K';
    }
    return num.toString();
  };

  return <span>{formatNumber(count)}{suffix}</span>;
}
