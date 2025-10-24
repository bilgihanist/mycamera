'use client'

import Link from 'next/link'
import { 
  Box, 
  Container, 
  VStack, 
  HStack, 
  Text, 
  Button, 
  Grid, 
  GridItem, 
  Icon,
  useColorModeValue 
} from '@chakra-ui/react'
import { Camera, Shield, Users, BarChart3 } from 'lucide-react'

export default function Home() {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <Box minH="100vh" bg={bg}>
      <Container maxW="7xl" py={16}>
        {/* Header */}
        <VStack spacing={8} mb={16} textAlign="center">
          <Text fontSize="5xl" fontWeight="bold" color="white">
            Kamera Kontrol Platformu
          </Text>
          <Text fontSize="xl" color="gray.300" maxW="3xl">
            Canlı cihaz takibi, şifre yönetimi ve bayi destekli kurulumlar için tek panel. 
            Güvenli, ölçeklenebilir ve kullanıcı dostu çözüm.
          </Text>
          <HStack spacing={4}>
            <Button as={Link} href="/login" colorScheme="brand" size="lg">
              Giriş Yap
            </Button>
            <Button as={Link} href="/register" variant="outline" size="lg">
              Kayıt Ol
            </Button>
          </HStack>
        </VStack>

        {/* Features */}
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={8} mb={16}>
          <Box bg={cardBg} p={6} rounded="xl" shadow="lg">
            <Icon as={Camera} w={12} h={12} color="blue.500" mb={4} />
            <Text fontSize="xl" fontWeight="semibold" mb={2} color="white">
              Canlı İzleme
            </Text>
            <Text color="gray.300">
              Kameralarınızı gerçek zamanlı olarak izleyin ve kontrol edin
            </Text>
          </Box>
          
          <Box bg={cardBg} p={6} rounded="xl" shadow="lg">
            <Icon as={Shield} w={12} h={12} color="green.500" mb={4} />
            <Text fontSize="xl" fontWeight="semibold" mb={2} color="white">
              Güvenli Erişim
            </Text>
            <Text color="gray.300">
              Rol bazlı erişim kontrolü ile güvenli yönetim
            </Text>
          </Box>
          
          <Box bg={cardBg} p={6} rounded="xl" shadow="lg">
            <Icon as={Users} w={12} h={12} color="purple.500" mb={4} />
            <Text fontSize="xl" fontWeight="semibold" mb={2} color="white">
              Kullanıcı Yönetimi
            </Text>
            <Text color="gray.300">
              Admin paneli ile kullanıcıları kolayca yönetin
            </Text>
          </Box>
          
          <Box bg={cardBg} p={6} rounded="xl" shadow="lg">
            <Icon as={BarChart3} w={12} h={12} color="orange.500" mb={4} />
            <Text fontSize="xl" fontWeight="semibold" mb={2} color="white">
              Analitik
            </Text>
            <Text color="gray.300">
              Detaylı raporlar ve performans analizi
            </Text>
          </Box>
        </Grid>

        {/* CTA Section */}
        <Box bg={cardBg} p={8} rounded="2xl" shadow="lg" textAlign="center">
          <Text fontSize="3xl" fontWeight="bold" mb={4} color="white">
            Hemen Başlayın
          </Text>
          <Text color="gray.300" mb={6}>
            Kamera sisteminizi profesyonel bir şekilde yönetmeye başlayın
          </Text>
          <Button as={Link} href="/register" colorScheme="brand" size="lg">
            Ücretsiz Hesap Oluştur
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
