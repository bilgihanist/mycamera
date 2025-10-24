'use client'

import { Users, Camera, Settings, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import { 
  Box, 
  Text, 
  Grid, 
  VStack, 
  HStack, 
  Icon, 
  useColorModeValue,
  Button,
  SimpleGrid
} from '@chakra-ui/react'

export default function AdminPage() {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.800', 'white')
  const labelColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={2} color="white">
        Admin Paneli
      </Text>
      <Text color="gray.300" mb={6}>
        Sistem yönetimi ve kullanıcı kontrolü
      </Text>

      {/* Admin Stats */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6} mb={8}>
        <Box bg={cardBg} p={6} rounded="2xl" border="1px" borderColor={borderColor} shadow="sm">
          <HStack justify="space-between">
            <VStack align="start" spacing={1}>
              <Text fontSize="sm" color={labelColor}>Toplam Kullanıcı</Text>
              <Text fontSize="3xl" fontWeight="bold" color={textColor}>245</Text>
            </VStack>
            <Icon as={Users} w={8} h={8} color="blue.500" />
          </HStack>
        </Box>
        
        <Box bg={cardBg} p={6} rounded="2xl" border="1px" borderColor={borderColor} shadow="sm">
          <HStack justify="space-between">
            <VStack align="start" spacing={1}>
              <Text fontSize="sm" color={labelColor}>Aktif Cihaz</Text>
              <Text fontSize="3xl" fontWeight="bold" color="green.500">1,247</Text>
            </VStack>
            <Icon as={Camera} w={8} h={8} color="green.500" />
          </HStack>
        </Box>
        
        <Box bg={cardBg} p={6} rounded="2xl" border="1px" borderColor={borderColor} shadow="sm">
          <HStack justify="space-between">
            <VStack align="start" spacing={1}>
              <Text fontSize="sm" color={labelColor}>Bayi Sayısı</Text>
              <Text fontSize="3xl" fontWeight="bold" color="purple.500">23</Text>
            </VStack>
            <Icon as={BarChart3} w={8} h={8} color="purple.500" />
          </HStack>
        </Box>
        
        <Box bg={cardBg} p={6} rounded="2xl" border="1px" borderColor={borderColor} shadow="sm">
          <HStack justify="space-between">
            <VStack align="start" spacing={1}>
              <Text fontSize="sm" color={labelColor}>Sistem Durumu</Text>
              <Text fontSize="3xl" fontWeight="bold" color="green.500">%99.9</Text>
            </VStack>
            <Icon as={Settings} w={8} h={8} color="orange.500" />
          </HStack>
        </Box>
      </Grid>

      {/* Admin Actions */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} mb={8}>
        <Box bg={cardBg} p={6} rounded="2xl" border="1px" borderColor={borderColor} shadow="sm">
          <Text fontSize="lg" fontWeight="semibold" mb={4}>
            Kullanıcı Yönetimi
          </Text>
          <VStack spacing={3} align="stretch">
            <Button as={Link} href="/dashboard/admin/users" variant="outline" justifyContent="start">
              <HStack>
                <Icon as={Users} />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="medium">Kullanıcı Listesi</Text>
                  <Text fontSize="sm" color="gray.600">Tüm kullanıcıları görüntüle ve yönet</Text>
                </VStack>
              </HStack>
            </Button>
            
            <Button as={Link} href="/dashboard/admin/users/new" variant="outline" justifyContent="start">
              <HStack>
                <Icon as={Users} />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="medium">Yeni Kullanıcı</Text>
                  <Text fontSize="sm" color="gray.600">Yeni kullanıcı hesabı oluştur</Text>
                </VStack>
              </HStack>
            </Button>
          </VStack>
        </Box>
        
        <Box bg={cardBg} p={6} rounded="2xl" border="1px" borderColor={borderColor} shadow="sm">
          <Text fontSize="lg" fontWeight="semibold" mb={4}>
            Sistem Yönetimi
          </Text>
          <VStack spacing={3} align="stretch">
            <Button as={Link} href="/dashboard/devices" variant="outline" justifyContent="start">
              <HStack>
                <Icon as={Camera} />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="medium">Cihaz Yönetimi</Text>
                  <Text fontSize="sm" color="gray.600">Tüm cihazları görüntüle ve yönet</Text>
                </VStack>
              </HStack>
            </Button>
            
            <Button as={Link} href="/dashboard/settings" variant="outline" justifyContent="start">
              <HStack>
                <Icon as={Settings} />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="medium">Sistem Ayarları</Text>
                  <Text fontSize="sm" color="gray.600">Genel sistem konfigürasyonu</Text>
                </VStack>
              </HStack>
            </Button>
          </VStack>
        </Box>
      </SimpleGrid>

      {/* Recent Activity */}
      <Box bg={cardBg} p={6} rounded="2xl" border="1px" borderColor={borderColor} shadow="sm">
        <Text fontSize="lg" fontWeight="semibold" mb={4}>
          Son Admin Aktiviteleri
        </Text>
        <VStack spacing={3} align="stretch">
          <HStack justify="space-between" p={3} bg="blue.50" rounded="lg">
            <HStack>
              <Icon as={Users} color="blue.600" />
              <VStack align="start" spacing={0}>
                <Text fontWeight="medium">Yeni kullanıcı eklendi</Text>
                <Text fontSize="sm" color="gray.600">admin@example.com tarafından</Text>
              </VStack>
            </HStack>
            <Text fontSize="sm" color="gray.500">2 saat önce</Text>
          </HStack>
          
          <HStack justify="space-between" p={3} bg="green.50" rounded="lg">
            <HStack>
              <Icon as={Camera} color="green.600" />
              <VStack align="start" spacing={0}>
                <Text fontWeight="medium">Cihaz konfigürasyonu güncellendi</Text>
                <Text fontSize="sm" color="gray.600">NVR-001 cihazı için</Text>
              </VStack>
            </HStack>
            <Text fontSize="sm" color="gray.500">4 saat önce</Text>
          </HStack>
          
          <HStack justify="space-between" p={3} bg="yellow.50" rounded="lg">
            <HStack>
              <Icon as={Settings} color="yellow.600" />
              <VStack align="start" spacing={0}>
                <Text fontWeight="medium">Sistem ayarları değiştirildi</Text>
                <Text fontSize="sm" color="gray.600">Güvenlik ayarları güncellendi</Text>
              </VStack>
            </HStack>
            <Text fontSize="sm" color="gray.500">1 gün önce</Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  )
}
