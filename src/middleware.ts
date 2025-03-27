import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;
    const isAuthRoute = path.startsWith('/auth');

    // If user is not logged in and trying to access a protected route
    if (!token && !isAuthRoute) {
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    // Redirect from login page if already authenticated
    if (token && isAuthRoute) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // Redirect based on user role
    if (token) {
      const role = token.role;

      // Super Admin routes
      if (path.startsWith('/super-admin') && role !== 'super-admin') {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }

      // School Admin routes
      if (path.startsWith('/school-admin') && role !== 'school-admin') {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }

      // Driver routes
      if (path.startsWith('/driver') && role !== 'driver') {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }

      // Staff routes
      if (path.startsWith('/staff') && role !== 'staff') {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }

      // Dashboard redirection based on role
      if (path === '/dashboard') {
        switch (role) {
          case 'super-admin':
            return NextResponse.redirect(
              new URL('/super-admin/dashboard', req.url)
            );
          case 'school-admin':
            return NextResponse.redirect(
              new URL('/school-admin/dashboard', req.url)
            );
          case 'driver':
            return NextResponse.redirect(new URL('/driver/dashboard', req.url));
          case 'staff':
            return NextResponse.redirect(new URL('/staff/dashboard', req.url));
          default:
            return NextResponse.redirect(new URL('/auth/login', req.url));
        }
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Don't require auth for auth routes
        const path = req.nextUrl.pathname;
        if (path.startsWith('/auth/')) {
          return true;
        }
        // Require auth for all other protected routes
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    '/dashboard',
    '/super-admin/:path*',
    '/school-admin/:path*',
    '/driver/:path*',
    '/staff/:path*',
    '/api/admin/:path*',
    '/auth/:path*',
  ],
};
