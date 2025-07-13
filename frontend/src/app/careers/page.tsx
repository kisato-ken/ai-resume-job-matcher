import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Join Our{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Mission
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Help us revolutionize how people find their dream jobs. Join a team of passionate innovators building the future of AI-powered career matching.
            </p>
            <Link href="#open-positions" className="btn-primary">
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose AI Resume Matcher?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just building a product—we're creating the future of work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🚀",
                title: "Cutting-Edge Technology",
                description: "Work with the latest AI and machine learning technologies to solve real-world problems."
              },
              {
                icon: "🌍",
                title: "Global Impact",
                description: "Your work directly impacts millions of job seekers worldwide, helping them find their perfect career match."
              },
              {
                icon: "💡",
                title: "Innovation Culture",
                description: "We encourage experimentation, learning, and pushing the boundaries of what's possible."
              },
              {
                icon: "🤝",
                title: "Collaborative Team",
                description: "Work alongside talented individuals who are passionate about technology and making a difference."
              },
              {
                icon: "📈",
                title: "Growth Opportunities",
                description: "Accelerate your career with mentorship, learning budgets, and clear advancement paths."
              },
              {
                icon: "⚖️",
                title: "Work-Life Balance",
                description: "Flexible hours, remote work options, and a culture that values your well-being."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600">
              Find your next opportunity with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Senior Full-Stack Engineer",
                department: "Engineering",
                location: "San Francisco, CA / Remote",
                type: "Full-time",
                description: "Lead development of our core AI matching platform. Work with React, Node.js, and Python to build scalable solutions."
              },
              {
                title: "AI/ML Engineer",
                department: "Data Science",
                location: "San Francisco, CA / Remote",
                type: "Full-time",
                description: "Develop and improve our machine learning models for resume analysis and job matching. Experience with PyTorch/TensorFlow required."
              },
              {
                title: "Product Designer",
                department: "Design",
                location: "San Francisco, CA / Remote",
                type: "Full-time",
                description: "Design intuitive user experiences for our AI-powered platform. Lead user research and create beautiful, functional interfaces."
              },
              {
                title: "DevOps Engineer",
                department: "Infrastructure",
                location: "San Francisco, CA / Remote",
                type: "Full-time",
                description: "Build and maintain our cloud infrastructure. Experience with AWS, Kubernetes, and CI/CD pipelines preferred."
              },
              {
                title: "Data Scientist",
                department: "Data Science",
                location: "San Francisco, CA / Remote",
                type: "Full-time",
                description: "Analyze user behavior and job market trends to improve our matching algorithms. Strong statistics and Python skills required."
              },
              {
                title: "Customer Success Manager",
                department: "Customer Success",
                location: "San Francisco, CA / Remote",
                type: "Full-time",
                description: "Help our enterprise customers succeed with our platform. Build relationships and ensure customer satisfaction."
              }
            ].map((job, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                        {job.department}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                        {job.type}
                      </span>
                      <span className="text-gray-600">📍 {job.location}</span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see a role that fits? We're always looking for talented people.
            </p>
            <Link href="/contact" className="text-blue-600 hover:text-blue-500 font-semibold">
              Send us your resume →
            </Link>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Innovation First",
                    description: "We constantly push boundaries and embrace new technologies to solve complex problems."
                  },
                  {
                    title: "User-Centric",
                    description: "Every decision we make is guided by what's best for our users and their career success."
                  },
                  {
                    title: "Transparency",
                    description: "We believe in open communication, honest feedback, and transparent decision-making."
                  },
                  {
                    title: "Continuous Learning",
                    description: "We invest in our team's growth and encourage experimentation and learning from failures."
                  }
                ].map((value, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits & Perks</h3>
              <div className="space-y-4">
                {[
                  "Competitive salary and equity",
                  "Comprehensive health, dental, and vision insurance",
                  "Flexible PTO and sabbatical options",
                  "Remote work flexibility",
                  "$2,000 annual learning budget",
                  "Top-tier equipment and workspace setup",
                  "Regular team retreats and events",
                  "401(k) with company matching",
                  "Commuter benefits",
                  "Mental health and wellness support"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Shape the Future of Work?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join us in building AI-powered solutions that help millions find their dream jobs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#open-positions" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors">
                Browse Positions
              </Link>
              <Link href="/contact" className="text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
