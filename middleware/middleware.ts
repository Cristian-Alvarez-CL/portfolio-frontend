import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  // Si el usuario no está autenticado y пытается acceder a una ruta protegida
  if (!authToken && pathname.startsWith('/dashboard')) {
    // Redirigir a la página de login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Si el usuario ya está autenticado y пытается acceder a login o register
  if (authToken && (pathname === '/login' || pathname === '/register')) {
    // Redirigir al dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

// Configuración para especificar qué rutas deben ser protegidas por el middleware
export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
};