'use client'
import { useEffect, useMemo, useState } from 'react'
import { useUI } from '@/store/ui'
import { Camera, Search, Filter, Wifi, WifiOff, MoreVertical, Edit, Trash2, Eye } from 'lucide-react'
import Navigation from '@/components/navigation'

interface Product {
  id: string
  name: string
  brand: string
  status: 'online' | 'offline'
  location: string
  lastSeen: string
  ip: string
  model: string
}

export default function ProductsPage(){
  const { productFilter, setProductFilter } = useUI()
  const [items, setItems] = useState<Product[]>([])
  const [statusFilter, setStatusFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    // Mock data - gerçek uygulamada Supabase'den fetch edilecek
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'DVR-16CH',
        brand: 'Hikvision',
        status: 'online',
        location: 'Ana Bina - Giriş',
        lastSeen: '2024-01-15 14:30',
        ip: '192.168.1.100',
        model: 'DS-7208HGHI-K1'
      },
      {
        id: '2',
        name: 'NVR-8CH',
        brand: 'Dahua',
        status: 'offline',
        location: 'Yan Bina - Park',
        lastSeen: '2024-01-14 09:15',
        ip: '192.168.1.101',
        model: 'NVR2108-8P-4KS2'
      },
      {
        id: '3',
        name: 'IP Camera',
        brand: 'Axis',
        status: 'online',
        location: 'Depo - Dış',
        lastSeen: '2024-01-15 14:25',
        ip: '192.168.1.102',
        model: 'M3045-V'
      },
      {
        id: '4',
        name: 'PTZ Camera',
        brand: 'Bosch',
        status: 'online',
        location: 'Ana Bina - Çatı',
        lastSeen: '2024-01-15 14:28',
        ip: '192.168.1.103',
        model: 'FLEXIDOME IP 7000i'
      }
    ]
    
    setTimeout(() => {
      setItems(mockProducts)
      setLoading(false)
    }, 1000)
  },[])

  const filtered = useMemo(()=> {
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(productFilter.toLowerCase()) ||
                           item.brand.toLowerCase().includes(productFilter.toLowerCase()) ||
                           item.location.toLowerCase().includes(productFilter.toLowerCase())
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [items, productFilter, statusFilter])

  const getStatusBadge = (status: string) => {
    return status === 'online' 
      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Cihazlar yükleniyor...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Cihaz Yönetimi</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Kamera ve güvenlik cihazlarınızı yönetin
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="Cihaz ara..." 
                  value={productFilter} 
                  onChange={e=>setProductFilter(e.target.value)} 
                />
              </div>
            </div>
            
            <div className="md:w-48">
              <select 
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={statusFilter}
                onChange={e=>setStatusFilter(e.target.value)}
              >
                <option value="all">Tümü</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl border p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <Camera className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.brand}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Durum:</span>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(item.status)}`}>
                    {item.status === 'online' ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
                    {item.status === 'online' ? 'Online' : 'Offline'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Model:</span>
                  <span className="text-sm text-gray-900 dark:text-white">{item.model}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">IP:</span>
                  <span className="text-sm text-gray-900 dark:text-white font-mono">{item.ip}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Konum:</span>
                  <span className="text-sm text-gray-900 dark:text-white">{item.location}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Son Görülme:</span>
                  <span className="text-sm text-gray-900 dark:text-white">{item.lastSeen}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                  Görüntüle
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                  Düzenle
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                  Sil
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">Cihaz bulunamadı</p>
          </div>
        )}
      </div>
    </div>
  )
}
