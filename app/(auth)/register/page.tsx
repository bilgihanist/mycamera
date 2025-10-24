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
import { Eye, EyeOff, UserPlus } from 'lucide-react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    company: ''
  })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const bg = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Şifreler eşleşmiyor')
      return
    }
    
    setLoading(true)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          company: formData.company
        })
      })
      if (!res.ok) throw new Error(await res.text())
      toast.success('Kayıt başarılı! Giriş yapabilirsiniz.')
      window.location.href = '/login'
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Kayıt hatası')
    } finally { 
      setLoading(false) 
    }
  }

  return (
    <Box minH="100vh" bg={bg} display="flex" alignItems="center" justifyContent="center" p={4}>
      <Container maxW="md">
        <Box bg={cardBg} rounded="2xl" shadow="xl" p={8}>
          <VStack spacing={8} align="center" mb={8}>
            <Icon as={UserPlus} w={12} h={12} color="brand.500" />
            <VStack spacing={2}>
              <Text fontSize="2xl" fontWeight="bold">
                Kayıt Ol
              </Text>
              <Text color="gray.600" textAlign="center">
                Yeni hesap oluşturun
              </Text>
            </VStack>
          </VStack>
          
          <form onSubmit={onSubmit}>
            <VStack spacing={6}>
              <FormControl>
                <FormLabel>Ad Soyad</FormLabel>
                <Input
                  required
                  type="text"
                  placeholder="Adınız ve soyadınız"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </FormControl>
              
              <FormControl>
                <FormLabel>Şirket</FormLabel>
                <Input
                  type="text"
                  placeholder="Şirket adı (opsiyonel)"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </FormControl>
              
              <FormControl>
                <FormLabel>E-posta</FormLabel>
                <Input
                  required
                  type="email"
                  placeholder="ornek@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </FormControl>
              
              <FormControl>
                <FormLabel>Şifre</FormLabel>
                <InputGroup>
                  <Input
                    required
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Şifrenizi girin"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
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
              
              <FormControl>
                <FormLabel>Şifre Tekrar</FormLabel>
                <InputGroup>
                  <Input
                    required
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Şifrenizi tekrar girin"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={showConfirmPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                      icon={showConfirmPassword ? <EyeOff /> : <Eye />}
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                loadingText="Kayıt oluşturuluyor..."
              >
                Kayıt Ol
              </Button>
            </VStack>
          </form>
          
          <Box mt={6} textAlign="center">
            <Text color="gray.600">
              Zaten hesabınız var mı?{' '}
              <Link href="/login">
                <Text as="span" color="brand.500" fontWeight="semibold" _hover={{ color: 'brand.600' }}>
                  Giriş Yap
                </Text>
              </Link>
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
