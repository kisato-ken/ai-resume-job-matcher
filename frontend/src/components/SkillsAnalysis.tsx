"use client";

import React, { useEffect, useRef } from "react";

interface SkillsAnalysisProps {
  skills: string[];
  skillFrequency?: { [key: string]: number };
}

export default function SkillsAnalysis({ skills, skillFrequency }: SkillsAnalysisProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (skills && skills.length > 0) {
      drawSkillsChart();
    }
  }, [skills, skillFrequency]);

  const drawSkillsChart = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = 200;

    if (!skills || skills.length === 0) return;

    // Prepare data for visualization
    const topSkills = skills.slice(0, 10);
    const maxFrequency = skillFrequency ? Math.max(...Object.values(skillFrequency)) : 1;

    // Draw bar chart
    const barWidth = (canvas.width - 40) / topSkills.length;
    const maxBarHeight = canvas.height - 60;

    topSkills.forEach((skill, index) => {
      const frequency = skillFrequency?.[skill] || 1;
      const barHeight = (frequency / maxFrequency) * maxBarHeight;
      const x = 20 + index * barWidth;
      const y = canvas.height - 40 - barHeight;

      // Draw bar
      ctx.fillStyle = `hsl(${200 + (index * 20) % 160}, 70%, 60%)`;
      ctx.fillRect(x + 2, y, barWidth - 4, barHeight);

      // Draw skill name
      ctx.fillStyle = "#374151";
      ctx.font = "12px sans-serif";
      ctx.save();
      ctx.translate(x + barWidth / 2, canvas.height - 10);
      ctx.rotate(-Math.PI / 4);
      ctx.textAlign = "right";
      ctx.fillText(skill, 0, 0);
      ctx.restore();

      // Draw frequency
      ctx.fillStyle = "#6B7280";
      ctx.font = "10px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(frequency.toString(), x + barWidth / 2, y - 5);
    });
  };

  const getSkillLevel = (skill: string) => {
    const frequency = skillFrequency?.[skill] || 0;
    if (frequency >= 4) return { level: "High Demand", color: "bg-green-100 text-green-800" };
    if (frequency >= 2) return { level: "Medium Demand", color: "bg-yellow-100 text-yellow-800" };
    return { level: "Low Demand", color: "bg-gray-100 text-gray-800" };
  };

  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <div className="card hover-lift">
      <div className="p-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Skills Analysis</h2>
              <p className="text-gray-600">
                Analysis of your {skills.length} identified skills and their market demand
              </p>
            </div>
          </div>
        </div>

        {/* Skills Summary Cards */}
        <div className="mb-8 grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
            <div className="text-2xl font-bold text-purple-600">{skills.length}</div>
            <div className="text-sm text-purple-700">Total Skills</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <div className="text-2xl font-bold text-green-600">
              {skillFrequency ? Object.values(skillFrequency).filter(f => f >= 4).length : 0}
            </div>
            <div className="text-sm text-green-700">High Demand</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <div className="text-2xl font-bold text-blue-600">
              {getSkillCategories(skills).length}
            </div>
            <div className="text-sm text-blue-700">Categories</div>
          </div>
        </div>

        {/* Skills Demand Chart */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </span>
            Market Demand Visualization
          </h3>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
            <canvas
              ref={canvasRef}
              className="w-full h-48 rounded-lg"
              style={{ maxHeight: "200px" }}
            />
            <p className="text-xs text-gray-500 mt-2 text-center">
              Skills sorted by market demand frequency
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </span>
            Your Skills Portfolio
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.slice(0, 12).map((skill, index) => {
              const { level, color } = getSkillLevel(skill);
              const frequency = skillFrequency?.[skill] || 0;
              return (
                <div
                  key={index}
                  className="card-hover p-4 hover:shadow-glow-purple scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="font-semibold text-gray-900 capitalize flex-1">{skill}</div>
                    <div className={`px-2 py-1 rounded-lg text-xs font-bold ${color}`}>
                      {frequency}
                    </div>
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${color} mb-2`}>
                    {level}
                  </div>
                  {skillFrequency && (
                    <div className="text-xs text-gray-500">
                      Found in {frequency} job postings
                    </div>
                  )}
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((frequency / 5) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {skills.length > 12 && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="text-sm font-medium">
                  {skills.length - 12} more skills detected
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Skills Categories */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </span>
            Skill Categories
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {getSkillCategories(skills).map((category, index) => (
              <div key={index} className="card p-6 hover:shadow-medium transition-all duration-300 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getCategoryIcon(category.name).color}`}>
                    {getCategoryIcon(category.name).icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{category.name}</h4>
                  <span className="ml-auto bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                    {category.skills.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm rounded-lg font-medium hover:from-blue-200 hover:to-indigo-200 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getSkillCategories(skills: string[]) {
  const categories: { name: string; keywords: string[]; skills: string[] }[] = [
    {
      name: "Programming Languages",
      keywords: ["python", "javascript", "java", "c++", "c#", "php", "ruby", "go", "rust", "swift", "kotlin", "scala", "r", "matlab"],
      skills: []
    },
    {
      name: "Web Technologies",
      keywords: ["html", "css", "react", "angular", "vue", "node.js", "express", "django", "flask", "spring", "laravel", "next.js"],
      skills: []
    },
    {
      name: "Data & Analytics",
      keywords: ["sql", "mysql", "postgresql", "mongodb", "redis", "elasticsearch", "pandas", "numpy", "machine learning", "tensorflow", "pytorch"],
      skills: []
    },
    {
      name: "Cloud & DevOps",
      keywords: ["aws", "azure", "gcp", "docker", "kubernetes", "jenkins", "terraform", "ansible", "git", "linux"],
      skills: []
    },
    {
      name: "Design & Tools",
      keywords: ["figma", "photoshop", "illustrator", "sketch", "ui", "ux", "design", "wireframing"],
      skills: []
    },
    {
      name: "Other Skills",
      keywords: [],
      skills: []
    }
  ];

  skills.forEach(skill => {
    const skillLower = skill.toLowerCase();
    let categorized = false;

    for (let i = 0; i < categories.length - 1; i++) {
      if (categories[i].keywords.some(keyword => 
        skillLower.includes(keyword) || keyword.includes(skillLower)
      )) {
        categories[i].skills.push(skill);
        categorized = true;
        break;
      }
    }

    if (!categorized) {
      categories[categories.length - 1].skills.push(skill);
    }
  });

  return categories.filter(category => category.skills.length > 0);
}

function getCategoryIcon(categoryName: string) {
  const icons: { [key: string]: { icon: React.ReactElement; color: string } } = {
    "Programming Languages": {
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "bg-gradient-to-r from-blue-500 to-indigo-500"
    },
    "Web Technologies": {
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9a9 9 0 00-9 9m0 0a9 9 0 019 9" />
        </svg>
      ),
      color: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    "Data & Analytics": {
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "bg-gradient-to-r from-purple-500 to-indigo-500"
    },
    "Cloud & DevOps": {
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      color: "bg-gradient-to-r from-cyan-500 to-blue-500"
    },
    "Design & Tools": {
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z" />
        </svg>
      ),
      color: "bg-gradient-to-r from-pink-500 to-rose-500"
    },
    "Other Skills": {
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: "bg-gradient-to-r from-gray-500 to-slate-500"
    }
  };

  return icons[categoryName] || icons["Other Skills"];
}
