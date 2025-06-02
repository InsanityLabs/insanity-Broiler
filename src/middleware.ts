import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { pathname } = req.nextUrl
  const isLoggedIn = !!req.auth

  // Check if user is accessing protected routes
  if (pathname.startsWith('/dashboard') || 
      pathname.startsWith('/api/protected') || 
      pathname.startsWith('/api/stripe/checkout')) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/auth/signin', req.url))
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/protected/:path*',
    '/api/stripe/checkout',
  ],
}