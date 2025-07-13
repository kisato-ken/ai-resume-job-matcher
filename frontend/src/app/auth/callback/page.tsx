"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const { data: session, status } = useSession();
  const { setUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Still loading

    if (session) {
      // Convert NextAuth session to our AuthContext user format
      const user = {
        id: session.user?.email || 'google-user',
        email: session.user?.email || '',
        name: session.user?.name || 'Google User',
        avatar: session.user?.image ?? undefined,
        provider: 'google' as const
      };

      // Update our AuthContext
      if (typeof setUser === "function") {
        setUser(user);
        localStorage.setItem('auth_user', JSON.stringify(user));
      }

      // Redirect to analyzer
      router.push('/analyzer');
    } else {
      // No session, redirect to sign-in
      router.push('/signin');
    }
  }, [session, status, setUser, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Completing sign-in...</h2>
          <p className="text-gray-600">Please wait while we set up your account.</p>
        </div>
      </div>
    );
  }

  return null;
}
