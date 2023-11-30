import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Box,
  Text,
  Card,
} from '@chakra-ui/react';
import SocialButton from './SocialButton';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

interface OrderModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

class OrderModal extends React.Component<OrderModalProps> {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} onClose={this.props.toggleModal} size={'2xl'}>
        <ModalOverlay />
        <ModalContent style={{ borderRadius: 25 }}>
          <ModalHeader>Request a Delivery</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" align="center" pb={4}>
              <ClickableCard
                label={'Give us a call'}
                action={() => window.open('tel:+18764856559', '_blank')}
                icon={<FaPhone />}
              />
              <Text mt={2} mb={2}>
                or
              </Text>
              <ClickableCard
                label={'Send us a WhatsApp message'}
                action={() => window.open('https://wa.me/+18764856559', '_blank')}
                icon={<FaWhatsapp />}
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
}

interface ClickableCardProps {
  label: string;
  action: () => void;
  icon: React.ReactNode;
}

const ClickableCard: React.FC<ClickableCardProps> = ({ label, action, icon }) => (
  <Card
    onClick={action}
    variant="outline"
    borderRadius={20}
    p={4}
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    mb={2}
  >
    <Flex flexDir={'row'} align='center'>
      {icon}
      <Text ml={2}>{label}</Text>
    </Flex>
  </Card>
);

export default OrderModal;
