"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out our platform",
      price: { monthly: 0, annual: 0 },
      features: [
        "Resume analysis",
        "Up to 5 job matches per month",
        "Basic skill recommendations",
        "Standard support",
        "Job application tracking"
      ],
      limitations: [
        "Limited to 1 resume upload",
        "Basic matching algorithm",
        "No priority support"
      ],
      popular: false,
      color: "from-gray-400 to-gray-600",
      bgColor: "from-gray-50 to-gray-100"
    },
    {
      name: "Pro",
      description: "Ideal for active job seekers",
      price: { monthly: 29, annual: 24 },
      features: [
        "Everything in Free",
        "Unlimited job matches",
        "Advanced AI matching",
        "Skill gap analysis",
        "Resume optimization tips",
        "Priority support",
        "Interview preparation",
        "Salary insights",
        "Company culture matching"
      ],
      limitations: [],
      popular: true,
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      name: "Enterprise",
      description: "For companies and recruiters",
      price: { monthly: 99, annual: 79 },
      features: [
        "Everything in Pro",
        "Bulk candidate analysis",
        "ATS integration",
        "Custom matching algorithms",
        "Advanced analytics",
        "Dedicated account manager",
        "White-label options",
        "API access",
        "Custom reporting",
        "SSO integration"
      ],
      limitations: [],
      popular: false,
      color: "from-purple-500 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "Yes, we offer a 14-day free trial for all paid plans. No credit card required to start."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade security with end-to-end encryption and comply with GDPR and SOC 2 standards."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period."
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
              Simple & Transparent Pricing
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Choose the Perfect Plan for{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Your Career
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Start free, scale as you grow. All plans include our core AI-powered job matching technology.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-16">
            <div className="bg-white p-2 rounded-2xl shadow-soft border border-gray-200">
              <div className="flex items-center">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    !isAnnual
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 relative ${
                    isAnnual
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Annual
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative card-hover ${plan.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''} slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`p-8 bg-gradient-to-br ${plan.bgColor} border border-gray-200`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /{isAnnual ? 'month' : 'month'}
                      </span>
                      {isAnnual && plan.price.annual < plan.price.monthly && (
                        <div className="text-sm text-green-600 font-medium mt-1">
                          Billed annually (${plan.price.annual * 12}/year)
                        </div>
                      )}
                    </div>

                    <Link
                      href={plan.name === "Free" ? "/signup" : plan.name === "Enterprise" ? "/contact" : "/signup"}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 text-center block ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl"
                          : "bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {plan.name === "Free" ? "Get Started" : plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                    </Link>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 mb-3">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.limitations.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="font-bold text-gray-600 mb-3 text-sm">Limitations:</h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="flex items-start gap-3">
                              <div className="w-4 h-4 text-gray-400 mt-0.5">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                </svg>
                              </div>
                              <span className="text-gray-500 text-sm">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Comparison */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Compare All Features
              </h2>
            </div>

            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-6 font-bold text-gray-900">Features</th>
                      <th className="text-center p-6 font-bold text-gray-900">Free</th>
                      <th className="text-center p-6 font-bold text-gray-900">Pro</th>
                      <th className="text-center p-6 font-bold text-gray-900">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { feature: "Resume Analysis", free: "✓", pro: "✓", enterprise: "✓" },
                      { feature: "Job Matches", free: "5/month", pro: "Unlimited", enterprise: "Unlimited" },
                      { feature: "AI Matching", free: "Basic", pro: "Advanced", enterprise: "Custom" },
                      { feature: "Skill Gap Analysis", free: "—", pro: "✓", enterprise: "✓" },
                      { feature: "Resume Optimization", free: "—", pro: "✓", enterprise: "✓" },
                      { feature: "Priority Support", free: "—", pro: "✓", enterprise: "✓" },
                      { feature: "API Access", free: "—", pro: "—", enterprise: "✓" },
                      { feature: "Custom Reporting", free: "—", pro: "—", enterprise: "✓" },
                      { feature: "Dedicated Manager", free: "—", pro: "—", enterprise: "✓" }
                    ].map((row, index) => (
                      <tr key={index}>
                        <td className="p-6 font-medium text-gray-900">{row.feature}</td>
                        <td className="p-6 text-center text-gray-600">{row.free}</td>
                        <td className="p-6 text-center text-gray-600">{row.pro}</td>
                        <td className="p-6 text-center text-gray-600">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card p-6 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="card p-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Accelerate Your Career?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have found their dream jobs with our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup" className="btn-primary">
                  Start Free Trial
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Sales
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
