import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/dashboard'];

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get('audioblocks_jwt');

  if (!token && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: protectedRoutes,
};
