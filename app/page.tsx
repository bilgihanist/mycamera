import Link from 'next/link'
import { Camera, Shield, Users, BarChart3 } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Kamera Kontrol Platformu
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Canlı cihaz takibi, şifre yönetimi ve bayi destekli kurulumlar için tek panel. 
            Güvenli, ölçeklenebilir ve kullanıcı dostu çözüm.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors" 
              href="/login"
            >
              Giriş Yap
            </Link>
            <Link 
              className="px-8 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors" 
              href="/register"
            >
              Kayıt Ol
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <Camera className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Canlı İzleme</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Kameralarınızı gerçek zamanlı olarak izleyin ve kontrol edin
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <Shield className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Güvenli Erişim</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Rol bazlı erişim kontrolü ile güvenli yönetim
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <Users className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Kullanıcı Yönetimi</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Admin paneli ile kullanıcıları kolayca yönetin
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <BarChart3 className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Analitik</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Detaylı raporlar ve performans analizi
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Hemen Başlayın</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Kamera sisteminizi profesyonel bir şekilde yönetmeye başlayın
          </p>
          <Link 
            className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors" 
            href="/register"
          >
            Ücretsiz Hesap Oluştur
          </Link>
        </div>
      </div>
    </main>
  )
}
