"use client";

import Link from "next/link";

export default function FeatureHighlights() {
  const features = [
    {
      title: "AI-Powered Analysis",
      description: "Advanced natural language processing extracts skills, experience, and qualifications from your resume with 95% accuracy.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Smart Job Matching",
      description: "Our ML algorithms analyze job requirements and match them with your profile using semantic understanding and skill mapping.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
        </svg>
      ),
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      title: "Real-time Insights",
      description: "Get instant feedback on your skills, market demand analysis, and personalized recommendations for career growth.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-green-400 to-emerald-600"
    },
    {
      title: "Skill Gap Analysis",
      description: "Identify missing skills for your target roles and get actionable recommendations to bridge the gap and advance your career.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: "from-purple-400 to-pink-600"
    },
    {
      title: "Industry Benchmarking",
      description: "Compare your profile against industry standards and see how you stack up against other professionals in your field.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-red-400 to-rose-600"
    },
    {
      title: "Career Roadmap",
      description: "Get a personalized career roadmap with step-by-step guidance to reach your professional goals and dream positions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      gradient: "from-cyan-400 to-blue-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Advanced AI Technology
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Your{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Career Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform provides everything you need to find the perfect job match and advance your career with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group card-hover p-8 hover:shadow-glow-purple slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-large group-hover:scale-110 transition-all duration-300 float`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>

              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Link href="/features" className="text-blue-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-200">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-3xl p-12 shadow-large border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Powered by Cutting-Edge Technology
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with the latest AI and machine learning frameworks for maximum accuracy and performance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: "Python", icon: "🐍", description: "Backend Processing" },
              { name: "FastAPI", icon: "⚡", description: "High Performance API" },
              { name: "React", icon: "⚛️", description: "Interactive Frontend" },
              { name: "Next.js", icon: "▲", description: "Full-Stack Framework" },
              { name: "spaCy", icon: "📝", description: "NLP Processing" },
              { name: "scikit-learn", icon: "🤖", description: "Machine Learning" }
            ].map((tech, index) => (
              <div key={index} className="text-center group cursor-pointer card p-4 hover:shadow-medium transition-all duration-300">
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="text-sm font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {tech.name}
                </div>
                <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: "95%", label: "Accuracy Rate", icon: "🎯" },
            { stat: "10K+", label: "Resumes Analyzed", icon: "📄" },
            { stat: "500K+", label: "Job Matches Made", icon: "🤝" },
            { stat: "<2s", label: "Processing Time", icon: "⚡" }
          ].map((item, index) => (
            <div key={index} className="text-center slide-up" style={{ animationDelay: `${index * 0.1 + 0.8}s` }}>
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{item.stat}</div>
              <div className="text-sm text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
