import { Box, VStack, HStack, Text, Avatar, Divider, useColorModeValue } from '@chakra-ui/react'
import { User, Phone, Mail, Calendar } from 'lucide-react'

const activities = [
  {
    id: 1,
    type: 'customer',
    message: 'Yeni müşteri eklendi: Ahmet Yılmaz',
    time: '2 saat önce',
    icon: User,
  },
  {
    id: 2,
    type: 'call',
    message: 'Fatma Demir ile telefon görüşmesi yapıldı',
    time: '4 saat önce',
    icon: Phone,
  },
  {
    id: 3,
    type: 'email',
    message: 'E-posta gönderildi: Teklif sunumu',
    time: '6 saat önce',
    icon: Mail,
  },
  {
    id: 4,
    type: 'meeting',
    message: 'Toplantı planlandı: Pazarlama stratejisi',
    time: '1 gün önce',
    icon: Calendar,
  },
]

export function RecentActivity() {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.800', 'white')
  const timeColor = useColorModeValue('gray.500', 'gray.400')
  
  return (
    <Box bg={bg} p={4} borderRadius="lg" border="1px" borderColor={borderColor}>
      <VStack spacing={3} align="stretch">
        {activities.map((activity, index) => (
          <Box key={activity.id}>
            <HStack spacing={3}>
              <Avatar size="sm" icon={<activity.icon />} />
              <Box flex="1">
                <Text fontSize="sm" fontWeight="medium" color={textColor}>
                  {activity.message}
                </Text>
                <Text fontSize="xs" color={timeColor}>
                  {activity.time}
                </Text>
              </Box>
            </HStack>
            {index < activities.length - 1 && <Divider mt={3} />}
          </Box>
        ))}
      </VStack>
    </Box>
  )
}
