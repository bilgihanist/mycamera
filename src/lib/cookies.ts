import { cookies } from 'next/headers'

const COOKIE_NAME = process.env.COOKIE_NAME || 'app_session'
const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN

export async function setSessionCookie(token: string) {
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    domain: COOKIE_DOMAIN || undefined
  })
}

export async function clearSessionCookie() {
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, '', { path: '/', maxAge: 0 })
}

export async function getSessionCookie() {
  const cookieStore = await cookies()
  return cookieStore.get(COOKIE_NAME)?.value
}
