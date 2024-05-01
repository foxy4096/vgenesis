/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
} from "@chakra-ui/react";
import RegisterEventButton from "./RegisterEventButton";

export default function EventModal({ event }) {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>View Details</Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"4xl"}
        colorScheme="telegram"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textAlign={"center"}
            mb={3}
            fontSize={"2xl"}
            fontWeight={"bold"}
          >
            Event Details
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0} mb={3}>
            <Image src={event.details_img} />
          </ModalBody>

          <ModalFooter>
            <RegisterEventButton mr={3} colorScheme="blue" event={event} />
            <Button variant={"outline"} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
