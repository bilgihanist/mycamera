'use client'

import { Box, Flex, useBreakpointValue } from '@chakra-ui/react'
import { Sidebar } from '@/components/layout/sidebar'
import { Header } from '@/components/layout/header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isMobile = useBreakpointValue({ base: true, lg: false })

  return (
    <Flex h="100vh" direction={{ base: "column", lg: "row" }}>
      {!isMobile && <Sidebar />}
      <Box flex="1" display="flex" flexDirection="column" minW={0}>
        <Header />
        <Box flex="1" overflow="auto" p={4}>
          {children}
        </Box>
      </Box>
    </Flex>
  )
}