'use client'
import { useState } from 'react'
import { toast } from 'sonner'
import Link from 'next/link'
import { 
  Box, 
  Container, 
  VStack, 
  Text, 
  Input, 
  InputGroup, 
  InputRightElement, 
  Button, 
  IconButton,
  useColorModeValue,
  FormControl,
  FormLabel,
  Icon
} from '@chakra-ui/react'
import { Eye, EyeOff, LogIn } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const bg = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      if (!res.ok) throw new Error(await res.text())
      toast.success('Giriş başarılı')
      window.location.href = '/dashboard'
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Giriş hatası')
    } finally { 
      setLoading(false) 
    }
  }

  return (
    <Box minH="100vh" bg={bg} display="flex" alignItems="center" justifyContent="center" p={4}>
      <Container maxW="md">
        <Box bg={cardBg} rounded="2xl" shadow="xl" p={8}>
          <VStack spacing={8} align="center" mb={8}>
            <Icon as={LogIn} w={12} h={12} color="brand.500" />
            <VStack spacing={2}>
              <Text fontSize="2xl" fontWeight="bold">
                Giriş Yap
              </Text>
              <Text color="gray.600" textAlign="center">
                Hesabınıza giriş yapın
              </Text>
            </VStack>
          </VStack>
          
          <form onSubmit={onSubmit}>
            <VStack spacing={6}>
              <FormControl>
                <FormLabel>E-posta</FormLabel>
                <Input
                  required
                  type="email"
                  placeholder="ornek@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              
              <FormControl>
                <FormLabel>Şifre</FormLabel>
                <InputGroup>
                  <Input
                    required
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Şifrenizi girin"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={showPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                      icon={showPassword ? <EyeOff /> : <Eye />}
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              
              <Button
                type="submit"
                colorScheme="brand"
                size="lg"
                width="full"
                isLoading={loading}
                loadingText="Giriş yapılıyor..."
              >
                Giriş Yap
              </Button>
            </VStack>
          </form>
          
          <Box mt={6} textAlign="center">
            <Text color="gray.600">
              Hesabınız yok mu?{' '}
              <Link href="/register">
                <Text as="span" color="brand.500" fontWeight="semibold" _hover={{ color: 'brand.600' }}>
                  Kayıt Ol
                </Text>
              </Link>
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
