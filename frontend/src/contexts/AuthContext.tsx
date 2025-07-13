"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  provider: 'google' | 'email';
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => void;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    checkExistingSession();
  }, []);

  const checkExistingSession = () => {
    try {
      const savedUser = localStorage.getItem('auth_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error('Error checking existing session:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Demo implementation - replace with real API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        provider: 'email'
      };
      
      setUser(mockUser);
      localStorage.setItem('auth_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      // This would integrate with your Google OAuth implementation
      // For now, it's a demo implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '2',
        email: 'user@gmail.com',
        name: 'Google User',
        avatar: 'https://via.placeholder.com/40',
        provider: 'google'
      };
      
      setUser(mockUser);
      localStorage.setItem('auth_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Google sign in error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  const value: AuthContextType = {
    user,
    isLoading,
    signIn,
    signInWithGoogle,
    signOut,
    setUser,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
