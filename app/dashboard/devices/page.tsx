'use client'

import { useEffect, useMemo, useState } from 'react'
import { useUI } from '@/src/store/ui'
import { Camera, Search, Wifi, WifiOff, MoreVertical, Edit, Trash2, Eye } from 'lucide-react'
import { 
  Box, 
  Text, 
  Input, 
  Select, 
  Grid, 
  HStack, 
  VStack, 
  Icon, 
  Button,
  useColorModeValue,
  Spinner,
  Center
} from '@chakra-ui/react'

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

export default function DevicesPage() {
  const { productFilter, setProductFilter } = useUI()
  const [items, setItems] = useState<Product[]>([])
  const [statusFilter, setStatusFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  const bg = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.800', 'white')
  const labelColor = useColorModeValue('gray.600', 'gray.300')

  useEffect(() => {
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
  }, [])

  const filtered = useMemo(() => {
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
      <Center h="400px">
        <VStack spacing={4}>
          <Spinner size="xl" color="blue.500" />
          <Text color="gray.600">Cihazlar yükleniyor...</Text>
        </VStack>
      </Center>
    )
  }

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={6} color="white">
        Cihaz Yönetimi
      </Text>
      <Text color="gray.300" mb={8}>
        Kamera ve güvenlik cihazlarınızı yönetin
      </Text>

      {/* Filters */}
      <Box bg={cardBg} p={6} rounded="2xl" border="1px" borderColor={borderColor} shadow="sm" mb={6}>
        <HStack spacing={4} flexWrap="wrap">
          <Box flex="1" minW="200px">
            <HStack>
              <Icon as={Search} color="gray.400" />
              <Input 
                placeholder="Cihaz ara..." 
                value={productFilter} 
                onChange={e => setProductFilter(e.target.value)}
                border="none"
                _focus={{ boxShadow: "none" }}
              />
            </HStack>
          </Box>
          
          <Box minW="150px">
            <Select 
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
            >
              <option value="all">Tümü</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </Select>
          </Box>
        </HStack>
      </Box>

      {/* Products Grid */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
        {filtered.map(item => (
          <Box key={item.id} bg={cardBg} rounded="2xl" border="1px" borderColor={borderColor} p={6} shadow="sm" _hover={{ shadow: "md" }} transition="all 0.2s">
            <HStack justify="space-between" mb={4}>
              <HStack>
                <Box p={2} bg="blue.100" rounded="lg">
                  <Icon as={Camera} w={6} h={6} color="blue.600" />
                </Box>
                <VStack align="start" spacing={0}>
                  <Text fontWeight="semibold" color={textColor}>{item.name}</Text>
                  <Text fontSize="sm" color={labelColor}>{item.brand}</Text>
                </VStack>
              </HStack>
              <Button variant="ghost" size="sm">
                <Icon as={MoreVertical} />
              </Button>
            </HStack>
            
            <VStack spacing={3} mb={4} align="stretch">
              <HStack justify="space-between">
                <Text fontSize="sm" color={labelColor}>Durum:</Text>
                <HStack>
                  <Icon 
                    as={item.status === 'online' ? Wifi : WifiOff} 
                    w={3} h={3} 
                    color={item.status === 'online' ? 'green.500' : 'red.500'}
                  />
                  <Text 
                    fontSize="sm" 
                    color={item.status === 'online' ? 'green.500' : 'red.500'}
                    fontWeight="medium"
                  >
                    {item.status === 'online' ? 'Online' : 'Offline'}
                  </Text>
                </HStack>
              </HStack>
              
              <HStack justify="space-between">
                <Text fontSize="sm" color={labelColor}>Model:</Text>
                <Text fontSize="sm" fontWeight="medium" color={textColor}>{item.model}</Text>
              </HStack>
              
              <HStack justify="space-between">
                <Text fontSize="sm" color={labelColor}>IP:</Text>
                <Text fontSize="sm" fontFamily="mono" fontWeight="medium" color={textColor}>{item.ip}</Text>
              </HStack>
              
              <HStack justify="space-between">
                <Text fontSize="sm" color={labelColor}>Konum:</Text>
                <Text fontSize="sm" fontWeight="medium" color={textColor}>{item.location}</Text>
              </HStack>
              
              <HStack justify="space-between">
                <Text fontSize="sm" color={labelColor}>Son Görülme:</Text>
                <Text fontSize="sm" fontWeight="medium" color={textColor}>{item.lastSeen}</Text>
              </HStack>
            </VStack>
            
            <HStack spacing={2} pt={4} borderTop="1px" borderColor={borderColor}>
              <Button flex="1" size="sm" colorScheme="blue" variant="outline" leftIcon={<Icon as={Eye} w={4} h={4} />}>
                Görüntüle
              </Button>
              <Button flex="1" size="sm" variant="outline" leftIcon={<Icon as={Edit} w={4} h={4} />}>
                Düzenle
              </Button>
              <Button flex="1" size="sm" colorScheme="red" variant="outline" leftIcon={<Icon as={Trash2} w={4} h={4} />}>
                Sil
              </Button>
            </HStack>
          </Box>
        ))}
      </Grid>

      {filtered.length === 0 && (
        <Center py={12}>
          <VStack spacing={4}>
            <Icon as={Camera} w={12} h={12} color="gray.400" />
            <Text color="gray.500">Cihaz bulunamadı</Text>
          </VStack>
        </Center>
      )}
    </Box>
  )
}
