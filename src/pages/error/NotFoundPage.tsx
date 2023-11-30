import { Component } from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Card,
  CardBody,
  Button,
  LinkOverlay,
  Flex
} from '@chakra-ui/react'
import { FiHome } from "react-icons/fi";

class NotFoundPage extends Component {

  renderErrorPage = () => {
    return (
      <>
        <Container maxW={'2xl'} pt={10}>
          <Card pt={20} style={{ borderRadius: 25 }} boxShadow="0 4px 16px rgba(0, 0, 0, 0.2)">
            <CardBody>
              <Stack
                as={Box}
                textAlign={'center'}
                spacing={{ base: 8, md: 14 }}
                py={{ base: 10, md: 16 }}>
                <Heading
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                  lineHeight={'110%'}
                  color={'#CA0000'}>
                  404: Not Found <br />
                </Heading>
                <Text as={'span'} color={'black'} fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}>
                  There's nothing to see here.
                </Text>
              </Stack>
              <Flex justifyContent="end">
                <LinkOverlay href="/">
                  <Button leftIcon={<FiHome />} colorScheme='green' variant='outline' borderRadius={20}>
                    Home
                  </Button>
                </LinkOverlay>
                </Flex>
            </CardBody>
          </Card>
        </Container>
      </>
    )
  }

  render() {
    return (
      <div>{this.renderErrorPage()}</div>
    );
  }
}


export default NotFoundPage

