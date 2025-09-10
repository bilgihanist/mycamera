'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Camera, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Sun,
  Moon,
  Monitor
} from 'lucide-react'
import { useTheme } from 'next-themes'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Cihazlar', href: '/products', icon: Camera },
  { name: 'Admin', href: '/admin', icon: Users },
  { name: 'Ayarlar', href: '/settings', icon: Settings },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      window.location.href = '/login'
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/dashboard" className="text-xl font-bold text-gray-900 dark:text-white">
                Kamera Platform
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? 'border-blue-500 text-gray-900 dark:text-white'
                        : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            {/* Theme Toggle */}
            <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setTheme('light')}
                className={`p-1 rounded ${theme === 'light' ? 'bg-white shadow' : ''}`}
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-1 rounded ${theme === 'dark' ? 'bg-white shadow' : ''}`}
              >
                <Moon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTheme('system')}
                className={`p-1 rounded ${theme === 'system' ? 'bg-white shadow' : ''}`}
              >
                <Monitor className="w-4 h-4" />
              </button>
            </div>
            
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Çıkış
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    isActive
                      ? 'bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-200'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </div>
                </Link>
              )
            })}
          </div>
          
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-4 space-x-3">
              <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setTheme('light')}
                  className={`p-1 rounded ${theme === 'light' ? 'bg-white shadow' : ''}`}
                >
                  <Sun className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`p-1 rounded ${theme === 'dark' ? 'bg-white shadow' : ''}`}
                >
                  <Moon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setTheme('system')}
                  className={`p-1 rounded ${theme === 'system' ? 'bg-white shadow' : ''}`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="mt-3 px-2">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
              >
                <div className="flex items-center">
                  <LogOut className="w-4 h-4 mr-3" />
                  Çıkış Yap
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
