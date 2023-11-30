import { Component } from "react";
import { Text, Stack } from '@chakra-ui/react';

interface HomeSection1Props {}

class HomeSection1 extends Component<HomeSection1Props> {

  render = () => {
    return (
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
    );
  }
}

export default HomeSection1;
