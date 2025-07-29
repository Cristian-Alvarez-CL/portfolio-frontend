"use client";

import { useAuth } from '@/app/context/auth-context';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Bienvenido al Dashboard</h1>
        {/* Si tienes datos del usuario, los puedes mostrar aquí */}
        {user?.email && <p className="mb-6">Has iniciado sesión como: <strong>{user.email}</strong></p>}
        <button 
          onClick={logout}
          className="w-full max-w-xs mx-auto bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}