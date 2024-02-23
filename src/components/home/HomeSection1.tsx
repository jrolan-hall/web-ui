import { Component } from "react";
import { Text, Stack, Card, CardBody, Image, Box } from "@chakra-ui/react";

interface HomeSection1Props {}

class HomeSection1 extends Component<HomeSection1Props> {

  render = () => {
    return (
      <>
        <Stack
          p={10}
          pl={{ base: 10, lg: 20}}
          direction={{ base: 'column', md: 'column', lg: 'row' }}
          spacing={{ base: 1, lg: 1 }}
          align={'flex-start'}
        >
          <Text fontSize={25} fontWeight="bold" color="gray.700">Everything you need,</Text>
          <Text fontSize={25} fontWeight="bold" color="#F7941D">delivered to your doorstep.</Text>
        </Stack>
        <Box align='center'>
        <Card maxW='md' 
            style={{
              borderRadius: 25,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)"
            }}        
        >
          <CardBody>
            <Image
              src="/assets/images/home-section-1.png"
              alt="home-section-1"
              h="400px"
              w="400px"
              borderRadius={15}
            /> 
          </CardBody>
        </Card>
        </Box>
      </>
    );
  }
}

export default HomeSection1;
