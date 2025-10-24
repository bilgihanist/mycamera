'use client'

import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react'
import { 
  LayoutDashboard, 
  Camera, 
  Users, 
  Shield, 
  BarChart3,
  Settings,
  Menu,
  ShieldCheck,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    label: 'Cihazlar',
    icon: Camera,
    href: '/dashboard/devices',
  },
  {
    label: 'Kullanıcılar',
    icon: Users,
    href: '/dashboard/customers',
  },
  {
    label: 'Güvenlik',
    icon: Shield,
    href: '/dashboard/leads',
  },
  {
    label: 'Raporlar',
    icon: BarChart3,
    href: '/dashboard/reports',
  },
  {
    label: 'Admin',
    icon: ShieldCheck,
    href: '/dashboard/admin',
  },
  {
    label: 'Ayarlar',
    icon: Settings,
    href: '/dashboard/settings',
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, lg: false })
  
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const hoverBg = useColorModeValue('gray.50', 'gray.700')
  const activeBg = useColorModeValue('brand.50', 'brand.900')

  const sidebarContent = (
    <VStack spacing={1} align="stretch" h="full">
      <Text fontSize="lg" fontWeight="semibold" mb={6} px={2}>
        Platform
      </Text>
      
      {menuItems.map((item) => {
        const isActive = pathname === item.href
        const bgColor = isActive ? activeBg : 'transparent'
        
        return (
          <Link key={item.href} href={item.href} onClick={isMobile ? onClose : undefined}>
            <HStack
              p={2}
              borderRadius="md"
              bg={bgColor}
              _hover={{ bg: hoverBg }}
              cursor="pointer"
              transition="all 0.2s"
              minH="40px"
            >
              <Icon as={item.icon} w={4} h={4} />
              <Text fontSize="sm" fontWeight={isActive ? "medium" : "normal"}>
                {item.label}
              </Text>
            </HStack>
          </Link>
        )
      })}
    </VStack>
  )

  if (isMobile) {
    return (
      <>
        <IconButton
          aria-label="Menu"
          icon={<Menu />}
          onClick={onOpen}
          variant="ghost"
          size="sm"
        />
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              {sidebarContent}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  return (
    <Box
      w="240px"
      h="100vh"
      bg={bg}
      borderRight="1px"
      borderColor={borderColor}
      p={3}
    >
      {sidebarContent}
    </Box>
  )
}
