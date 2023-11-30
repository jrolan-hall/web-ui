import { Component } from "react";
import {
  Container,
  Divider,
  Text
} from '@chakra-ui/react'
import HomeHero from "./HomeHero";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";

interface HomePageProps {}

class HomePage extends Component<HomePageProps> {

  render = () => {
    return (
      <>
        <HomeHero />
        <Container maxW={'8xl'}>
          <HomeSection1 />
          <Divider p={2} />
          <HomeSection2 />
          <Divider p={2} />
          <HomeSection3 />
          {/* <Divider p={2} />
          <HomeSection4 /> */}
        </Container>
      </>
    )
  }
}

export default HomePage;
