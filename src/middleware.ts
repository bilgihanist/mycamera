import { NextRequest, NextResponse } from 'next/server'
import { verifyAppJwt } from '@/lib/jwt'

const PROTECTED_PREFIXES = ['/dashboard', '/vendor', '/admin']

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const needsAuth = PROTECTED_PREFIXES.some(p => pathname.startsWith(p))
  if (!needsAuth) return NextResponse.next()

  const token = req.cookies.get(process.env.COOKIE_NAME || 'app_session')?.value
  if (!token) {
    const url = new URL('/login', req.url)
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }
  
  try {
    const payload = await verifyAppJwt(token)
    // basit role yönlendirme örneği
    if (pathname.startsWith('/admin') && payload.role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
    if (pathname.startsWith('/vendor') && payload.role !== 'vendor' && payload.role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = { 
  matcher: ['/dashboard/:path*', '/admin/:path*', '/vendor/:path*'] 
}
