import { Users, Camera, Settings, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/navigation'

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Paneli</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Sistem yönetimi ve kullanıcı kontrolü
          </p>
        </div>

        {/* Admin Stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Toplam Kullanıcı</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">245</div>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Aktif Cihaz</div>
                <div className="text-3xl font-bold text-green-600">1,247</div>
              </div>
              <Camera className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Bayi Sayısı</div>
                <div className="text-3xl font-bold text-purple-600">23</div>
              </div>
              <BarChart3 className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Sistem Durumu</div>
                <div className="text-3xl font-bold text-green-600">%99.9</div>
              </div>
              <Settings className="w-8 h-8 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Admin Actions */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Kullanıcı Yönetimi
            </h3>
            <div className="space-y-3">
              <Link 
                href="/admin/users" 
                className="block p-3 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Kullanıcı Listesi</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Tüm kullanıcıları görüntüle ve yönet</div>
                  </div>
                  <Users className="w-5 h-5 text-gray-400" />
                </div>
              </Link>
              
              <Link 
                href="/admin/users/new" 
                className="block p-3 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Yeni Kullanıcı</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Yeni kullanıcı hesabı oluştur</div>
                  </div>
                  <Users className="w-5 h-5 text-gray-400" />
                </div>
              </Link>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Sistem Yönetimi
            </h3>
            <div className="space-y-3">
              <Link 
                href="/admin/devices" 
                className="block p-3 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Cihaz Yönetimi</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Tüm cihazları görüntüle ve yönet</div>
                  </div>
                  <Camera className="w-5 h-5 text-gray-400" />
                </div>
              </Link>
              
              <Link 
                href="/admin/settings" 
                className="block p-3 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Sistem Ayarları</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Genel sistem konfigürasyonu</div>
                  </div>
                  <Settings className="w-5 h-5 text-gray-400" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Son Admin Aktiviteleri
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Yeni kullanıcı eklendi</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">admin@example.com tarafından</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">2 saat önce</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Cihaz konfigürasyonu güncellendi</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">NVR-001 cihazı için</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">4 saat önce</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-yellow-600" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Sistem ayarları değiştirildi</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Güvenlik ayarları güncellendi</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">1 gün önce</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
