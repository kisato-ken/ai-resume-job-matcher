"use client";

import { useState, useEffect } from "react";

interface JobMatchesProps {
  resumeId: string;
  onMatchesFound: (matches: any) => void;
  matchResults: any;
}

interface JobMatch {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    description: string;
    requirements: string[];
    salary_range: string;
    remote: boolean;
  };
  match_score: number;
  matching_skills: string[];
  missing_skills: string[];
  explanation: string;
}

export default function JobMatches({ resumeId, onMatchesFound, matchResults }: JobMatchesProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (resumeId && !matchResults) {
      findMatches();
    }
  }, [resumeId]);

  const findMatches = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:8000/api/v1/match-jobs/${resumeId}`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(`Failed to find matches: ${response.statusText}`);
      }

      const results = await response.json();
      onMatchesFound(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 0.8) return "text-green-600 bg-green-100";
    if (score >= 0.6) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  const getMatchScoreIcon = (score: number) => {
    if (score >= 0.8) return "🎯";
    if (score >= 0.6) return "✅";
    return "⚠️";
  };

  if (isLoading) {
    return (
      <div className="card">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
              <div className="w-8 h-8 spinner border-white"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Finding Your Dream Jobs</h2>
            <p className="text-gray-600">Our AI is analyzing thousands of positions to find your perfect matches</p>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card p-6 animate-pulse">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                  <div className="flex-1 space-y-3">
                    <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="flex gap-2">
                      <div className="h-3 bg-gray-200 rounded w-16"></div>
                      <div className="h-3 bg-gray-200 rounded w-20"></div>
                    </div>
                  </div>
                  <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        <div className="p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Oops! Something went wrong</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">{error}</p>
          <button
            onClick={findMatches}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!matchResults) {
    return null;
  }

  return (
    <div className="card hover-lift">
      <div className="p-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Job Matches</h2>
              <p className="text-gray-600">
                Found {matchResults.matches?.length || 0} perfect matches for your profile
              </p>
            </div>
          </div>
        </div>

        {/* Match Summary Stats */}
        {matchResults.matches?.length > 0 && (
          <div className="mb-8 grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="text-2xl font-bold text-green-600">
                {matchResults.matches.filter((m: JobMatch) => m.match_score >= 0.8).length}
              </div>
              <div className="text-sm text-green-700">Excellent Matches</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl border border-yellow-200">
              <div className="text-2xl font-bold text-yellow-600">
                {matchResults.matches.filter((m: JobMatch) => m.match_score >= 0.6 && m.match_score < 0.8).length}
              </div>
              <div className="text-sm text-yellow-700">Good Matches</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">
                {Math.round((matchResults.matches.reduce((sum: number, m: JobMatch) => sum + m.match_score, 0) / matchResults.matches.length) * 100)}%
              </div>
              <div className="text-sm text-blue-700">Avg Match Score</div>
            </div>
          </div>
        )}

        {/* Recommendations */}
        {matchResults.recommendations && matchResults.recommendations.length > 0 && (
          <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-indigo-900 mb-3">💡 AI Recommendations</h3>
                <ul className="space-y-2">
                  {matchResults.recommendations.map((rec: string, index: number) => (
                    <li key={index} className="text-indigo-800 text-sm leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Job Matches List */}
        <div className="space-y-6">
          {matchResults.matches?.map((match: JobMatch, index: number) => (
            <div key={match.job.id} className="card-hover p-6 border-2 border-gray-100 hover:border-blue-200 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{match.job.title}</h3>
                    <div className={`px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1 ${getMatchScoreColor(match.match_score)}`}>
                      <span className="text-lg">{getMatchScoreIcon(match.match_score)}</span>
                      {Math.round(match.match_score * 100)}% match
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 font-medium mb-2">{match.job.company}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {match.job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      {match.job.salary_range}
                    </span>
                    {match.job.remote && (
                      <span className="flex items-center gap-1 text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Remote
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{match.job.description}</p>

              <div className="mb-4 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-700 italic leading-relaxed">{match.explanation}</p>
              </div>

              {/* Skills Analysis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {match.matching_skills.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-semibold text-green-700">
                        Matching Skills ({match.matching_skills.length})
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {match.matching_skills.slice(0, 6).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-green-100 text-green-800 text-sm rounded-lg font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {match.matching_skills.length > 6 && (
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg font-medium">
                          +{match.matching_skills.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {match.missing_skills.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <p className="font-semibold text-orange-700">
                        Skills to Develop ({match.missing_skills.length})
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {match.missing_skills.slice(0, 6).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-orange-100 text-orange-800 text-sm rounded-lg font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {match.missing_skills.length > 6 && (
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg font-medium">
                          +{match.missing_skills.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button className="flex-1 btn-primary">
                  View Details & Apply
                </button>
                <button className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 transition-all duration-200">
                  Save Job
                </button>
              </div>
            </div>
          ))}
        </div>

        {matchResults.matches?.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No matches found yet</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              We're constantly adding new opportunities. Try updating your resume or check back later for fresh matches.
            </p>
            <button 
              onClick={findMatches}
              className="btn-primary"
            >
              Refresh Matches
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
