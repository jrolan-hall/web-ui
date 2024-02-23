import { Component } from "react";
import {
  Container,
  Divider,
  Text
} from '@chakra-ui/react'
import HomeHero from "../../components/home/HomeHero";
import HomeSection1 from "../../components/home/HomeSection1";
import HomeSection2 from "../../components/home/HomeSection2";
import HomeSection3 from "../../components/home/HomeSection3";
import HomeSection4 from "../../components/home/HomeSection4";

interface HomePageProps {}

class HomePage extends Component<HomePageProps> {

  render = () => {
    return (
      <>
        <HomeHero />
        <Container maxW={'8xl'} pb={4}>
          <HomeSection1 />
          <Divider p={2} />
          <HomeSection2 />
          <Divider p={2} />
          <HomeSection3 />
        </Container>
        {/* <HomeSection4 /> */}
      </>
    )
  }
}

export default HomePage;
