'use client'

import { Box, Text, Button, HStack, VStack, Table, Thead, Tbody, Tr, Th, Td, Badge, IconButton, Menu, MenuButton, MenuList, MenuItem, Grid, GridItem, Stat, StatLabel, StatNumber, StatHelpText, useColorModeValue } from '@chakra-ui/react'
import { Plus, MoreVertical, Edit, Trash2, Eye, TrendingUp, Users, Target } from 'lucide-react'

export default function LeadsPage() {
  const textColor = useColorModeValue('gray.800', 'white')
  const labelColor = useColorModeValue('gray.600', 'gray.300')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  
  const leads = [
    {
      id: 1,
      name: 'Ali Veli',
      email: 'ali@example.com',
      company: 'Test Şirketi',
      source: 'Website',
      status: 'new',
      value: 50000,
      createdDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Ayşe Kaya',
      email: 'ayse@example.com',
      company: 'Demo Ltd.',
      source: 'Referans',
      status: 'qualified',
      value: 75000,
      createdDate: '2024-01-12'
    },
    {
      id: 3,
      name: 'Can Özkan',
      email: 'can@example.com',
      company: 'Startup Inc.',
      source: 'Sosyal Medya',
      status: 'contacted',
      value: 30000,
      createdDate: '2024-01-10'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'blue'
      case 'contacted': return 'yellow'
      case 'qualified': return 'green'
      case 'converted': return 'purple'
      default: return 'gray'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new': return 'Yeni'
      case 'contacted': return 'İletişim Kuruldu'
      case 'qualified': return 'Nitelikli'
      case 'converted': return 'Dönüştürüldü'
      default: return 'Bilinmiyor'
    }
  }

  return (
    <Box>
      <VStack align={{ base: "start", md: "start" }} spacing={4} mb={6}>
        <HStack justify="space-between" w="full" flexWrap="wrap" gap={4}>
          <VStack align="start" spacing={1}>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="white">
              Potansiyel Müşteriler
            </Text>
            <Text color="gray.300" fontSize={{ base: "sm", md: "md" }}>
              Potansiyel müşteri listesini yönetin
            </Text>
          </VStack>
          <Button leftIcon={<Plus />} colorScheme="brand" size={{ base: "sm", md: "md" }}>
            Yeni Potansiyel
          </Button>
        </HStack>
      </VStack>

      {/* Stats */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6} mb={8}>
        <Box bg={cardBg} p={{ base: 4, md: 6 }} rounded="lg" shadow="sm" border="1px" borderColor={borderColor}>
          <Stat>
            <StatLabel color={labelColor} fontSize={{ base: "sm", md: "md" }}>Toplam Potansiyel</StatLabel>
            <StatNumber color={textColor} fontSize={{ base: "xl", md: "2xl" }}>24</StatNumber>
            <StatHelpText>
              <HStack>
                <TrendingUp size={16} color="green.500" />
                <Text color="green.500">+12% bu ay</Text>
              </HStack>
            </StatHelpText>
          </Stat>
        </Box>
        
        <Box bg={cardBg} p={{ base: 4, md: 6 }} rounded="lg" shadow="sm" border="1px" borderColor={borderColor}>
          <Stat>
            <StatLabel color={labelColor} fontSize={{ base: "sm", md: "md" }}>Dönüşüm Oranı</StatLabel>
            <StatNumber color={textColor} fontSize={{ base: "xl", md: "2xl" }}>%15.2</StatNumber>
            <StatHelpText>
              <HStack>
                <Target size={16} color="blue.500" />
                <Text color="blue.500">Hedef: %20</Text>
              </HStack>
            </StatHelpText>
          </Stat>
        </Box>
        
        <Box bg={cardBg} p={{ base: 4, md: 6 }} rounded="lg" shadow="sm" border="1px" borderColor={borderColor}>
          <Stat>
            <StatLabel color={labelColor} fontSize={{ base: "sm", md: "md" }}>Ortalama Değer</StatLabel>
            <StatNumber color={textColor} fontSize={{ base: "xl", md: "2xl" }}>₺45,000</StatNumber>
            <StatHelpText>
              <HStack>
                <Users size={16} color="purple.500" />
                <Text color="purple.500">Potansiyel başına</Text>
              </HStack>
            </StatHelpText>
          </Stat>
        </Box>
      </Grid>

      <Box bg={cardBg} rounded="lg" shadow="sm" border="1px" borderColor={borderColor} overflowX="auto">
        <Table variant="simple" size={{ base: "sm", md: "md" }}>
          <Thead>
            <Tr>
              <Th color={labelColor} fontSize={{ base: "xs", md: "sm" }}>Ad Soyad</Th>
              <Th color={labelColor} fontSize={{ base: "xs", md: "sm" }} display={{ base: "none", md: "table-cell" }}>E-posta</Th>
              <Th color={labelColor} fontSize={{ base: "xs", md: "sm" }}>Şirket</Th>
              <Th color={labelColor} fontSize={{ base: "xs", md: "sm" }} display={{ base: "none", lg: "table-cell" }}>Kaynak</Th>
              <Th color={labelColor} fontSize={{ base: "xs", md: "sm" }}>Durum</Th>
              <Th color={labelColor} fontSize={{ base: "xs", md: "sm" }}>Değer</Th>
              <Th color={labelColor} fontSize={{ base: "xs", md: "sm" }} display={{ base: "none", md: "table-cell" }}>Oluşturulma</Th>
              <Th color={labelColor} fontSize={{ base: "xs", md: "sm" }}>İşlemler</Th>
            </Tr>
          </Thead>
          <Tbody>
            {leads.map((lead) => (
              <Tr key={lead.id}>
                <Td fontWeight="medium" color={textColor} fontSize={{ base: "sm", md: "md" }}>{lead.name}</Td>
                <Td color={textColor} fontSize={{ base: "sm", md: "md" }} display={{ base: "none", md: "table-cell" }}>{lead.email}</Td>
                <Td color={textColor} fontSize={{ base: "sm", md: "md" }}>{lead.company}</Td>
                <Td color={textColor} fontSize={{ base: "sm", md: "md" }} display={{ base: "none", lg: "table-cell" }}>{lead.source}</Td>
                <Td>
                  <Badge 
                    colorScheme={getStatusColor(lead.status)}
                    variant="subtle"
                  >
                    {getStatusText(lead.status)}
                  </Badge>
                </Td>
                <Td color={textColor} fontSize={{ base: "sm", md: "md" }}>₺{lead.value.toLocaleString()}</Td>
                <Td color={textColor} fontSize={{ base: "sm", md: "md" }} display={{ base: "none", md: "table-cell" }}>{lead.createdDate}</Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      icon={<MoreVertical />}
                      variant="ghost"
                      size="sm"
                    />
                    <MenuList>
                      <MenuItem icon={<Eye />}>Görüntüle</MenuItem>
                      <MenuItem icon={<Edit />}>Düzenle</MenuItem>
                      <MenuItem icon={<Trash2 />} color="red.500">Sil</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}
