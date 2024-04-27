/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import Toggle from "./Toggle";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <Box
      px={30}
      py={"5px"}
      top={0}
      mb={0}
      position={"static"}
      boxSize={"full"}
      pos={"relative"}
      background={"transparent"}
      _dark={{
        boxShadow: "0px 0px 0px 1px #141414",
      }}
      _light={{
        boxShadow: "0px 0px 0px 1px #efefef",
      }}
    >
      <Flex minWidth={"max-content"} alignItems={"center"}>
        <Heading>
          <Flex>
            <img src={logo} width={40} height={10} /> - Genesis
          </Flex>
        </Heading>
        <Spacer />
        <ButtonGroup variant={"ghost"} hideBelow={"md"}>
          <a href="#invitation"><Button>Invitation</Button></a>
          <Button>Coordinators</Button>
          <Button>Events</Button>
          <Button>Registration</Button>
        </ButtonGroup>
        <Toggle />
      </Flex>
    </Box>
  );
}

export default Navbar;
