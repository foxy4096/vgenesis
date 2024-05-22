import { Box, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import img_1 from "../assets/img-1.jpg";

const Invitation = () => {
  return (
    <Box
      mt={20}
      p={10}
      _light={{ bgGradient: "linear(to-b, #f0fff1, white)" }}
      overflowX={"hidden"}
    >
      <Wrap
        spacing={"1em"}
        justify={"center"}
        id="invitation"
        alignItems={"center"}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          viewport={{ once: true }}
        >
          <WrapItem px={["2", "1em"]} py={"6"}>
            <div>
              <Heading>
                <Wrap>
                  <FaQuoteLeft />
                  <span>Invitation from our principal.</span>
                </Wrap>
              </Heading>
              <Text>
                Vig English school, Chhota govindpur is organising the 2nd
                <br />
                V-Genesis this year on 18th August 2023 to bring together young
                <br />
                minds from all schools to demonstrate their technical and
                creative
                <br />
                skills. The framework of the event is such that it will enrich
                <br />
                student with new skills and novel way of thinking, learning,
                <br />
                team-work, enterprenurship skill and leadership quality. It is a
                <br />
                blend of activity revolving around themes like business, music,
                <br />
                art, model-display, dance etc.
              </Text>
            </div>
          </WrapItem>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          viewport={{ once: true }}
        >
          <WrapItem my={"2"}>
            <motion.div
              initial={{ borderRadius: "0px" }}
              transition={{ duration: 0.5 }}
            >
              <Image borderRadius={"xl"} src={img_1} height={"350px"} />
            </motion.div>
          </WrapItem>
        </motion.div>
      </Wrap>
    </Box>
  );
};

export default Invitation;
