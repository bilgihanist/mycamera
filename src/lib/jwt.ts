import { SignJWT, jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!)

export type AppJwtPayload = {
  sub: string // supabase user id
  role: 'admin' | 'vendor' | 'client'
  vendorId?: string
  exp?: number
}

export async function signAppJwt(payload: AppJwtPayload, expiresIn = '30d') {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(JWT_SECRET)
}

export async function verifyAppJwt<T=AppJwtPayload>(token: string) {
  const { payload } = await jwtVerify(token, JWT_SECRET)
  return payload as T
}
