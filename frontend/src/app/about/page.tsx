"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former Head of AI at Google, PhD in Computer Science from MIT. 10+ years in AI and ML.",
      image: "👩‍💼",
      linkedin: "#"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Ex-Netflix Engineering Lead, Stanford CS graduate. Expert in scalable AI systems.",
      image: "👨‍💻",
      linkedin: "#"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      bio: "Former Microsoft Research Scientist, published 50+ papers in NLP and machine learning.",
      image: "👩‍🔬",
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "Head of Product",
      bio: "Former LinkedIn Product Manager, expert in career platforms and user experience.",
      image: "👨‍💼",
      linkedin: "#"
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "Started with a vision to revolutionize job searching using AI"
    },
    {
      year: "2023",
      title: "First AI Model Launched",
      description: "Released our first resume parsing and job matching algorithm"
    },
    {
      year: "2024",
      title: "10K+ Users",
      description: "Reached 10,000 successful job matches and expanded team"
    },
    {
      year: "2025",
      title: "Series A Funding",
      description: "Raised $15M to scale our AI technology and global expansion"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI and machine learning.",
      icon: "🚀"
    },
    {
      title: "Transparency",
      description: "We believe in clear communication and honest practices in everything we do.",
      icon: "🔍"
    },
    {
      title: "Empowerment",
      description: "We empower individuals to take control of their career journey and reach their potential.",
      icon: "💪"
    },
    {
      title: "Diversity",
      description: "We champion diversity and inclusion, creating opportunities for everyone.",
      icon: "🌍"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              Our Story
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Revolutionizing Careers with{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to democratize career opportunities and help every professional find their perfect job match through the power of artificial intelligence.
            </p>
          </div>

          {/* Mission Section */}
          <div className="card p-12 mb-20 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                To eliminate bias and inefficiency in hiring by creating intelligent connections between talented professionals and meaningful career opportunities. We believe that the right job can transform lives, and the right candidate can transform companies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-bold text-gray-900 mb-2">Perfect Matching</h3>
                  <p className="text-gray-600 text-sm">AI-powered precision in connecting talent with opportunity</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="font-bold text-gray-900 mb-2">Speed & Efficiency</h3>
                  <p className="text-gray-600 text-sm">Reducing time-to-hire from weeks to days</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="font-bold text-gray-900 mb-2">Global Impact</h3>
                  <p className="text-gray-600 text-sm">Creating opportunities across industries and geographies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our team combines decades of experience in AI, technology, and career development to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="card-hover p-6 text-center group slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <a href={member.linkedin} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                    <span>LinkedIn</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From a small startup to a leading AI-powered career platform, here's how we've grown.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                        <div className="card p-6">
                          <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="card-hover p-8 group slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { number: "50K+", label: "Successful Matches" },
              { number: "1.2K+", label: "Partner Companies" },
              { number: "98%", label: "User Satisfaction" },
              { number: "15M", label: "Series A Funding" }
            ].map((stat, index) => (
              <div key={index} className="text-center slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="card p-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Join Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you're looking for your next career opportunity or want to join our team, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/careers" className="btn-primary">
                  View Open Positions
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Us
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
