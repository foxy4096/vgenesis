import {
  AbsoluteCenter,
  Avatar,
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import img_1 from "../assets/img-1.jpg";
import img_2 from "../assets/img-2.jpg";
import img_3 from "../assets/img-3.jpg";
import img_4 from "../assets/img-4.jpg";
import img_5 from "../assets/img-5.jpg";
import img_6 from "../assets/img-6.jpg";

const Coordinators = () => {
  const coordinators = [
    {
      name: "Vijay Sharma",
      mobile: "+919431758500",
      image: img_1,
    },
    {
      name: "Ranjeeb Mohanty",
      mobile: "+919955708246",
      image: img_2,
    },
    {
      name: "Sudipta Biswas",
      mobile: "+919534138938",
      image: img_4,
    },
    {
      name: "Priyanka Sharma",
      mobile: "+917091311831",
      image: img_3,
    },
    {
      name: "Ashish Bhejra",
      mobile: "+919470352045",
      image: img_6,
    },
    {
      name: "Appu Patra",
      mobile: "+919702711736",
      image: img_5,
    },
  ];

  return (
    <Box
     
     >
      <Center py={6} id="coordinators">
        <Heading>Our Coordinators</Heading>
      </Center>
      <SimpleGrid columns={[1, 2, 2, 3]} px={[0, 0, 0, 0, "10em"]} gap={6} p={3}>
        {coordinators.map((coordinator, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div initial={{ rotate: 0, scale: 1 }}>
              <Card rounded={"xl"} h={'15em'} boxShadow={'1px 1px 2px yellow.600'}>
                <CardBody py={3} textAlign={"center"} justifyContent={'center'}>
                  <AbsoluteCenter>

                  <Avatar
                    size={"lg"}
                    mb={3}
                    src={coordinator.image}
                    alt={coordinator.name}
                  />
                  <Box>
                    <Heading>{coordinator.name}</Heading>
                    <p><a href={`tel:${coordinator.mobile}`}>{coordinator.mobile}</a></p>
                  </Box>
                  </AbsoluteCenter>

                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Coordinators;
