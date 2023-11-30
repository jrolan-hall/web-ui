import { Component } from "react";
import {
  Stack,
  Text,
} from '@chakra-ui/react'

interface HomeSection2Props {}

class HomeSection2 extends Component<HomeSection2Props> {

  render = () => {
    return (
      <Stack
        p={10}
        pr={{ base: 10, lg: 20}}
        direction={{ base: 'column', md: 'column', lg: 'row' }}
        spacing={{ base: 1, lg: 1 }}
        justify={'flex-end'}
        align={{ base: 'flex-end'}}
      >
        <Text fontSize={25} fontWeight="bold" color="gray.700">Many ways to order.</Text>
        <Text fontSize={25} fontWeight="bold" color="#CA0000">Many ways to pay.</Text>
      </Stack>
    )
  }
}

export default HomeSection2;
