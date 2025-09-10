import { cookies } from 'next/headers'

const COOKIE_NAME = process.env.COOKIE_NAME || 'app_session'
const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN

export function setSessionCookie(token: string) {
  cookies().set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    domain: COOKIE_DOMAIN || undefined
  })
}

export function clearSessionCookie() {
  cookies().set(COOKIE_NAME, '', { path: '/', maxAge: 0 })
}

export function getSessionCookie() {
  return cookies().get(COOKIE_NAME)?.value
}
