import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Help() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Help{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Center
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions and get the most out of AI Resume Matcher
            </p>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <p className="text-gray-600">Quick access to the most commonly asked questions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Getting Started",
                icon: "🚀",
                articles: ["How to upload your resume", "Creating your account", "Understanding match scores"]
              },
              {
                title: "Resume Analysis",
                icon: "📄",
                articles: ["Supported file formats", "Resume optimization tips", "Skill extraction accuracy"]
              },
              {
                title: "Job Matching",
                icon: "🎯",
                articles: ["How matching works", "Filtering results", "Saving favorite jobs"]
              },
              {
                title: "Account Management",
                icon: "⚙️",
                articles: ["Updating your profile", "Privacy settings", "Subscription management"]
              },
              {
                title: "Technical Support",
                icon: "🔧",
                articles: ["Upload issues", "Browser compatibility", "Mobile app help"]
              },
              {
                title: "Billing & Plans",
                icon: "💳",
                articles: ["Plan comparisons", "Billing questions", "Cancellation policy"]
              }
            ].map((topic, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                <ul className="space-y-2">
                  {topic.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a href="#" className="text-blue-600 hover:text-blue-500 text-sm">
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Find quick answers to common questions</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "How accurate is the AI resume analysis?",
                  answer: "Our AI has been trained on millions of resumes and job descriptions, achieving 95%+ accuracy in skill extraction and job matching. We continuously improve our algorithms based on user feedback and market trends."
                },
                {
                  question: "What file formats are supported for resume upload?",
                  answer: "We support PDF, DOC, DOCX, and TXT file formats. PDF files typically provide the best results for text extraction and analysis."
                },
                {
                  question: "How does the job matching algorithm work?",
                  answer: "Our algorithm analyzes your skills, experience, career progression, and preferences to match you with relevant job opportunities. It considers factors like skill overlap, experience level, location preferences, and industry alignment."
                },
                {
                  question: "Is my resume data secure and private?",
                  answer: "Yes, we take data security very seriously. All data is encrypted in transit and at rest. We never share your personal information with third parties without your explicit consent. You can delete your data at any time."
                },
                {
                  question: "Can I use the platform for free?",
                  answer: "Yes! We offer a free plan that includes basic resume analysis and limited job matches. Premium plans provide unlimited matches, advanced analytics, and priority support."
                },
                {
                  question: "How often are job listings updated?",
                  answer: "Our job database is updated in real-time, with new opportunities added continuously from our partner companies and job boards. You'll always see the most current available positions."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-soft">
                  <button className="w-full text-left">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors">
                  Contact Support
                </Link>
                <a href="mailto:support@airesumematcher.com" className="text-blue-600 hover:text-blue-500 px-8 py-4 font-semibold text-lg">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
