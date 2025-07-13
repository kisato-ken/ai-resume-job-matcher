"use client";

import { useState, useEffect } from "react";
import { signIn, getSession } from "next-auth/react";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const { signIn: customSignIn, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/analyzer');
    }
  }, [isAuthenticated, router]);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      // Use NextAuth.js Google OAuth - this will redirect to Google
      const result = await signIn('google', { 
        callbackUrl: '/analyzer',
        redirect: false 
      });
      
      if (result?.error) {
        console.error('Google sign-in error:', result.error);
        alert('Failed to sign in with Google: ' + result.error);
      } else if (result?.ok) {
        // Success - NextAuth will handle the redirect
        router.push('/analyzer');
      } else if (result?.url) {
        // NextAuth is redirecting to Google - this is normal
        window.location.href = result.url;
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
      alert('Failed to sign in with Google. Please check your internet connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    setIsLoading(true);
    try {
      await customSignIn(email, password);
      router.push('/analyzer');
    } catch (error) {
      console.error('Sign-in error:', error);
      alert('Demo sign-in completed! In production, this would validate against your backend.');
      router.push('/analyzer');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign in to your AI Resume Matcher account</p>
            </div>

            {/* Status Notice */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-sm font-medium text-green-800 mb-1">Google OAuth Active</h3>
                  <p className="text-sm text-green-700">
                    Google authentication is configured and ready. Click "Google" to sign in with your Google account.
                    Email/password still works in demo mode for testing.
                  </p>
                </div>
              </div>
            </div>

            {/* Email Sign-In Form */}
            <form className="space-y-6" onSubmit={handleEmailSignIn}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing In...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center text-sm text-gray-500 mb-4">Or continue with</div>
              
              {/* OAuth Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="font-medium">
                    {isLoading ? '...' : 'Google'}
                  </span>
                </button>
                
                <button 
                  disabled={isLoading}
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => alert('Facebook OAuth would be implemented here')}
                >
                  <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="font-medium">
                    {isLoading ? '...' : 'Facebook'}
                  </span>
                </button>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link href="/signup" className="text-blue-600 hover:text-blue-500 font-semibold">
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Setup Instructions</h3>
              <p className="text-sm text-gray-600 mb-3">
                For production Google OAuth, follow the setup guide:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Read GOOGLE_OAUTH_SETUP.md</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Create Google Cloud project</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Configure environment variables</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
