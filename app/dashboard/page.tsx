import { Camera, AlertTriangle, Users, Activity } from 'lucide-react'
import LiveClient from './live-client'
import Navigation from '@/components/navigation'

export default async function Dashboard() {
  // SSR örneği: ileride buradan Supabase RLS ile özetleri çekebilirsiniz
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Kamera sisteminizin genel durumu
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Toplam Cihaz</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">128</div>
              </div>
              <Camera className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Aktif Alarm</div>
                <div className="text-3xl font-bold text-red-600">3</div>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Bugün Online</div>
                <div className="text-3xl font-bold text-green-600">94</div>
              </div>
              <Activity className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Toplam Kullanıcı</div>
                <div className="text-3xl font-bold text-purple-600">45</div>
              </div>
              <Users className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Live Status */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Canlı Durum
            </h3>
            <LiveClient />
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Sistem Durumu
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Veritabanı</span>
                <span className="text-green-600 font-semibold">Çevrimiçi</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">API Servisleri</span>
                <span className="text-green-600 font-semibold">Çevrimiçi</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Video Akışı</span>
                <span className="text-green-600 font-semibold">Çevrimiçi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Events */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Son Olaylar
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">A Firma / NVR-01</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Bağlantı kesildi</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">10:21</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-yellow-600" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">B Firma / DVR-02</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Hareket algılandı</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">09:58</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">C Firma / IP-03</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Sisteme bağlandı</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">09:45</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
