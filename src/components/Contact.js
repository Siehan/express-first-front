import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import { Button, Center, useDisclosure } from "@chakra-ui/react";
import icon_contact from "../assets/images/icon_contact.png";
import Form from "./Form";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="section" w={"100%"}>
      <Container id="contact" borderRadius="md" maxW="container.lg" pt="20" pb="10">
        <SlideFadeOnScroll>
          <Box flex="1">
            <Heading
              mb="10"
              p={1}
              borderRadius="md"
              textShadow="1px 4px orange"
              align="center"
              bgGradient="linear(to-l, orange, yellow)"
              _hover={{
                bgGradient: "linear(to-l, #48BB78, #81E6D9)",
              }}
            >
              CONTACT
            </Heading>
          </Box>

          <Box flex="1" align="center" borderRadius="md" boxShadow="xl" p="10" pb="20" overflow="hidden">
            <Box flex="1" pb="10">
              <img src={icon_contact} alt="icon_contact" width="300" height="278" />
            </Box>
            <Text fontSize="xl" mb="10" textAlign="center">
              if you wish to send a message, click on below to complete the form :
            </Text>
            <Center>
              <Button colorScheme="teal" size="lg" onClick={onOpen}>
                Submit
              </Button>
            </Center>
          </Box>
          <Form isOpen={isOpen} onClose={onClose} />
        </SlideFadeOnScroll>
      </Container>
    </Box>
  );
};

export default Contact;
