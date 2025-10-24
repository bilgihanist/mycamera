'use client'

import { Box, Text, Button, HStack, VStack, Table, Thead, Tbody, Tr, Th, Td, Badge, IconButton, Menu, MenuButton, MenuList, MenuItem, useColorModeValue } from '@chakra-ui/react'
import { Plus, MoreVertical, Edit, Trash2, Eye } from 'lucide-react'

export default function CustomersPage() {
  const textColor = useColorModeValue('gray.800', 'white')
  const labelColor = useColorModeValue('gray.600', 'gray.300')
  
  const customers = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      email: 'ahmet@example.com',
      company: 'ABC Şirketi',
      status: 'active',
      lastContact: '2024-01-15'
    },
    {
      id: 2,
      name: 'Fatma Demir',
      email: 'fatma@example.com',
      company: 'XYZ Ltd.',
      status: 'inactive',
      lastContact: '2024-01-10'
    },
    {
      id: 3,
      name: 'Mehmet Kaya',
      email: 'mehmet@example.com',
      company: 'DEF A.Ş.',
      status: 'active',
      lastContact: '2024-01-14'
    }
  ]

  return (
    <Box>
      <HStack justify="space-between" mb={6}>
        <VStack align="start" spacing={1}>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Müşteriler
          </Text>
          <Text color="gray.300">
            Müşteri listesini yönetin
          </Text>
        </VStack>
        <Button leftIcon={<Plus />} colorScheme="brand">
          Yeni Müşteri
        </Button>
      </HStack>

      <Box bg={useColorModeValue('white', 'gray.800')} rounded="lg" shadow="sm" border="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Ad Soyad</Th>
              <Th>E-posta</Th>
              <Th>Şirket</Th>
              <Th>Durum</Th>
              <Th>Son İletişim</Th>
              <Th>İşlemler</Th>
            </Tr>
          </Thead>
          <Tbody>
            {customers.map((customer) => (
              <Tr key={customer.id}>
                <Td fontWeight="medium" color={textColor}>{customer.name}</Td>
                <Td color={textColor}>{customer.email}</Td>
                <Td color={textColor}>{customer.company}</Td>
                <Td>
                  <Badge 
                    colorScheme={customer.status === 'active' ? 'green' : 'red'}
                    variant="subtle"
                  >
                    {customer.status === 'active' ? 'Aktif' : 'Pasif'}
                  </Badge>
                </Td>
                <Td color={textColor}>{customer.lastContact}</Td>
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
