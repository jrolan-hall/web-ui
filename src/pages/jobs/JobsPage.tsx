import { Component } from "react";
import {
  Container,
} from '@chakra-ui/react'
import HomeHero from "../../components/home/HomeHero";

interface JobsPageProps {}

class JobsPage extends Component<JobsPageProps> {

  render = () => {
    return (
      <>
        <Container maxW={'8xl'} pb={4}>
        <iframe 
          id="" 
          allowtransparency="true" 
          allowfullscreen="true" 
          allow="geolocation; microphone; camera" 
          src="https://my.forms.app/form/65d78bfccd824c48f9dedf6e" 
          frameborder="0" 
          style={{ width: '100vw', minWidth: '100%', height: '100vh', border: 'none'}}
          ></iframe>
        </Container>
      </>
    )
  }
}

export default JobsPage;
