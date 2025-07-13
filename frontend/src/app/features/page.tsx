"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function FeaturesPage() {
  const features = [
    {
      category: "AI-Powered Analysis",
      description: "Advanced artificial intelligence for precise resume and job matching",
      features: [
        {
          title: "Natural Language Processing",
          description: "Our NLP engine understands context, skills, and experience with 98% accuracy",
          icon: "🧠"
        },
        {
          title: "Smart Skill Extraction",
          description: "Automatically identifies and categorizes technical and soft skills",
          icon: "🎯"
        },
        {
          title: "Experience Mapping",
          description: "Intelligently maps your experience to relevant job requirements",
          icon: "📊"
        },
        {
          title: "Industry Recognition",
          description: "Understands industry-specific terminology and requirements",
          icon: "🏭"
        }
      ]
    },
    {
      category: "Job Matching Engine",
      description: "Sophisticated algorithms that find your perfect career match",
      features: [
        {
          title: "Semantic Matching",
          description: "Goes beyond keyword matching to understand job fit",
          icon: "🔍"
        },
        {
          title: "Company Culture Fit",
          description: "Analyzes company values and culture for better matches",
          icon: "🤝"
        },
        {
          title: "Salary Intelligence",
          description: "Real-time salary data and compensation analysis",
          icon: "💰"
        },
        {
          title: "Growth Potential",
          description: "Identifies roles with career advancement opportunities",
          icon: "📈"
        }
      ]
    },
    {
      category: "Career Intelligence",
      description: "Insights and recommendations to accelerate your career",
      features: [
        {
          title: "Skill Gap Analysis",
          description: "Identifies missing skills for your target roles",
          icon: "📚"
        },
        {
          title: "Learning Recommendations",
          description: "Personalized courses and certifications suggestions",
          icon: "🎓"
        },
        {
          title: "Market Trends",
          description: "Real-time job market insights and demand forecasting",
          icon: "📊"
        },
        {
          title: "Career Roadmap",
          description: "Step-by-step guidance for career progression",
          icon: "🗺️"
        }
      ]
    },
    {
      category: "Integration & Automation",
      description: "Seamless workflow integration and automated processes",
      features: [
        {
          title: "ATS Integration",
          description: "Direct integration with major Applicant Tracking Systems",
          icon: "🔗"
        },
        {
          title: "Auto-Apply",
          description: "Automated job applications with personalized cover letters",
          icon: "⚡"
        },
        {
          title: "Calendar Sync",
          description: "Automatic interview scheduling and reminders",
          icon: "📅"
        },
        {
          title: "Progress Tracking",
          description: "Real-time application status and feedback tracking",
          icon: "📋"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Advanced AI Features
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Powerful Features for{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Career Success
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how our AI-powered platform revolutionizes job searching with cutting-edge technology and intelligent automation.
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-20">
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex} className="slide-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {category.category}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="card-hover p-8 group"
                      style={{ animationDelay: `${(categoryIndex * 4 + featureIndex) * 0.1}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="card p-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Experience These Features?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who are already using our AI-powered platform to accelerate their careers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup" className="btn-primary">
                  Start Free Trial
                </Link>
                <Link href="/demo" className="btn-secondary">
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
