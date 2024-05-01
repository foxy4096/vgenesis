import { AbsoluteCenter, Box } from "@chakra-ui/react";

const Footer = () => {
  return <Box textAlign={'center'} bg={'gray.800'} minH={'10vh'} pos={'relative'}>
    <AbsoluteCenter>© V-Genesis All rights reserved.</AbsoluteCenter>
    </Box>;
};

export default Footer;
