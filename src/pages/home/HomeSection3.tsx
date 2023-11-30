import { Component } from "react";
import {
  Stack,
  Text,
} from '@chakra-ui/react'

interface HomeSection3Props {}

class HomeSection3 extends Component<HomeSection3Props> {

  render = () => {
    return (
      <Stack
        p={10}
        pl={{ base: 10, lg: 20}}
        direction={{ base: 'column', md: 'column', lg: 'row' }}
        spacing={{ base: 1, lg: 1 }}
        align={'flex-start'}
      >
        <Text fontSize={25} fontWeight="bold" color="gray.700">Real-time tracking,</Text>
        <Text fontSize={25} fontWeight="bold" color="#F7941D">every step of the way.</Text>
      </Stack>
    )
  }
}

export default HomeSection3;
