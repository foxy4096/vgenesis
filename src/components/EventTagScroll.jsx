import { Center, HStack, Tag } from "@chakra-ui/react";
import { motion } from 'framer-motion';

const events = [
  "Runway revolution",
  "El Dorado",
  "Inventing Nextgen",
  "Duetto Tunes",
  "Cinematic Serenity",
  "Tatto Odyssey",
  "Brand War",
  "Atomized Paintings",
];

export const EventTagsScroll = () => {
  return (
    <motion.div
      className="event-tags-scroll-container"
      initial={{ x: '100%' }}
      animate={{ x: '-100%' }}
      transition={{ duration: 20, ease: "linear", repeat: Infinity }}
    >
      <Center>
        <HStack spacing={4}>
          {events.map((event, index) => (
            <Tag key={index} colorScheme={"blue"}>
              {event}
            </Tag>
          ))}
        </HStack>
      </Center>
    </motion.div>
  );
};
