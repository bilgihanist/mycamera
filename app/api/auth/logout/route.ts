import { NextResponse } from 'next/server'
import { clearSessionCookie } from '@/src/lib/cookies'

export async function POST() {
  await clearSessionCookie()
  return NextResponse.json({ ok: true })
}
