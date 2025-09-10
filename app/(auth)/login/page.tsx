'use client'
import { useState } from 'react'
import { toast } from 'sonner'
import Link from 'next/link'
import { Eye, EyeOff, LogIn } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      if (!res.ok) throw new Error(await res.text())
      toast.success('Giriş başarılı')
      window.location.href = '/dashboard'
    } catch (err: any) {
      toast.error(err.message || 'Giriş hatası')
    } finally { 
      setLoading(false) 
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <LogIn className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Giriş Yap</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Hesabınıza giriş yapın
            </p>
          </div>
          
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                E-posta
              </label>
              <input 
                required 
                type="email"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="ornek@email.com" 
                value={email} 
                onChange={e=>setEmail(e.target.value)} 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Şifre
              </label>
              <div className="relative">
                <input 
                  required 
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12" 
                  placeholder="Şifrenizi girin" 
                  type={showPassword ? "text" : "password"} 
                  value={password} 
                  onChange={e=>setPassword(e.target.value)} 
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <button 
              disabled={loading} 
              className="w-full rounded-lg bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Hesabınız yok mu?{' '}
              <Link href="/register" className="text-blue-600 hover:text-blue-700 font-semibold">
                Kayıt Ol
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
