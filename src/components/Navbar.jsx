/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
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
    >
      <Flex minWidth={"max-content"} alignItems={"center"} justifyContent={'space-between'}>
        <Heading>
          <Flex color={'white'}>
            <img src={logo} width={40} height={10} /> - Genesis
          </Flex>
        </Heading>
        <ButtonGroup variant={"link"} spacing={'6em'} hideBelow={"md"}>
          <a href="#invitation"><Button color={'white'} _hover={{textDecor: 'none'}}>Invitation</Button></a>
          <a href="#coordinators"><Button color={'white'} _hover={{textDecor: 'none'}}>Coordinators</Button></a>
          <a href="#events"><Button color={'white'} _hover={{textDecor: 'none'}}>Events</Button></a>
        </ButtonGroup>
        <Toggle />
      </Flex>
    </Box>
  );
}

export default Navbar;
