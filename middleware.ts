import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route is protected
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    // Get token from cookies
    const token = request.cookies.get('auth-token')?.value;
    console.log('[Middleware] Checking auth for:', pathname);
    console.log('[Middleware] Token exists:', !!token);

    if (!token) {
      console.log('[Middleware] No token found, redirecting to login');
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
