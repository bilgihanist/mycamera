'use client'
import { useState } from 'react'
import { toast } from 'sonner'
import Link from 'next/link'
import { Eye, EyeOff, UserPlus } from 'lucide-react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    company: ''
  })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Şifreler eşleşmiyor')
      return
    }
    
    setLoading(true)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          company: formData.company
        })
      })
      if (!res.ok) throw new Error(await res.text())
      toast.success('Kayıt başarılı! Giriş yapabilirsiniz.')
      window.location.href = '/login'
    } catch (err: any) {
      toast.error(err.message || 'Kayıt hatası')
    } finally { 
      setLoading(false) 
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <UserPlus className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Kayıt Ol</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Yeni hesap oluşturun
            </p>
          </div>
          
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Ad Soyad
              </label>
              <input 
                required 
                type="text"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Adınız ve soyadınız" 
                value={formData.name} 
                onChange={e=>setFormData({...formData, name: e.target.value})} 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Şirket
              </label>
              <input 
                type="text"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Şirket adı (opsiyonel)" 
                value={formData.company} 
                onChange={e=>setFormData({...formData, company: e.target.value})} 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                E-posta
              </label>
              <input 
                required 
                type="email"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="ornek@email.com" 
                value={formData.email} 
                onChange={e=>setFormData({...formData, email: e.target.value})} 
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
                  value={formData.password} 
                  onChange={e=>setFormData({...formData, password: e.target.value})} 
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
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Şifre Tekrar
              </label>
              <div className="relative">
                <input 
                  required 
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12" 
                  placeholder="Şifrenizi tekrar girin" 
                  type={showConfirmPassword ? "text" : "password"} 
                  value={formData.confirmPassword} 
                  onChange={e=>setFormData({...formData, confirmPassword: e.target.value})} 
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <button 
              disabled={loading} 
              className="w-full rounded-lg bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Kayıt oluşturuluyor...' : 'Kayıt Ol'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Zaten hesabınız var mı?{' '}
              <Link href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                Giriş Yap
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
