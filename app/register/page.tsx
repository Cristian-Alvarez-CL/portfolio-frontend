"use client";

import { useState } from 'react';
import { useAuth } from '@/app/context/auth-context';
import Link from 'next/link';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, error, clearError } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register( email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
           {/* NUEVO: Contenedor para mostrar el mensaje de error */}
           {error && (
            <div className="mb-4 p-3 text-center text-sm text-red-800 bg-red-100 rounded-lg">
              {error}
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearError();
              }}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                clearError();
              }}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Registrarse
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
  );
}