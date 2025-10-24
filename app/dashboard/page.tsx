'use client'

import { Grid, GridItem, Box, Text } from '@chakra-ui/react'
import { StatsCard } from '@/components/dashboard/stats-card'
import { RecentActivity } from '@/components/dashboard/recent-activity'

export default function DashboardPage() {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={6} color="white">
        Dashboard
      </Text>
      
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6} mb={8}>
        <StatsCard
          title="Toplam Cihaz"
          value="1,247"
          change="+5%"
          changeType="positive"
        />
        <StatsCard
          title="Aktif Kameralar"
          value="892"
          change="+8%"
          changeType="positive"
        />
        <StatsCard
          title="Offline Cihazlar"
          value="23"
          change="-12%"
          changeType="positive"
        />
        <StatsCard
          title="Sistem Uptime"
          value="%99.9"
          change="+0.1%"
          changeType="positive"
        />
      </Grid>
      
      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6}>
        <Box>
          <Text fontSize="lg" fontWeight="semibold" mb={4} color="white">
            Son Aktiviteler
          </Text>
          <RecentActivity />
        </Box>
        
        <Box>
          <Text fontSize="lg" fontWeight="semibold" mb={4} color="white">
            Hızlı İşlemler
          </Text>
          {/* Quick actions component */}
        </Box>
      </Grid>
    </Box>
  )
}
