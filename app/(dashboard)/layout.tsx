'use client'

import { Box, Flex } from '@chakra-ui/react'
import { Sidebar } from '@/components/layout/sidebar'
import { Header } from '@/components/layout/header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Flex h="100vh">
      <Sidebar />
      <Box flex="1" display="flex" flexDirection="column">
        <Header />
        <Box flex="1" overflow="auto" p={6}>
          {children}
        </Box>
      </Box>
    </Flex>
  )
}