import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
              <p className="text-gray-600">Last updated: January 2024</p>
            </div>

            <div className="prose prose-blue max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-600 mb-6">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="text-gray-600 mb-6 ml-6 space-y-2">
                <li>• <strong>Essential Cookies:</strong> These are necessary for the website to function properly</li>
                <li>• <strong>Performance Cookies:</strong> These help us understand how visitors interact with our website</li>
                <li>• <strong>Functionality Cookies:</strong> These remember your preferences and settings</li>
                <li>• <strong>Marketing Cookies:</strong> These help us show you relevant advertisements</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                <p className="text-gray-600 mb-4">
                  These cookies are strictly necessary to provide you with services available through our website and to use some of its features.
                </p>
                <ul className="text-gray-600 ml-4 space-y-1">
                  <li>• Authentication and security cookies</li>
                  <li>• Session management cookies</li>
                  <li>• Load balancing cookies</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                <p className="text-gray-600 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
                <ul className="text-gray-600 ml-4 space-y-1">
                  <li>• Google Analytics cookies</li>
                  <li>• User behavior tracking cookies</li>
                  <li>• Performance monitoring cookies</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Functional Cookies</h3>
                <p className="text-gray-600 mb-4">
                  These cookies enable the website to provide enhanced functionality and personalization.
                </p>
                <ul className="text-gray-600 ml-4 space-y-1">
                  <li>• Language preference cookies</li>
                  <li>• Theme and layout preference cookies</li>
                  <li>• Remember me cookies</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                <p className="text-gray-600 mb-4">
                  These cookies are used to deliver advertisements more relevant to you and your interests.
                </p>
                <ul className="text-gray-600 ml-4 space-y-1">
                  <li>• Advertising network cookies</li>
                  <li>• Social media cookies</li>
                  <li>• Retargeting cookies</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 mb-4">
                We also use third-party services that may place cookies on your device:
              </p>
              <ul className="text-gray-600 mb-6 ml-6 space-y-2">
                <li>• <strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li>• <strong>Google Ads:</strong> For advertising and marketing purposes</li>
                <li>• <strong>Facebook Pixel:</strong> For social media marketing and analytics</li>
                <li>• <strong>LinkedIn Insight Tag:</strong> For professional network advertising</li>
                <li>• <strong>Hotjar:</strong> For user experience analytics</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-600 mb-4">
                You have several options for managing cookies:
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Browser Settings</h3>
                <p className="text-blue-800 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. You can:
                </p>
                <ul className="text-blue-800 ml-4 space-y-1">
                  <li>• Block all cookies</li>
                  <li>• Block third-party cookies only</li>
                  <li>• Delete existing cookies</li>
                  <li>• Set warnings before cookies are stored</li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Cookie Banner</h3>
                <p className="text-yellow-800">
                  When you first visit our website, you'll see a cookie banner that allows you to accept or customize your cookie preferences. You can change these preferences at any time by clicking the "Cookie Settings" link in our footer.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Browser-Specific Instructions</h2>
              <p className="text-gray-600 mb-4">
                Here's how to manage cookies in popular browsers:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Chrome</h4>
                  <p className="text-gray-600 text-sm">
                    Settings → Privacy and Security → Cookies and other site data
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Mozilla Firefox</h4>
                  <p className="text-gray-600 text-sm">
                    Options → Privacy & Security → Cookies and Site Data
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                  <p className="text-gray-600 text-sm">
                    Preferences → Privacy → Cookies and website data
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Microsoft Edge</h4>
                  <p className="text-gray-600 text-sm">
                    Settings → Cookies and site permissions → Cookies and site data
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact of Disabling Cookies</h2>
              <p className="text-gray-600 mb-4">
                Please note that disabling certain cookies may affect the functionality of our website:
              </p>
              <ul className="text-gray-600 mb-6 ml-6 space-y-2">
                <li>• You may not be able to log in or maintain your session</li>
                <li>• Your preferences and settings may not be saved</li>
                <li>• Some features may not work properly</li>
                <li>• You may see less relevant advertisements</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-2">
                If you have any questions about our use of cookies, please contact us:
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
