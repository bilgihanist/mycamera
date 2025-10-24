import { NextRequest, NextResponse } from 'next/server'
import { verifyAppJwt } from '@/src/lib/jwt'

const PROTECTED_PREFIXES = ['/dashboard']
const AUTH_PREFIXES = ['/login', '/register']

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const isProtected = PROTECTED_PREFIXES.some(p => pathname.startsWith(p))
  const isAuthPage = AUTH_PREFIXES.some(p => pathname.startsWith(p))
  
  // Auth sayfaları için yönlendirme
  if (isAuthPage) {
    const token = req.cookies.get(process.env.COOKIE_NAME || 'app_session')?.value
    if (token) {
      try {
        await verifyAppJwt(token)
        return NextResponse.redirect(new URL('/dashboard', req.url))
      } catch {
        // Token geçersiz, auth sayfasında kal
      }
    }
    return NextResponse.next()
  }

  // Korumalı sayfalar için auth kontrolü
  if (!isProtected) return NextResponse.next()

  const token = req.cookies.get(process.env.COOKIE_NAME || 'app_session')?.value
  if (!token) {
    const url = new URL('/login', req.url)
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }
  
  try {
    const payload = await verifyAppJwt(token)
    
    // Role-based access control
    if (pathname.startsWith('/dashboard/admin') && payload.role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
    
    return NextResponse.next()
  } catch {
    const url = new URL('/login', req.url)
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }
}

export const config = { 
  matcher: [
    '/dashboard/:path*',
    '/login',
    '/register'
  ] 
}
