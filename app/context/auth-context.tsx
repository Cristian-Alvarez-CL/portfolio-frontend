"use client";

import { createContext, useState, useEffect, useContext, ReactNode, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
  login: (email: string, password: string) => Promise<void>;
  register: ( email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const clearError = useCallback(() => setError(null), []);

  useEffect(() => {
    const token = Cookies.get('auth_token');
    if (token) {
      setUser({ isAuthenticated: true });
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    clearError();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOGIN}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Credenciales inválidas o error en el servidor.');
      }

      const data = await res.json();
      Cookies.set('auth_token', data.token, { expires: 7, secure: true });
      setUser(data.user);
      router.push('/dashboard');
    } catch (err: any) {
  
      setError(err.message || 'No se pudo conectar con el servidor. Intenta más tarde.');
    }
  }, [router, clearError]);

  const register = useCallback(async (email: string, password: string) => {
    clearError();
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_REGISTER}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || 'No se pudo completar el registro.');
        }

        router.push('/login');
    } catch (err: any) {
        setError(err.message || 'Ocurrió un error inesperado. Intenta de nuevo.');
    }
  }, [router, clearError]);

  const logout = useCallback(() => {
    Cookies.remove('auth_token');
    setUser(null);
    router.push('/');
  }, [router]);

  const memoizedValue = useMemo(() => ({
    isAuthenticated: !!user,
    user,
    login,
    register,
    logout,
    loading,
    error,
    clearError,
  }), [user, loading, error, login, register, logout, clearError]);

  return (
    <AuthContext.Provider value={memoizedValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};