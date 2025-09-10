import { NextResponse } from 'next/server'
import { createClientServer } from '@/lib/supabase'
import { z } from 'zod'

const schema = z.object({ 
  email: z.string().email(), 
  password: z.string().min(6),
  name: z.string().min(2),
  company: z.string().optional()
})

export async function POST(req: Request) {
  const body = await req.json()
  const parse = schema.safeParse(body)
  if (!parse.success) return new NextResponse('Geçersiz veri', { status: 400 })

  const supabase = createClientServer()
  const { data, error } = await supabase.auth.signUp({
    email: parse.data.email,
    password: parse.data.password,
    options: {
      data: {
        name: parse.data.name,
        company: parse.data.company || ''
      }
    }
  })
  
  if (error) return new NextResponse(error.message, { status: 400 })
  if (!data.user) return new NextResponse('Kayıt başarısız', { status: 400 })

  return NextResponse.json({ ok: true, message: 'Kayıt başarılı' })
}
