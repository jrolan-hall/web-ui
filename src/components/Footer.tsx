'use client'

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaPhone, FaRegEnvelope, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import SocialButton from './SocialButton'


const Logo = (props: any) => {
  return (
    <Image
      src="/assets/images/showfa-logo.png"
      alt="Showfa Logo"
      h="32px"
      w="auto"
      {...props}
    />
  )
}


export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <Box
        as="footer"
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        position="sticky"
        bottom="0"
        width="100%"
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}
        >
          <Logo />
          <Stack direction={'row'} spacing={6}>
            {/* <Box as="a" href={'#'}>
              Home
            </Box>
            <Box as="a" href={'#'}>
              About
            </Box> */}
            {/* <Box as="a" href={'#'}>
              Blog
            </Box> */}
          </Stack>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}
          >
            <Text>© {currentYear} Showfa Express Limited. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Phone'} href={'tel:+18764856559'}>
                <FaPhone />
              </SocialButton>
              <SocialButton label={'Email'} href={'mailto:hello@goshowfa.com'}>
                <FaRegEnvelope />
              </SocialButton>
              <SocialButton label={'Twitter'} href={'https://twitter.com/goshowfa'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'TikTok'} href={'https://www.tiktok.com/@goshowfa'}>
                <FaTiktok />
              </SocialButton>
              <SocialButton label={'FaceBook'} href={'https://www.facebook.com/goshowfa'}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://www.instagram.com/goshowfa/'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'WhatsApp'} href={'https://wa.me/+18764856559'}>
                <FaWhatsapp />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </div>
  )
}
