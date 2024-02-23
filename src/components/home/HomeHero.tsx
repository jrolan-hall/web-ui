import { Component } from "react";
import {
  Box,
  Container,
  Text,
  Stack,
  Card,
  CardBody,
  Image,
  Button,
  Divider
} from '@chakra-ui/react';
import { FiMapPin } from "react-icons/fi";

interface HomeHeroProps {}

class HomeHero extends Component<HomeHeroProps> {
  render = () => {
    return (
      <Box
        backgroundImage="url(/assets/images/showfa-hero.png)"
        backgroundSize="cover"
        backgroundPosition="center"
        height="60vh"
        display="flex"
        alignItems="center"
      >
        <Container maxW="2xl">
          <Card
            pt={5}
            style={{
              borderRadius: 25,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
              overflow: 'hidden'
            }}
            
          >
            <CardBody>
              <Stack
                as={Box}
                textAlign={'center'}
                spacing={{ base: 4, md: 2 }}
                py={{ base: 5, md: 8 }}
                color={'black'}
              >
                <Image
                  src="/assets/images/showfa-logo.png"
                  alt="Showfa Logo"
                  style={{ height: '100%', width: 'auto', display: 'block', margin: 'auto', objectFit: 'contain', marginBottom: '4px' }}
                /> 
                <Text fontWeight={'bold'}>
                  Showfa Express: Request. Deliver. Impress
                </Text>
                <Text fontSize='sm'>
                  The Best Delivery Experience in 
                </Text>
                <Box>
                  <Button leftIcon={<FiMapPin />} colorScheme='gray.700' variant='outline' borderRadius={20} size='sm'>
                    Manchester, Jamaica
                  </Button>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Container>
      </Box>
    );
  }
}

export default HomeHero;
