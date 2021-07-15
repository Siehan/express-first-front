import { Alert, AlertIcon, Box, Button, Container, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import login from "../assets/images/login.png";
import SlideFadeOnScroll from "./SlideFadeOnScroll";
import { useState } from "react";

const Login = () => {
  const [loginRequest, setLoginRequest] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginRequest(true);
  };

  return (
    <Box as="section" w={"100%"}>
      <Container id="login" borderRadius="md" maxW="container.lg" pt="20" pb="10">
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
              LOG IN
            </Heading>
          </Box>

          <Box flex="1" align="center" borderRadius="md" boxShadow="xl" p="10" pb="20" overflow="hidden">
            <Box flex="1" pb="10">
              <img src={login} alt="icon_contact" width="300" height="278" />
            </Box>
            {!loginRequest ? (
              <form alignItems="center" justifyContent="center" p={12} onClick={handleLogin}>
                <FormControl id="first-name" mb={4} isRequired>
                  <FormLabel>First name</FormLabel>
                  <Input placeholder="Joe" required />
                </FormControl>

                <FormControl id="name" mb="4" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Doe" required />
                </FormControl>

                <FormControl id="email" mb="4" isRequired>
                  <FormLabel>Your email</FormLabel>
                  <Input type="email" placeholder="joe@doe.com" />
                </FormControl>

                <FormControl id="password" mb="4" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder="******" mb={6} type="password" />
                </FormControl>

                <Button colorScheme="teal" mb="4">
                  Log in
                </Button>
              </form>
            ) : (
              <Alert status="success" mb="4">
                <AlertIcon />
                Thank you for login !
              </Alert>
            )}
          </Box>
        </SlideFadeOnScroll>
      </Container>
    </Box>
  );
};
export default Login;
