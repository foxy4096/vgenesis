import { Box, Center, Container, Heading } from "@chakra-ui/react";
import "./App.css";
import Coordinators from "./components/Coordinators";
import CustomCursor from "./components/CustomCursor";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import { FaQuoteLeft, FaRocket } from "react-icons/fa";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dot-bg">
      <CustomCursor />
      <Hero />
      <Invitation />
      <Coordinators />
      <Events />
      <div className="bg">
        <Container py={6} maxW={"container.sm"}>
          <Box color={"white"}>
            <Heading>
              <blockquote>
                <FaQuoteLeft />
                <br />
                If you want to shine like sun first you have to burn like it .
              </blockquote>
              <br />
              <Center>
                <FaRocket />
              </Center>
            </Heading>
          </Box>
        </Container>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
