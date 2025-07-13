import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              See AI Resume Matcher{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                In Action
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Watch how our AI technology analyzes resumes and matches them with perfect job opportunities in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-blue-700 transition-colors">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">AI Resume Matching Demo</h3>
                  <p className="text-gray-300">Click to watch the full demonstration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See exactly how our AI analyzes and matches your profile
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upload Resume</h3>
              <p className="text-gray-600">
                Upload your resume in PDF, DOC, or TXT format. Our AI instantly extracts and analyzes your information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced algorithms analyze your skills, experience, and career goals to create your unique profile.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Perfect Matches</h3>
              <p className="text-gray-600">
                Get ranked job matches with compatibility scores and detailed insights about why each role fits you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Demo Features</h2>
              <p className="text-xl text-gray-600">
                Try these features in our interactive demo
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Skill Extraction",
                  description: "Watch as AI identifies technical and soft skills from your resume",
                  icon: "🎯"
                },
                {
                  title: "Experience Analysis",
                  description: "See how we map your career progression and achievements",
                  icon: "📊"
                },
                {
                  title: "Job Matching",
                  description: "Experience real-time matching with thousands of job opportunities",
                  icon: "🔍"
                },
                {
                  title: "Compatibility Scoring",
                  description: "Understand our 95% accuracy matching algorithm in action",
                  icon: "⭐"
                },
                {
                  title: "Insights Dashboard",
                  description: "Explore detailed analytics about your career profile",
                  icon: "📈"
                },
                {
                  title: "Career Recommendations",
                  description: "Get personalized suggestions for skill development",
                  icon: "💡"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Try It Yourself?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience the power of AI-driven job matching with your own resume
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg">
                Start Free Trial
              </Link>
              <Link href="/contact" className="text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
