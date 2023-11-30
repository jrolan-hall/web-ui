import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Heading,
  Container,
  Stack,
  Card,
  CardBody,
} from '@chakra-ui/react';

interface LoadingPageProps {
  loadingText?: string;
}

class LoadingPage extends Component<LoadingPageProps> {
  static defaultProps: LoadingPageProps = {
    loadingText: 'Loading',
  };

  renderLoadingPage = () => {
    const { loadingText } = this.props;

    return (
      <>
        <Container maxW={'2xl'} pt={10}>
          <Card style={{ borderRadius: 25 }}>
            <CardBody>
              <Stack as={Box} textAlign={'center'}>
                <Heading
                  fontWeight={500}
                  fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
                  lineHeight={'100%'}
                >
                  {loadingText} <br />
                </Heading>
                <img src={'/assets/images/loader.gif'} alt="Loading" />
              </Stack>
            </CardBody>
          </Card>
        </Container>
      </>
    );
  };

  render() {
    return <div>{this.renderLoadingPage()}</div>;
  }
}

export default LoadingPage;
