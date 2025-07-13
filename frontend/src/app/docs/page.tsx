import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Docs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Documentation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to integrate with AI Resume Matcher API and get the most out of our platform
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  {[
                    { title: "Getting Started", href: "#getting-started" },
                    { title: "Authentication", href: "#authentication" },
                    { title: "API Reference", href: "#api-reference" },
                    { title: "SDKs", href: "#sdks" },
                    { title: "Webhooks", href: "#webhooks" },
                    { title: "Rate Limits", href: "#rate-limits" },
                    { title: "Error Handling", href: "#error-handling" },
                    { title: "Examples", href: "#examples" }
                  ].map((item, index) => (
                    <a 
                      key={index}
                      href={item.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-8">
                
                {/* Getting Started */}
                <section id="getting-started" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
                  <p className="text-gray-600 mb-6">
                    Welcome to the AI Resume Matcher API documentation. Our API allows you to integrate powerful 
                    resume analysis and job matching capabilities into your applications.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Prerequisites</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li>• API key (obtain from your dashboard)</li>
                      <li>• Basic understanding of REST APIs</li>
                      <li>• HTTPS endpoint for webhook notifications</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Base URL</h3>
                  <div className="bg-gray-900 rounded-lg p-4 mb-6">
                    <code className="text-green-400">https://api.airesumematcher.com/v1</code>
                  </div>
                </section>

                {/* Authentication */}
                <section id="authentication" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Authentication</h2>
                  <p className="text-gray-600 mb-6">
                    All API requests require authentication using API keys. Include your API key in the Authorization header.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.airesumematcher.com/v1/analyze`}
                    </pre>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800">
                      <strong>Security Note:</strong> Keep your API keys secure and never expose them in client-side code.
                    </p>
                  </div>
                </section>

                {/* API Reference */}
                <section id="api-reference" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">API Reference</h2>
                  
                  <div className="space-y-8">
                    {/* Analyze Endpoint */}
                    <div className="border-l-4 border-blue-500 pl-6">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">Analyze Resume</h3>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">POST</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Analyzes a resume file and extracts skills, experience, and insights.
                      </p>
                      
                      <div className="bg-gray-900 rounded-lg p-4 mb-4">
                        <code className="text-green-400">POST /v1/analyze</code>
                      </div>

                      <h4 className="font-semibold text-gray-900 mb-2">Request Body</h4>
                      <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
                        <pre className="text-green-400 text-sm">
{`{
  "resume_file": "base64_encoded_file",
  "format": "pdf|doc|txt",
  "options": {
    "extract_skills": true,
    "analyze_experience": true,
    "generate_insights": true
  }
}`}
                        </pre>
                      </div>

                      <h4 className="font-semibold text-gray-900 mb-2">Response</h4>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <pre className="text-green-400 text-sm">
{`{
  "id": "analysis_123456",
  "status": "completed",
  "results": {
    "skills": {
      "technical": ["Python", "JavaScript"],
      "soft": ["Leadership", "Communication"]
    },
    "experience": {
      "years_total": 5,
      "seniority_level": "mid"
    }
  }
}`}
                        </pre>
                      </div>
                    </div>

                    {/* Match Jobs Endpoint */}
                    <div className="border-l-4 border-blue-500 pl-6">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">Match Jobs</h3>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">POST</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Finds relevant job matches based on candidate profile.
                      </p>
                      
                      <div className="bg-gray-900 rounded-lg p-4 mb-4">
                        <code className="text-green-400">POST /v1/match</code>
                      </div>

                      <h4 className="font-semibold text-gray-900 mb-2">Request Body</h4>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <pre className="text-green-400 text-sm">
{`{
  "candidate_id": "user_123",
  "filters": {
    "location": "San Francisco, CA",
    "remote": true,
    "salary_min": 80000
  },
  "limit": 20
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>

                {/* SDKs */}
                <section id="sdks" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">SDKs & Libraries</h2>
                  <p className="text-gray-600 mb-6">
                    Official SDKs to help you integrate quickly in your preferred language.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        language: "JavaScript/Node.js",
                        install: "npm install airesumematcher",
                        github: "https://github.com/airesumematcher/js-sdk"
                      },
                      {
                        language: "Python",
                        install: "pip install airesumematcher",
                        github: "https://github.com/airesumematcher/python-sdk"
                      },
                      {
                        language: "PHP",
                        install: "composer require airesumematcher/php-sdk",
                        github: "https://github.com/airesumematcher/php-sdk"
                      },
                      {
                        language: "Ruby",
                        install: "gem install airesumematcher",
                        github: "https://github.com/airesumematcher/ruby-sdk"
                      }
                    ].map((sdk, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{sdk.language}</h4>
                        <div className="bg-gray-900 rounded p-2 mb-2">
                          <code className="text-green-400 text-sm">{sdk.install}</code>
                        </div>
                        <a href={sdk.github} className="text-blue-600 hover:text-blue-500 text-sm">
                          View on GitHub →
                        </a>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Rate Limits */}
                <section id="rate-limits" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Rate Limits</h2>
                  <p className="text-gray-600 mb-6">
                    To ensure fair usage, our API implements rate limiting based on your subscription plan.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-2 text-left">Plan</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Requests/Month</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Rate Limit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Starter</td>
                          <td className="border border-gray-300 px-4 py-2">1,000</td>
                          <td className="border border-gray-300 px-4 py-2">10/minute</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Professional</td>
                          <td className="border border-gray-300 px-4 py-2">10,000</td>
                          <td className="border border-gray-300 px-4 py-2">100/minute</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Enterprise</td>
                          <td className="border border-gray-300 px-4 py-2">Unlimited</td>
                          <td className="border border-gray-300 px-4 py-2">1000/minute</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Error Handling */}
                <section id="error-handling" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Error Handling</h2>
                  <p className="text-gray-600 mb-6">
                    Our API uses conventional HTTP response codes to indicate success or failure.
                  </p>

                  <div className="space-y-4">
                    {[
                      { code: "200", description: "Success - Request completed successfully" },
                      { code: "400", description: "Bad Request - Invalid request parameters" },
                      { code: "401", description: "Unauthorized - Invalid API key" },
                      { code: "429", description: "Too Many Requests - Rate limit exceeded" },
                      { code: "500", description: "Internal Server Error - Something went wrong" }
                    ].map((error, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                        <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">{error.code}</span>
                        <span className="text-gray-700">{error.description}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Support */}
                <section className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
                  <p className="text-gray-600 mb-4">
                    Can't find what you're looking for? Our developer support team is here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                      Contact Support
                    </Link>
                    <a href="mailto:developers@airesumematcher.com" className="text-blue-600 hover:text-blue-500 px-6 py-2 text-center">
                      developers@airesumematcher.com
                    </a>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
