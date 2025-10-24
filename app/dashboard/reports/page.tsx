'use client'

import { Box, Text, VStack, HStack, Grid, GridItem, Select, Button, Icon, useColorModeValue } from '@chakra-ui/react'
import { Download, Calendar, TrendingUp, Users, DollarSign } from 'lucide-react'

export default function ReportsPage() {
  const textColor = useColorModeValue('gray.800', 'white')
  const labelColor = useColorModeValue('gray.600', 'gray.300')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  
  return (
    <Box>
      <VStack align="start" spacing={1} mb={6}>
        <Text fontSize="2xl" fontWeight="bold" color="white">
          Raporlar
        </Text>
        <Text color="gray.300">
          Performans ve analiz raporlarını görüntüleyin
        </Text>
      </VStack>

      {/* Filters */}
      <HStack spacing={4} mb={8}>
        <Select placeholder="Rapor Türü Seçin" width="200px">
          <option value="sales">Satış Raporu</option>
          <option value="customers">Müşteri Raporu</option>
          <option value="leads">Potansiyel Raporu</option>
          <option value="performance">Performans Raporu</option>
        </Select>
        
        <Select placeholder="Zaman Aralığı" width="200px">
          <option value="7days">Son 7 Gün</option>
          <option value="30days">Son 30 Gün</option>
          <option value="90days">Son 90 Gün</option>
          <option value="1year">Son 1 Yıl</option>
        </Select>
        
        <Button leftIcon={<Download />} colorScheme="brand">
          Rapor İndir
        </Button>
      </HStack>

      {/* Summary Cards */}
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mb={8}>
        <Box bg={cardBg} p={6} rounded="lg" shadow="sm" border="1px" borderColor={borderColor}>
          <HStack justify="space-between" mb={2}>
            <Text fontSize="sm" color={labelColor}>Toplam Satış</Text>
            <Icon as={DollarSign} w={5} h={5} color="green.500" />
          </HStack>
          <Text fontSize="2xl" fontWeight="bold" color={textColor}>₺245,678</Text>
          <Text fontSize="sm" color="green.500">+12% bu ay</Text>
        </Box>
        
        <Box bg={cardBg} p={6} rounded="lg" shadow="sm" border="1px" borderColor={borderColor}>
          <HStack justify="space-between" mb={2}>
            <Text fontSize="sm" color={labelColor}>Yeni Müşteriler</Text>
            <Icon as={Users} w={5} h={5} color="blue.500" />
          </HStack>
          <Text fontSize="2xl" fontWeight="bold" color={textColor}>23</Text>
          <Text fontSize="sm" color="blue.500">+8% bu ay</Text>
        </Box>
        
        <Box bg={cardBg} p={6} rounded="lg" shadow="sm" border="1px" borderColor={borderColor}>
          <HStack justify="space-between" mb={2}>
            <Text fontSize="sm" color={labelColor}>Dönüşüm Oranı</Text>
            <Icon as={TrendingUp} w={5} h={5} color="purple.500" />
          </HStack>
          <Text fontSize="2xl" fontWeight="bold" color={textColor}>%18.5</Text>
          <Text fontSize="sm" color="purple.500">+2.1% bu ay</Text>
        </Box>
        
        <Box bg={cardBg} p={6} rounded="lg" shadow="sm" border="1px" borderColor={borderColor}>
          <HStack justify="space-between" mb={2}>
            <Text fontSize="sm" color={labelColor}>Ortalama Değer</Text>
            <Icon as={Calendar} w={5} h={5} color="orange.500" />
          </HStack>
          <Text fontSize="2xl" fontWeight="bold" color={textColor}>₺10,680</Text>
          <Text fontSize="sm" color="orange.500">+5% bu ay</Text>
        </Box>
      </Grid>

      {/* Charts Placeholder */}
      <Grid templateColumns="2fr 1fr" gap={6}>
        <Box bg={cardBg} p={6} rounded="lg" shadow="sm" border="1px" borderColor={borderColor}>
          <Text fontSize="lg" fontWeight="semibold" mb={4}>
            Satış Trendi
          </Text>
          <Box h="300px" bg="gray.50" rounded="md" display="flex" alignItems="center" justifyContent="center">
            <Text color="gray.500">Grafik burada görüntülenecek</Text>
          </Box>
        </Box>
        
        <Box bg={cardBg} p={6} rounded="lg" shadow="sm" border="1px" borderColor={borderColor}>
          <Text fontSize="lg" fontWeight="semibold" mb={4}>
            Müşteri Dağılımı
          </Text>
          <Box h="300px" bg="gray.50" rounded="md" display="flex" alignItems="center" justifyContent="center">
            <Text color="gray.500">Pasta grafik burada görüntülenecek</Text>
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}
