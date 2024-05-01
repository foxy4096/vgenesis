import { Box, Center, HStack, Tag, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import events from "../events";
const randomColor = () => {
  let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  return colors[Math.floor(Math.random() * colors.length)];
};
const Hero = () => {
  return (
    <Box mb={"25em"} pt={"2em"}>
      <Center pos={"relative"}>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Text
            fontSize={["3em", "5em", "8em", "10em"]}
            bgGradient="linear(to-l, #e63b3b, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            V-GENESIS
          </Text>
        </motion.div>
      </Center>
      <Center>
        <HStack wrap={"wrap"} justifyContent={"center"} gap={4}>
          {events.map((event, idx) => (
            <motion.div
              key={event}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.04,
                type: "spring",
                stiffness: 1000,
                damping: 40,
              }}
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.17, translateY: -3 }}
                transition={{
                  type: "spring",
                  stiffness: 1000,
                  damping: 10,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Tag key={event} colorScheme={randomColor()} size={"lg"}>
                  {event.name}
                </Tag>
              </motion.div>
            </motion.div>
          ))}
        </HStack>
      </Center>
    </Box>
  );
};

export default Hero;
