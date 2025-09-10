'use client'
import { useEffect, useState } from 'react'
import { Activity } from 'lucide-react'

export default function LiveClient(){
  const [online, setOnline] = useState<number|undefined>()
  const [isConnected, setIsConnected] = useState(false)
  
  useEffect(()=>{
    const es = new EventSource('/api/events')
    
    es.onopen = () => {
      setIsConnected(true)
    }
    
    es.onmessage = (e) => {
      const d = JSON.parse(e.data)
      setOnline(d.online)
    }
    
    es.onerror = () => {
      setIsConnected(false)
    }
    
    return ()=> es.close()
  },[])
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Activity className={`w-4 h-4 ${isConnected ? 'text-green-600' : 'text-red-600'}`} />
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {isConnected ? 'Bağlı' : 'Bağlantı kesildi'}
        </span>
      </div>
      
      <div className="text-2xl font-bold text-gray-900 dark:text-white">
        Anlık Online: <span className="text-blue-600">{online ?? '-'}</span>
      </div>
      
      <div className="text-sm text-gray-500">
        Son güncelleme: {new Date().toLocaleTimeString('tr-TR')}
      </div>
    </div>
  )
}
