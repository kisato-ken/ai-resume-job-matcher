import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: January 2024</p>
            </div>

            <div className="prose prose-blue max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="text-gray-600 mb-6 ml-6 space-y-2">
                <li>• Create an account or update your profile</li>
                <li>• Upload your resume or other documents</li>
                <li>• Contact us for support</li>
                <li>• Subscribe to our newsletter</li>
                <li>• Participate in surveys or feedback sessions</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Resume and Document Analysis</h2>
              <p className="text-gray-600 mb-6">
                When you upload your resume, we use AI technology to extract and analyze information including your skills, experience, education, and career progression. This analysis helps us provide personalized job recommendations and career insights.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-gray-600 mb-6 ml-6 space-y-2">
                <li>• Provide and improve our job matching services</li>
                <li>• Analyze your skills and provide career recommendations</li>
                <li>• Send you relevant job opportunities and updates</li>
                <li>• Respond to your inquiries and provide customer support</li>
                <li>• Conduct research to improve our AI algorithms</li>
                <li>• Ensure the security and integrity of our platform</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="text-gray-600 mb-6 ml-6 space-y-2">
                <li>• <strong>With your consent:</strong> When you explicitly agree to share information with potential employers</li>
                <li>• <strong>Service providers:</strong> With trusted third parties who help us operate our platform</li>
                <li>• <strong>Legal requirements:</strong> When required by law or to protect our rights</li>
                <li>• <strong>Aggregated data:</strong> Anonymous, aggregated data that cannot identify you personally</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement industry-standard security measures to protect your information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-600 mb-6">
                We retain your personal information for as long as your account is active or as needed to provide you services. You can delete your account at any time, and we will delete your personal information within 30 days, except where we need to retain it for legal compliance.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights and Choices</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="text-gray-600 mb-6 ml-6 space-y-2">
                <li>• Access and update your personal information</li>
                <li>• Delete your account and personal data</li>
                <li>• Opt out of marketing communications</li>
                <li>• Request a copy of your data</li>
                <li>• Restrict how we process your information</li>
                <li>• Object to our processing of your information</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking</h2>
              <p className="text-gray-600 mb-6">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our services. You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
              <p className="text-gray-600 mb-6">
                Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
              <p className="text-gray-600 mb-6">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during international transfers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Children's Privacy</h2>
              <p className="text-gray-600 mb-6">
                Our service is not intended for children under 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected such information, we will delete it promptly.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
              <p className="text-gray-600 mb-2">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="text-gray-600 ml-6 space-y-1">
                <li>• Email: privacy@airesumematcher.com</li>
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
