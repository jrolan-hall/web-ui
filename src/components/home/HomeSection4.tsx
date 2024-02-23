import { Component } from "react";
import {
  Box,
  Text,
} from '@chakra-ui/react'

interface HomeSection4Props {}

class HomeSection4 extends Component<HomeSection4Props> {

  render = () => {
    return (
      <Box p={10}textAlign={'center'} backgroundColor="#F7941D">
        <Text fontSize={25} fontWeight={'bold'} textAlign={'center'}>See what others say:</Text>
      </Box>
    )
  }
}

export default HomeSection4;
