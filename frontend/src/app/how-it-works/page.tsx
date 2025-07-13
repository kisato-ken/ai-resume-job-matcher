"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HowItWorksPage() {
  const steps = [
    {
      step: "01",
      title: "Upload Your Resume",
      description: "Simply drag and drop your resume in PDF, DOCX, or TXT format. Our AI will instantly parse and analyze your document.",
      features: [
        "Supports multiple file formats",
        "Secure document processing",
        "Instant skill extraction",
        "Experience mapping"
      ],
      image: "📄",
      color: "from-blue-500 to-indigo-600"
    },
    {
      step: "02",
      title: "AI Analysis & Processing",
      description: "Our advanced AI algorithms analyze your skills, experience, and qualifications using natural language processing.",
      features: [
        "NLP-powered analysis",
        "Skill categorization",
        "Experience validation",
        "Industry recognition"
      ],
      image: "🤖",
      color: "from-purple-500 to-indigo-600"
    },
    {
      step: "03",
      title: "Job Matching & Scoring",
      description: "We match your profile against thousands of job postings and provide compatibility scores for each position.",
      features: [
        "Semantic job matching",
        "Compatibility scoring",
        "Salary benchmarking",
        "Company culture fit"
      ],
      image: "🎯",
      color: "from-green-500 to-emerald-600"
    },
    {
      step: "04",
      title: "Personalized Recommendations",
      description: "Receive tailored job recommendations, skill development suggestions, and career guidance.",
      features: [
        "Personalized job list",
        "Skill gap analysis",
        "Learning recommendations",
        "Career roadmap"
      ],
      image: "💡",
      color: "from-orange-500 to-red-600"
    }
  ];

  const technologies = [
    {
      name: "Natural Language Processing",
      description: "Advanced NLP models trained on millions of resumes and job descriptions",
      icon: "🧠"
    },
    {
      name: "Machine Learning",
      description: "Continuous learning algorithms that improve matching accuracy over time",
      icon: "🤖"
    },
    {
      name: "Semantic Analysis",
      description: "Understanding context and meaning beyond simple keyword matching",
      icon: "🔍"
    },
    {
      name: "Real-time Processing",
      description: "Lightning-fast analysis and matching in under 2 seconds",
      icon: "⚡"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Simple 4-Step Process
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              How Our AI{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Transforms
              </span>
              {" "}Your Job Search
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover the simple yet powerful process that connects you with your dream job using cutting-edge AI technology.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 slide-up`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {step.step}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                      {step.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 flex justify-center">
                  <div className={`w-80 h-80 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center text-8xl shadow-2xl hover:scale-105 transition-transform duration-300`}>
                    {step.image}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Section */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Powered by Advanced Technology
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our platform leverages cutting-edge AI and machine learning technologies to deliver unprecedented accuracy and insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="card-hover p-8 group slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {tech.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How accurate is the AI job matching?",
                  answer: "Our AI achieves 98% accuracy in job matching by using advanced NLP and machine learning algorithms trained on millions of successful job placements."
                },
                {
                  question: "Is my resume data secure?",
                  answer: "Yes, we use enterprise-grade security with end-to-end encryption. Your data is never shared with third parties without your explicit consent."
                },
                {
                  question: "How long does the analysis take?",
                  answer: "The entire process takes less than 2 seconds. Our optimized AI infrastructure ensures near-instantaneous results."
                },
                {
                  question: "Can I update my resume and get new matches?",
                  answer: "Absolutely! You can upload new versions of your resume anytime, and our AI will automatically update your job matches."
                }
              ].map((faq, index) => (
                <div key={index} className="card p-6 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="card p-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have transformed their job search with our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup" className="btn-primary">
                  Upload Your Resume Now
                </Link>
                <Link href="/demo" className="btn-secondary">
                  Watch Demo Video
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
