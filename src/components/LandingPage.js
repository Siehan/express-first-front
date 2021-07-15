import Navigation from "./Navigation";
import Login from "./Login";
import Contact from "./Contact";
import Footer from "./Footer";

import { Box } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <Box as="main" maxW={"100%"} mx="auto">
        <Login />
        <Contact />
      </Box>
      <Footer />
    </>
  );
};

export default LandingPage;
