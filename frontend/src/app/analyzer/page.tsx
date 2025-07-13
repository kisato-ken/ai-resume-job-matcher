"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResumeUploader from "@/components/ResumeUploader";
import JobMatches from "@/components/JobMatches";
import SkillsAnalysis from "@/components/SkillsAnalysis";

export default function Analyzer() {
  const [resumeId, setResumeId] = useState<string | null>(null);
  const [resumeData, setResumeData] = useState<any>(null);
  const [matchResults, setMatchResults] = useState<any>(null);

  const handleResumeUploaded = (id: string, data: any) => {
    setResumeId(id);
    setResumeData(data);
    setMatchResults(null);
  };

  const handleMatchesFound = (matches: any) => {
    setMatchResults(matches);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              AI-Powered Resume Analysis
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Analyze Your Resume with{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI Precision
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get instant insights into your skills, experience, and find job matches tailored to your profile.
            </p>
          </div>
        </div>
      </section>

      {/* Main Application */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column - Resume Upload & Analysis */}
            <div className="space-y-8">
              <div className="slide-up">
                <ResumeUploader 
                  onResumeUploaded={handleResumeUploaded}
                  resumeData={resumeData}
                />
              </div>
              
              {resumeData && (
                <div className="slide-up" style={{ animationDelay: '0.2s' }}>
                  <SkillsAnalysis 
                    skills={resumeData.skills}
                    skillFrequency={matchResults?.skill_frequency}
                  />
                </div>
              )}
            </div>

            {/* Right Column - Job Matches */}
            <div className="slide-up" style={{ animationDelay: '0.4s' }}>
              {resumeId ? (
                <JobMatches
                  resumeId={resumeId}
                  onMatchesFound={handleMatchesFound}
                  matchResults={matchResults}
                />
              ) : (
                <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-12 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Find Your Dream Job?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Upload your resume to see AI-powered job matches, salary insights, and skill recommendations.
                  </p>
                  <div className="space-y-3 text-left max-w-sm mx-auto">
                    {[
                      "Instant resume analysis",
                      "Smart job matching", 
                      "Skill gap identification",
                      "Salary benchmarking"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600">Get results in just three simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Upload Resume</h3>
              <p className="text-gray-600">
                Upload your resume in PDF, DOC, or TXT format. Our AI will extract and analyze your information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced algorithms analyze your skills, experience, and career progression.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Matches</h3>
              <p className="text-gray-600">
                Receive personalized job recommendations with compatibility scores and insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
