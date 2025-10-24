import { Box, Text, HStack, Icon, useColorModeValue } from '@chakra-ui/react'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string
  change: string
  changeType: 'positive' | 'negative'
}

export function StatsCard({ title, value, change, changeType }: StatsCardProps) {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.800', 'white')
  const titleColor = useColorModeValue('gray.600', 'gray.300')
  const changeColor = changeType === 'positive' ? 'green.500' : 'red.500'

  return (
    <Box
      bg={bg}
      p={6}
      borderRadius="lg"
      border="1px"
      borderColor={borderColor}
      shadow="sm"
    >
        <Text fontSize="sm" color={titleColor} mb={2}>
          {title}
        </Text>
        
        <Text fontSize="2xl" fontWeight="bold" mb={2} color={textColor}>
          {value}
        </Text>
      
      <HStack>
        <Icon 
          as={changeType === 'positive' ? TrendingUp : TrendingDown} 
          color={changeColor}
          w={4} h={4}
        />
        <Text fontSize="sm" color={changeColor}>
          {change}
        </Text>
      </HStack>
    </Box>
  )
}
