import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
              <p className="text-gray-600">Last updated: January 2024</p>
            </div>

            <div className="prose prose-blue max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using AI Resume Matcher ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-6">
                AI Resume Matcher is an AI-powered platform that analyzes resumes and matches users with relevant job opportunities. The service includes resume analysis, skill assessment, job matching, and career recommendations.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-600 mb-4">
                To access certain features of the Service, you must register for an account. You agree to:
              </p>
              <ul className="text-gray-600 mb-6 ml-6 space-y-2">
                <li>• Provide accurate, current, and complete information</li>
                <li>• Maintain the security of your password</li>
                <li>• Accept responsibility for all activities under your account</li>
                <li>• Notify us immediately of any unauthorized use</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Privacy and Data Protection</h2>
              <p className="text-gray-600 mb-6">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Content</h2>
              <p className="text-gray-600 mb-4">
                You retain ownership of any content you submit, including resumes and personal information. By submitting content, you grant us:
              </p>
              <ul className="text-gray-600 mb-6 ml-6 space-y-2">
                <li>• The right to use, modify, and analyze your content to provide the Service</li>
                <li>• The right to create anonymous, aggregated data for service improvement</li>
                <li>• The right to store your content for the duration of your account</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Uses</h2>
              <p className="text-gray-600 mb-4">
                You may not use our Service:
              </p>
              <ul className="text-gray-600 mb-6 ml-6 space-y-2">
                <li>• For any unlawful purpose or to solicit unlawful activity</li>
                <li>• To violate any international, federal, provincial, or state regulations or laws</li>
                <li>• To transmit any malicious code or malware</li>
                <li>• To interfere with or disrupt the Service or servers</li>
                <li>• To attempt to gain unauthorized access to any part of the Service</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Availability</h2>
              <p className="text-gray-600 mb-6">
                We strive to maintain high availability but do not guarantee that the Service will be available 100% of the time. We may temporarily suspend the Service for maintenance, updates, or other operational reasons.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                AI Resume Matcher shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service. Our total liability shall not exceed the amount paid by you for the Service in the 12 months preceding the claim.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
              <p className="text-gray-600 mb-6">
                We may terminate or suspend your account immediately if you breach these Terms. Upon termination, your right to use the Service will cease immediately. You may also terminate your account at any time by contacting us.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-600 mb-2">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="text-gray-600 ml-6 space-y-1">
                <li>• Email: legal@airesumematcher.com</li>
                <li>• Phone: +1 (555) 123-4567</li>
                <li>• Address: 123 Tech Street, San Francisco, CA 94105</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
