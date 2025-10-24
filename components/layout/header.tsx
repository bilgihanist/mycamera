'use client'

import {
  Box,
  HStack,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
  useColorMode,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Bell, Settings, LogOut, Sun, Moon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function Header() {
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const isMobile = useBreakpointValue({ base: true, md: false })
  
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const handleLogout = () => {
    router.push('/login')
  }

  return (
    <Box
      h="50px"
      bg={bg}
      borderBottom="1px"
      borderColor={borderColor}
      px={4}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text fontSize="md" fontWeight="medium">
        {isMobile ? "Kamera" : "Dashboard"}
      </Text>
      
      <HStack spacing={2}>
        <IconButton
          aria-label="Bildirimler"
          icon={<Bell />}
          variant="ghost"
          size="sm"
        />
        
        <IconButton
          aria-label="Tema değiştir"
          icon={colorMode === 'light' ? <Moon /> : <Sun />}
          variant="ghost"
          size="sm"
          onClick={toggleColorMode}
        />
        
        <Menu>
          <MenuButton>
            <Avatar size="sm" />
          </MenuButton>
          <MenuList>
            <MenuItem icon={<Settings />}>
              Ayarlar
            </MenuItem>
            <MenuItem icon={<LogOut />} onClick={handleLogout}>
              Çıkış Yap
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  )
}
