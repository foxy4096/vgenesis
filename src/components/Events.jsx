import {
  AspectRatio,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import EventModal from "./EventModal";
import RegisterEventButton from "./RegisterEventButton";
import events from "../events";

const Events = () => {
  return (
    <Box
    >
      <Center id="events">
        <Heading py={6}>Events</Heading>
      </Center>
      <SimpleGrid
        columns={[1, 2, 2, 3]}
        px={[0, 0, 0, 0, "10em"]}
        gap={6}
        m={3}
      >
        {events.map((event, idx) => (
          <Card rounded={"xl"} key={idx}>
            <CardBody textAlign={"center"} p={0}>
              <AspectRatio>
                <Image
                  roundedTop={"xl"}
                  w={"100%"}
                  src={event.poster}
                  alt={event.name}
                />
              </AspectRatio>
              <Box my={6} px={3}>
                <Heading mb={3}>{event.name}</Heading>
                <ButtonGroup>
                  <EventModal event={event} />
                  <RegisterEventButton event={event} />
                </ButtonGroup>
              </Box>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
      <Center>
        <Button colorScheme="yellow">Download Event Bronchure</Button>
      </Center>
      <br />
    </Box>
  );
};

export default Events;
