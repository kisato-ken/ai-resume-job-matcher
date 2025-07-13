import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function API() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Resume Matcher{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                API
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Integrate powerful AI-driven resume analysis and job matching capabilities directly into your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="btn-primary">
                Get API Access
              </Link>
              <Link href="/docs" className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300">
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Powerful API Endpoints</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our AI capabilities through simple REST API calls
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Resume Analysis",
                description: "Extract skills, experience, and insights from resume documents",
                endpoint: "/api/v1/analyze",
                method: "POST"
              },
              {
                title: "Job Matching",
                description: "Find relevant job opportunities based on candidate profiles",
                endpoint: "/api/v1/match",
                method: "POST"
              },
              {
                title: "Skill Assessment",
                description: "Evaluate and score technical and soft skills",
                endpoint: "/api/v1/skills",
                method: "GET"
              },
              {
                title: "Career Insights",
                description: "Generate personalized career recommendations",
                endpoint: "/api/v1/insights",
                method: "POST"
              },
              {
                title: "Job Database",
                description: "Access our comprehensive job listings database",
                endpoint: "/api/v1/jobs",
                method: "GET"
              },
              {
                title: "Batch Processing",
                description: "Process multiple resumes simultaneously",
                endpoint: "/api/v1/batch",
                method: "POST"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    feature.method === 'POST' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {feature.method}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <code className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">{feature.endpoint}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Quick Start Example</h2>
              <p className="text-xl text-gray-600">
                Get started with our API in minutes
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm">
{`curl -X POST https://api.airesumematcher.com/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "resume_file": "base64_encoded_file",
    "format": "pdf",
    "options": {
      "extract_skills": true,
      "analyze_experience": true,
      "generate_insights": true
    }
  }'

# Response
{
  "id": "analysis_123456",
  "status": "completed",
  "results": {
    "skills": {
      "technical": ["Python", "JavaScript", "React"],
      "soft": ["Leadership", "Communication"]
    },
    "experience": {
      "years_total": 5,
      "seniority_level": "mid"
    },
    "insights": {
      "strengths": ["Full-stack development", "Team leadership"],
      "recommendations": ["Consider cloud certifications"]
    }
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">API Pricing</h2>
            <p className="text-xl text-gray-600">
              Flexible pricing that scales with your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$29",
                period: "/month",
                requests: "1,000 requests/month",
                features: [
                  "Resume analysis",
                  "Basic job matching",
                  "Email support",
                  "API documentation"
                ]
              },
              {
                name: "Professional",
                price: "$99",
                period: "/month",
                requests: "10,000 requests/month",
                features: [
                  "All Starter features",
                  "Advanced analytics",
                  "Batch processing",
                  "Priority support",
                  "Custom integrations"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                requests: "Unlimited requests",
                features: [
                  "All Professional features",
                  "Dedicated infrastructure",
                  "24/7 support",
                  "SLA guarantee",
                  "Custom AI models"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-soft border-2 p-8 relative ${
                plan.popular ? 'border-blue-500' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900">
                    {plan.price}<span className="text-lg text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.requests}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-xl font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help Getting Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our developer support team is here to help you integrate and succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors">
                View Documentation
              </Link>
              <Link href="/contact" className="text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
