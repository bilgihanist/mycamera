'use client'

import { Box, Text, VStack, HStack, FormControl, FormLabel, Input, Button, Switch, Divider, Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue } from '@chakra-ui/react'
import { Save, User, Bell, Shield, Palette } from 'lucide-react'

export default function SettingsPage() {
  const textColor = useColorModeValue('gray.800', 'white')
  const labelColor = useColorModeValue('gray.600', 'gray.300')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  
  return (
    <Box>
      <VStack align="start" spacing={1} mb={6}>
        <Text fontSize="2xl" fontWeight="bold" color="white">
          Ayarlar
        </Text>
        <Text color="gray.300">
          Hesap ve sistem ayarlarınızı yönetin
        </Text>
      </VStack>

      <Tabs>
        <TabList>
          <Tab>
            <HStack>
              <User size={16} />
              <Text>Profil</Text>
            </HStack>
          </Tab>
          <Tab>
            <HStack>
              <Bell size={16} />
              <Text>Bildirimler</Text>
            </HStack>
          </Tab>
          <Tab>
            <HStack>
              <Shield size={16} />
              <Text>Güvenlik</Text>
            </HStack>
          </Tab>
          <Tab>
            <HStack>
              <Palette size={16} />
              <Text>Görünüm</Text>
            </HStack>
          </Tab>
        </TabList>

        <TabPanels>
          {/* Profile Tab */}
          <TabPanel px={0}>
            <Box bg={cardBg} p={6} rounded="lg" shadow="sm" border="1px" borderColor={borderColor}>
              <Text fontSize="lg" fontWeight="semibold" mb={4}>
                Profil Bilgileri
              </Text>
              
              <VStack spacing={4} align="stretch">
                <FormControl>
                  <FormLabel>Ad Soyad</FormLabel>
                  <Input placeholder="Adınız ve soyadınız" />
                </FormControl>
                
                <FormControl>
                  <FormLabel>E-posta</FormLabel>
                  <Input type="email" placeholder="ornek@email.com" />
                </FormControl>
                
                <FormControl>
                  <FormLabel>Şirket</FormLabel>
                  <Input placeholder="Şirket adı" />
                </FormControl>
                
                <FormControl>
                  <FormLabel>Telefon</FormLabel>
                  <Input placeholder="+90 555 123 45 67" />
                </FormControl>
                
                <Button leftIcon={<Save />} colorScheme="brand" width="fit-content">
                  Değişiklikleri Kaydet
                </Button>
              </VStack>
            </Box>
          </TabPanel>

          {/* Notifications Tab */}
          <TabPanel px={0}>
            <Box bg={cardBg} p={6} rounded="lg" shadow="sm" border="1px" borderColor={borderColor}>
              <Text fontSize="lg" fontWeight="semibold" mb={4}>
                Bildirim Ayarları
              </Text>
              
              <VStack spacing={4} align="stretch">
                <HStack justify="space-between">
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="medium">E-posta Bildirimleri</Text>
                    <Text fontSize="sm" color="gray.600">Önemli güncellemeler için e-posta alın</Text>
                  </VStack>
                  <Switch defaultChecked />
                </HStack>
                
                <Divider />
                
                <HStack justify="space-between">
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="medium">SMS Bildirimleri</Text>
                    <Text fontSize="sm" color="gray.600">Acil durumlar için SMS alın</Text>
                  </VStack>
                  <Switch />
                </HStack>
                
                <Divider />
                
                <HStack justify="space-between">
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="medium">Push Bildirimleri</Text>
                    <Text fontSize="sm" color="gray.600">Tarayıcı bildirimlerini alın</Text>
                  </VStack>
                  <Switch defaultChecked />
                </HStack>
                
                <Divider />
                
                <HStack justify="space-between">
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="medium">Haftalık Rapor</Text>
                    <Text fontSize="sm" color="gray.600">Haftalık performans raporu alın</Text>
                  </VStack>
                  <Switch defaultChecked />
                </HStack>
              </VStack>
            </Box>
          </TabPanel>

          {/* Security Tab */}
          <TabPanel px={0}>
            <Box bg={cardBg} p={6} rounded="lg" shadow="sm" border="1px" borderColor={borderColor}>
              <Text fontSize="lg" fontWeight="semibold" mb={4}>
                Güvenlik Ayarları
              </Text>
              
              <VStack spacing={4} align="stretch">
                <FormControl>
                  <FormLabel>Mevcut Şifre</FormLabel>
                  <Input type="password" placeholder="Mevcut şifrenizi girin" />
                </FormControl>
                
                <FormControl>
                  <FormLabel>Yeni Şifre</FormLabel>
                  <Input type="password" placeholder="Yeni şifrenizi girin" />
                </FormControl>
                
                <FormControl>
                  <FormLabel>Şifre Tekrar</FormLabel>
                  <Input type="password" placeholder="Yeni şifrenizi tekrar girin" />
                </FormControl>
                
                <Button colorScheme="brand" width="fit-content">
                  Şifreyi Güncelle
                </Button>
              </VStack>
            </Box>
          </TabPanel>

          {/* Appearance Tab */}
          <TabPanel px={0}>
            <Box bg={cardBg} p={6} rounded="lg" shadow="sm" border="1px" borderColor={borderColor}>
              <Text fontSize="lg" fontWeight="semibold" mb={4}>
                Görünüm Ayarları
              </Text>
              
              <VStack spacing={4} align="stretch">
                <HStack justify="space-between">
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="medium">Karanlık Mod</Text>
                    <Text fontSize="sm" color="gray.600">Karanlık tema kullan</Text>
                  </VStack>
                  <Switch />
                </HStack>
                
                <Divider />
                
                <HStack justify="space-between">
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="medium">Kompakt Görünüm</Text>
                    <Text fontSize="sm" color="gray.600">Daha az boşluk kullan</Text>
                  </VStack>
                  <Switch />
                </HStack>
                
                <Divider />
                
                <HStack justify="space-between">
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="medium">Animasyonlar</Text>
                    <Text fontSize="sm" color="gray.600">Geçiş animasyonlarını göster</Text>
                  </VStack>
                  <Switch defaultChecked />
                </HStack>
              </VStack>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
