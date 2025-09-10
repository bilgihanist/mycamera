import { NextResponse } from 'next/server'
import { createClientServer } from '@/lib/supabase'
import { signAppJwt } from '@/lib/jwt'
import { setSessionCookie } from '@/lib/cookies'
import { z } from 'zod'

const schema = z.object({ 
  email: z.string().email(), 
  password: z.string().min(6) 
})

export async function POST(req: Request) {
  const body = await req.json()
  const parse = schema.safeParse(body)
  if (!parse.success) return new NextResponse('Geçersiz veri', { status: 400 })

  const supabase = createClientServer()
  const { data, error } = await supabase.auth.signInWithPassword(parse.data)
  if (error || !data.user) return new NextResponse('Kimlik doğrulama başarısız', { status: 401 })

  // Not: role bilgisi için Supabase DB'de profiles tablosundan rol çekebilirsiniz
  // Basit örnekte default vendor verelim.
  const role: 'admin'|'vendor'|'client' = 'vendor'
  const token = await signAppJwt({ sub: data.user.id, role })
  setSessionCookie(token)
  return NextResponse.json({ ok: true })
}
